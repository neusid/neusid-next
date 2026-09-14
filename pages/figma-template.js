import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function FigmaTemplate() {
    return (
        <>
            <Layout maincls="main-workspage">
                <section className="projects-area" style={{ paddingTop: "70px", paddingBottom: "100px" }}>
                    <div className="container" style={{ maxWidth: "1080px" }}>

                        {/* Top Back Nav */}
                        <div style={{ marginBottom: "24px" }} data-aos="fade-up">
                            <Link
                                href="/work-admin"
                                style={{
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "13.5px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    textDecoration: "none",
                                    padding: "6px 14px",
                                    borderRadius: "100px",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <i className="iconoir-arrow-left" /> Back to Admin Manager
                            </Link>
                        </div>

                        {/* Hero Header */}
                        <div style={{ textAlign: "center", marginBottom: "48px" }} data-aos="fade-up">
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    padding: "5px 16px",
                                    background: "rgba(242, 78, 30, 0.12)",
                                    border: "1px solid rgba(242, 78, 30, 0.3)",
                                    borderRadius: "100px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    color: "#F24E1E",
                                    letterSpacing: "0.8px",
                                    textTransform: "uppercase",
                                    marginBottom: "16px"
                                }}
                            >
                                <i className="iconoir-figma" /> Official Figma Design Kit
                            </span>
                            <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#fff", margin: "0 0 12px" }}>
                                Work Card Image Templates
                            </h1>
                            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" }}>
                                Download high-fidelity vector templates ready to import directly into Figma. Designed specifically for the <strong>16:10 aspect ratio</strong> card showcase with pre-configured safe zones, 3D device mockups, and ambient lighting.
                            </p>
                        </div>

                        {/* Figma Blueprint Guide Banner */}
                        <div
                            className="glass-card"
                            style={{
                                padding: "24px",
                                borderRadius: "24px",
                                marginBottom: "48px",
                                overflow: "hidden",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}
                            data-aos="fade-up"
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
                                <div>
                                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", margin: "0 0 4px" }}>
                                        📐 Figma Architecture &amp; Safe Zone Blueprint
                                    </h3>
                                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                                        Preview of the vector layers, device tilt angles, and UI overlay areas.
                                    </p>
                                </div>
                                <span style={{ padding: "4px 12px", borderRadius: "100px", background: "rgba(0, 210, 255, 0.1)", border: "1px solid rgba(0, 210, 255, 0.25)", color: "#00d2ff", fontSize: "12px", fontWeight: "600" }}>
                                    Standard 1280 × 800 (16:10)
                                </span>
                            </div>
                            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                <img
                                    src="/assets/images/figma-card-template-guide.jpg"
                                    alt="Figma Card Template Blueprint"
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                            </div>
                        </div>

                        {/* Template Download Cards */}
                        <div className="row g-4" style={{ marginBottom: "50px" }}>

                            {/* Template 1: Mobile App 3D Showcase */}
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div
                                    className="glass-card h-100 d-flex flex-column justify-content-between"
                                    style={{ padding: "28px", borderRadius: "24px" }}
                                >
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#00d2ff", background: "rgba(0,210,255,0.1)", padding: "4px 10px", borderRadius: "8px" }}>
                                                Template 01
                                            </span>
                                            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                                                Mobile Apps &amp; IoT
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#fff", marginBottom: "8px" }}>
                                            3D Floating Phone Mockup
                                        </h3>
                                        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", marginBottom: "20px", lineHeight: "1.5" }}>
                                            Features a sleek angled smartphone frame, clip-path screen target for your screenshots, floating metric widgets, and ambient cyan/indigo glows.
                                        </p>

                                        {/* Live SVG Preview */}
                                        <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px", background: "#08090d" }}>
                                            <img
                                                src="/assets/template/work-card-figma-template.svg"
                                                alt="Mobile Template Preview"
                                                style={{ width: "100%", height: "auto", display: "block" }}
                                            />
                                        </div>
                                    </div>

                                    <a
                                        href="/assets/template/work-card-figma-template.svg"
                                        download="work-card-mobile-template.svg"
                                        className="upload-submit-btn"
                                        style={{ textDecoration: "none", width: "100%", padding: "12px 20px", fontSize: "14px" }}
                                    >
                                        <i className="iconoir-cloud-download" /> Download Mobile SVG Template
                                    </a>
                                </div>
                            </div>

                            {/* Template 2: Graphic Design & Multi-Artboard */}
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div
                                    className="glass-card h-100 d-flex flex-column justify-content-between"
                                    style={{ padding: "28px", borderRadius: "24px" }}
                                >
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                                            <span style={{ fontSize: "12px", fontWeight: "600", color: "#f59e0b", background: "rgba(245,158,11,0.1)", padding: "4px 10px", borderRadius: "8px" }}>
                                                Template 02
                                            </span>
                                            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                                                Graphic Design &amp; Web
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#fff", marginBottom: "8px" }}>
                                            Multi-Artboard Poster &amp; UI Stack
                                        </h3>
                                        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.55)", marginBottom: "20px", lineHeight: "1.5" }}>
                                            Features a triple-layer staggered artboard layout with color token chips, brand poster frame, and warm amber/magenta ambient lighting.
                                        </p>

                                        {/* Live SVG Preview */}
                                        <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px", background: "#07080c" }}>
                                            <img
                                                src="/assets/template/work-card-graphic-figma-template.svg"
                                                alt="Graphic Template Preview"
                                                style={{ width: "100%", height: "auto", display: "block" }}
                                            />
                                        </div>
                                    </div>

                                    <a
                                        href="/assets/template/work-card-graphic-figma-template.svg"
                                        download="work-card-graphic-template.svg"
                                        className="upload-submit-btn"
                                        style={{
                                            textDecoration: "none",
                                            width: "100%",
                                            padding: "12px 20px",
                                            fontSize: "14px",
                                            background: "linear-gradient(135deg, #f59e0b, #d97706)",
                                            borderColor: "rgba(245, 158, 11, 0.4)",
                                            boxShadow: "0 8px 24px rgba(245, 158, 11, 0.3)"
                                        }}
                                    >
                                        <i className="iconoir-cloud-download" /> Download Graphic SVG Template
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Step-by-Step Figma Guide */}
                        <div
                            className="glass-card"
                            style={{ padding: "36px", borderRadius: "24px" }}
                            data-aos="fade-up"
                        >
                            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                                <i className="iconoir-book" style={{ color: "#00d2ff" }} /> How to Use in Figma (5 Simple Steps)
                            </h2>

                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#00d2ff", display: "block", marginBottom: "8px" }}>STEP 01</span>
                                        <h4 style={{ fontSize: "16px", color: "#fff", marginBottom: "8px" }}>Import to Figma</h4>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                                            Drag and drop the downloaded <code>.svg</code> file directly onto your Figma canvas. Figma will automatically parse it into organized vector layers.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#34d399", display: "block", marginBottom: "8px" }}>STEP 02</span>
                                        <h4 style={{ fontSize: "16px", color: "#fff", marginBottom: "8px" }}>Paste Screenshots</h4>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                                            Locate the layer named <code>Screen-Content-Area</code> or <code>Artboard-Main-Center</code> and paste your app screenshot inside the clipping mask.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#f87171", display: "block", marginBottom: "8px" }}>STEP 03</span>
                                        <h4 style={{ fontSize: "16px", color: "#fff", marginBottom: "8px" }}>Check Safe Zones</h4>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                                            Keep important UI elements outside the Top-Left (Status Badge) and Top-Right (Year) zones marked with red dashed outlines.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#a855f7", display: "block", marginBottom: "8px" }}>STEP 04</span>
                                        <h4 style={{ fontSize: "16px", color: "#fff", marginBottom: "8px" }}>Hide Guides &amp; Export</h4>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                                            Toggle off the eye icon on <code>SAFE-ZONES-OVERLAY-GUIDES</code> in the Figma layers panel, then select the root frame and click <strong>Export @ 2x PNG</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
                                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#38bdf8", display: "block", marginBottom: "8px" }}>STEP 05</span>
                                        <h4 style={{ fontSize: "16px", color: "#fff", marginBottom: "8px" }}>Upload to Portfolio</h4>
                                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.5" }}>
                                            Go to <Link href="/work-upload" style={{ color: "#00d2ff" }}>/work-upload</Link> and drop your exported PNG into the <strong>Main Card Thumbnail</strong> dropzone!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Layout>
        </>
    )
}
