import fs from "fs"
import path from "path"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Only POST is supported." })
    }

    try {
        const { orderedIds } = req.body

        if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
            return res.status(400).json({ success: false, message: "orderedIds array is required." })
        }

        const projectJsonPath = path.join(process.cwd(), "util", "project.json")
        if (!fs.existsSync(projectJsonPath)) {
            return res.status(404).json({ success: false, message: "project.json not found." })
        }

        const fileContent = fs.readFileSync(projectJsonPath, "utf8")
        const currentProjects = JSON.parse(fileContent)

        // Create a map by ID for fast lookup
        const projectMap = new Map()
        currentProjects.forEach((p) => {
            projectMap.set(String(p.id), p)
        })

        // Build new reordered array
        const reordered = []
        orderedIds.forEach((id) => {
            const item = projectMap.get(String(id))
            if (item) {
                reordered.push(item)
                projectMap.delete(String(id))
            }
        })

        // Append any remaining items that were not in orderedIds
        projectMap.forEach((remainingItem) => {
            reordered.push(remainingItem)
        })

        // Save to project.json
        fs.writeFileSync(projectJsonPath, JSON.stringify(reordered, null, 4), "utf8")

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
