import Layout from "@/components/layout/Layout"
import ServiceCard from "@/components/service/ServiceCard"
import BottomCtaRow from "@/components/shared/BottomCtaRow"
import { services } from "@/core/domain/constants/servicesData"

export default function Service() {
    return (
        <Layout maincls="main-homepage">
            <section className="svc-area-v2">
                <div className="container">
                    {/* Page heading */}
                    <div className="svc-heading" data-aos="fade-up">
                        <img src="/assets/images/star-2.png" alt="star" />
                        <h1>My Offerings</h1>
                        <img src="/assets/images/star-2.png" alt="star" />
                    </div>

                    {/* Services grid */}
                    <div className="svc-grid">
                        {services.map((svc, i) => (
                            <ServiceCard key={svc.id} service={svc} index={i} />
                        ))}
                    </div>

                    {/* Bottom CTA Row */}
                    <BottomCtaRow style={{ marginTop: "32px" }} />
                </div>
            </section>
        </Layout>
    )
}
