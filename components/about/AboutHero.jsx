import Link from "next/link"

export default function AboutHero({ profile }) {
    return (
        <div className="about-hero-row">
            <div className="about-photo-card glass-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="about-photo-glow" />
                <div className="about-photo-inner">
                    <img src="/assets/images/me.jpeg" alt={profile.name} />
                </div>
                <div className="about-photo-badge">
                    <span className="badge-dot" />
                    Available for work
                </div>
            </div>

            <div className="about-bio-card glass-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="about-bio-tag">
                    <img src="/assets/images/star-2.png" alt="star" />
                    Self-summary
                </div>
                <h1 className="about-bio-name">{profile.name}</h1>
                <p className="about-bio-desc">
                    Mobile Developer with experience building Android and iOS applications
                    using <strong>Flutter</strong>, <strong>Dart</strong>, and <strong>React Native</strong>.
                    Proficient in MVVM, Clean Architecture, BLoC, GetX, REST APIs, and QA testing &amp; debugging.
                </p>
                <div className="about-bio-links">
                    <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bio-social-btn"
                    >
                        <i className="iconoir-linkedin" />
                        LinkedIn
                    </a>
                    <Link
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bio-social-btn"
                    >
                        <i className="iconoir-github" />
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    )
}
