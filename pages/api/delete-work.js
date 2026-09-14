import { getProjects, saveProjects } from "@/util/projectsData"

export default async function handler(req, res) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed. Use POST or DELETE." })
    }

    try {
        const { id } = req.body

        if (!id) {
            return res.status(400).json({ success: false, message: "Project ID is required." })
        }

        const projects = await getProjects()

        const initialLength = projects.length
        const updatedProjects = projects.filter((p) => String(p.id) !== String(id))

        if (updatedProjects.length === initialLength) {
            return res.status(404).json({ success: false, message: `Project with ID #${id} not found.` })
        }

        await saveProjects(updatedProjects)

        return res.status(200).json({
            success: true,
            message: `Project #${id} successfully deleted!`,
            deletedId: id,
        })
    } catch (error) {
        console.error("Error deleting project:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while deleting project: " + error.message,
        })
    }
}
