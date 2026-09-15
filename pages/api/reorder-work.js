import { ReorderProjectsUseCase } from "@/core/use-cases/ReorderProjectsUseCase"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Only POST is supported." })
    }

    try {
        const { orderedIds } = req.body
        const reordered = await ReorderProjectsUseCase.execute(orderedIds)
        return res.status(200).json({
            success: true,
            message: "Project sequence successfully reordered and saved!",
            count: reordered.length,
        })
    } catch (error) {
        console.error("Error reordering projects:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while reordering projects: " + error.message,
        })
    }
}
