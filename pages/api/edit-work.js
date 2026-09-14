import fs from "fs"
import path from "path"

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "25mb",
        },
    },
}

function saveBase64File(base64Data, filename) {
    if (!base64Data) return null
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
    const rawData = matches ? matches[2] : base64Data
    const buffer = Buffer.from(rawData, "base64")
    const imagesDir = path.join(process.cwd(), "public", "assets", "images")

    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true })
    }

    const filePath = path.join(imagesDir, filename)
    fs.writeFileSync(filePath, buffer)
    return filename
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

        const projectJsonPath = path.join(process.cwd(), "util", "project.json")
        if (!fs.existsSync(projectJsonPath)) {
            return res.status(404).json({ success: false, message: "project.json not found." })
        }

        const fileContent = fs.readFileSync(projectJsonPath, "utf8")
        let projects = JSON.parse(fileContent)

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
            updatedThumbnail = saveBase64File(thumbnailBase64, filename) || updatedThumbnail
        }

        // 2. Background
        let updatedBg = existingProject.background || "project-dt-01.svg"
        if (backgroundBase64) {
            const ext = backgroundName ? path.extname(backgroundName) || ".svg" : ".svg"
            const filename = `project-${id}-${safeSlug}-bg-${Date.now()}${ext}`
            updatedBg = saveBase64File(backgroundBase64, filename) || updatedBg
        }

        // 3. Gallery
        let updatedGallery = existingProject.images || [updatedThumbnail]
        if (Array.isArray(galleryImages) && galleryImages.length > 0) {
            const newImages = []
            galleryImages.forEach((imgObj, idx) => {
                if (imgObj.base64) {
                    const ext = imgObj.name ? path.extname(imgObj.name) || ".jpg" : ".jpg"
                    const filename = `project-${id}-${safeSlug}-screen-${idx + 1}-${Date.now()}${ext}`
                    const saved = saveBase64File(imgObj.base64, filename)
                    if (saved) newImages.push(saved)
                } else if (imgObj.name) {
                    newImages.push(imgObj.name)
                }
            })
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
        fs.writeFileSync(projectJsonPath, JSON.stringify(projects, null, 4), "utf8")

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
