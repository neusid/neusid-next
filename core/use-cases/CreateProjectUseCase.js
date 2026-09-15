import path from "path"
import { ProjectRepository } from "../repositories/ProjectRepository"
import { StorageRepository } from "../repositories/StorageRepository"
import { Project } from "../domain/entities/Project"
import { generateSlug } from "../services/SlugService"
import { DEFAULT_ASSETS } from "../domain/constants/projectConstants"

export class CreateProjectUseCase {
    static async execute(input) {
        const validation = Project.validate(input)
        if (!validation.isValid) {
            throw new Error(validation.errors.join(" "))
        }

        const projects = await ProjectRepository.findAll()
        const newId = ProjectRepository.getNextId(projects)
        const safeSlug = generateSlug(input.title)

        // 1. Process Thumbnail
        let savedThumbnail = DEFAULT_ASSETS.thumbnail
        if (input.thumbnailBase64) {
            const ext = input.thumbnailName ? path.extname(input.thumbnailName) || ".jpg" : ".jpg"
            const filename = `project-${newId}-${safeSlug}-thumb${ext}`
            const uploaded = await StorageRepository.uploadBase64Image(input.thumbnailBase64, filename)
            if (uploaded) savedThumbnail = uploaded
        } else if (input.thumbnailName) {
            savedThumbnail = input.thumbnailName
        }

        // 2. Process Background
        let savedBg = DEFAULT_ASSETS.background
        if (input.backgroundBase64) {
            const ext = input.backgroundName ? path.extname(input.backgroundName) || ".svg" : ".svg"
            const filename = `project-${newId}-${safeSlug}-bg${ext}`
            const uploaded = await StorageRepository.uploadBase64Image(input.backgroundBase64, filename)
            if (uploaded) savedBg = uploaded
        } else if (input.backgroundName) {
            savedBg = input.backgroundName
        }

        // 3. Process Gallery Images
        let savedGallery = []
        if (Array.isArray(input.galleryImages) && input.galleryImages.length > 0) {
            for (let idx = 0; idx < input.galleryImages.length; idx++) {
                const imgObj = input.galleryImages[idx]
                if (imgObj.base64) {
                    const ext = imgObj.name ? path.extname(imgObj.name) || ".jpg" : ".jpg"
                    const filename = `project-${newId}-${safeSlug}-screen-${idx + 1}${ext}`
                    const saved = await StorageRepository.uploadBase64Image(imgObj.base64, filename)
                    if (saved) savedGallery.push(saved)
                } else if (imgObj.name) {
                    savedGallery.push(imgObj.name)
                }
            }
        }
        if (savedGallery.length === 0) {
            savedGallery = [savedThumbnail]
        }

        const projectYear = input.year ? input.year.trim() : new Date().getFullYear().toString()
        const isClickable = input.clickable === true || input.clickable === "true"

        const newProject = new Project({
            id: newId,
            title: input.title,
            img: savedThumbnail,
            category: input.category,
            badge: input.badge || "New Project",
            badgeType: input.badgeType || "live",
            tags: input.tags,
            year: projectYear,
            clickable: isClickable,
            background: savedBg,
            images: savedGallery,
            data: [
                {
                    description: input.description ? input.description.trim() : "Project description coming soon.",
                },
                {
                    year: projectYear,
                    services: input.services ? input.services.trim() : input.category.trim(),
                    stack: input.stack ? input.stack.trim() : (Array.isArray(input.tags) ? input.tags.join(", ") : input.tags || ""),
                    ...(input.playstore && input.playstore.trim() ? { playstore: input.playstore.trim() } : {}),
                    ...(input.github && input.github.trim() ? { github: input.github.trim() } : {}),
                },
                {
                    next: (newId === 1 ? 2 : 1).toString(),
                },
            ],
        })

        projects.push(newProject.toJSON())
        await ProjectRepository.saveAll(projects)

        return newProject.toJSON()
    }
}
