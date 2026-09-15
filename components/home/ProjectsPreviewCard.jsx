import Link from "next/link"

export default function ProjectsPreviewCard() {
    return (
        <div data-aos="zoom-in">
            <div className="about-project-box info-box glass-card h-full">
                <Link className="overlay-link" href="/works" />
                <div className="project-preview-wrap">
                    <img src="/assets/images/project_showcase_3d.jpg" alt="Projects Showcase" />
                    <div className="project-badge-pill">
                        <span className="project-pill-dot" />
                        Flutter · Showcase
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>SHOWCASE</h4>
                        <h1>Projects</h1>
                    </div>
                    <Link href="/works" className="about-btn" aria-label="Works">
                        <img src="/assets/images/icon.svg" alt="Button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
