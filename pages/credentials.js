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
                                            <img src="/assets/images/me2.png" alt="About Me" />
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
                                    <p>Flutter Developer with hands-on experience building scalable and user-friendly mobile applications. Experienced in state management (GetX, BLoC), implementing responsive UI based on design requirement and REST API integration.</p>
                                    <p>Strong understanding of mobile app architecture, debugging, and performance opmization. Detail-oriented and eager to contribute building stable, high-quality applications in collaborative team environments.</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">Experience</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2024 - 2025</h4>
                                        <h3>Full Stack Developer (IoT & Mobile Application)</h3>
                                        <h5>IoT-Based Companion Plant Recommendation Application for Mixed Chili Cultivation</h5>
                                        <p>Designed and implemented an IoT-enabled mobile system for chili polyculture management, encompassing environmental data collection, backend and database development, machine learning integration (Random Forest Classifier, 87% accuracy), UI/UX design, and comprehensive documentation.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2024</h4>
                                        <h3>Mobile Developer & UI/UX (Intern)</h3>
                                        <h5>Mobile Application for Document Management, e-Signature, and Tera</h5>
                                        <p>Developed a mobile application for digital signature and electronic stamping, designed and prototyped the complete UI/UX in Figma to ensure usability and accessibility, and authored comprehensive technical documentation and user manuals for system deployment.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2024</h4>
                                        <h3>Full Stack Developer</h3>
                                        <h5>Mobile Aplication for Food Nutrition Detection</h5>
                                        <p>Leading and actively contributing to the development of a mobile application for food nutrition detection, including end-to-end UI/UX design in Figma, building and integrating the YOLOv8 object detection model for real-time inference, and coordinating development sprints with the team.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2023</h4>
                                        <h3>Mobile Developer</h3>
                                        <h5>Mobile Aplication for Smartfarm</h5>
                                        <p>Led a team in developing a mobile application for smart farming systems, designing the complete UI/UX in Figma, contributing to Flutter development, collaborating with backend and IoT teams, and authoring comprehensive technical documentation and user manuals.</p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">Education</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2019 - 2021</h4>
                                        <h3>Vocational High School of Software Engineering</h3>
                                        <h5>SMKN 1 Cirebon</h5>
                                        <p>A graduate of Software Engineering from SMKN 1 Cirebon with experience in Laravel-based website development and graphic design using Adobe Photoshop.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2021 - 2025</h4>
                                        <h3>Bachelor of Software Engineering - GPA 3.7</h3>
                                        <h5>Politeknik Negeri Indramayu</h5>
                                        <p>Software Engineering graduate from Indramayu State Polytechnic with hands-on experience in Laravel web development, Flutter mobile applications, and UI/UX design. Proficient in Adobe Photoshop and skilled in creating user-focused digital products.</p>
                                    </div>
                                </div>
                                <div className="skills-wrap">
                                    <h2 data-aos="fade-up">Skills</h2>
                                    <div className="d-grid skill-items gap-24 flex-wrap">
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">JavaScript</h3>
                                            <p>Non enim praesent</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Python</h3>
                                            <p>Non enim praesent</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Figma</h3>
                                            <p>Non enim praesent</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Laravel</h3>
                                            <p>Non enim praesent</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Flutter</h3>
                                            <p>Non enim praesent</p>
                                        </div>
                                        <div className="skill-item" data-aos="zoom-in">
                                            <h3 className="name">Dart</h3>
                                            <p>Non enim praesent</p>
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