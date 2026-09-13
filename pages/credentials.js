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
                                    <p>Mobile Developer dengan pengalaman mengembangkan aplikasi menggunakan Flutter, Dart, dan React Native. Berpengalaman dalam REST API, BLoC, GetX, MVVM, Clean Architecture, Firebase, serta testing dan debugging.</p>
                                    <p>Terbiasa mengembangkan aplikasi dari requirement hingga deployment dan bekerja secara kolaboratif dalam tim Agile/Scrum. Berfokus pada pembangunan aplikasi yang skalabel, stabil, dan berorientasi pada pengalaman pengguna.</p>
                                </div>
                                <div className="credential-edc-exp credential-experience">
                                    <h2 data-aos="fade-up">Experience</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Juni 2026 - Sekarang</h4>
                                        <h3>Mobile Developer & QA</h3>
                                        <h5>PT Lincah Cipta Harapan (Magang) - Bandung</h5>
                                        <p>Mengembangkan dan memelihara aplikasi Flutter dan React Native. Berkolaborasi erat dengan developer lintas fungsi untuk menjaga stabilitas dan fungsionalitas aplikasi. Melakukan validasi fitur, identifikasi bug, dan regression testing sistematis untuk menjaga kualitas setiap rilis, serta aktif dalam code review dan issue tracking.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Mei 2026 – Juli 2026</h4>
                                        <h3>Mobile Developer & UI/UX</h3>
                                        <h5>Mobile Developer Freelance (Mingda Absensi)</h5>
                                        <p>Merancang layout UI/UX mobile yang selaras dengan platform web eksisting, bekerja sama langsung dengan web developer. Membangun aplikasi mobile dari nol hingga rilis, mengimplementasikan desain yang telah disetujui klien untuk operasional harian.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Juli 2024 - Desember 2024</h4>
                                        <h3>Mobile Developer & UI/UX (Intern)</h3>
                                        <h5>PT Digital Logistics Internasional - Jakarta</h5>
                                        <p>Membangun aplikasi mobile untuk tanda tangan digital (e-signature) dan electronic stamping (e-stamping) berbasis Flutter. Merancang prototipe UI/UX lengkap di Figma dengan alur kerja intuitif, serta menyusun dokumentasi teknis dan user manual.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Desember 2024 – Agustus 2025</h4>
                                        <h3>IoT & Mobile Developer (Penelitian Skripsi)</h3>
                                        <h5>Rekomendasi Tanaman Pendamping Polikultur Cabai Berbasis IoT</h5>
                                        <p>Membangun perangkat IoT pengumpul data parameter lingkungan real-time, mengembangkan backend server, melatih model Machine Learning Random Forest Classifier (akurasi 87%), dan mengintegrasikan model ke aplikasi Flutter serta merancang UI/UX di Figma.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>Juni 2023 - 2024</h4>
                                        <h3>Full Stack Mobile Developer & UI/UX</h3>
                                        <h5>Aplikasi Deteksi Nutrisi Makanan (Akademik)</h5>
                                        <p>Memimpin tim pengembangan aplikasi mobile & web untuk deteksi nutrisi makanan berbasis gambar. Merancang prototipe UI/UX di Figma, melatih model object detection YOLOv8, dan mengintegrasikannya ke aplikasi untuk inferensi real-time.</p>
                                    </div>
                                </div>
                                <div className="credential-edc-exp credential-education">
                                    <h2 data-aos="fade-up">Education</h2>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2021 - 2025</h4>
                                        <h3>Sarjana Terapan Rekayasa Perangkat Lunak - IPK 3.7</h3>
                                        <h5>Politeknik Negeri Indramayu</h5>
                                        <p>Lulusan Rekayasa Perangkat Lunak dengan spesialisasi pengembangan aplikasi mobile Flutter, web development, dan UI/UX design. Aktif dalam proyek riset IoT dan machine learning.</p>
                                    </div>
                                    <div className="credential-edc-exp-item" data-aos="zoom-in">
                                        <h4>2019 - 2021</h4>
                                        <h3>Sekolah Menengah Kejuruan Rekayasa Perangkat Lunak</h3>
                                        <h5>SMK Negeri 1 Cirebon</h5>
                                        <p>Fokus pada dasar-dasar pemrograman perangkat lunak, pengembangan web berbasis Laravel, serta desain grafis.</p>
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