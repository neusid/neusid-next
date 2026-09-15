import { DeleteProjectUseCase } from "@/core/use-cases/DeleteProjectUseCase"

export default async function handler(req, res) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed. Use POST or DELETE." })
    }

    try {
        const { id } = req.body
        const result = await DeleteProjectUseCase.execute(id)
        return res.status(200).json({
            success: true,
            message: `Project #${result.deletedId} successfully deleted!`,
            deletedId: result.deletedId,
        })
    } catch (error) {
        console.error("Error deleting project:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while deleting project: " + error.message,
        })
    }
}
