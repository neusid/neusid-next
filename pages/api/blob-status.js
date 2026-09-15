import { CheckStorageStatusUseCase } from "@/core/use-cases/CheckStorageStatusUseCase"

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed. Only GET is supported." })
    }

    try {
        const status = await CheckStorageStatusUseCase.execute()
        return res.status(200).json(status)
    } catch (err) {
        console.error("Storage status check error:", err)
        return res.status(500).json({
            status: "error",
            message: `Internal error checking storage status: ${err.message}`,
        })
    }
}
