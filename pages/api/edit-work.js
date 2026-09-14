import path from "path"
import { uploadBase64Image } from "@/util/blobStorage"
import { getProjects, saveProjects } from "@/util/projectsData"

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "25mb",
        },
    },
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed. Only POST is supported." })
    }

    try {
        const {
            id,
            title,
            category,
            badge,
            badgeType,
            tags,
            year,
            clickable,
            description,
            services,
            stack,
            playstore,
            github,
            thumbnailBase64,
            thumbnailName,
            backgroundBase64,
            backgroundName,
            galleryImages,
        } = req.body

        if (!id) {
            return res.status(400).json({ success: false, message: "Project ID is required for editing." })
        }

        const projects = await getProjects()

        const projectIndex = projects.findIndex((p) => String(p.id) === String(id))
        if (projectIndex === -1) {
            return res.status(404).json({ success: false, message: `Project with ID #${id} not found.` })
        }

        const existingProject = projects[projectIndex]
        const safeSlug = (title || existingProject.title)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")

        // 1. Thumbnail
        let updatedThumbnail = existingProject.img
        if (thumbnailBase64) {
            const ext = thumbnailName ? path.extname(thumbnailName) || ".jpg" : ".jpg"
            const filename = `project-${id}-${safeSlug}-thumb-${Date.now()}${ext}`
            const uploaded = await uploadBase64Image(thumbnailBase64, filename)
            if (uploaded) updatedThumbnail = uploaded
        }

        // 2. Background
        let updatedBg = existingProject.background || "project-dt-01.svg"
        if (backgroundBase64) {
            const ext = backgroundName ? path.extname(backgroundName) || ".svg" : ".svg"
            const filename = `project-${id}-${safeSlug}-bg-${Date.now()}${ext}`
            const uploaded = await uploadBase64Image(backgroundBase64, filename)
            if (uploaded) updatedBg = uploaded
        }

        // 3. Gallery
        let updatedGallery = existingProject.images || [updatedThumbnail]
        if (Array.isArray(galleryImages) && galleryImages.length > 0) {
            const newImages = []
            for (let idx = 0; idx < galleryImages.length; idx++) {
                const imgObj = galleryImages[idx]
                if (imgObj.base64) {
                    const ext = imgObj.name ? path.extname(imgObj.name) || ".jpg" : ".jpg"
                    const filename = `project-${id}-${safeSlug}-screen-${idx + 1}-${Date.now()}${ext}`
                    const saved = await uploadBase64Image(imgObj.base64, filename)
                    if (saved) newImages.push(saved)
                } else if (imgObj.name) {
                    newImages.push(imgObj.name)
                }
            }
            if (newImages.length > 0) {
                updatedGallery = newImages
            }
        }

        // Process Tags
        let parsedTags = existingProject.tags || []
        if (Array.isArray(tags)) {
            parsedTags = tags
        } else if (typeof tags === "string") {
            parsedTags = tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
        }

        const projectYear = year !== undefined ? year.trim() : existingProject.year
        const isClickable = clickable !== undefined ? (clickable === true || clickable === "true") : existingProject.clickable

        const updatedProject = {
            ...existingProject,
            title: title ? title.trim() : existingProject.title,
            img: updatedThumbnail,
            category: category ? category.trim().toUpperCase() : existingProject.category,
            badge: badge !== undefined ? badge.trim() : existingProject.badge,
            badgeType: badgeType || existingProject.badgeType || "live",
            tags: parsedTags,
            year: projectYear,
            clickable: isClickable,
            background: updatedBg,
            images: updatedGallery,
            data: [
                {
                    description: description !== undefined ? description.trim() : existingProject.data?.[0]?.description || "",
                },
                {
                    year: projectYear,
                    services: services !== undefined ? services.trim() : existingProject.data?.[1]?.services || "",
                    stack: stack !== undefined ? stack.trim() : existingProject.data?.[1]?.stack || parsedTags.join(", "),
                    ...(playstore !== undefined && playstore.trim() ? { playstore: playstore.trim() } : {}),
                    ...(github !== undefined && github.trim() ? { github: github.trim() } : {}),
                },
                {
                    next: existingProject.data?.[2]?.next || "1",
                },
            ],
        }

        projects[projectIndex] = updatedProject
        await saveProjects(projects)

        return res.status(200).json({
            success: true,
            message: `Project #${id} successfully updated!`,
            project: updatedProject,
        })
    } catch (error) {
        console.error("Error updating project:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while updating project: " + error.message,
        })
    }
}
