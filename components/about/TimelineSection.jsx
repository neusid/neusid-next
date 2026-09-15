export default function TimelineSection({ workExperience, education }) {
    return (
        <div className="about-two-col">
            {/* Work Experience */}
            <div className="about-timeline-card glass-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="timeline-header">
                    <i className="iconoir-large-suitcase" />
                    <h3>Work Experience</h3>
                </div>
                <ul className="timeline-list">
                    {workExperience.map((item, i) => (
                        <li key={i} className={`timeline-item${item.active ? " active" : ""}`}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <p className="timeline-date">{item.date}</p>
                                <h4 className="timeline-role">{item.role}</h4>
                                <p className="timeline-company">
                                    {item.company} &middot; {item.location}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Education */}
            <div className="about-timeline-card glass-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="timeline-header">
                    <i className="iconoir-graduation-cap" />
                    <h3>Education</h3>
                </div>
                <ul className="timeline-list">
                    {education.map((item, i) => (
                        <li key={i} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <p className="timeline-date">{item.date}</p>
                                <h4 className="timeline-role">
                                    {item.degree}
                                    {item.gpa && <span className="gpa-badge">{item.gpa}</span>}
                                </h4>
                                <p className="timeline-company">{item.school}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
