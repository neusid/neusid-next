import Layout from "@/components/layout/Layout"
import Link from "next/link"
import data from "../util/project.json"

export default function Works() {
    const handleClick = () => {
        sessionStorage.setItem("fromWorks", "true")
    }

    return (
        <>
            <Layout maincls="main-workspage">
                <section className="projects-area">
                    <div className="container">
                        <h1 className="section-heading" data-aos="fade-up">
                            <img src="/assets/images/star-2.png" alt="Star" /> All Projects <img src="/assets/images/star-2.png" alt="Star" />
                        </h1>
                        <div className="row g-4 projects-grid">
                            {data.map((item) => (
                                <div className="col-lg-4 col-md-6 col-12" key={item.id} data-aos="zoom-in">
                                    <div className="project-item shadow-box h-100 d-flex flex-column justify-content-between">
                                        {item.clickable ? (
                                            <Link className="overlay-link" href={`/project/${item.id}`} onClick={handleClick} />
                                        ) : (
                                            <div className="overlay-link not-clickable" />
                                        )}
                                        <div className="project-img">
                                            <img src={`/assets/images/${item.img}`} alt={item.title} />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-auto">
                                            <div className="project-info">
                                                <p>{item.category}</p>
                                                <h1>{item.title}</h1>
                                            </div>
                                            {item.clickable ? (
                                                <Link href={`/project/${item.id}`} onClick={handleClick} className="project-btn">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            ) : (
                                                <span className="project-btn not-clickable">
                                                    <img src="/assets/images/icon.svg" alt="Button" />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}