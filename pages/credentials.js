import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-aboutpage">
                <section className="credential-area">
                    <div className="container">
                        <div className="gx-row d-flex">
                            <div className="credential-sidebar-wrap" data-aos="zoom-in">
                                <div className="credential-sidebar text-center">
                                    <div className="shadow-box">
                                        {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                        <div className="img-box">
                                            <img src="/assets/images/me.jpeg" alt="About Me" />
                                        </div>
                                        <h2>Malik Ibrahim</h2>
                                        <p>@neusisco</p>
                                        <ul className="social-links d-flex justify-content-center">
                                            <li><Link href="https://www.linkedin.com/in/malik-ibrahim-063922169" target="_blank" rel="noopener noreferrer"><i className="iconoir-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="iconoir-twitter" /></Link></li>
                                            <li><Link href="#"><i className="iconoir-instagram" /></Link></li>
                                            <li><Link href="https://web.facebook.com/profile.php?id=100009292241278" target="_blank" rel="noopener noreferrer"><i className="iconoir-facebook-tag" /></Link></li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="credential-content flex-1">
                                <div className="credential-about" data-aos="zoom-in">
                                    <h2>About Me</h2>
                                    <p>Mobile Developer with hands-on experience developing mobile applications using Flutter, Dart, and React Native. Proficient in REST API integration, BLoC, GetX, MVVM, Clean Architecture, Firebase, as well as testing and debugging.</p>
                                    <p>Experienced in delivering applications from requirement analysis to deployment and collaborating effectively within Agile/Scrum teams. Passionate about crafting scalable, robust, and user-centric mobile solutions.</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">Experience</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>June 2026 - Present</h4>
                                        <h3>Mobile Developer & QA</h3>
                                        <h5>PT Lincah Cipta Harapan (Internship) - Bandung</h5>
                                        <p>Developed and maintained Flutter and React Native mobile applications. Collaborated closely with cross-functional developers across the development lifecycle to ensure stability and functionality. Performed systematic feature validation, bug identification, and regression testing to maintain release quality, while actively contributing to code reviews and issue tracking.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>May 2026 – July 2026</h4>
                                        <h3>Mobile Developer & UI/UX</h3>
                                        <h5>Mobile Developer Freelance (Mingda Attendance)</h5>
                                        <p>Designed mobile UI/UX layouts aligned with existing web platforms in direct collaboration with web developers. Built the mobile application from scratch to production release, implementing client-approved designs for daily operations.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>July 2024 - December 2024</h4>
                                        <h3>Mobile Developer & UI/UX (Intern)</h3>
                                        <h5>PT Digital Logistics Internasional - Jakarta</h5>
                                        <p>Engineered a Flutter mobile application for digital signature (e-signature) and electronic stamping (e-stamping). Designed and prototyped the complete UI/UX in Figma with intuitive user flows, and authored technical documentation and user manuals for system adoption.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>December 2024 – August 2025</h4>
                                        <h3>IoT & Mobile Developer (Undergraduate Thesis)</h3>
                                        <h5>IoT-Based Companion Plant Recommendation for Chili Polyculture</h5>
                                        <p>Built custom IoT devices to gather real-time environmental data, developed backend servers and database architecture, trained a Random Forest Classifier ML model (87% accuracy), integrated the model into a Flutter app, and designed the UI/UX in Figma.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>June 2023 - 2024</h4>
                                        <h3>Full Stack Mobile Developer & UI/UX</h3>
                                        <h5>Food Nutrition Detection Mobile App (Academic)</h5>
                                        <p>Led development of an image-based food nutrition detection mobile and web application. Crafted complete Figma UI/UX prototypes, trained YOLOv8 object detection models, and integrated models into the app for real-time inference.</p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">Education</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2021 - 2025</h4>
                                        <h3>Bachelor of Applied Science in Software Engineering - GPA 3.7</h3>
                                        <h5>Politeknik Negeri Indramayu</h5>
                                        <p>Software Engineering graduate with specialization in Flutter mobile development, web development, and UI/UX design. Actively engaged in IoT and machine learning research initiatives.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2019 - 2021</h4>
                                        <h3>Vocational High School in Software Engineering</h3>
                                        <h5>SMKN 1 Cirebon</h5>
                                        <p>Focused on software programming fundamentals, Laravel-based web development, and graphic design.</p>
                                    </div>
                                </div>
                                <div className="skills-wrap">
                                    <h2 data-aos="fade-up">Skills</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Flutter</h3>
                                            <p>BLoC, GetX, Clean Architecture</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">React Native</h3>
                                            <p>Cross-platform, Zustand</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Dart & JavaScript</h3>
                                            <p>Core Mobile & Web Languages</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">TypeScript & React</h3>
                                            <p>Modern Frontend Development</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Backend & API</h3>
                                            <p>REST API, Laravel, Firebase</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Figma & UI/UX</h3>
                                            <p>Prototyping, User-Centered Design</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Database</h3>
                                            <p>PostgreSQL, MySQL, Firestore</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">QA & Testing</h3>
                                            <p>Debugging, Regression, Git Agile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills-wrap awards-wrap">
                                    <h2 data-aos="fade-up">Certificate</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">Feb 2026</span>
                                            <h3 className="name">English Course Beginner Program</h3>
                                            <p>Kampung Inggris EM</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">May 2024</span>
                                            <h3 className="name">Classify Images with TensorFlow Convolutional Neural Networks</h3>
                                            <p>Coursera</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">Nov 2022</span>
                                            <h3 className="name">Pemrograman Mobile Pertama</h3>
                                            <p>Lembaga Sertifikasi Profesi Teknologi Digital</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <span className="percent">Oct 2022</span>
                                            <h3 className="name">Junior Web Developer</h3>
                                            <p>PT. Inixindo Persada Rekayasa Komputer</p>
                                        </div>
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