import Layout from "@/components/layout/Layout"
import AboutHero from "@/components/about/AboutHero"
import TechStackGrid from "@/components/about/TechStackGrid"
import TimelineSection from "@/components/about/TimelineSection"
import BottomCtaRow from "@/components/shared/BottomCtaRow"
import {
    profileMeta,
    techStack,
    workExperience,
    education,
} from "@/core/domain/constants/resumeData"

export default function About() {
    return (
        <Layout maincls="main-aboutpage">
            <section className="about-area about-area-v2">
                <div className="container">
                    <AboutHero profile={profileMeta} />
                    <TechStackGrid techStack={techStack} />
                    <TimelineSection
                        workExperience={workExperience}
                        education={education}
                    />
                    <BottomCtaRow />
                </div>
            </section>
        </Layout>
    )
}
