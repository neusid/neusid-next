/**
 * Client-side Canvas Image Compression Service.
 * Preserves vector data for SVGs, and intelligently resizes/compresses raster images
 * (JPEG, PNG, WebP) to stay well under Vercel Serverless Function payload limits (4.5MB).
 *
 * @param {File} file - Original file from file input
 * @param {number} maxWidth - Maximum width dimension (default: 1600)
 * @param {number} maxHeight - Maximum height dimension (default: 1600)
 * @param {number} quality - Compression quality 0-1 (default: 0.85)
 * @returns {Promise<{ base64: string, name: string }>}
 */
export function compressImageFile(file, maxWidth = 1600, maxHeight = 1600, quality = 0.85) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve(null)

        // Keep SVG vector intact without raster conversion
        if (file.type === "image/svg+xml" || file.name.toLowerCase().endsWith(".svg")) {
            const reader = new FileReader()
            reader.onload = () => resolve({ base64: reader.result, name: file.name })
            reader.onerror = (err) => reject(err)
            reader.readAsDataURL(file)
            return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
            const img = new Image()
            img.onload = () => {
                let { width, height } = img

                if (width > maxWidth || height > maxHeight) {
                    if (width / maxWidth > height / maxHeight) {
                        height = Math.round((height * maxWidth) / width)
                        width = maxWidth
                    } else {
                        width = Math.round((width * maxHeight) / height)
                        height = maxHeight
                    }
                }

                const canvas = document.createElement("canvas")
                canvas.width = width
                canvas.height = height
                const ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0, width, height)

                const isPng = file.type === "image/png" && file.size < 1024 * 1024
                const format = isPng ? "image/png" : "image/jpeg"
                const base64 = canvas.toDataURL(format, quality)
                resolve({ base64, name: file.name })
            }
            img.onerror = (err) => reject(err)
            img.src = e.target.result
        }
        reader.onerror = (err) => reject(err)
        reader.readAsDataURL(file)
    })
}
