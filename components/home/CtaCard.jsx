import Link from "next/link"

export default function CtaCard() {
    return (
        <div className="col-md-6 d-flex" data-aos="zoom-in">
            <div className="about-contact-box info-box glass-card home-cta-box w-100">
                <Link className="overlay-link" href="/contact" />
                <div className="cta-main-glow" />
                <img src="/assets/images/icon2.png" alt="Icon" className="cta-star-icon" />
                <h1>
                    Let&apos;s <br />work <span>together.</span>
                </h1>
                <Link href="/contact" className="about-btn" aria-label="Contact">
                    <img src="/assets/images/icon.svg" alt="Button" />
                </Link>
            </div>
        </div>
    )
}
