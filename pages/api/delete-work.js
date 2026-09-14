import fs from "fs"
import path from "path"

export default function handler(req, res) {
    if (req.method !== "POST" && req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed. Use POST or DELETE." })
    }

    try {
        const { id } = req.body

        if (!id) {
            return res.status(400).json({ success: false, message: "Project ID is required." })
        }

        const projectJsonPath = path.join(process.cwd(), "util", "project.json")
        if (!fs.existsSync(projectJsonPath)) {
            return res.status(404).json({ success: false, message: "project.json not found." })
        }

        const fileContent = fs.readFileSync(projectJsonPath, "utf8")
        let projects = JSON.parse(fileContent)

        const initialLength = projects.length
        projects = projects.filter((p) => String(p.id) !== String(id))

        if (projects.length === initialLength) {
            return res.status(404).json({ success: false, message: `Project with ID #${id} not found.` })
        }

        fs.writeFileSync(projectJsonPath, JSON.stringify(projects, null, 4), "utf8")

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
