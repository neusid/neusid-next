export default function CredSkillsGrid({ skills }) {
    return (
        <div className="cred-section glass-card" data-aos="fade-up">
            <div className="cred-section-header">
                <i className="iconoir-flash" />
                <h2>Skills</h2>
            </div>
            <div className="cred-skills-grid">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="cred-skill-item"
                        data-aos="zoom-in"
                        data-aos-delay={i * 50}
                    >
                        <h4 className="cred-skill-name">{skill.name}</h4>
                        <p className="cred-skill-detail">{skill.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
