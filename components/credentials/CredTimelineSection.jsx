export default function CredTimelineSection({ experiences, education }) {
    return (
        <>
            {/* Experience */}
            <div className="cred-section glass-card" data-aos="fade-up">
                <div className="cred-section-header">
                    <i className="iconoir-large-suitcase" />
                    <h2>Experience</h2>
                </div>
                <ul className="cred-timeline">
                    {experiences.map((exp, i) => (
                        <li
                            key={i}
                            className={`cred-timeline-item${exp.active ? " active" : ""}`}
                            data-aos="zoom-in"
                            data-aos-delay={i * 60}
                        >
                            <div className="cred-tl-dot" />
                            <div className="cred-tl-body">
                                <span className="cred-tl-date">{exp.date}</span>
                                <h3 className="cred-tl-role">{exp.role}</h3>
                                <p className="cred-tl-company">{exp.company}</p>
                                <p className="cred-tl-desc">{exp.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Education */}
            <div className="cred-section glass-card" data-aos="fade-up">
                <div className="cred-section-header">
                    <i className="iconoir-graduation-cap" />
                    <h2>Education</h2>
                </div>
                <ul className="cred-timeline">
                    {education.map((edu, i) => (
                        <li
                            key={i}
                            className="cred-timeline-item"
                            data-aos="zoom-in"
                            data-aos-delay={i * 80}
                        >
                            <div className="cred-tl-dot" />
                            <div className="cred-tl-body">
                                <span className="cred-tl-date">{edu.date}</span>
                                <h3 className="cred-tl-role">
                                    {edu.degree}
                                    {edu.gpa && <span className="gpa-badge">{edu.gpa}</span>}
                                </h3>
                                <p className="cred-tl-company">{edu.school}</p>
                                <p className="cred-tl-desc">{edu.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
