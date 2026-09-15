import Layout from "@/components/layout/Layout"
import ContactInfos from "@/components/contact/ContactInfos"
import ContactForm from "@/components/contact/ContactForm"
import { useContactForm } from "@/hooks/useContactForm"

export default function Contact() {
    const {
        form,
        open,
        submitting,
        error,
        handleChange,
        handleSubmit,
        handleClose,
    } = useContactForm()

    return (
        <Layout maincls="main-aboutpage">
            <section className="contact-area">
                <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                        <ContactInfos />
                        <ContactForm
                            form={form}
                            open={open}
                            submitting={submitting}
                            error={error}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}