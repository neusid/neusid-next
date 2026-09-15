import React from "react"
import Link from "next/link"
import { getProjectImageUrl } from "@/util/imageHelper"

export default function WorkAdminProjectCard({
    item,
    idx,
    activeFilter,
    draggedIndex,
    dragOverIndex,
    deletingId,
    setDeletingId,
    actionLoading,
    handleDelete,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDrop,
    handleDragEnd,
}) {
    return (
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
                        {activeFilter === "all" && (
                            <div
                                className="admin-drag-handle"
                                title="Drag to reorder card position"
                            >
                                <i className="iconoir-drag" />
                                <span>Drag</span>
                            </div>
                        )}
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
                        <img
                            src={getProjectImageUrl(item.img)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Project Meta Information Footer */}
                <div className="d-flex align-items-end justify-content-between mt-auto pt-3">
                    <div className="project-info">
                        <span className="project-category">{item.category}</span>
                        <h2 className="project-title">{item.title}</h2>
                        {item.tags && Array.isArray(item.tags) && item.tags.length > 0 && (
                            <div className="project-tags">
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="project-tag-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="project-action">
                        {item.clickable ? (
                            <Link
                                href={`/project/${item.id}`}
                                className="project-btn"
                                aria-label={`View ${item.title}`}
                            >
                                <img src="/assets/images/icon.svg" alt="Arrow" />
                            </Link>
                        ) : (
                            <span
                                className="project-btn-disabled"
                                title="Showcase card only"
                            >
                                <i className="iconoir-eye-alt" style={{ fontSize: "16px", color: "rgba(255,255,255,0.25)" }} />
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
