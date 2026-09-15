import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { getProjects } from "@/util/projectsData"
import WorkCard from "@/components/works/WorkCard"
import WorksFilterNav from "@/components/works/WorksFilterNav"

export default function Works({ initialProjects = [] }) {
    const [activeFilter, setActiveFilter] = useState("all")

    const handleClick = () => {
        sessionStorage.setItem("fromWorks", "true")
    }

    const filteredProjects = initialProjects.filter((item) => {
        if (activeFilter === "mobile") return item.category === "MOBILE DEVELOPMENT"
        if (activeFilter === "design") return item.category === "GRAPHIC DESIGN"
        return true
    })

    const totalCount = initialProjects.length
    const mobileCount = initialProjects.filter((d) => d.category === "MOBILE DEVELOPMENT").length
    const designCount = initialProjects.filter((d) => d.category === "GRAPHIC DESIGN").length

    return (
        <Layout maincls="main-workspage">
            <section className="projects-area">
                <div className="container">
                    {/* Hero Header */}
                    <div className="works-hero-header" data-aos="fade-up">
                        <h1 className="section-heading mb-0">
                            <img src="/assets/images/star-2.png" alt="Star" /> All Projects{" "}
                            <img src="/assets/images/star-2.png" alt="Star" />
                        </h1>
                        <p className="works-hero-sub">
                            A curated showcase of production-ready mobile applications, IoT systems, and graphic design crafted with passion and precision.
                        </p>
                    </div>

                    {/* Interactive Filter Nav */}
                    <WorksFilterNav
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        totalCount={totalCount}
                        mobileCount={mobileCount}
                        designCount={designCount}
                    />

                    {/* Projects Grid */}
                    <div className="row g-4 projects-grid">
                        {filteredProjects.map((item, idx) => (
                            <WorkCard
                                key={item.id}
                                item={item}
                                idx={idx}
                                onCardClick={handleClick}
                            />
                        ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="project-cta-divider" />
                    <div className="about-cta-row">
                        <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="150">
                            <div className="cta-inner-icons">
                                <Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="cta-icon-btn" aria-label="LinkedIn">
                                    <i className="iconoir-linkedin" />
                                </Link>
                                <Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer" className="cta-icon-btn" aria-label="Facebook">
                                    <i className="iconoir-facebook-tag" />
                                </Link>
                            </div>
                            <div className="cta-card-footer">
                                <div>
                                    <p className="cta-card-sub">Stay with me</p>
                                    <h2 className="cta-card-title">Profiles</h2>
                                </div>
                                <Link href="/contact" className="cta-arrow-btn">
                                    <img src="/assets/images/icon.svg" alt="Arrow" />
                                </Link>
                            </div>
                        </div>

                        <div className="about-cta-card about-cta-main glass-card" data-aos="zoom-in" data-aos-delay="250">
                            <Link className="overlay-link" href="/contact" />
                            <div className="cta-main-glow" />
                            <img src="/assets/images/icon2.png" alt="Star" className="cta-star-icon" />
                            <h2 className="cta-main-heading">
                                Let&apos;s <br />work <span>together.</span>
                            </h2>
                            <Link href="/contact" className="cta-arrow-btn">
                                <img src="/assets/images/icon.svg" alt="Arrow" />
                            </Link>
                        </div>

                        <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="350">
                            <Link className="overlay-link" href="/credentials" />
                            <div className="cta-inner-cred">
                                <div className="cta-cred-icon">
                                    <i className="iconoir-graduation-cap" />
                                </div>
                                <div className="cta-cred-info">
                                    <span className="cta-cred-degree">B.A.Sc (S.Tr.Kom)</span>
                                    <span className="cta-cred-major">Informatics Engineering</span>
                                    <span className="cta-cred-school">GPA 3.7 · Polindra</span>
                                </div>
                            </div>
                            <div className="cta-card-footer">
                                <div>
                                    <p className="cta-card-sub">more about me</p>
                                    <h2 className="cta-card-title">Credentials</h2>
                                </div>
                                <Link href="/credentials" className="cta-arrow-btn">
                                    <img src="/assets/images/icon.svg" alt="Arrow" />
                                </Link>
                            </div>
                        </div>
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
        console.error("Error in getServerSideProps for works:", error)
        return {
            props: {
                initialProjects: [],
            },
        }
    }
}