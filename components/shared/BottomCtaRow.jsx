import Link from "next/link"

export default function BottomCtaRow({ style }) {
    return (
        <div className="about-cta-row" style={style}>
            {/* Profiles card */}
            <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="150">
                <div className="cta-inner-icons">
                    <a
                        href="https://www.linkedin.com/in/malik-ibrahim-063922169"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-icon-btn"
                        aria-label="LinkedIn"
                    >
                        <i className="iconoir-linkedin" />
                    </a>
                    <Link
                        href="https://github.com/neusid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-icon-btn"
                        aria-label="GitHub"
                    >
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

            {/* Let's work together */}
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

            {/* Credentials card */}
            <div className="about-cta-card glass-card" data-aos="zoom-in" data-aos-delay="350">
                <Link className="overlay-link" href="/credentials" />
                <div className="cta-inner-cred">
                    <div className="cta-cred-icon">
                        <i className="iconoir-graduation-cap" />
                    </div>
                    <div className="cta-cred-info">
                        <span className="cta-cred-degree">B.A.Sc (S.Tr.Kom)</span>
                        <span className="cta-cred-major">Informatics Engineering</span>
                        <span className="cta-cred-school">GPA 3.7 · Polindra</span>
                    </div>
                </div>
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
    )
}
