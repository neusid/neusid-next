import { DEFAULT_ASSETS } from "../constants/projectConstants"

export class Project {
    constructor({
        id,
        title,
        img = DEFAULT_ASSETS.thumbnail,
        category,
        badge = "New Project",
        badgeType = "live",
        tags = [],
        year = new Date().getFullYear().toString(),
        clickable = true,
        background = DEFAULT_ASSETS.background,
        images = [],
        data = [],
    }) {
        this.id = Number(id)
        this.title = title ? String(title).trim() : ""
        this.img = img
        this.category = category ? String(category).trim().toUpperCase() : "GENERAL"
        this.badge = badge ? String(badge).trim() : "New Project"
        this.badgeType = badgeType || "live"
        this.tags = Array.isArray(tags)
            ? tags
            : typeof tags === "string"
            ? tags.split(",").map((t) => t.trim()).filter(Boolean)
            : []
        this.year = String(year || new Date().getFullYear()).trim()
        this.clickable = clickable === true || clickable === "true"
        this.background = background || DEFAULT_ASSETS.background
        this.images = Array.isArray(images) && images.length > 0 ? images : [this.img]
        this.data = data
    }

    static validate(data) {
        const errors = []
        if (!data.title || !String(data.title).trim()) {
            errors.push("Project Title is required.")
        }
        if (!data.category || !String(data.category).trim()) {
            errors.push("Project Category is required.")
        }
        return {
            isValid: errors.length === 0,
            errors,
        }
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            img: this.img,
            category: this.category,
            badge: this.badge,
            badgeType: this.badgeType,
            tags: this.tags,
            year: this.year,
            clickable: this.clickable,
            background: this.background,
            images: this.images,
            data: this.data,
        }
    }
}
