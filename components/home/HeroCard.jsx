import Link from "next/link"

export default function HeroCard({ profile }) {
    return (
        <div className="col-md-6 d-flex" data-aos="zoom-in">
            <div className="about-me-box glass-card home-me-box w-100">
                <Link className="overlay-link" href="/about" />
                <div className="img-box">
                    <img src="/assets/images/me.jpeg" alt={profile.name} />
                </div>
                <div className="infos">
                    <span className="home-avail-badge">
                        <span className="badge-dot" />
                        Available for work
                    </span>
                    <h4>{profile.role}</h4>
                    <h1>{profile.name}.</h1>
                    <p>{profile.location}</p>
                    <Link href="/about" className="about-btn" aria-label="About me">
                        <img src="/assets/images/icon.svg" alt="Button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
