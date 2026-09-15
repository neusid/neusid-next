import Link from "next/link"

export default function ServicesPreviewCard() {
    return (
        <div data-aos="zoom-in" className="home-services-col d-flex">
            <div className="about-services-box info-box glass-card w-100">
                <Link href="/service" className="overlay-link" />
                <div className="svc-icon-flow">
                    <div className="svc-item svc-photoshop" title="Graphic Design">
                        <i className="iconoir-adobe-photoshop" />
                    </div>
                    <div className="svc-item svc-figma" title="UI/UX Design">
                        <i className="iconoir-figma" />
                    </div>
                    <div className="svc-item svc-web" title="Web Development">
                        <i className="iconoir-dev-mode-laptop" />
                    </div>
                    <div className="svc-item svc-mobile" title="Mobile Development">
                        <i className="iconoir-dev-mode-phone" />
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>specialization</h4>
                        <h1>Services Offering</h1>
                    </div>
                    <Link href="/service" className="about-btn" aria-label="Services">
                        <img src="/assets/images/icon.svg" alt="Button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
