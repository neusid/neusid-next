import path from "path"
import { ProjectRepository } from "../repositories/ProjectRepository"
import { StorageRepository } from "../repositories/StorageRepository"
import { Project } from "../domain/entities/Project"
import { generateSlug } from "../services/SlugService"

export class UpdateProjectUseCase {
    static async execute(input) {
        if (!input.id) {
            throw new Error("Project ID is required for editing.")
        }

        const projects = await ProjectRepository.findAll()
        const projectIndex = projects.findIndex((p) => String(p.id) === String(input.id))
        if (projectIndex === -1) {
            throw new Error(`Project with ID #${input.id} not found.`)
        }

        const existing = projects[projectIndex]
        const safeSlug = generateSlug(input.title || existing.title)
        const timestamp = Date.now()

        // 1. Process Thumbnail
        let updatedThumbnail = existing.img
        if (input.thumbnailUrl) {
            updatedThumbnail = input.thumbnailUrl
        } else if (input.thumbnailBase64) {
            const ext = input.thumbnailName ? path.extname(input.thumbnailName) || ".jpg" : ".jpg"
            const filename = `project-${input.id}-${safeSlug}-thumb-${timestamp}${ext}`
            const uploaded = await StorageRepository.uploadBase64Image(input.thumbnailBase64, filename)
            if (uploaded) updatedThumbnail = uploaded
        } else if (input.thumbnailName && (input.thumbnailName.startsWith("http") || input.thumbnailName.startsWith("/"))) {
            updatedThumbnail = input.thumbnailName
        }

        // 2. Process Background
        let updatedBg = existing.background || "project-dt-01.svg"
        if (input.backgroundUrl) {
            updatedBg = input.backgroundUrl
        } else if (input.backgroundBase64) {
            const ext = input.backgroundName ? path.extname(input.backgroundName) || ".svg" : ".svg"
            const filename = `project-${input.id}-${safeSlug}-bg-${timestamp}${ext}`
            const uploaded = await StorageRepository.uploadBase64Image(input.backgroundBase64, filename)
            if (uploaded) updatedBg = uploaded
        } else if (input.backgroundName && (input.backgroundName.startsWith("http") || input.backgroundName.startsWith("/"))) {
            updatedBg = input.backgroundName
        }

        // 3. Process Gallery
        let updatedGallery = existing.images || [updatedThumbnail]
        if (Array.isArray(input.galleryImages) && input.galleryImages.length > 0) {
            const newImages = []
            for (let idx = 0; idx < input.galleryImages.length; idx++) {
                const imgObj = input.galleryImages[idx]
                if (typeof imgObj === "string") {
                    newImages.push(imgObj)
                } else if (imgObj?.url) {
                    newImages.push(imgObj.url)
                } else if (imgObj?.base64) {
                    const ext = imgObj.name ? path.extname(imgObj.name) || ".jpg" : ".jpg"
                    const filename = `project-${input.id}-${safeSlug}-screen-${idx + 1}-${timestamp}${ext}`
                    const saved = await StorageRepository.uploadBase64Image(imgObj.base64, filename)
                    if (saved) newImages.push(saved)
                } else if (imgObj?.name) {
                    newImages.push(imgObj.name)
                }
            }
            if (newImages.length > 0) {
                updatedGallery = newImages
            }
        }

        const projectYear = input.year !== undefined ? String(input.year).trim() : existing.year
        const isClickable =
            input.clickable !== undefined
                ? input.clickable === true || input.clickable === "true"
                : existing.clickable

        const updatedProject = new Project({
            id: input.id,
            title: input.title || existing.title,
            img: updatedThumbnail,
            category: input.category || existing.category,
            badge: input.badge !== undefined ? input.badge : existing.badge,
            badgeType: input.badgeType || existing.badgeType || "live",
            tags: input.tags !== undefined ? input.tags : existing.tags,
            year: projectYear,
            clickable: isClickable,
            background: updatedBg,
            images: updatedGallery,
            data: [
                {
                    description:
                        input.description !== undefined
                            ? String(input.description).trim()
                            : existing.data?.[0]?.description || "",
                },
                {
                    year: projectYear,
                    services:
                        input.services !== undefined
                            ? String(input.services).trim()
                            : existing.data?.[1]?.services || "",
                    stack:
                        input.stack !== undefined
                            ? String(input.stack).trim()
                            : existing.data?.[1]?.stack || "",
                    ...(input.playstore !== undefined && input.playstore.trim()
                        ? { playstore: input.playstore.trim() }
                        : {}),
                    ...(input.github !== undefined && input.github.trim()
                        ? { github: input.github.trim() }
                        : {}),
                },
                {
                    next: existing.data?.[2]?.next || "1",
                },
            ],
        })

        projects[projectIndex] = updatedProject.toJSON()
        await ProjectRepository.saveAll(projects)

        return updatedProject.toJSON()
    }
}
