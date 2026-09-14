/**
 * Resolves project image paths.
 * Supports:
 * 1. Absolute URLs (e.g. Vercel Blob CDN: https://...public.blob.vercel-storage.com/...)
 * 2. Absolute root paths (/assets/images/...)
 * 3. Legacy relative filenames (e.g. project1.jpeg -> /assets/images/project1.jpeg)
 */
export function getProjectImageUrl(pathOrUrl) {
    if (!pathOrUrl) return "/assets/images/project1.jpeg"

    if (
        typeof pathOrUrl === "string" &&
        (pathOrUrl.startsWith("http://") ||
            pathOrUrl.startsWith("https://") ||
            pathOrUrl.startsWith("/") ||
            pathOrUrl.startsWith("data:"))
    ) {
        return pathOrUrl
    }

    return `/assets/images/${pathOrUrl}`
}

export default getProjectImageUrl
