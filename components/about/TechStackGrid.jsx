export default function TechStackGrid({ techStack }) {
    return (
        <>
            <div className="about-section-divider" data-aos="fade-up">
                <span className="divider-line" />
                <span className="divider-label">Tech Stack</span>
                <span className="divider-line" />
            </div>

            <div className="about-techstack glass-card" data-aos="fade-up" data-aos-delay="100">
                <div className="techstack-grid">
                    {techStack.map((tech, i) => (
                        <div
                            className="tech-item"
                            key={i}
                            style={{ "--tech-color": tech.color }}
                            data-aos="zoom-in"
                            data-aos-delay={i * 60}
                        >
                            <div className="tech-icon-wrap">
                                <img src={tech.logo} alt={tech.name} className="tech-logo-img" />
                            </div>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
