import Link from "next/link"

export default function ProfilesPreviewCard({ profile }) {
    return (
        <div data-aos="zoom-in" className="home-profiles-col d-flex">
            <div className="about-profile-box info-box glass-card w-100">
                <div className="inner-profile-icons glass-card">
                    <Link
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prof-icon prof-linkedin"
                        title="LinkedIn"
                    >
                        <i className="iconoir-linkedin" />
                    </Link>
                    <Link
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prof-icon prof-github"
                        title="GitHub"
                    >
                        <i className="iconoir-github" />
                    </Link>
                    <Link
                        href={profile.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prof-icon prof-instagram"
                        title="Instagram"
                    >
                        <i className="iconoir-instagram" />
                    </Link>
                    <Link
                        href={profile.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prof-icon prof-facebook"
                        title="Facebook"
                    >
                        <i className="iconoir-facebook-tag" />
                    </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                    </div>
                    <Link href="/contact" className="about-btn" aria-label="Contact">
                        <img src="/assets/images/icon.svg" alt="Button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
