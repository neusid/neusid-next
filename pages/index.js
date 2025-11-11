import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-homepage">
                <section className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-me-box shadow-box">
                                    <Link className="overlay-link" href="/about" />
                                    {/*<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />*/}
                                    <div className="img-box">
                                        <img src="/assets/images/me.png" alt="About Me" />
                                    </div>
                                    <div className="infos">
                                        <h4>A Full Stack Developer & UI/UX Designer</h4>
                                        <h1>Malik Ibrahim.</h1>
                                        <p>Based in Cirebon.</p>
                                        <Link href="#" className="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-credentials-wrap">
                                    <div data-aos="zoom-in">
                                        <div className="banner shadow-box">
                                            <div className="marquee">
                                                <div>
                                                    <span>LATEST WORK AND <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> LATEST WORK AND <img src="/assets/images/star1.svg" alt="Star" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gx-row d-flex gap-24">
                                        <div data-aos="zoom-in">
                                            <div className="about-crenditials-box info-box shadow-box h-full">
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
                                        <div data-aos="zoom-in">
                                            <div className="about-project-box info-box shadow-box h-full">
                                                <Link className="overlay-link" href="/works" />
                                                {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                                <img src="/assets/images/my-works.png" alt="My Works" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="infos">
                                                        <h4>SHOWCASE</h4>
                                                        <h1>Projects</h1>
                                                    </div>
                                                    <Link href="#" className="about-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-12">
                                <div className="blog-service-profile-wrap d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-blog-box info-box shadow-box h-full">
                                            <Link href="/blog" className="overlay-link" />
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <img src="/assets/images/gfonts.png" alt="GFonts" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>Blog</h4>
                                                    <h1>GFonts</h1>
                                                </div>
                                                {/* <Link href="/blog" className="about-btn"> */}
                                                <Link href="#" className="about-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in" className="flex-1">
                                        <div className="about-services-box info-box shadow-box h-full">
                                            <Link href="/service" className="overlay-link" />
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <div className="icon-boxes">
                                                <i className="iconoir-adobe-photoshop" />
                                                <i className="iconoir-figma" />
                                                <i className="iconoir-dev-mode-laptop" />
                                                <i className="iconoir-dev-mode-phone" />
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
                                </div>
                            </div>
                        </div>
                        <div className="row mt-24">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-client-box info-box shadow-box">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <div className="clients d-flex align-items-start gap-24 justify-content-center">
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
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="about-contact-box info-box shadow-box">
                                    <Link className="overlay-link" href="/contact" />
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <Link href="#" className="about-btn">
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