import Layout from "@/components/layout/Layout"
import Link from "next/link"

const experiences = [
    {
        date: "June 2026 \u2013 Present",
        role: "Mobile Developer & QA",
        company: "PT Lincah Cipta Harapan (Internship) \u00b7 Bandung",
        active: true,
        desc: "Developed and maintained Flutter and React Native mobile applications. Collaborated closely with cross-functional developers across the development lifecycle to ensure stability and functionality. Performed systematic feature validation, bug identification, and regression testing to maintain release quality, while actively contributing to code reviews and issue tracking.",
    },
    {
        date: "May 2026 \u2013 July 2026",
        role: "Mobile Developer & UI/UX",
        company: "Mobile Developer Freelance \u00b7 Mingda Attendance",
        active: false,
        desc: "Designed mobile UI/UX layouts aligned with existing web platforms in direct collaboration with web developers. Built the mobile application from scratch to production release, implementing client-approved designs for daily operations.",
    },
    {
        date: "July 2024 \u2013 December 2024",
        role: "Mobile Developer & UI/UX (Intern)",
        company: "PT Digital Logistics Internasional \u00b7 Jakarta",
        active: false,
        desc: "Engineered a Flutter mobile application for digital signature (e-signature) and electronic stamping (e-stamping). Designed and prototyped the complete UI/UX in Figma with intuitive user flows, and authored technical documentation and user manuals for system adoption.",
    },
    {
        date: "December 2024 \u2013 August 2025",
        role: "IoT & Mobile Developer (Undergraduate Thesis)",
        company: "IoT-Based Companion Plant Recommendation for Chili Polyculture",
        active: false,
        desc: "Built custom IoT devices to gather real-time environmental data, developed backend servers and database architecture, trained a Random Forest Classifier ML model (87% accuracy), integrated the model into a Flutter app, and designed the UI/UX in Figma.",
    },
    {
        date: "June 2023 \u2013 2024",
        role: "Full Stack Mobile Developer & UI/UX",
        company: "Food Nutrition Detection Mobile App (Academic)",
        active: false,
        desc: "Led development of an image-based food nutrition detection mobile and web application. Crafted complete Figma UI/UX prototypes, trained YOLOv8 object detection models, and integrated models into the app for real-time inference.",
    },
]

const education = [
    {
        date: "2021 \u2013 2025",
        degree: "Bachelor of Applied Science (S.Tr.Kom) in Informatics Engineering",
        gpa: "GPA 3.7",
        school: "Politeknik Negeri Indramayu",
        desc: "Informatics Engineering (D4 Teknik Informatika) graduate with specialization in Flutter mobile development, web development, and UI/UX design. Actively engaged in IoT and machine learning research initiatives.",
    },
    {
        date: "2019 \u2013 2021",
        degree: "Vocational High School in Software Engineering",
        gpa: null,
        school: "SMKN 1 Cirebon",
        desc: "Focused on software programming fundamentals, Laravel-based web development, and graphic design.",
    },
]

const skills = [
    { name: "Flutter", detail: "BLoC, GetX, Clean Architecture" },
    { name: "React Native", detail: "Cross-platform, Zustand" },
    { name: "Dart & JavaScript", detail: "Core Mobile & Web Languages" },
    { name: "TypeScript & React", detail: "Modern Frontend Development" },
    { name: "Backend & API", detail: "REST API, Laravel, Firebase" },
    { name: "Figma & UI/UX", detail: "Prototyping, User-Centered Design" },
    { name: "Database", detail: "PostgreSQL, MySQL, Firestore" },
    { name: "QA & Testing", detail: "Debugging, Regression, Git Agile" },
]

const certificates = [
    { date: "Feb 2026", name: "English Course Beginner Program", issuer: "Kampung Inggris EM" },
    { date: "May 2024", name: "Classify Images with TensorFlow Convolutional Neural Networks", issuer: "Coursera" },
    { date: "Nov 2022", name: "Pemrograman Mobile Pertama", issuer: "Lembaga Sertifikasi Profesi Teknologi Digital" },
    { date: "Oct 2022", name: "Junior Web Developer", issuer: "PT. Inixindo Persada Rekayasa Komputer" },
]

