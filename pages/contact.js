import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-aboutpage">
                <section className="contact-area">
                    <div className="container">
                        <div className="gx-row d-flex justify-content-between gap-24">
                            <div className="contact-infos">
                                <h3 data-aos="fade-up">Contact Info</h3>
                                <ul className="contact-details">
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-mail" />
                                        </div>
                                        <div className="right">
                                            <span>MAIL us</span>
                                            <h4>akutahu0210@gmail.com</h4>
                                            <h4>malikibr4h1@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-phone" />
                                        </div>
                                        <div className="right">
                                            <span>Contact Us</span>
                                            <h4>+62 813-1230-0994</h4>
                                            <h4>+62 851-5718-0433</h4>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center" data-aos="zoom-in">
                                        <div className="icon-box shadow-box">
                                            <i className="iconoir-pin-alt" />
                                        </div>
                                        <div className="right">
                                            <span>Location</span>
                                            <h4>JL.Syekh Dahtul Kahfi, Plered <br />Kabupaten Cirebon <br />Jawa Barat</h4>
                                        </div>
                                    </li>
                                </ul>
                                <h3 data-aos="fade-up">Social Info</h3>
                                <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                    <li><Link className="shadow-box" href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer"><i className="iconoir-linkedin" /></Link></li>
                                    <li><Link className="shadow-box" href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer"><i className="iconoir-facebook-tag" /></Link></li>
                                    <li><Link className="shadow-box" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="iconoir-instagram" /></Link></li>
                                </ul>
                            </div>
                            <div data-aos="zoom-in" className="contact-form">
                                <div className="shadow-box">
                                    {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                    <img src="/assets/images/icon3.png" alt="Icon" />
                                    <h1>Let’s work <span>together.</span></h1>
                                    <form action={"https://formspree.io/f/xrbonjeb"} method="POST">
                                        <div className="alert alert-success messenger-box-contact__msg" style={{ display: 'none' }} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                        <div className="input-group">
                                            <input type="text" name="full-name" id="full-name" placeholder="Name *" />
                                        </div>
                                        <div className="input-group">
                                            <input type="email" name="email" id="email" placeholder="Email *" />
                                        </div>
                                        <div className="input-group">
                                            <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                                        </div>
                                        <div className="input-group">
                                            <textarea name="message" id="message" placeholder="Your Message *" />
                                        </div>
                                        <div className="input-group">
                                            <button className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}