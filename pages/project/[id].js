import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getProjects } from "@/util/projectsData"
import { getProjectImageUrl } from "@/util/imageHelper"

export default function ProjectDetails({ initialProject }) {
    let Router = useRouter()
    const [project, setProject] = useState(initialProject)
    const { id } = Router.query

    useEffect(() => {
        if (!Router.isReady) return

        const sessionWorks = sessionStorage.getItem("fromWorks")
        if (!sessionWorks) {
            Router.replace("/blocked")
            return
        }

        if (!project && id) {
            fetch("/api/projects")
                .then((res) => res.json())
                .then((data) => {
                    if (data.projects) {
                        const found = data.projects.find((p) => String(p.id) === String(id))
                        if (found) setProject(found)
                    }
                })
                .catch(console.error)
        }
    }, [id, Router.isReady])

    if (!project) return null

    const details = project.data?.[1] || {}
    const background = project.background || "project-dt-1.jpeg"
    const images = Array.isArray(project.images) ? project.images : [project.images || "project4.jpeg"]
    const description = project.data?.[0]?.description || "No description available."
    const page = project.data?.[2]?.next || 1

    return (
        <>
            <Layout footerStyle={2}>
                {project && (
                    <>
                        <section className="project-details-wrap">
                            <div className="project-details-img fullwidth-image" data-aos="zoom-in">
                                <img src={getProjectImageUrl(background)} alt="Project Details" />
                            </div>
                            <div className="container">
                                {images.length > 0 && (
                                    <div className="row mb-24 g-4">
                                        {images.map((img, idx) => (
                                            <div className="col-md-6" data-aos="zoom-in" key={idx}>
                                                <div className="project-details-3-img">
                                                    <img src={getProjectImageUrl(img)} alt={`Project image ${idx + 1}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div data-aos="zoom-in">
                                    <div className="project-about-2 d-flex shadow-box mb-24">
                                        <div className="left-details">
                                            <img src="/assets/images/icon3.png" alt="Icon" />
                                            <ul>
                                                <li>
                                                    <p>Year</p>
                                                    <h4>{details.year}</h4>
                                                </li>
                                                <li>
                                                    <p>Services</p>
                                                    <h4>{details.services}</h4>
                                                </li>
                                                <li>
                                                    <p>Stack</p>
                                                    <h4>{details.stack}</h4>
                                                </li>
                                                {details.playstore && (
                                                    <li>
                                                        <p>Playstore</p>
                                                        <h4>
                                                            <a href={details.playstore} target="_blank" rel="noopener noreferrer">View App</a>
                                                        </h4>
                                                    </li>
                                                )}
                                                {details.github && (
                                                    <li>
                                                        <p>Github</p>
                                                        <h4>
                                                            <a href={details.github} target="_blank" rel="noopener noreferrer">View Repository</a>
                                                        </h4>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="right-details">
                                            <h3>Description</h3>
                                            {description.split("\n\n").map((para, index) => (
                                                <p key={index}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-img" data-aos="zoom-in">
                                <img src={getProjectImageUrl(background)} alt="Project Details" />
                            </div>
                            {id != 3 && (
                                <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                    <Link href={`/project/${page}`} className="big-btn shadow-box">
                                        Next Project
                                    </Link>
                                </div>
                            )}
                        </section>
                    </>
                )}
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const { id } = context.params
        const projects = await getProjects()
        const project = projects.find((p) => String(p.id) === String(id)) || null

        return {
            props: {
                initialProject: project ? JSON.parse(JSON.stringify(project)) : null,
            },
        }
    } catch (error) {
        console.error("Error in getServerSideProps for project/[id]:", error)
        return {
            props: {
                initialProject: null,
            },
        }
    }
}
