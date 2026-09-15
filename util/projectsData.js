import fs from "fs"
import path from "path"
import { list, put } from "@vercel/blob"
import fallbackProjects from "./project.json"

const BLOB_PROJECTS_PATH = "data/projects.json"

/**
 * Retrieves the projects list.
 * 1. Checks Vercel Blob if BLOB_READ_WRITE_TOKEN is set.
 * 2. If found, fetches and returns the latest JSON.
 * 3. Falls back to local util/project.json if not found or during local development.
 *
 * @returns {Promise<Array>} Array of project objects
 */
export async function getProjects() {
    const hasBlobToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN)

    if (hasBlobToken) {
        try {
            const { blobs } = await list({
                prefix: BLOB_PROJECTS_PATH,
                limit: 1,
                token: process.env.BLOB_READ_WRITE_TOKEN,
            })
            const projectBlob = blobs.find((b) => b.pathname === BLOB_PROJECTS_PATH) || blobs[0]

            if (projectBlob && projectBlob.url) {
                const fetchUrl = `${projectBlob.url}?t=${Date.now()}`
                const res = await fetch(fetchUrl, { cache: "no-store" })
                if (res.ok) {
                    const data = await res.json()
                    if (Array.isArray(data)) {
                        return data
                    }
                }
            }
        } catch (blobErr) {
            console.warn("Could not read projects from Vercel Blob, using local fallback:", blobErr.message)
        }
    }

    // Local file read fallback
    try {
        const localPath = path.join(process.cwd(), "util", "project.json")
        if (fs.existsSync(localPath)) {
            const content = fs.readFileSync(localPath, "utf8")
            return JSON.parse(content)
        }
    } catch (fsErr) {
        console.warn("Error reading local project.json:", fsErr.message)
    }

    return fallbackProjects || []
}

/**
 * Persists the updated projects list.
 * 1. Uploads to Vercel Blob if BLOB_READ_WRITE_TOKEN is set.
 * 2. If not on Vercel read-only filesystem, also writes to util/project.json.
 *
 * @param {Array} projects - Array of projects to save
 * @returns {Promise<Array>}
 */
export async function saveProjects(projects) {
    if (!Array.isArray(projects)) {
        throw new Error("Projects must be an array")
    }

    const hasBlobToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN)
    const jsonString = JSON.stringify(projects, null, 4)
    let savedToBlob = false

    if (hasBlobToken) {
        try {
            await put(BLOB_PROJECTS_PATH, jsonString, {
                access: "public",
                contentType: "application/json",
                allowOverwrite: true,
                addRandomSuffix: false,
                token: process.env.BLOB_READ_WRITE_TOKEN,
            })
            savedToBlob = true
        } catch (blobErr) {
            console.error("Failed to save projects to Vercel Blob:", blobErr)
            if (process.env.VERCEL) {
                if (blobErr.message && blobErr.message.includes("Cannot use public access on a private store")) {
                    throw new Error(
                        "Blob Store Anda berjenis 'Private'. Untuk website portfolio, Anda WAJIB menggunakan 'Public Store' di Vercel agar file dapat diakses publik. Silakan buat Blob baru dengan opsi 'Public' di Vercel Storage lalu hubungkan ke project ini."
                    )
                }
                throw new Error(`Gagal menyimpan database ke Vercel Blob: ${blobErr.message}`)
            }
        }
    }

    // If on Vercel and not saved to Blob, inform the user clearly
    if (process.env.VERCEL && !savedToBlob) {
        throw new Error(
            "BLOB_READ_WRITE_TOKEN belum aktif pada deployment Vercel ini. Silakan klik 'Redeploy' pada Vercel Dashboard setelah menghubungkan Vercel Blob store."
        )
    }

    // Sync to local filesystem only when not running inside Vercel serverless environment
    if (!process.env.VERCEL) {
        try {
            const localPath = path.join(process.cwd(), "util", "project.json")
            fs.writeFileSync(localPath, jsonString, "utf8")
        } catch (fsErr) {
            if (!savedToBlob) {
                console.error("Failed to write to local project.json:", fsErr)
                throw fsErr
            }
        }
    }

    return projects
}
