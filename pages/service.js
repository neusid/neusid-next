import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-homepage">
                <section className="service-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> My Offerings <img src="/assets/images/star-2.png" alt="Star" /></h1>
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-md-4">
                                <div className="service-sidebar" data-aos="fade-right">
                                    <div className="service-sidebar-inner shadow-box">
                                        <ul>
                                            <li>
                                                <i className="iconoir-adobe-photoshop icon" />
                                                Graphic Design
                                            </li>
                                            <li>
                                                <i className="iconoir-figma icon" />
                                                UI/UX Designing
                                            </li>
                                            <li>
                                                <i className="iconoir-dev-mode-laptop icon" />
                                                Web Development
                                            </li>
                                            <li>
                                                <i className="iconoir-dev-mode-phone icon" />
                                                Mobile Development
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> My Offerings <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="service-content-wrap" data-aos="zoom-in">
                                    <div className="service-content-inner shadow-box">
                                        <div className="service-items">
                                            <div className="service-item">
                                                <h3>Graphic Design</h3>
                                                <p>Offering professional graphic design services with expertise in Adobe Photoshop and vector-based illustration. I create visually engaging artworks, ranging from realistic edits to stylized vector illustrations inspired by Vince Ruz’s clean and expressive aesthetic.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>UI/UX Design</h3>
                                                <p>Providing UI/UX design services for both web and mobile platforms, focusing on creating intuitive, user-centered interfaces with consistent visual identity and seamless user experience.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Web Development</h3>
                                                <p>Building dynamic and responsive websites using Laravel, focusing on clean architecture, performance, and maintainable code.</p>
                                            </div>
                                            <div className="service-item">
                                                <h3>Mobile Development</h3>
                                                <p>Providing mobile development services using Flutter framework, focusing on building responsive, high-performance applications with clean architecture and efficient state management powered by GetX.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="d-flex profile-contact-credentials-wrap gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-profile-box info-box shadow-box h-full">
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <div className="inner-profile-icons shadow-box">
                                                <Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer">
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer">
                                                    <i className="iconoir-facebook" />
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
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-contact-box info-box shadow-box">
                                            <Link className="overlay-link" href="/contact" />
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                            <h1>Let's <br />work <span>together.</span></h1>
                                            <Link href="/contact" className="about-btn">
                                                <img src="/assets/images/icon.svg" alt="Button" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="h-full">
                                        <div className="about-crenditials-box info-box shadow-box">
                                            <Link className="overlay-link" href="/credentials" />
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <img src="/assets/images/sign.png" alt="Sign" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}