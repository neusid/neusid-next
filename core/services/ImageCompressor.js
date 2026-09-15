/**
 * Client-side Canvas Image Compression Service.
 * Preserves vector data for SVGs, and intelligently resizes/compresses raster images
 * (JPEG, PNG, WebP) to WebP format to stay well under Vercel Serverless Function payload limits (4.5MB).
 *
 * @param {File} file - Original file from file input
 * @param {number} maxWidth - Maximum width dimension (default: 1400)
 * @param {number} maxHeight - Maximum height dimension (default: 1400)
 * @param {number} quality - Compression quality 0-1 (default: 0.8)
 * @returns {Promise<{ base64: string, name: string }>}
 */
export function compressImageFile(file, maxWidth = 1400, maxHeight = 1400, quality = 0.8) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve(null)

        // Keep SVG vector intact without raster conversion if under 3MB; otherwise compress via canvas
        if (
            (file.type === "image/svg+xml" || file.name.toLowerCase().endsWith(".svg")) &&
            file.size <= 3 * 1024 * 1024
        ) {
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

                // Detect optimal output format (WebP preferred, fallback to JPEG)
                let outputFormat = "image/webp"
                let targetExt = ".webp"

                let testDataUrl = ""
                try {
                    testDataUrl = canvas.toDataURL("image/webp", 0.5)
                } catch (_) {}

                if (!testDataUrl || !testDataUrl.startsWith("data:image/webp")) {
                    outputFormat = "image/jpeg"
                    targetExt = ".jpg"
                    // Fill white background for JPEG fallback to handle transparent PNGs cleanly
                    ctx.fillStyle = "#ffffff"
                    ctx.fillRect(0, 0, width, height)
                }

                ctx.drawImage(img, 0, 0, width, height)

                const base64 = canvas.toDataURL(outputFormat, quality)

                // Adjust output filename extension to match the compressed format
                const originalBaseName = file.name.replace(/\.[^/.]+$/, "")
                const cleanName = `${originalBaseName}${targetExt}`

                resolve({ base64, name: cleanName })
            }
            img.onerror = (err) => reject(new Error("Gagal membaca gambar: " + err.message))
            img.src = e.target.result
        }
        reader.onerror = (err) => reject(err)
        reader.readAsDataURL(file)
    })
}
