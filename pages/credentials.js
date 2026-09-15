import Layout from "@/components/layout/Layout"
import CredSidebar from "@/components/credentials/CredSidebar"
import CredAboutSection from "@/components/credentials/CredAboutSection"
import CredTimelineSection from "@/components/credentials/CredTimelineSection"
import CredSkillsGrid from "@/components/credentials/CredSkillsGrid"
import CredCertificatesList from "@/components/credentials/CredCertificatesList"
import {
    profileMeta,
    workExperience,
    education,
    skills,
    certificates,
} from "@/core/domain/constants/resumeData"

export default function Credentials() {
    return (
        <Layout maincls="main-aboutpage">
            <section className="cred-area-v2">
                <div className="container">
                    <div className="cred-layout">
                        <CredSidebar profile={profileMeta} />

                        <div className="cred-main">
                            <CredAboutSection />
                            <CredTimelineSection
                                experiences={workExperience}
                                education={education}
                            />
                            <CredSkillsGrid skills={skills} />
                            <CredCertificatesList certificates={certificates} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
