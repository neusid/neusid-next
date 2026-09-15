import Link from "next/link"

export default function CredSidebar({ profile }) {
    return (
        <aside className="cred-sidebar" data-aos="zoom-in">
            <div className="cred-sidebar-card glass-card">
                <div className="cred-sidebar-glow" />
                <div className="cred-avatar-wrap">
                    <img src="/assets/images/me.jpeg" alt={profile.name} />
                </div>
                <h2 className="cred-sidebar-name">{profile.name}</h2>
                <p className="cred-sidebar-handle">{profile.handle}</p>
                <div className="cred-sidebar-divider" />
                <ul className="cred-social-list">
                    <li>
                        <Link
                            href={profile.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cred-social-btn"
                            aria-label="LinkedIn"
                        >
                            <i className="iconoir-linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="cred-social-btn"
                            aria-label="Twitter"
                        >
                            <i className="iconoir-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={profile.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cred-social-btn"
                            aria-label="Instagram"
                        >
                            <i className="iconoir-instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={profile.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cred-social-btn"
                            aria-label="Facebook"
                        >
                            <i className="iconoir-facebook-tag" />
                        </Link>
                    </li>
                </ul>
                <Link href="/contact" className="cred-contact-btn">
                    <i className="iconoir-send-mail" />
                    Contact Me
                </Link>
            </div>
        </aside>
    )
}
