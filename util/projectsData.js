import { ProjectRepository } from "@/core/repositories/ProjectRepository"

/**
 * Backwards compatibility adapter for getProjects.
 * Delegates to ProjectRepository.findAll().
 */
export async function getProjects() {
    return await ProjectRepository.findAll()
}

/**
 * Backwards compatibility adapter for saveProjects.
 * Delegates to ProjectRepository.saveAll().
 */
export async function saveProjects(projects) {
    return await ProjectRepository.saveAll(projects)
}

export default {
    getProjects,
    saveProjects,
}
