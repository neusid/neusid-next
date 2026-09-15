import { ProjectRepository } from "../repositories/ProjectRepository"

export class GetProjectsUseCase {
    static async execute() {
        return await ProjectRepository.findAll()
    }
}
