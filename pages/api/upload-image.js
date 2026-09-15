import { StorageRepository } from "@/core/repositories/StorageRepository"

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "4mb",
        },
    },
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed. Only POST is supported." })
    }

    try {
        const { base64, filename } = req.body || {}

        if (!base64) {
            return res.status(400).json({ success: false, message: "Missing base64 image data." })
        }

        const safeFilename = filename || `upload-${Date.now()}.jpg`
        const url = await StorageRepository.uploadBase64Image(base64, safeFilename)

        return res.status(200).json({
            success: true,
            url,
        })
    } catch (error) {
        console.error("Error uploading image:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while uploading image: " + error.message,
        })
    }
}