export default function Credentials() {
    return (
        <>
            <Layout maincls="main-aboutpage">
                <section className="cred-area-v2">
                    <div className="container">
                        <div className="cred-layout">

                            {/* ── Sidebar ── */}
                            <aside className="cred-sidebar" data-aos="zoom-in">
                                <div className="cred-sidebar-card glass-card">
                                    <div className="cred-sidebar-glow" />
                                    <div className="cred-avatar-wrap">
                                        <img src="/assets/images/me.jpeg" alt="Malik Ibrahim" />
                                    </div>
                                    <h2 className="cred-sidebar-name">Malik Ibrahim</h2>
                                    <p className="cred-sidebar-handle">@neusisco</p>
                                    <div className="cred-sidebar-divider" />
                                    <ul className="cred-social-list">
                                        <li>
                                            <Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="cred-social-btn" aria-label="LinkedIn">
                                                <i className="iconoir-linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="cred-social-btn" aria-label="Twitter">
                                                <i className="iconoir-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="cred-social-btn" aria-label="Instagram">
                                                <i className="iconoir-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer" className="cred-social-btn" aria-label="Facebook">
                                                <i className="iconoir-facebook-tag" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="cred-contact-btn">
                                        <i className="iconoir-send-mail" />
                                        Contact Me
                                    </Link>
                                </div>
                            </aside>

                            {/* ── Main Content ── */}
                            <div className="cred-main">

                                {/* About Me */}
                                <div className="cred-section glass-card" data-aos="fade-up">
                                    <div className="cred-section-header">
                                        <i className="iconoir-user" />
                                        <h2>About Me</h2>
                                    </div>
                                    <p className="cred-about-text">Mobile Developer with hands-on experience developing mobile applications using Flutter, Dart, and React Native. Proficient in REST API integration, BLoC, GetX, MVVM, Clean Architecture, Firebase, as well as testing and debugging.</p>
                                    <p className="cred-about-text">Experienced in delivering applications from requirement analysis to deployment and collaborating effectively within Agile/Scrum teams. Passionate about crafting scalable, robust, and user-centric mobile solutions.</p>
                                </div>

                                {/* Experience */}
                                <div className="cred-section glass-card" data-aos="fade-up">
                                    <div className="cred-section-header">
                                        <i className="iconoir-briefcase" />
                                        <h2>Experience</h2>
                                    </div>
                                    <ul className="cred-timeline">
                                        {experiences.map((exp, i) => (
                                            <li key={i} className={`cred-timeline-item${exp.active ? " active" : ""}`} data-aos="zoom-in" data-aos-delay={i * 60}>
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
                                            <li key={i} className="cred-timeline-item" data-aos="zoom-in" data-aos-delay={i * 80}>
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

                                {/* Skills */}
                                <div className="cred-section glass-card" data-aos="fade-up">
                                    <div className="cred-section-header">
                                        <i className="iconoir-lightning" />
                                        <h2>Skills</h2>
                                    </div>
                                    <div className="cred-skills-grid">
                                        {skills.map((skill, i) => (
                                            <div key={i} className="cred-skill-item" data-aos="zoom-in" data-aos-delay={i * 50}>
                                                <h4 className="cred-skill-name">{skill.name}</h4>
                                                <p className="cred-skill-detail">{skill.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certificates */}
                                <div className="cred-section glass-card" data-aos="fade-up">
                                    <div className="cred-section-header">
                                        <i className="iconoir-medal" />
                                        <h2>Certificates</h2>
                                    </div>
                                    <div className="cred-cert-list">
                                        {certificates.map((cert, i) => (
                                            <div key={i} className="cred-cert-item" data-aos="zoom-in" data-aos-delay={i * 60}>
                                                <span className="cred-cert-date">{cert.date}</span>
                                                <div className="cred-cert-info">
                                                    <h4 className="cred-cert-name">{cert.name}</h4>
                                                    <p className="cred-cert-issuer">{cert.issuer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
