import { ProjectRepository } from "../repositories/ProjectRepository"

export class ReorderProjectsUseCase {
    static async execute(orderedIds) {
        if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
            throw new Error("orderedIds array is required.")
        }

        const currentProjects = await ProjectRepository.findAll()

        const projectMap = new Map()
        currentProjects.forEach((p) => {
            projectMap.set(String(p.id), p)
        })

        const reordered = []
        orderedIds.forEach((id) => {
            const item = projectMap.get(String(id))
            if (item) {
                reordered.push(item)
                projectMap.delete(String(id))
            }
        })

        // Preserve any remaining items not in orderedIds
        projectMap.forEach((item) => {
            reordered.push(item)
        })

        await ProjectRepository.saveAll(reordered)
        return reordered
    }
}
