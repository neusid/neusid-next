import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import { getProjects } from "@/util/projectsData"
import { getProjectImageUrl } from "@/util/imageHelper"

export default function WorkUpload({ initialProjects = [] }) {
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

    const thumbInputRef = useRef(null)
    const bgInputRef = useRef(null)
    const galleryInputRef = useRef(null)

    // Pre-populate data when in edit mode
    useEffect(() => {
        if (!router.isReady || !editId) return

        const populateData = (proj) => {
            setTitle(proj.title || "")
            const standardCats = ["MOBILE DEVELOPMENT", "GRAPHIC DESIGN", "WEB DEVELOPMENT", "IOT & EMBEDDED"]
            if (standardCats.includes(proj.category)) {
                setCategory(proj.category)
                setCustomCategory("")
            } else {
                setCategory("CUSTOM")
                setCustomCategory(proj.category || "")
            }

            setBadge(proj.badge || "")
            setBadgeType(proj.badgeType || "live")
            setTags(Array.isArray(proj.tags) ? proj.tags.join(", ") : (proj.tags || ""))
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

    const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onerror = (err) => reject(err)
            reader.readAsDataURL(file)
        })

    const handleThumbnailChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            const b64 = await fileToBase64(file)
            setThumbnailBase64(b64)
            setThumbnailName(file.name)
            setThumbnailPreview(URL.createObjectURL(file))
        } catch (err) {
            console.error("Failed to read thumbnail:", err)
        }
    }

    const handleBackgroundChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            const b64 = await fileToBase64(file)
            setBackgroundBase64(b64)
            setBackgroundName(file.name)
            setBackgroundPreview(URL.createObjectURL(file))
        } catch (err) {
            console.error("Failed to read background:", err)
        }
    }

    const handleGalleryChange = async (e) => {
        const files = Array.from(e.target.files || [])
        if (!files.length) return

        const newGalleryItems = []
        for (const file of files.slice(0, 4 - gallery.length)) {
            try {
                const b64 = await fileToBase64(file)
                newGalleryItems.push({
                    base64: b64,
                    name: file.name,
                    preview: URL.createObjectURL(file),
                })
            } catch (err) {
                console.error("Failed to read gallery file:", err)
            }
        }
        setGallery((prev) => [...prev, ...newGalleryItems])
    }

    const removeGalleryItem = (index) => {
        setGallery((prev) => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg("")

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

    return (
        <>
            <Layout maincls="main-workspage">
                <section className="upload-work-area">
                    <div className="container" style={{ maxWidth: "880px" }}>

                        {/* Top Back Link to Admin */}
                        <div style={{ marginBottom: "24px" }} data-aos="fade-up">
                            <Link
                                href="/work-admin"
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "13.5px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    textDecoration: "none",
                                    padding: "6px 12px",
                                    borderRadius: "8px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <i className="iconoir-arrow-left" /> Back to Admin Manager
                            </Link>
                        </div>

                        {/* Hero Header */}
                        <div className="upload-hero" data-aos="fade-up">
                            <span className="upload-secret-tag">
                                {isEditMode ? (
                                    <>
                                        <i className="iconoir-edit-pencil" /> Admin Edit Mode · ID #{editId}
                                    </>
                                ) : (
                                    <>
                                        <i className="iconoir-sparks" /> Secret Management URL
                                    </>
                                )}
                            </span>
                            <h1>{isEditMode ? `Edit Project #${editId}` : "Upload New Work"}</h1>
                            <p>
                                {isEditMode
                                    ? `Update case study specifications, live links, or visual assets for "${title || `Project #${editId}`}".`
                                    : "Add a new production showcase, academic research project, or graphic art piece to your portfolio."}
                            </p>
                        </div>

                        {/* Success Message Banner */}
                        {successData && (
                            <div className="upload-success-modal" data-aos="zoom-in">
                                <h3>🎉 {isEditMode ? "Project Successfully Updated!" : "Project Successfully Published!"}</h3>
                                <p>
                                    <strong>&quot;{successData.title}&quot;</strong> has been {isEditMode ? "updated in" : "saved to"} your portfolio database (ID: #{successData.id}).
                                </p>
                                <div className="upload-success-actions">
                                    <button
                                        type="button"
                                        className="upload-action-btn primary"
                                        onClick={() => handleOpenProject(successData.id)}
                                    >
                                        View Case Study Page →
                                    </button>
                                    <Link href="/work-admin" className="upload-action-btn secondary">
                                        Back to Admin Manager
                                    </Link>
                                    <Link href="/works" className="upload-action-btn secondary">
                                        View in Works Gallery
                                    </Link>
                                    {!isEditMode && (
                                        <button
                                            type="button"
                                            className="upload-action-btn secondary"
                                            onClick={handleReset}
                                        >
                                            + Upload Another Project
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Error Alert */}
                        {errorMsg && (
                            <div style={{
                                background: "rgba(239, 68, 68, 0.12)",
                                border: "1px solid rgba(239, 68, 68, 0.35)",
                                borderRadius: "16px",
                                padding: "16px 20px",
                                color: "#f87171",
                                marginBottom: "24px",
                                fontSize: "14px"
                            }}>
                                ⚠️ {errorMsg}
                            </div>
                        )}

                        {/* Form Card */}
                        {!successData && (
                            <div className="upload-form-card" data-aos="fade-up" data-aos-delay="100">
                                <form onSubmit={handleSubmit}>

                                    {/* Section 1: Basic Information */}
                                    <div className="upload-section-title">
                                        <i className="iconoir-folder" /> Basic Information
                                    </div>

                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="upload-field-group">
                                                <label className="upload-label">
                                                    Project Title *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="upload-input"
                                                    placeholder="e.g. HealthTracker Mobile App"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="upload-field-group">
                                                <label className="upload-label">
                                                    Year / Timeline
                                                </label>
                                                <input
                                                    type="text"
                                                    className="upload-input"
                                                    placeholder="e.g. 2025 - 2026"
                                                    value={year}
                                                    onChange={(e) => setYear(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="upload-field-group">
                                                <label className="upload-label">
                                                    Category *
                                                </label>
                                                <select
                                                    className="upload-select"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option value="MOBILE DEVELOPMENT">Mobile Development</option>
                                                    <option value="GRAPHIC DESIGN">Graphic Design</option>
                                                    <option value="WEB DEVELOPMENT">Web Development</option>
                                                    <option value="IOT & EMBEDDED">IoT & Embedded Systems</option>
                                                    <option value="CUSTOM">+ Custom Category...</option>
                                                </select>
                                            </div>
                                        </div>
                                        {category === "CUSTOM" && (
                                            <div className="col-md-6">
                                                <div className="upload-field-group">
                                                    <label className="upload-label">
                                                        Custom Category Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="upload-input"
                                                        placeholder="e.g. UI/UX DESIGN"
                                                        value={customCategory}
                                                        onChange={(e) => setCustomCategory(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="upload-field-group">
                                                <label className="upload-label">
                                                    Status Badge Text
                                                </label>
                                                <input
                                                    type="text"
                                                    className="upload-input"
                                                    placeholder="e.g. Play Store · Live, IoT Research, Enterprise"
                                                    value={badge}
                                                    onChange={(e) => setBadge(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="upload-field-group">
                                                <label className="upload-label">
                                                    Badge Light Theme
                                                </label>
                                                <select
                                                    className="upload-select"
                                                    value={badgeType}
                                                    onChange={(e) => setBadgeType(e.target.value)}
                                                >
                                                    <option value="live">Emerald Green (Live / Production)</option>
                                                    <option value="research">Cyan Blue (IoT / Academic Research)</option>
                                                    <option value="enterprise">Purple (Enterprise / Corporate)</option>
                                                    <option value="design">Amber Orange (Graphic Art / Design)</option>
                                                    <option value="app">Indigo (Mobile App Concept)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="upload-field-group">
                                        <label className="upload-label">
                                            Tech Stack Tags <span className="optional">(comma separated)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="upload-input"
                                            placeholder="e.g. Flutter, Firebase, REST API, BLoC"
                                            value={tags}
                                            onChange={(e) => setTags(e.target.value)}
                                        />
                                    </div>

                                    <div className="upload-field-group" style={{ margin: "24px 0" }}>
                                        <label className="upload-switch-label">
                                            <input
                                                type="checkbox"
                                                checked={clickable}
                                                onChange={(e) => setClickable(e.target.checked)}
                                            />
                                            <span>
                                                <strong>Clickable Case Study</strong> (Enable dedicated project detail page at <code>/project/:id</code>)
                                            </span>
                                        </label>
                                    </div>

                                    <div className="upload-field-group">
                                        <label className="upload-label">
                                            Project Description <span className="optional">(in English)</span>
                                        </label>
                                        <textarea
                                            className="upload-textarea"
                                            placeholder="Detailed description of the project, problem solved, features implemented, and architecture..."
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>

                                    {/* Section 2: Case Study Metadata */}
                                    {clickable && (
                                        <>
                                            <div className="upload-section-title" style={{ marginTop: "36px" }}>
                                                <i className="iconoir-page" /> Case Study Metadata
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="upload-field-group">
                                                        <label className="upload-label">Services Provided</label>
                                                        <input
                                                            type="text"
                                                            className="upload-input"
                                                            placeholder="e.g. Mobile Development & UI/UX"
                                                            value={services}
                                                            onChange={(e) => setServices(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="upload-field-group">
                                                        <label className="upload-label">Detailed Stack String</label>
                                                        <input
                                                            type="text"
                                                            className="upload-input"
                                                            placeholder="e.g. Flutter, Dart, Firebase, Figma"
                                                            value={stack}
                                                            onChange={(e) => setStack(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="upload-field-group">
                                                        <label className="upload-label">Google Play Store URL <span className="optional">(optional)</span></label>
                                                        <input
                                                            type="url"
                                                            className="upload-input"
                                                            placeholder="https://play.google.com/store/apps/details?id=..."
                                                            value={playstore}
                                                            onChange={(e) => setPlaystore(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="upload-field-group">
                                                        <label className="upload-label">GitHub Repository URL <span className="optional">(optional)</span></label>
                                                        <input
                                                            type="url"
                                                            className="upload-input"
                                                            placeholder="https://github.com/..."
                                                            value={github}
                                                            onChange={(e) => setGithub(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Section 3: Media Uploads */}
                                    <div className="upload-section-title" style={{ marginTop: "36px" }}>
                                        <i className="iconoir-media-image" /> Visual Assets & Images
                                    </div>

                                    {/* Main Thumbnail */}
                                    <div className="upload-field-group">
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                                            <label className="upload-label" style={{ margin: 0 }}>
                                                Main Card Thumbnail * <span className="optional">(Recommended ratio 16:10 · 1280×800)</span>
                                            </label>
                                            <Link
                                                href="/figma-template"
                                                target="_blank"
                                                style={{
                                                    color: "#00d2ff",
                                                    fontSize: "12px",
                                                    textDecoration: "none",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "5px",
                                                    padding: "2px 8px",
                                                    background: "rgba(0, 210, 255, 0.08)",
                                                    border: "1px solid rgba(0, 210, 255, 0.2)",
                                                    borderRadius: "6px"
                                                }}
                                            >
                                                <i className="iconoir-figma" /> Get Figma Template (.SVG) ↗
                                            </Link>
                                        </div>

                                        {thumbnailPreview ? (
                                            <div className="upload-preview-box">
                                                <img src={thumbnailPreview} alt="Thumbnail Preview" />
                                                <button
                                                    type="button"
                                                    className="upload-remove-btn"
                                                    onClick={() => {
                                                        setThumbnailPreview(null)
                                                        setThumbnailBase64(null)
                                                        setThumbnailName("")
                                                        if (thumbInputRef.current) thumbInputRef.current.value = ""
                                                    }}
                                                    title="Remove / Change Image"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ) : (
                                            <div
                                                className="upload-dropzone"
                                                onClick={() => thumbInputRef.current?.click()}
                                            >
                                                <i className="iconoir-cloud-upload upload-dropzone-icon" />
                                                <div className="upload-dropzone-title">Click to upload card thumbnail</div>
                                                <div className="upload-dropzone-sub">PNG, JPG, JPEG, WebP up to 10MB</div>
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            ref={thumbInputRef}
                                            style={{ display: "none" }}
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                        />
                                    </div>

                                    {/* Background Detail (Optional) */}
                                    {clickable && (
                                        <div className="upload-field-group">
                                            <label className="upload-label">
                                                Project Details Background Banner <span className="optional">(optional, shown at top of case study page)</span>
                                            </label>

                                            {backgroundPreview ? (
                                                <div className="upload-preview-box" style={{ maxHeight: "140px" }}>
                                                    <img src={backgroundPreview} alt="Background Preview" />
                                                    <button
                                                        type="button"
                                                        className="upload-remove-btn"
                                                        onClick={() => {
                                                            setBackgroundPreview(null)
                                                            setBackgroundBase64(null)
                                                            setBackgroundName("")
                                                            if (bgInputRef.current) bgInputRef.current.value = ""
                                                        }}
                                                        title="Remove / Change Image"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    className="upload-dropzone"
                                                    style={{ padding: "18px" }}
                                                    onClick={() => bgInputRef.current?.click()}
                                                >
                                                    <i className="iconoir-media-image-list upload-dropzone-icon" style={{ fontSize: "24px" }} />
                                                    <div className="upload-dropzone-title">Upload Background Header Banner</div>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                ref={bgInputRef}
                                                style={{ display: "none" }}
                                                accept="image/*"
                                                onChange={handleBackgroundChange}
                                            />
                                        </div>
                                    )}

                                    {/* Detail Screenshots (Optional) */}
                                    {clickable && (
                                        <div className="upload-field-group">
                                            <label className="upload-label">
                                                Case Study Screenshots <span className="optional">(up to 4 images for the 2x2 showcase grid)</span>
                                            </label>

                                            {gallery.length < 4 && (
                                                <div
                                                    className="upload-dropzone"
                                                    style={{ padding: "18px" }}
                                                    onClick={() => galleryInputRef.current?.click()}
                                                >
                                                    <i className="iconoir-plus-circle upload-dropzone-icon" style={{ fontSize: "24px" }} />
                                                    <div className="upload-dropzone-title">
                                                        Add Screenshots ({gallery.length}/4 selected)
                                                    </div>
                                                </div>
                                            )}

                                            <input
                                                type="file"
                                                ref={galleryInputRef}
                                                style={{ display: "none" }}
                                                accept="image/*"
                                                multiple
                                                onChange={handleGalleryChange}
                                            />

                                            {gallery.length > 0 && (
                                                <div className="gallery-preview-grid">
                                                    {gallery.map((g, idx) => (
                                                        <div key={idx} className="gallery-thumb-item">
                                                            <img src={g.preview} alt={`Screenshot ${idx + 1}`} />
                                                            <button
                                                                type="button"
                                                                className="upload-remove-btn"
                                                                style={{ width: "24px", height: "24px", fontSize: "11px", top: "5px", right: "5px" }}
                                                                onClick={() => removeGalleryItem(idx)}
                                                                title="Remove"
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Submit Action Button */}
                                    <div style={{ marginTop: "40px" }}>
                                        <button
                                            type="submit"
                                            className="upload-submit-btn"
                                            disabled={submitting}
                                        >
                                            {submitting ? (
                                                <>
                                                    <i className="iconoir-restart" style={{ animation: "spin-slow 1s linear infinite" }} />
                                                    {isEditMode ? "Saving Changes..." : "Publishing Project..."}
                                                </>
                                            ) : (
                                                <>
                                                    <i className={isEditMode ? "iconoir-floppy-disk" : "iconoir-check"} />
                                                    {isEditMode ? `Save Changes to Project #${editId}` : "Publish New Work to Portfolio"}
                                                </>
                                            )}
                                        </button>
                                    </div>

                                </form>
                            </div>
                        )}

                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const initialProjects = await getProjects()
        return {
            props: {
                initialProjects: JSON.parse(JSON.stringify(initialProjects)),
            },
        }
    } catch (error) {
        console.error("Error in getServerSideProps for work-upload:", error)
        return {
            props: {
                initialProjects: [],
            },
        }
    }
}

