import Layout from "@/components/layout/Layout"
import Link from "next/link"
import BlogSidebar from "@/components/blog/BlogSidebar"
import data from "@/util/blog.json"

export default function Blog() {
    return (
        <Layout maincls="main-workdetails-page">
            <section className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="blog-items">
                                {data.slice(0, 4).map((item) => (
                                    <div className="blog-item" data-aos="zoom-in" key={item.id}>
                                        <div className="img-box">
                                            <img src={`/assets/images/${item.img}`} alt={item.title} />
                                        </div>
                                        <div className="content">
                                            <span className="meta">
                                                {item.date} - Comments (4) - Share (7)
                                            </span>
                                            <h1>
                                                <Link href={`/blog/${item.id}`}>{item.title}</Link>
                                            </h1>
                                            <p>
                                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                                            </p>
                                            <Link href={`/blog/${item.id}`} className="theme-btn">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </Layout>
    )
}