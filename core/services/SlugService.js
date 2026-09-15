/**
 * Generates URL-safe and filesystem-safe slugs from titles.
 */
export function generateSlug(text) {
    if (!text) return "project"
    return String(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
}
