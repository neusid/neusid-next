import { list } from "@vercel/blob"
import { getBlobToken } from "@/util/blobStorage"

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed. Only GET is supported." })
    }

    const blobToken = getBlobToken()
    const hasToken = Boolean(blobToken)
    const isVercel = Boolean(process.env.VERCEL)

    if (!hasToken) {
        return res.status(200).json({
            status: "missing_token",
            isVercel,
            message: isVercel
                ? "Token Vercel Blob belum aktif pada deployment Vercel ini. Silakan klik 'Redeploy' pada Vercel Dashboard."
                : "Token Vercel Blob belum ada di .env.local (Mode penyimpanan lokal aktif).",
        })
    }

    try {
        const { blobs } = await list({ limit: 1, token: blobToken })
        return res.status(200).json({
            status: "connected",
            isVercel,
            message: "Vercel Blob berhasil terhubung dan aktif!",
            blobsCount: blobs ? blobs.length : 0,
        })
    } catch (err) {
        console.error("Blob status check error:", err)
        return res.status(200).json({
            status: "error",
            isVercel,
            message: `Gagal mengakses Vercel Blob: ${err.message}`,
        })
    }
}
