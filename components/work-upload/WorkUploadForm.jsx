import React from "react"
import { PROJECT_CATEGORIES } from "@/core/domain/constants/projectConstants"

export default function WorkUploadForm({
    isEditMode,
    editId,
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
    thumbnailName,
    thumbnailPreview,
    thumbInputRef,
    handleThumbnailChange,
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
    handleSubmit,
}) {
    return (
        <div className="upload-form-card" data-aos="fade-up" data-aos-delay="100">
            {errorMsg && (
                <div
                    style={{
                        background: "rgba(239, 68, 68, 0.12)",
                        border: "1px solid rgba(239, 68, 68, 0.35)",
                        borderRadius: "16px",
                        padding: "16px 20px",
                        color: "#f87171",
                        marginBottom: "24px",
                        fontSize: "14px",
                    }}
                >
                    ⚠️ {errorMsg}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Section 1: Basic Information */}
                <div className="upload-section-title">
                    <i className="iconoir-folder" /> Basic Information
                </div>

                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label className="upload-label">
                            Project Title <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. MiERP - Enterprise Resource Planning"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">
                            Category <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <select
                            className="upload-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {PROJECT_CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                            <option value="CUSTOM">+ Custom Category</option>
                        </select>
                    </div>

                    {category === "CUSTOM" && (
                        <div className="col-md-6 mb-3">
                            <label className="upload-label">
                                Custom Category Name <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                                type="text"
                                className="upload-input"
                                placeholder="e.g. ARTIFICIAL INTELLIGENCE"
                                value={customCategory}
                                onChange={(e) => setCustomCategory(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">Badge Label</label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. Play Store · Live or Figma Design"
                            value={badge}
                            onChange={(e) => setBadge(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="upload-label">Badge Style Color</label>
                        <select
                            className="upload-select"
                            value={badgeType}
                            onChange={(e) => setBadgeType(e.target.value)}
                        >
                            <option value="live">🟢 Live / Emerald Green</option>
                            <option value="beta">🟡 In Development / Orange</option>
                            <option value="concept">🔵 Concept / Cyan Blue</option>
                        </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="upload-label">Year of Completion</label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. 2024"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="upload-label">Clickable Case Study</label>
                        <select
                            className="upload-select"
                            value={clickable ? "true" : "false"}
                            onChange={(e) => setClickable(e.target.value === "true")}
                        >
                            <option value="true">Yes — Has detail page</option>
                            <option value="false">No — Showcase card only</option>
                        </select>
                    </div>

                    <div className="col-md-12 mb-3">
                        <label className="upload-label">
                            Filter Tags <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>(comma separated)</span>
                        </label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. Flutter, Firebase, Bloc, Node.js"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                </div>

                {/* Section 2: Case Study Details */}
                <div className="upload-section-title" style={{ marginTop: "24px" }}>
                    <i className="iconoir-notes" /> Case Study & Technical Specifications
                </div>

                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label className="upload-label">Project Description</label>
                        <textarea
                            className="upload-textarea"
                            placeholder="Write an engaging overview describing the problem, your engineering solution, and impact..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">Services Provided</label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. Mobile App Architecture, UI/UX Design"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">Technology Stack Summary</label>
                        <input
                            type="text"
                            className="upload-input"
                            placeholder="e.g. Flutter 3.19, Dart, Firebase Auth"
                            value={stack}
                            onChange={(e) => setStack(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">Play Store / App Store URL</label>
                        <input
                            type="url"
                            className="upload-input"
                            placeholder="https://play.google.com/store/apps/details?id=..."
                            value={playstore}
                            onChange={(e) => setPlaystore(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="upload-label">GitHub Repository URL</label>
                        <input
                            type="url"
                            className="upload-input"
                            placeholder="https://github.com/your-username/repo"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                        />
                    </div>
                </div>

                {/* Section 3: Visual Assets */}
                <div className="upload-section-title" style={{ marginTop: "24px" }}>
                    <i className="iconoir-media-image" /> Visual Assets & Mockups
                </div>

                <div className="row">
                    {/* Thumbnail */}
                    <div className="col-md-6 mb-4">
                        <label className="upload-label">
                            Main Card Thumbnail <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <div
                            className="upload-dropzone"
                            onClick={() => thumbInputRef.current?.click()}
                        >
                            <input
                                ref={thumbInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleThumbnailChange}
                            />
                            {thumbnailPreview ? (
                                <div className="upload-preview-wrap">
                                    <img src={thumbnailPreview} alt="Thumbnail preview" />
                                    <span className="upload-preview-name">{thumbnailName || "thumbnail.jpg"}</span>
                                    <div className="upload-preview-replace">Click to replace</div>
                                </div>
                            ) : (
                                <div className="upload-dropzone-content">
                                    <i className="iconoir-media-image" />
                                    <p>Click or drag & drop to upload</p>
                                    <span>PNG, JPG, WebP or SVG up to 10MB</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Background */}
                    <div className="col-md-6 mb-4">
                        <label className="upload-label">Detail Page Header Background</label>
                        <div
                            className="upload-dropzone"
                            onClick={() => bgInputRef.current?.click()}
                        >
                            <input
                                ref={bgInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleBackgroundChange}
                            />
                            {backgroundPreview ? (
                                <div className="upload-preview-wrap">
                                    <img src={backgroundPreview} alt="Background preview" />
                                    <span className="upload-preview-name">{backgroundName || "background.jpg"}</span>
                                    <div className="upload-preview-replace">Click to replace</div>
                                </div>
                            ) : (
                                <div className="upload-dropzone-content">
                                    <i className="iconoir-media-image-list" />
                                    <p>Click or drag & drop to upload</p>
                                    <span>High-res banner (Recommended: 1200x500)</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gallery Images */}
                    {clickable && (
                        <div className="col-md-12 mb-4">
                            <label className="upload-label">
                                Case Study Screenshots & Gallery{" "}
                                <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                                    (Up to 4 images)
                                </span>
                            </label>
                            {gallery.length < 4 && (
                                <div
                                    className="upload-dropzone"
                                    style={{ padding: "24px" }}
                                    onClick={() => galleryInputRef.current?.click()}
                                >
                                    <input
                                        ref={galleryInputRef}
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        style={{ display: "none" }}
                                        onChange={handleGalleryChange}
                                    />
                                    <div className="upload-dropzone-content">
                                        <i className="iconoir-plus-circle" />
                                        <p>Add gallery mockups / screen captures ({gallery.length}/4 added)</p>
                                    </div>
                                </div>
                            )}

                            {gallery.length > 0 && (
                                <div className="upload-gallery-grid">
                                    {gallery.map((item, idx) => (
                                        <div key={idx} className="upload-gallery-item">
                                            <img src={item.preview} alt={`Gallery ${idx + 1}`} />
                                            <button
                                                type="button"
                                                className="upload-gallery-remove"
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
                </div>

                {/* Submit Action Button */}
                <div style={{ marginTop: "40px" }}>
                    <button
                        type="submit"
                        className="upload-submit-btn"
                        disabled={submitting || imageCompressing}
                    >
                        {imageCompressing ? (
                            <>
                                <i className="iconoir-sparks" style={{ animation: "pulse 1s infinite" }} />
                                Processing & Optimizing Images...
                            </>
                        ) : submitting ? (
                            <>
                                <i className="iconoir-restart" style={{ animation: "spin-slow 1s linear infinite" }} />
                                {isEditMode ? "Saving Changes to Cloud..." : "Publishing Project to Cloud..."}
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
    )
}
