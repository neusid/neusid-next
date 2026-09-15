import ModalSuccess from "@/components/ModalSuccess"

export default function ContactForm({
    form,
    open,
    submitting,
    error,
    handleChange,
    handleSubmit,
    handleClose,
}) {
    return (
        <div data-aos="zoom-in" className="contact-form">
            <div className="shadow-box">
                <img src="/assets/images/icon3.png" alt="Icon" />
                <h1>
                    Let’s work <span>together.</span>
                </h1>

                {error && (
                    <div style={{ color: "#ef4444", marginBottom: "16px", fontSize: "14px" }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="fullname"
                            id="full-name"
                            placeholder="Name *"
                            value={form.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email *"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Your Subject *"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message *"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <button
                            className="theme-btn submit-btn"
                            name="submit"
                            type="submit"
                            disabled={submitting}
                        >
                            {submitting ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>

                <ModalSuccess open={open} handleClose={handleClose} />
            </div>
        </div>
    )
}
