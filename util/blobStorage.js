import fs from "fs"
import path from "path"
import { put } from "@vercel/blob"

/**
 * Uploads a base64 encoded image either to Vercel Blob (when BLOB_READ_WRITE_TOKEN is available)
 * or to the local public/assets/images directory (for offline local development).
 *
 * @param {string} base64Data - Base64 data URL or raw base64 string
 * @param {string} filename - Target filename
 * @returns {Promise<string|null>} The public Blob URL or local filename
 */
export async function uploadBase64Image(base64Data, filename) {
    if (!base64Data) return null

    // Extract mime type and raw base64
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    const rawData = matches ? matches[2] : base64Data
    const contentType = matches ? matches[1] : "image/jpeg"
    const buffer = Buffer.from(rawData, "base64")

    const hasBlobToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN)

    if (hasBlobToken) {
        try {
            const cleanName = filename.replace(/[^a-zA-Z0-9.-]/g, "_")
            const blob = await put(`images/${cleanName}`, buffer, {
                access: "public",
                contentType,
                addRandomSuffix: true,
            })
            return blob.url
        } catch (blobErr) {
            console.error("Vercel Blob upload failed:", blobErr)
            if (process.env.VERCEL) {
                throw new Error(`Failed to upload image to Vercel Blob: ${blobErr.message}`)
            }
        }
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
