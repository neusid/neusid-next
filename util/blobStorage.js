import { StorageRepository } from "@/core/repositories/StorageRepository"

/**
 * Backwards compatibility adapter for getBlobToken.
 * Delegates to StorageRepository.getBlobToken().
 */
export function getBlobToken() {
    return StorageRepository.getBlobToken()
}

/**
 * Backwards compatibility adapter for uploadBase64Image.
 * Delegates to StorageRepository.uploadBase64Image().
 */
export async function uploadBase64Image(base64Data, filename) {
    return await StorageRepository.uploadBase64Image(base64Data, filename)
}

export default {
    getBlobToken,
    uploadBase64Image,
}
