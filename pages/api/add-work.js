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
    // Matches data:[<mediatype>];base64,<data>
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
            galleryImages, // array of { base64, name }
        } = req.body

        if (!title || !category) {
            return res.status(400).json({ message: "Title and Category are required." })
        }

        const projectJsonPath = path.join(process.cwd(), "util", "project.json")
        let projects = []
        if (fs.existsSync(projectJsonPath)) {
            const fileContent = fs.readFileSync(projectJsonPath, "utf8")
            try {
                projects = JSON.parse(fileContent)
            } catch (e) {
                projects = []
            }
        }

        // Calculate next ID
        const existingIds = projects.map((p) => Number(p.id) || 0)
        const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1

        const safeSlug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")

        // 1. Save Thumbnail Image
        let savedThumbnail = "project1.jpeg" // fallback
        if (thumbnailBase64) {
            const ext = thumbnailName ? path.extname(thumbnailName) || ".jpg" : ".jpg"
            const filename = `project-${newId}-${safeSlug}-thumb${ext}`
            savedThumbnail = saveBase64File(thumbnailBase64, filename) || savedThumbnail
        } else if (thumbnailName) {
            savedThumbnail = thumbnailName
        }

        // 2. Save Background Image
        let savedBg = "project-dt-01.svg"
        if (backgroundBase64) {
            const ext = backgroundName ? path.extname(backgroundName) || ".svg" : ".svg"
            const filename = `project-${newId}-${safeSlug}-bg${ext}`
            savedBg = saveBase64File(backgroundBase64, filename) || savedBg
        } else if (backgroundName) {
            savedBg = backgroundName
        }

        // 3. Save Gallery Images
        let savedGallery = []
        if (Array.isArray(galleryImages) && galleryImages.length > 0) {
            galleryImages.forEach((imgObj, idx) => {
                if (imgObj.base64) {
                    const ext = imgObj.name ? path.extname(imgObj.name) || ".jpg" : ".jpg"
                    const filename = `project-${newId}-${safeSlug}-screen-${idx + 1}${ext}`
                    const saved = saveBase64File(imgObj.base64, filename)
                    if (saved) savedGallery.push(saved)
                } else if (imgObj.name) {
                    savedGallery.push(imgObj.name)
                }
            })
        }

        if (savedGallery.length === 0) {
            savedGallery = [savedThumbnail]
        }

        // Process Tags
        let parsedTags = []
        if (Array.isArray(tags)) {
            parsedTags = tags
        } else if (typeof tags === "string") {
            parsedTags = tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
        }

        const projectYear = year ? year.trim() : new Date().getFullYear().toString()
        const isClickable = clickable === true || clickable === "true"

        const newProject = {
            id: newId,
            title: title.trim(),
            img: savedThumbnail,
            category: category.trim().toUpperCase(),
            badge: badge ? badge.trim() : "New Project",
            badgeType: badgeType || "live",
            tags: parsedTags.length > 0 ? parsedTags : ["Mobile"],
            year: projectYear,
            clickable: isClickable,
            background: savedBg,
            images: savedGallery,
            data: [
                {
                    description: description ? description.trim() : "Project description coming soon.",
                },
                {
                    year: projectYear,
                    services: services ? services.trim() : category.trim(),
                    stack: stack ? stack.trim() : parsedTags.join(", "),
                    ...(playstore && playstore.trim() ? { playstore: playstore.trim() } : {}),
                    ...(github && github.trim() ? { github: github.trim() } : {}),
                },
                {
                    next: (newId === 1 ? 2 : 1).toString(),
                },
            ],
        }

        // Append to projects
        projects.push(newProject)

        // Write back to util/project.json
        fs.writeFileSync(projectJsonPath, JSON.stringify(projects, null, 4), "utf8")

        return res.status(200).json({
            success: true,
            message: "Project successfully added!",
            project: newProject,
        })
    } catch (error) {
        console.error("Error adding project:", error)
        return res.status(500).json({
            success: false,
            message: "Server error while saving project: " + error.message,
        })
    }
}
