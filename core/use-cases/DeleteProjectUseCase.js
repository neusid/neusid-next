import { ProjectRepository } from "../repositories/ProjectRepository"

export class DeleteProjectUseCase {
    static async execute(id) {
        if (!id) {
            throw new Error("Project ID is required.")
        }

        const projects = await ProjectRepository.findAll()
        const initialCount = projects.length
        const filtered = projects.filter((p) => String(p.id) !== String(id))

        if (filtered.length === initialCount) {
            throw new Error(`Project with ID #${id} not found.`)
        }

        await ProjectRepository.saveAll(filtered)
        return { deletedId: id, remainingCount: filtered.length }
    }
}
