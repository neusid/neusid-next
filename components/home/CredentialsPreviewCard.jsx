import Link from "next/link"

export default function CredentialsPreviewCard() {
    return (
        <div data-aos="zoom-in">
            <div className="about-crenditials-box info-box glass-card h-full">
                <Link className="overlay-link" href="/credentials" />
                <div className="cred-badge-preview">
                    <div className="cred-badge-icon">
                        <i className="iconoir-graduation-cap" />
                    </div>
                    <div className="cred-badge-meta">
                        <span className="cred-badge-degree">B.A.Sc (S.Tr.Kom) · Informatics</span>
                        <span className="cred-badge-tag">GPA 3.7 · Polindra</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                    </div>
                    <Link href="/credentials" className="about-btn" aria-label="Credentials">
                        <img src="/assets/images/icon.svg" alt="Button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
