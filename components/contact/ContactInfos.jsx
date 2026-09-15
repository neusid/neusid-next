import Link from "next/link"

export default function ContactInfos() {
    return (
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
                        <h4>
                            JL.Syekh Dahtul Kahfi, Plered <br />
                            Kabupaten Cirebon <br />
                            Jawa Barat
                        </h4>
                    </div>
                </li>
            </ul>

            <h3 data-aos="fade-up">Social Info</h3>
            <ul className="social-links d-flex align-center" data-aos="zoom-in">
                <li>
                    <Link
                        className="shadow-box"
                        href="https://www.linkedin.com/in/malik-ibrahim-063922169"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="iconoir-linkedin" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="shadow-box"
                        href="https://web.facebook.com/profile.php?id=100009292241278"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="iconoir-facebook-tag" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="shadow-box"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="iconoir-instagram" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
