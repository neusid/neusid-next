import Layout from "@/components/layout/Layout"
import Link from "next/link"

const techStack = [
    { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/54C5F8", color: "#54C5F8" },
    { name: "Dart", logo: "https://cdn.simpleicons.org/dart/0175C2", color: "#0175C2" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
    { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84", color: "#3DDC84" },
    { name: "iOS", logo: "https://cdn.simpleicons.org/apple/ffffff", color: "#A2AAAD" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
]

const workExperience = [
    { date: "June 2026 \u2013 Present", role: "Mobile Developer & QA", company: "PT Lincah Cipta Harapan (Internship)", location: "Bandung", active: true },
    { date: "May 2026 \u2013 July 2026", role: "Mobile Developer & UI/UX", company: "Mobile Developer Freelance", location: "Mingda Attendance", active: false },
    { date: "July 2024 \u2013 December 2024", role: "Mobile Developer & UI/UX (Intern)", company: "PT Digital Logistics Internasional", location: "Jakarta", active: false },
    { date: "December 2024 \u2013 August 2025", role: "IoT & Mobile Developer", company: "Undergraduate Thesis Project", location: "IoT-Based Companion Plant", active: false },
]

const education = [
    { date: "2021 \u2013 2025", degree: "Bachelor of Applied Science in Software Engineering", gpa: "GPA 3.7", school: "Politeknik Negeri Indramayu" },
    { date: "2019 \u2013 2021", degree: "Vocational High School in Software Engineering", gpa: null, school: "SMK Negeri 1 Cirebon" },
]

export default function About() {
    return (
        <>
            <Layout maincls="main-aboutpage">
                <section className="about-area about-area-v2">
                    <div className="container">

                        {/* Hero Row */}
                        <div className="about-hero-row">
                            <div className="about-photo-card glass-card" data-aos="zoom-in" data-aos-delay="100">
                                <div className="about-photo-glow" />
                                <div className="about-photo-inner">
                                    <img src="/assets/images/me.jpeg" alt="Malik Ibrahim" />
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
                                <h1 className="about-bio-name">Malik Ibrahim</h1>
                                <p className="about-bio-desc">
                                    Mobile Developer with experience building Android and iOS applications
                                    using <strong>Flutter</strong>, <strong>Dart</strong>, and <strong>React Native</strong>.
                                    Proficient in MVVM, Clean Architecture, BLoC, GetX, REST APIs, and QA testing &amp; debugging.
                                </p>
                                <div className="about-bio-links">
                                    <a href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="bio-social-btn">
                                        <i className="iconoir-linkedin" />
                                        LinkedIn
                                    </a>
                                    <Link href="https://github.com/neusid" target="_blank" rel="noopener noreferrer" className="bio-social-btn">
                                        <i className="iconoir-github" />
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="about-section-divider" data-aos="fade-up">
                            <span className="divider-line" />
                            <span className="divider-label">Tech Stack</span>
                            <span className="divider-line" />
                        </div>

                        <div className="about-techstack glass-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="techstack-grid">
                                {techStack.map((tech, i) => (
                                    <div className="tech-item" key={i} style={{ "--tech-color": tech.color }} data-aos="zoom-in" data-aos-delay={i * 60}>
                                        <div className="tech-icon-wrap">
                                            <img src={tech.logo} alt={tech.name} className="tech-logo-img" />
                                        </div>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience & Education */}
                        <div className="about-two-col">
                            <div className="about-timeline-card glass-card" data-aos="zoom-in" data-aos-delay="100">
                                <div className="timeline-header">
                                    <i className="iconoir-briefcase" />
                                    <h3>Work Experience</h3>
                                </div>
                                <ul className="timeline-list">
                                    {workExperience.map((item, i) => (
                                        <li key={i} className={`timeline-item${item.active ? " active" : ""}`}>
                                            <div className="timeline-dot" />
                                            <div className="timeline-content">
                                                <p className="timeline-date">{item.date}</p>
                                                <h4 className="timeline-role">{item.role}</h4>
                                                <p className="timeline-company">{item.company} &middot; {item.location}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

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

                        {/* Bottom CTA Row */}
                        <div className="about-cta-row">
                            <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="150">
                                <div className="cta-inner-icons">
                                    <a href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
                                        <i className="iconoir-linkedin" />
                                    </a>
                                    <Link href="https://github.com/neusid" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
                                        <i className="iconoir-github" />
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
                                <img src="/assets/images/sign.png" alt="Signature" className="cta-sign-img" />
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
