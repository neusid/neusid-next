import Layout from "@/components/layout/Layout"
import Link from "next/link"
import data from "../util/project.json"
export default function Home() {

    return (
        <>
            <Layout  maincls="main-workspage">
                <section className="projects-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> All Projects <img src="/assets/images/star-2.png" alt="Star" /></h1>
                        <div className="row">
                            <div className="col-md-4">
                                {data.slice(0, 2).map((item, i) => (
                                    <div data-aos="zoom-in">
                                        <div className="project-item shadow-box">
                                            <Link className="overlay-link" href={`/project/${item.id}`} />
                                            {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                            <div className="project-img">
                                                <img src={`/assets/images/${item.img}`} alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>{item.category}</p>
                                                    <h1>{item.title}</h1>
                                                </div>
                                                <Link href={`/project/${item.id}`} className="project-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up"><img src="/assets/images/star-2.png" alt="Star" /> All Projects <img src="/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="d-flex align-items-start gap-24">
                                    {data.slice(2, 4).map((item, i) => (
                                        <div data-aos="zoom-in" className="flex-1">
                                            <div className="project-item shadow-box">
                                                <Link className="overlay-link" href={`/project/${item.id}`} />
                                                {/* <img src="/assets/images/bg1.png" alt="BG" className="bg-img" /> */}
                                                <div className="project-img">
                                                    <img src={`/assets/images/${item.img}`} alt="Project" />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="project-info">
                                                        <p>{item.category}</p>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                    <Link href={`/project/${item.id}`} className="project-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex align-items-start gap-24">
                                    {data.slice(4, 6).map((item, i) => (
                                        <div data-aos="zoom-in" className="flex-1">
                                            <div className="project-item shadow-box">
                                                <Link className="overlay-link" href={`/project/${item.id}`} />
                                                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                                                <div className="project-img">
                                                    <img src={`/assets/images/${item.img}`} alt="Project" />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="project-info">
                                                        <p>{item.category}</p>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                    <Link href={`/project/${item.id}`} className="project-btn">
                                                        <img src="/assets/images/icon.svg" alt="Button" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}