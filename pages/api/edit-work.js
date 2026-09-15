import { UpdateProjectUseCase } from "@/core/use-cases/UpdateProjectUseCase"

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "25mb",
        },
    },
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Only POST is supported." })
    }

    try {
        const project = await UpdateProjectUseCase.execute(req.body)
        return res.status(200).json({
            success: true,
            message: `Project #${project.id} successfully updated!`,
            project,
        })
    } catch (error) {
        console.error("Error updating project:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while updating project: " + error.message,
        })
    }
}
