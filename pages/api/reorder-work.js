import { getProjects, saveProjects } from "@/util/projectsData"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Only POST is supported." })
    }

    try {
        const { orderedIds } = req.body

        if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
            return res.status(400).json({ success: false, message: "orderedIds array is required." })
        }

        const currentProjects = await getProjects()

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

        // Save updated projects
        await saveProjects(reordered)

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
