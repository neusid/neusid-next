import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/project.json"

export default function ProjectDetails() {
    let Router = useRouter()
    const [project, setProject] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        
        if (!Router.isReady) return

        const sessionWorks = sessionStorage.getItem("fromWorks")
        if (!sessionWorks) {
            Router.replace("/blocked")
            return
        }

        sessionStorage.removeItem("fromWorks")

        setProject(data.find((data) => data.id == id))
    }, [id])

    if (!project) return null

    const details = project.data?.[1] || {}
    const background = project.background || "project-dt-1.jpeg"
    const images = project.images || "project4.jpeg"
    const description = project.data?.[0]?.description || "No description available."

    return (
        <>
            <Layout footerStyle={2}>
                {project && (
                    <>
                        {/* {project.title} */}
                        <section className="project-details-wrap">
                            <div className="project-details-img fullwidth-image" data-aos="zoom-in">
                                <img src={`/assets/images/${background}.jpeg`} alt="Project Details" />
                            </div>
                            <div className="container">
                                <div className="row mb-24">
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div className="project-details-3-img">
                                            <img src={`/assets/images/${images[0]}`} alt="Project" />
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div className="project-details-3-img">
                                            <img src={`/assets/images/${images[1]}`} alt="Project" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-24">
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div className="project-details-3-img">
                                            <img src={`/assets/images/${images[2]}`} alt="Project" />
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="zoom-in">
                                        <div className="project-details-3-img">
                                            <img src={`/assets/images/${images[3]}`} alt="Project" />
                                        </div>
                                    </div>
                                </div>
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
                                            </ul>
                                        </div>
                                        <div className="right-details">
                                            <h3>Description</h3>
                                            {description.split("\n\n").map((para, index)=>(<p key={index}>{para}</p>))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details-img" data-aos="zoom-in">
                                <img src={`/assets/images/${background}.jpeg`} alt="Project Details" />
                            </div>
                            <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
                                <Link href="/project/3" className="big-btn shadow-box">
                                    Next Project
                                </Link>
                            </div>
                        </section>
                    </>
                )}
            </Layout>
        </>
    )
}

