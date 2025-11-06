import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout maincls="main-aboutpage">

                <section className="about-area">
                    <div className="container">
                        <div className="d-flex about-me-wrap align-items-start gap-24">
                            <div data-aos="zoom-in">
                                <div className="about-image-box shadow-box">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="image-inner">
                                        <img src="/assets/images/me2.png" alt="About Me" />
                                    </div>
                                </div>
                            </div>
                            <div className="about-details" data-aos="zoom-in">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> Self-summary <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="about-details-inner shadow-box">
                                    <img src="/assets/images/icon2.png" alt="Star" />
                                    <h1>Malik Ibrahim</h1>
                                    <p>Creative and adaptable Software Engineer skilled in Flutter (GetX), Laravel, API integration, and UI/UX design. Experienced in leading projects, collaborating across teams, and delivering impactful, user-friendly web and mobile applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-experience shadow-box">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <h3>EXPERIENCE</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2024 - 2025</p>
                                            <h2>Full Stack Flutter Developer & UI/UX</h2>
                                            <p className="type">IoT-Based Companion Plant Recommendation Application for Mixed Chili Cultivation</p>
                                        </li>
                                        <li>
                                            <p className="date">2024</p>
                                            <h2>Mobile Developer & UI/UX (Intern)</h2>
                                            <p className="type">Mobile Application for Document Management, e-Signature, and Tera</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-edc-exp about-education shadow-box">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <h3>EDUCATION</h3>
                                    <ul>
                                        <li>
                                            <p className="date">2019 - 2021</p>
                                            <h2>Vocational High School of Software Engineering</h2>
                                            <p className="type">SMKN 1 Cirebon</p>
                                        </li>
                                        <li>
                                            <p className="date">2021 - 2025</p>
                                            <h2>Bachelor of Software Engineering - GPA 3.7</h2>
                                            <p className="type">Politeknik Negeri Indramayu</p>
                                        </li>
                                    </ul>
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
                                                <Link href="www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer">
                                                    <i className="iconoir-linkedin" />
                                                </Link>
                                                <Link href="https://web.facebook.com/profile.php?id=100009292241278" rel="noopener noreferrer">
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