import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useWorkUploadForm } from "@/hooks/useWorkUploadForm"
import { useBlobStatus } from "@/hooks/useBlobStatus"
import BlobStatusBanner from "@/components/admin/BlobStatusBanner"
import WorkUploadSuccessModal from "@/components/work-upload/WorkUploadSuccessModal"
import WorkUploadForm from "@/components/work-upload/WorkUploadForm"
import { getProjects } from "@/util/projectsData"

export default function WorkUpload({ initialProjects = [] }) {
    const form = useWorkUploadForm({ initialProjects })
    const blobStatus = useBlobStatus()

    return (
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
                                transition: "all 0.2s ease",
                            }}
                        >
                            <i className="iconoir-arrow-left" /> Back to Admin Manager
                        </Link>
                    </div>

                    {/* Hero Header */}
                    <div className="upload-hero" data-aos="fade-up">
                        <span className="upload-secret-tag">
                            {form.isEditMode ? (
                                <>
                                    <i className="iconoir-edit-pencil" /> Admin Edit Mode · ID #{form.editId}
                                </>
                            ) : (
                                <>
                                    <i className="iconoir-sparks" /> Secret Management URL
                                </>
                            )}
                        </span>
                        <h1>{form.isEditMode ? `Edit Project #${form.editId}` : "Upload New Work"}</h1>
                        <p>
                            {form.isEditMode
                                ? `Update case study specifications, live links, or visual assets for "${form.title || `Project #${form.editId}`}".`
                                : "Add a new production showcase, academic research project, or graphic art piece to your portfolio."}
                        </p>
                    </div>

                    {/* Vercel Blob Cloud Storage Live Status Banner */}
                    <div data-aos="fade-up">
                        <BlobStatusBanner {...blobStatus} />
                    </div>

                    {/* Success Message Banner or Form Card */}
                    {form.successData ? (
                        <WorkUploadSuccessModal
                            isEditMode={form.isEditMode}
                            successData={form.successData}
                            onOpenProject={form.handleOpenProject}
                            onReset={form.handleReset}
                        />
                    ) : (
                        <WorkUploadForm {...form} />
                    )}
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
        console.error("Error in getServerSideProps for work-upload:", error)
        return {
            props: {
                initialProjects: [],
            },
        }
    }
}
