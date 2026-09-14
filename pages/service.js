import Layout from "@/components/layout/Layout"
import Link from "next/link"

const services = [
    {
        id: "graphic-design",
        icon: "iconoir-adobe-photoshop",
        title: "Graphic Design",
        color: "#31A8FF",
        desc: "Offering professional graphic design services with expertise in Adobe Photoshop and vector-based illustration. I create visually engaging artworks, ranging from realistic edits to stylized vector illustrations inspired by Vince Ruz's clean and expressive aesthetic.",
        tags: ["Adobe Photoshop", "Illustrator", "Vector Art"],
    },
    {
        id: "uiux-design",
        icon: "iconoir-figma",
        title: "UI/UX Design",
        color: "#F24E1E",
        desc: "Providing UI/UX design services for both web and mobile platforms, focusing on creating intuitive, user-centered interfaces with consistent visual identity and seamless user experience.",
        tags: ["Figma", "Prototyping", "User Research"],
    },
    {
        id: "web-development",
        icon: "iconoir-dev-mode-laptop",
        title: "Web Development",
        color: "#5B78F6",
        desc: "Building dynamic and responsive websites using Laravel, focusing on clean architecture, performance, and maintainable code.",
        tags: ["Laravel", "React", "REST API"],
    },
    {
        id: "mobile-development",
        icon: "iconoir-dev-mode-phone",
        title: "Mobile Development",
        color: "#54C5F8",
        desc: "Providing mobile development services using Flutter framework, focusing on building responsive, high-performance applications with clean architecture and state management powered by GetX and BLoC.",
        tags: ["Flutter", "React Native", "Dart"],
    },
]

export default function Service() {
    return (
        <>
            <Layout maincls="main-homepage">
                <section className="svc-area-v2">
                    <div className="container">

                        {/* Page heading */}
                        <div className="svc-heading" data-aos="fade-up">
                            <img src="/assets/images/star-2.png" alt="star" />
                            <h1>My Offerings</h1>
                            <img src="/assets/images/star-2.png" alt="star" />
                        </div>

                        {/* Services grid */}
                        <div className="svc-grid">
                            {services.map((svc, i) => (
                                <div
                                    key={svc.id}
                                    className="svc-card glass-card"
                                    style={{ "--svc-color": svc.color }}
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 80}
                                >
                                    <div className="svc-card-glow" />
                                    <div className="svc-icon-wrap">
                                        <i className={svc.icon} />
                                    </div>
                                    <h3 className="svc-card-title">{svc.title}</h3>
                                    <p className="svc-card-desc">{svc.desc}</p>
                                    <div className="svc-tags">
                                        {svc.tags.map((tag, j) => (
                                            <span key={j} className="svc-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA Row */}
                        <div className="about-cta-row" style={{ marginTop: "32px" }}>
                            <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="150">
                                <div className="cta-inner-icons">
                                    <Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
                                        <i className="iconoir-linkedin" />
                                    </Link>
                                    <Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
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
