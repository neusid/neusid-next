import { getProjects } from "@/util/projectsData"

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed. Only GET is supported." })
    }

    try {
        const projects = await getProjects()
        return res.status(200).json({
            success: true,
            projects,
        })
    } catch (error) {
        console.error("Error fetching projects:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to fetch projects: " + error.message,
        })
    }
}
