import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout maincls="main-homepage">
                <section className="about-area">
                    <div className="container">
                        <div className="row d-flex align-items-stretch">

                            {/* ── Left: Hero card ── */}
                            <div className="col-md-6 d-flex" data-aos="zoom-in">
                                <div className="about-me-box glass-card home-me-box w-100">
                                    <Link className="overlay-link" href="/about" />
                                    <div className="img-box">
                                        <img src="/assets/images/me.jpeg" alt="About Me" />
                                    </div>
                                    <div className="infos">
                                        <span className="home-avail-badge">
                                            <span className="badge-dot" />
                                            Available for work
                                        </span>
                                        <h4>Mobile Developer (Flutter &amp; React Native)</h4>
                                        <h1>Malik Ibrahim.</h1>
                                        <p>Based in Cirebon.</p>
                                        <Link href="/about" className="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* ── Right: Marquee + Cards ── */}
                            <div className="col-md-6 d-flex" data-aos="zoom-in">
                                <div className="about-credentials-wrap d-flex flex-column justify-content-between w-100">

                                    {/* Marquee */}
                                    <div>
                                        <div className="banner glass-card">
                                            <div className="marquee">
                                                <div>
                                                    <span>LATEST WORK AND <b>FEATURED</b> <span className="marquee-dot">✦</span> LATEST WORK AND <b>FEATURED</b> <span className="marquee-dot">✦</span> LATEST WORK AND <b>FEATURED</b> <span className="marquee-dot">✦</span> LATEST WORK AND <b>FEATURED</b> <span className="marquee-dot">✦</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Credentials + Projects */}
                                    <div className="gx-row d-flex gap-24 flex-1">
                                        <div data-aos="zoom-in">
                                            <div className="about-crenditials-box info-box glass-card h-full">
                                                <Link className="overlay-link" href="/credentials" />
                                                <div className="cred-badge-preview">
                                                    <div className="cred-badge-icon">
                                                        <i className="iconoir-graduation-cap" />
                                                    </div>
                                                    <div className="cred-badge-meta">
                                                        <span className="cred-badge-degree">B.App.Sc Software Eng.</span>
                                                        <span className="cred-badge-tag">GPA 3.7 · Indramayu</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>more about me</h4>
                                                        <h1>Credentials</h1>
                                                    </div>
                                                    <Link href="/credentials" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="zoom-in">
                                            <div className="about-project-box info-box glass-card h-full">
                                                <Link className="overlay-link" href="/works" />
                                                <div className="project-preview-wrap">
                                                    <img src="/assets/images/project2ver3.jpeg" alt="MiERP Flutter App" />
                                                    <div className="project-badge-pill">
                                                        <span className="project-pill-dot" />
                                                        Flutter · Play Store
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>SHOWCASE</h4>
                                                        <h1>Projects</h1>
                                                    </div>
                                                    <Link href="/works" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Row 2: Services / Profiles (2:1 Ratio) ── */}
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="home-row2-wrap d-flex gap-24 align-items-stretch">

                                    {/* Services Offering (~65%) */}
                                    <div data-aos="zoom-in" className="home-services-col d-flex">
                                        <div className="about-services-box info-box glass-card w-100">
                                            <Link href="/service" className="overlay-link" />
                                            <div className="svc-icon-flow">
                                                <div className="svc-item svc-photoshop" title="Graphic Design">
                                                    <i className="iconoir-adobe-photoshop" />
                                                </div>
                                                <div className="svc-item svc-figma" title="UI/UX Design">
                                                    <i className="iconoir-figma" />
                                                </div>
                                                <div className="svc-item svc-web" title="Web Development">
                                                    <i className="iconoir-dev-mode-laptop" />
                                                </div>
                                                <div className="svc-item svc-mobile" title="Mobile Development">
                                                    <i className="iconoir-dev-mode-phone" />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>specialization</h4>
                                                    <h1>Services Offering</h1>
                                                </div>
                                                <Link href="/service" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profiles (~35%) */}
                                    <div data-aos="zoom-in" className="home-profiles-col d-flex">
                                        <div className="about-profile-box info-box glass-card w-100">
                                            <div className="inner-profile-icons glass-card">
                                                <Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer" className="prof-icon prof-linkedin" title="LinkedIn">
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="https://github.com/neusid" target="_blank" rel="noopener noreferrer" className="prof-icon prof-github" title="GitHub">
                                                    <i className="iconoir-github" />
                                                </Link>
                                                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="prof-icon prof-instagram" title="Instagram">
                                                    <i className="iconoir-instagram" />
                                                </Link>
                                                <Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer" className="prof-icon prof-facebook" title="Facebook">
                                                    <i className="iconoir-facebook-tag" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>Stay with me</h4>
                                                    <h1>Profiles</h1>
                                                </div>
                                                <Link href="/contact" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Row 3: Stats + CTA ── */}
                        <div className="row mt-24 d-flex align-items-stretch">

                            {/* Stats */}
                            <div className="col-md-6 d-flex" data-aos="zoom-in">
                                <div className="about-client-box info-box glass-card w-100">
                                    <div className="clients d-flex align-items-center gap-24 justify-content-center h-100">
                                        <div className="client-item">
                                            <h1>03</h1>
                                            <p>Years <br />Experience</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>+6</h1>
                                            <p>CLIENTS <br />WORLDWIDE</p>
                                        </div>
                                        <div className="client-item">
                                            <h1>+5</h1>
                                            <p>Total <br />Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="col-md-6 d-flex" data-aos="zoom-in">
                                <div className="about-contact-box info-box glass-card home-cta-box w-100">
                                    <Link className="overlay-link" href="/contact" />
                                    <div className="cta-main-glow" />
                                    <img src="/assets/images/icon2.png" alt="Icon" className="cta-star-icon" />
                                    <h1>Let&apos;s <br />work <span>together.</span></h1>
                                    <Link href="/contact" className="about-btn">
                                        <img src="/assets/images/icon.svg" alt="Button" />
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
