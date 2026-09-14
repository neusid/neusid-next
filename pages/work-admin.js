import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getProjects } from "@/util/projectsData"
import { getProjectImageUrl } from "@/util/imageHelper"

export default function WorkAdmin({ initialProjects = [] }) {
    const [projects, setProjects] = useState(initialProjects)
    const [activeFilter, setActiveFilter] = useState("all")
    const [deletingId, setDeletingId] = useState(null)
    const [actionLoading, setActionLoading] = useState(false)
    const [notification, setNotification] = useState(null)

    // Drag and Drop state
    const [draggedIndex, setDraggedIndex] = useState(null)
    const [dragOverIndex, setDragOverIndex] = useState(null)
    const [saveStatus, setSaveStatus] = useState(null) // null | "saving" | "saved"

    const filteredProjects = projects.filter((item) => {
        if (activeFilter === "mobile") return item.category === "MOBILE DEVELOPMENT"
        if (activeFilter === "design") return item.category === "GRAPHIC DESIGN"
        return true
    })

    const totalCount = projects.length
    const mobileCount = projects.filter((d) => d.category === "MOBILE DEVELOPMENT").length
    const designCount = projects.filter((d) => d.category === "GRAPHIC DESIGN").length

    // Drag and drop handlers
    const handleDragStart = (e, index) => {
        if (activeFilter !== "all") return
        setDraggedIndex(index)
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/plain", index.toString())
    }

    const handleDragEnter = (e, index) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        if (draggedIndex !== null && draggedIndex !== index) {
            setDragOverIndex(index)
        }
    }

    const handleDragOver = (e) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        e.dataTransfer.dropEffect = "move"
    }

    const handleDrop = async (e, dropIndex) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        if (draggedIndex === null || draggedIndex === dropIndex) {
            setDraggedIndex(null)
            setDragOverIndex(null)
            return
        }

        const updated = [...projects]
        const [movedItem] = updated.splice(draggedIndex, 1)
        updated.splice(dropIndex, 0, movedItem)

        setProjects(updated)
        setDraggedIndex(null)
        setDragOverIndex(null)

        await persistOrder(updated)
    }

    const handleDragEnd = () => {
        setDraggedIndex(null)
        setDragOverIndex(null)
    }

    const persistOrder = async (newList) => {
        setSaveStatus("saving")
        try {
            const orderedIds = newList.map((p) => p.id)
            const res = await fetch("/api/reorder-work", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderedIds }),
            })
            const data = await res.json()
            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to save card order.")
            }
            setSaveStatus("saved")
            setTimeout(() => {
                setSaveStatus(null)
            }, 3000)
        } catch (err) {
            console.error("Order save error:", err)
            setSaveStatus(null)
            setNotification({ type: "error", message: err.message })
        }
    }

    const handleDelete = async (id) => {
        setActionLoading(true)
        setNotification(null)

        try {
            const res = await fetch("/api/delete-work", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            })

            const data = await res.json()

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to delete project.")
            }

            setProjects((prev) => prev.filter((p) => String(p.id) !== String(id)))
            setNotification({ type: "success", message: `Project #${id} successfully deleted!` })
            setDeletingId(null)
        } catch (err) {
            setNotification({ type: "error", message: err.message })
        } finally {
            setActionLoading(false)
        }
    }

    return (
        <>
            <Layout maincls="main-workspage">
                <section className="projects-area" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
                    <div className="container">

                        {/* Admin Header */}
                        <div className="admin-header-row" data-aos="fade-up">
                            <div>
                                <span className="admin-badge-tag">
                                    <i className="iconoir-shield-alert" /> Admin Control Panel · Works Manager
                                </span>
                                <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#fff", margin: "4px 0" }}>
                                    Manage Portfolio Works
                                </h1>
                                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", margin: 0 }}>
                                    Drag cards to reorder, edit case studies, upload new showcases, or delete projects.
                                </p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                                {saveStatus === "saving" && (
                                    <span className="admin-reorder-saving" style={{ color: "#60a5fa", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.1)" }}>
                                        <i className="iconoir-restart" style={{ animation: "spin-slow 1s linear infinite" }} />
                                        Saving card order...
                                    </span>
                                )}
                                {saveStatus === "saved" && (
                                    <span className="admin-reorder-saving">
                                        <i className="iconoir-check" />
                                        Order saved to portfolio!
                                    </span>
                                )}
                                <Link
                                    href="/figma-template"
                                    className="admin-action-btn edit"
                                    style={{
                                        padding: "10px 18px",
                                        fontSize: "13.5px",
                                        borderRadius: "100px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        textDecoration: "none"
                                    }}
                                    title="View & Download Figma Card Templates"
                                >
                                    <i className="iconoir-figma" /> Figma Templates
                                </Link>
                                <Link href="/work-upload" className="admin-top-upload-btn">
                                    <i className="iconoir-plus-circle" style={{ fontSize: "18px" }} />
                                    + Upload New Work
                                </Link>
                            </div>
                        </div>

                        {/* Notifications */}
                        {notification && (
                            <div
                                style={{
                                    background: notification.type === "success" ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)",
                                    border: `1px solid ${notification.type === "success" ? "rgba(16, 185, 129, 0.35)" : "rgba(239, 68, 68, 0.35)"}`,
                                    borderRadius: "14px",
                                    padding: "14px 20px",
                                    color: notification.type === "success" ? "#34d399" : "#f87171",
                                    marginBottom: "24px",
                                    fontSize: "13.5px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>{notification.message}</span>
                                <button
                                    type="button"
                                    onClick={() => setNotification(null)}
                                    style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer" }}
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        {/* Interactive Filter Nav & Drag Reorder Tip */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "16px",
                                marginBottom: "32px",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="works-filter-nav" style={{ marginBottom: 0 }}>
                                <button
                                    type="button"
                                    className={`works-filter-btn${activeFilter === "all" ? " active" : ""}`}
                                    onClick={() => setActiveFilter("all")}
                                >
                                    All <span className="filter-count">{totalCount}</span>
                                </button>
                                <button
                                    type="button"
                                    className={`works-filter-btn${activeFilter === "mobile" ? " active" : ""}`}
                                    onClick={() => setActiveFilter("mobile")}
                                >
                                    Mobile Apps <span className="filter-count">{mobileCount}</span>
                                </button>
                                <button
                                    type="button"
                                    className={`works-filter-btn${activeFilter === "design" ? " active" : ""}`}
                                    onClick={() => setActiveFilter("design")}
                                >
                                    Graphic Design <span className="filter-count">{designCount}</span>
                                </button>
                            </div>

                            {activeFilter === "all" ? (
                                <span className="admin-reorder-hint">
                                    <i className="iconoir-drag" style={{ fontSize: "14px" }} />
                                    Drag card by its header to rearrange sequence
                                </span>
                            ) : (
                                <span
                                    className="admin-reorder-hint"
                                    style={{ opacity: 0.75, cursor: "pointer" }}
                                    onClick={() => setActiveFilter("all")}
                                    title="Click to view all and enable card reordering"
                                >
                                    <i className="iconoir-drag" style={{ fontSize: "14px" }} />
                                    Switch to &quot;All&quot; filter to reorder cards
                                </span>
                            )}
                        </div>

                        {/* Projects Grid with Drag-and-Drop Cards */}
                        <div className="row g-4 projects-grid">
                            {filteredProjects.map((item, idx) => (
                                <div
                                    className="col-lg-4 col-md-6 col-12"
                                    key={item.id}
                                    data-aos="zoom-in"
                                    data-aos-delay={idx * 50}
                                    onDragEnter={(e) => handleDragEnter(e, idx)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, idx)}
                                >
                                    <div
                                        className={`project-item glass-card h-100 d-flex flex-column justify-content-between draggable-card${
                                            draggedIndex === idx ? " is-dragging" : ""
                                        }${dragOverIndex === idx ? " is-drag-over" : ""}`}
                                        draggable={activeFilter === "all"}
                                        onDragStart={(e) => handleDragStart(e, idx)}
                                        onDragEnd={handleDragEnd}
                                    >

                                        {/* Admin Action Topbar & Drag Handle */}
                                        <div className="admin-card-topbar">
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                {activeFilter === "all" ? (
                                                    <div
                                                        className="admin-drag-handle"
                                                        title="Drag to reorder card position"
                                                    >
                                                        <i className="iconoir-drag" />
                                                        <span>Drag</span>
                                                    </div>
                                                ) : null}
                                                <span className="admin-card-id">ID: #{item.id}</span>
                                            </div>

                                            <div
                                                className="admin-card-btns"
                                                draggable={false}
                                                onDragStart={(e) => e.stopPropagation()}
                                            >
                                                {deletingId === item.id ? (
                                                    <div className="admin-confirm-bar">
                                                        <span style={{ fontSize: "11px", color: "#f87171" }}>Confirm?</span>
                                                        <button
                                                            type="button"
                                                            className="admin-confirm-btn yes"
                                                            disabled={actionLoading}
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            Yes
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="admin-confirm-btn no"
                                                            onClick={() => setDeletingId(null)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Link
                                                            href={`/work-upload?id=${item.id}`}
                                                            className="admin-action-btn edit"
                                                            title="Edit this project"
                                                        >
                                                            <i className="iconoir-edit-pencil" /> Edit
                                                        </Link>
                                                        <button
                                                            type="button"
                                                            className="admin-action-btn delete"
                                                            title="Delete this project"
                                                            onClick={() => setDeletingId(item.id)}
                                                        >
                                                            <i className="iconoir-trash" /> Delete
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Project Visual Body */}
                                        <div>
                                            <div className="project-img">
                                                {item.badge && (
                                                    <div className="project-card-badge">
                                                        <span className={`badge-dot ${item.badgeType || "live"}`} />
                                                        {item.badge}
                                                    </div>
                                                )}
                                                {item.year && (
                                                    <span className="project-card-year">{item.year}</span>
                                                )}
                                                <img src={getProjectImageUrl(item.img)} alt={item.title} />
                                            </div>

                                            {item.tags && item.tags.length > 0 && (
                                                <div className="project-card-tags">
                                                    {item.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="project-card-tag">{tag}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Title & Status */}
                                        <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                                            <div className="project-info">
                                                <p>{item.category}</p>
                                                <h1>{item.title}</h1>
                                            </div>
                                            {item.clickable ? (
                                                <Link
                                                    href={`/project/${item.id}`}
                                                    onClick={() => sessionStorage.setItem("fromWorks", "true")}
                                                    className="project-btn"
                                                    title="Preview Case Study"
                                                    draggable={false}
                                                    onDragStart={(e) => e.stopPropagation()}
                                                >
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            ) : (
                                                <span className="project-btn not-clickable" title="Concept / Static">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </span>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

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
        console.error("Error in getServerSideProps for work-admin:", error)
        return {
            props: {
                initialProjects: [],
            },
        }
    }
}

