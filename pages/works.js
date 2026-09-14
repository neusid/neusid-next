import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { getProjects } from "@/util/projectsData"
import { getProjectImageUrl } from "@/util/imageHelper"

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
        <>
            <Layout maincls="main-workspage">
                <section className="projects-area">
                    <div className="container">

                        {/* Hero Header */}
                        <div className="works-hero-header" data-aos="fade-up">
                            <h1 className="section-heading mb-0">
                                <img src="/assets/images/star-2.png" alt="Star" /> All Projects <img src="/assets/images/star-2.png" alt="Star" />
                            </h1>
                            <p className="works-hero-sub">
                                A curated showcase of production-ready mobile applications, IoT systems, and graphic design crafted with passion and precision.
                            </p>
                        </div>

                        {/* Interactive Filter Nav */}
                        <div className="works-filter-nav" data-aos="fade-up" data-aos-delay="100">
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

                        {/* Projects Grid */}
                        <div className="row g-4 projects-grid">
                            {filteredProjects.map((item, idx) => (
                                <div className="col-lg-4 col-md-6 col-12" key={item.id} data-aos="zoom-in" data-aos-delay={idx * 60}>
                                    <div className="project-item glass-card h-100 d-flex flex-column justify-content-between">
                                        {item.clickable ? (
                                            <Link className="overlay-link" href={`/project/${item.id}`} onClick={handleClick} />
                                        ) : (
                                            <div className="overlay-link not-clickable" />
                                        )}

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

                                        <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                                            <div className="project-info">
                                                <p>{item.category}</p>
                                                <h1>{item.title}</h1>
                                            </div>
                                            {item.clickable ? (
                                                <Link href={`/project/${item.id}`} onClick={handleClick} className="project-btn" aria-label="View Project">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            ) : (
                                                <span className="project-btn not-clickable" aria-label="Concept">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
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
        console.error("Error in getServerSideProps for works:", error)
        return {
            props: {
                initialProjects: [],
            },
        }
    }
}