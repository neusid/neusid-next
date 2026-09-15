import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getProjects } from "@/util/projectsData"
import { useBlobStatus } from "@/hooks/useBlobStatus"
import { useWorkAdmin } from "@/hooks/useWorkAdmin"
import BlobStatusBanner from "@/components/admin/BlobStatusBanner"
import WorkAdminFilterNav from "@/components/work-admin/WorkAdminFilterNav"
import WorkAdminProjectCard from "@/components/work-admin/WorkAdminProjectCard"

export default function WorkAdmin({ initialProjects = [] }) {
    const admin = useWorkAdmin({ initialProjects })
    const blobStatus = useBlobStatus()

    return (
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
                            {admin.saveStatus === "saving" && (
                                <span className="admin-save-indicator saving">
                                    <i className="iconoir-restart" style={{ animation: "spin-slow 1s linear infinite" }} />
                                    Saving order...
                                </span>
                            )}
                            {admin.saveStatus === "saved" && (
                                <span className="admin-save-indicator saved">
                                    <i className="iconoir-check" /> Order saved!
                                </span>
                            )}
                            <Link
                                href="/figma-template"
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "13.5px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    textDecoration: "none",
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

                    {/* Vercel Blob Health Banner */}
                    <div data-aos="fade-up">
                        <BlobStatusBanner {...blobStatus} compact />
                    </div>

                    {/* Notifications */}
                    {admin.notification && (
                        <div
                            style={{
                                background:
                                    admin.notification.type === "success"
                                        ? "rgba(16, 185, 129, 0.12)"
                                        : "rgba(239, 68, 68, 0.12)",
                                border: `1px solid ${
                                    admin.notification.type === "success"
                                        ? "rgba(16, 185, 129, 0.35)"
                                        : "rgba(239, 68, 68, 0.35)"
                                }`,
                                borderRadius: "14px",
                                padding: "14px 20px",
                                color: admin.notification.type === "success" ? "#34d399" : "#f87171",
                                marginBottom: "24px",
                                fontSize: "13.5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <span>{admin.notification.message}</span>
                            <button
                                type="button"
                                onClick={() => admin.setNotification(null)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "inherit",
                                    cursor: "pointer",
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    )}

                    {/* Interactive Filter Nav */}
                    <WorkAdminFilterNav
                        activeFilter={admin.activeFilter}
                        setActiveFilter={admin.setActiveFilter}
                        totalCount={admin.totalCount}
                        mobileCount={admin.mobileCount}
                        designCount={admin.designCount}
                    />

                    {/* Projects Grid with Drag-and-Drop Cards */}
                    <div className="row g-4 projects-grid">
                        {admin.filteredProjects.map((item, idx) => (
                            <WorkAdminProjectCard
                                key={item.id}
                                item={item}
                                idx={idx}
                                activeFilter={admin.activeFilter}
                                draggedIndex={admin.draggedIndex}
                                dragOverIndex={admin.dragOverIndex}
                                deletingId={admin.deletingId}
                                setDeletingId={admin.setDeletingId}
                                actionLoading={admin.actionLoading}
                                handleDelete={admin.handleDelete}
                                handleDragStart={admin.handleDragStart}
                                handleDragEnter={admin.handleDragEnter}
                                handleDragOver={admin.handleDragOver}
                                handleDrop={admin.handleDrop}
                                handleDragEnd={admin.handleDragEnd}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
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
