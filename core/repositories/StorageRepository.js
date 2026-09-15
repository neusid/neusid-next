import fs from "fs"
import path from "path"
import { put, list } from "@vercel/blob"

export class StorageRepository {
    /**
     * Resolves the active Blob token.
     * Supports standard BLOB_READ_WRITE_TOKEN, custom prefixes like NEUS_BLOB_READ_WRITE_TOKEN,
     * or any environment variable ending with _READ_WRITE_TOKEN.
     */
    static getBlobToken() {
        if (process.env.BLOB_READ_WRITE_TOKEN) {
            return process.env.BLOB_READ_WRITE_TOKEN
        }
        if (process.env.NEUS_BLOB_READ_WRITE_TOKEN) {
            return process.env.NEUS_BLOB_READ_WRITE_TOKEN
        }
        const matchingKey = Object.keys(process.env).find((key) => key.endsWith("_READ_WRITE_TOKEN"))
        return matchingKey ? process.env[matchingKey] : null
    }

    /**
     * Uploads a base64 encoded image either to Vercel Blob (when Blob token is available)
     * or to the local public/assets/images directory (for offline local development).
     *
     * @param {string} base64Data - Base64 data URL or raw base64 string
     * @param {string} filename - Target filename
     * @returns {Promise<string|null>} The public Blob URL or local filename
     */
    static async uploadBase64Image(base64Data, filename) {
        if (!base64Data) return null

        const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
        const rawData = matches ? matches[2] : base64Data
        const contentType = matches ? matches[1] : "image/jpeg"
        const buffer = Buffer.from(rawData, "base64")

        const blobToken = this.getBlobToken()
        const hasBlobToken = Boolean(blobToken)

        if (hasBlobToken) {
            try {
                const cleanName = filename.replace(/[^a-zA-Z0-9.-]/g, "_")
                const blob = await put(`images/${cleanName}`, buffer, {
                    access: "public",
                    contentType,
                    addRandomSuffix: true,
                    token: blobToken,
                })
                return blob.url
            } catch (blobErr) {
                console.error("Vercel Blob upload failed:", blobErr)
                if (process.env.VERCEL) {
                    if (blobErr.message && blobErr.message.includes("Cannot use public access on a private store")) {
                        throw new Error(
                            "Blob Store Anda berjenis 'Private'. Untuk website portfolio, Anda WAJIB menggunakan 'Public Store' di Vercel agar gambar dapat tampil. Silakan buat Blob baru dengan opsi 'Public' di Vercel Storage lalu hubungkan ke project ini."
                        )
                    }
                    throw new Error(`Gagal mengupload gambar ke Vercel Blob: ${blobErr.message}`)
                }
            }
        }

        // Prevent EROFS crash on Vercel
        if (process.env.VERCEL) {
            throw new Error(
                "Token Vercel Blob (NEUS_BLOB_READ_WRITE_TOKEN / BLOB_READ_WRITE_TOKEN) tidak terdeteksi pada deployment Vercel ini. Pastikan Anda sudah mengklik 'Redeploy' pada Vercel Dashboard setelah menyambungkan Vercel Blob store."
            )
        }

        // Local filesystem fallback (offline development)
        try {
            const imagesDir = path.join(process.cwd(), "public", "assets", "images")
            if (!fs.existsSync(imagesDir)) {
                fs.mkdirSync(imagesDir, { recursive: true })
            }
            const filePath = path.join(imagesDir, filename)
            fs.writeFileSync(filePath, buffer)
            return filename
        } catch (fsErr) {
            console.error("Local file system write error:", fsErr)
            throw fsErr
        }
    }

    /**
     * Checks current connection health to Vercel Blob.
     */
    static async checkConnection() {
        const blobToken = this.getBlobToken()
        const hasToken = Boolean(blobToken)
        const isVercel = Boolean(process.env.VERCEL)

        if (!hasToken) {
            return {
                status: "missing_token",
                isVercel,
                message: isVercel
                    ? "Token Vercel Blob belum aktif pada deployment Vercel ini. Silakan klik 'Redeploy' pada Vercel Dashboard."
                    : "Token Vercel Blob belum ada di .env.local (Mode penyimpanan lokal aktif).",
            }
        }

        try {
            const { blobs } = await list({ limit: 1, token: blobToken })
            return {
                status: "connected",
                isVercel,
                message: "Vercel Blob berhasil terhubung dan aktif!",
                blobsCount: blobs ? blobs.length : 0,
            }
        } catch (err) {
            return {
                status: "error",
                isVercel,
                message: `Gagal mengakses Vercel Blob: ${err.message}`,
            }
        }
    }
}
