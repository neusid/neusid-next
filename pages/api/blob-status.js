import { list } from "@vercel/blob"

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed. Only GET is supported." })
    }

    const hasToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN)
    const isVercel = Boolean(process.env.VERCEL)

    if (!hasToken) {
        return res.status(200).json({
            status: "missing_token",
            isVercel,
            message: isVercel
                ? "Token BLOB_READ_WRITE_TOKEN belum aktif pada deployment Vercel ini. Silakan klik 'Redeploy' pada Vercel Dashboard."
                : "BLOB_READ_WRITE_TOKEN belum ada di .env.local (Mode penyimpanan lokal aktif).",
        })
    }

    try {
        const { blobs } = await list({ limit: 1, token: process.env.BLOB_READ_WRITE_TOKEN })
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
