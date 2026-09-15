import Layout from "@/components/layout/Layout"
import HeroCard from "@/components/home/HeroCard"
import MarqueeBanner from "@/components/home/MarqueeBanner"
import CredentialsPreviewCard from "@/components/home/CredentialsPreviewCard"
import ProjectsPreviewCard from "@/components/home/ProjectsPreviewCard"
import ServicesPreviewCard from "@/components/home/ServicesPreviewCard"
import ProfilesPreviewCard from "@/components/home/ProfilesPreviewCard"
import StatsCard from "@/components/home/StatsCard"
import CtaCard from "@/components/home/CtaCard"
import { profileMeta } from "@/core/domain/constants/resumeData"

export default function Home() {
    return (
        <Layout maincls="main-homepage">
            <section className="about-area">
                <div className="container">
                    {/* ── Row 1: Hero card + (Marquee & Previews) ── */}
                    <div className="row d-flex align-items-stretch">
                        <HeroCard profile={profileMeta} />

                        <div className="col-md-6 d-flex" data-aos="zoom-in">
                            <div className="about-credentials-wrap d-flex flex-column justify-content-between w-100">
                                <MarqueeBanner />

                                <div className="gx-row d-flex gap-24 flex-1">
                                    <CredentialsPreviewCard />
                                    <ProjectsPreviewCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Row 2: Services / Profiles (2:1 Ratio) ── */}
                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="home-row2-wrap d-flex gap-24 align-items-stretch">
                                <ServicesPreviewCard />
                                <ProfilesPreviewCard profile={profileMeta} />
                            </div>
                        </div>
                    </div>

                    {/* ── Row 3: Stats + CTA ── */}
                    <div className="row mt-24 d-flex align-items-stretch">
                        <StatsCard stats={profileMeta.stats} />
                        <CtaCard />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
