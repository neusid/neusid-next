import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import { getProjectImageUrl } from "@/util/imageHelper"
import { compressImageFile } from "@/core/services/ImageCompressor"
import { PROJECT_CATEGORIES } from "@/core/domain/constants/projectConstants"

export function useWorkUploadForm({ initialProjects = [] }) {
    const router = useRouter()
    const editId = router.query.id
    const isEditMode = Boolean(editId)

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("MOBILE DEVELOPMENT")
    const [customCategory, setCustomCategory] = useState("")
    const [badge, setBadge] = useState("Play Store · Live")
    const [badgeType, setBadgeType] = useState("live")
    const [tags, setTags] = useState("Flutter, Firebase")
    const [year, setYear] = useState(new Date().getFullYear().toString())
    const [clickable, setClickable] = useState(true)
    const [description, setDescription] = useState("")
    const [services, setServices] = useState("Mobile Development")
    const [stack, setStack] = useState("Flutter & Firebase")
    const [playstore, setPlaystore] = useState("")
    const [github, setGithub] = useState("")

    // Images
    const [thumbnailBase64, setThumbnailBase64] = useState(null)
    const [thumbnailName, setThumbnailName] = useState("")
    const [thumbnailPreview, setThumbnailPreview] = useState(null)

    const [backgroundBase64, setBackgroundBase64] = useState(null)
    const [backgroundName, setBackgroundName] = useState("")
    const [backgroundPreview, setBackgroundPreview] = useState(null)

    const [gallery, setGallery] = useState([]) // array of { base64, name, preview }

    const [submitting, setSubmitting] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successData, setSuccessData] = useState(null)
    const [imageCompressing, setImageCompressing] = useState(false)

    const thumbInputRef = useRef(null)
    const bgInputRef = useRef(null)
    const galleryInputRef = useRef(null)

    // Pre-populate data when in edit mode
    useEffect(() => {
        if (!router.isReady || !editId) return

        const populateData = (proj) => {
            setTitle(proj.title || "")
            if (PROJECT_CATEGORIES.includes(proj.category)) {
                setCategory(proj.category)
                setCustomCategory("")
            } else {
                setCategory("CUSTOM")
                setCustomCategory(proj.category || "")
            }

            setBadge(proj.badge || "")
            setBadgeType(proj.badgeType || "live")
            setTags(Array.isArray(proj.tags) ? proj.tags.join(", ") : proj.tags || "")
            setYear(proj.year || "")
            setClickable(proj.clickable !== false)
            setDescription(proj.data?.[0]?.description || "")
            setServices(proj.data?.[1]?.services || "")
            setStack(proj.data?.[1]?.stack || "")
            setPlaystore(proj.data?.[1]?.playstore || "")
            setGithub(proj.data?.[1]?.github || "")

            if (proj.img) {
                setThumbnailPreview(getProjectImageUrl(proj.img))
                setThumbnailName(proj.img)
            }
            if (proj.background) {
                setBackgroundPreview(getProjectImageUrl(proj.background))
                setBackgroundName(proj.background)
            }
            if (Array.isArray(proj.images) && proj.images.length > 0) {
                setGallery(
                    proj.images.map((imgName) => ({
                        preview: getProjectImageUrl(imgName),
                        name: imgName,
                        base64: null,
                    }))
                )
            }
        }

        const proj = initialProjects.find((p) => String(p.id) === String(editId))
        if (proj) {
            populateData(proj)
        } else {
            fetch("/api/projects")
                .then((r) => r.json())
                .then((d) => {
                    if (d.projects) {
                        const found = d.projects.find((p) => String(p.id) === String(editId))
                        if (found) populateData(found)
                        else setErrorMsg(`Project with ID #${editId} not found in database.`)
                    }
                })
                .catch(() => setErrorMsg(`Project with ID #${editId} not found in database.`))
        }
    }, [router.isReady, editId])

    const handleThumbnailChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            setImageCompressing(true)
            const result = await compressImageFile(file)
            setThumbnailBase64(result.base64)
            setThumbnailName(result.name)
            setThumbnailPreview(URL.createObjectURL(file))
        } catch (err) {
            console.error("Failed to read thumbnail:", err)
            setErrorMsg("Gagal memproses gambar thumbnail: " + err.message)
        } finally {
            setImageCompressing(false)
        }
    }

    const handleBackgroundChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            setImageCompressing(true)
            const result = await compressImageFile(file)
            setBackgroundBase64(result.base64)
            setBackgroundName(result.name)
            setBackgroundPreview(URL.createObjectURL(file))
        } catch (err) {
            console.error("Failed to read background:", err)
            setErrorMsg("Gagal memproses gambar background: " + err.message)
        } finally {
            setImageCompressing(false)
        }
    }

    const handleGalleryChange = async (e) => {
        const files = Array.from(e.target.files || [])
        if (!files.length) return

        setImageCompressing(true)
        const newGalleryItems = []
        for (const file of files.slice(0, 4 - gallery.length)) {
            try {
                const result = await compressImageFile(file)
                newGalleryItems.push({
                    base64: result.base64,
                    name: result.name,
                    preview: URL.createObjectURL(file),
                })
            } catch (err) {
                console.error("Failed to read gallery file:", err)
            }
        }
        setGallery((prev) => [...prev, ...newGalleryItems])
        setImageCompressing(false)
    }

    const removeGalleryItem = (index) => {
        setGallery((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg("")

        if (imageCompressing) {
            setErrorMsg("Sedang memproses dan mengompresi gambar, harap tunggu sebentar...")
            return
        }

        if (!title.trim()) {
            setErrorMsg("Project Title is required.")
            return
        }

        const effectiveCategory = category === "CUSTOM" ? customCategory.trim() : category
        if (!effectiveCategory) {
            setErrorMsg("Category is required.")
            return
        }

        if (!thumbnailBase64 && !thumbnailPreview) {
            setErrorMsg("Please upload a Main Thumbnail image for the card.")
            return
        }

        setSubmitting(true)

        try {
            const payload = {
                ...(isEditMode ? { id: editId } : {}),
                title,
                category: effectiveCategory,
                badge,
                badgeType,
                tags,
                year,
                clickable,
                description,
                services: services || effectiveCategory,
                stack,
                playstore,
                github,
                thumbnailBase64,
                thumbnailName,
                backgroundBase64,
                backgroundName,
                galleryImages: gallery.map((g) => ({ base64: g.base64, name: g.name })),
            }

            const endpoint = isEditMode ? "/api/edit-work" : "/api/add-work"
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            const data = await res.json()

            if (!res.ok || !data.success) {
                throw new Error(data.message || (isEditMode ? "Failed to update project." : "Failed to add project."))
            }

            setSuccessData(data.project)
            window.scrollTo({ top: 0, behavior: "smooth" })
        } catch (err) {
            setErrorMsg(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    const handleReset = () => {
        setTitle("")
        setCategory("MOBILE DEVELOPMENT")
        setCustomCategory("")
        setBadge("Play Store · Live")
        setBadgeType("live")
        setTags("Flutter, Firebase")
        setYear(new Date().getFullYear().toString())
        setClickable(true)
        setDescription("")
        setServices("Mobile Development")
        setStack("Flutter & Firebase")
        setPlaystore("")
        setGithub("")
        setThumbnailBase64(null)
        setThumbnailName("")
        setThumbnailPreview(null)
        setBackgroundBase64(null)
        setBackgroundName("")
        setBackgroundPreview(null)
        setGallery([])
        setSuccessData(null)
        setErrorMsg("")
    }

    const handleOpenProject = (projectId) => {
        sessionStorage.setItem("fromWorks", "true")
        router.push(`/project/${projectId}`)
    }

    return {
        router,
        editId,
        isEditMode,
        title,
        setTitle,
        category,
        setCategory,
        customCategory,
        setCustomCategory,
        badge,
        setBadge,
        badgeType,
        setBadgeType,
        tags,
        setTags,
        year,
        setYear,
        clickable,
        setClickable,
        description,
        setDescription,
        services,
        setServices,
        stack,
        setStack,
        playstore,
        setPlaystore,
        github,
        setGithub,
        thumbnailBase64,
        thumbnailName,
        thumbnailPreview,
        thumbInputRef,
        handleThumbnailChange,
        backgroundBase64,
        backgroundName,
        backgroundPreview,
        bgInputRef,
        handleBackgroundChange,
        gallery,
        galleryInputRef,
        handleGalleryChange,
        removeGalleryItem,
        submitting,
        imageCompressing,
        errorMsg,
        setErrorMsg,
        successData,
        handleSubmit,
        handleReset,
        handleOpenProject,
    }
}
