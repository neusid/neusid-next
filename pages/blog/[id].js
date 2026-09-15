import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import BlogSidebar from "@/components/blog/BlogSidebar"
import data from "../../util/blog.json"

export default function BlogDynamicDetails() {
    const router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = router.query

    useEffect(() => {
        if (id) {
            setBlogPost(data.find((item) => String(item.id) === String(id)))
        }
    }, [id])

    return (
        <Layout footerStyle={2}>
            {blogPost && (
                <section className="blog-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="blog-details-content">
                                    <div className="img-box">
                                        <img src={`/assets/images/${blogPost.img}`} alt={blogPost.title} />
                                    </div>
                                    <span className="meta">25 March 2022 - Comments (4) - Share (7)</span>
                                    <h1>{blogPost.title}</h1>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                    <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Giy direction neglected but supported yet her.</p>
                                    <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                                    <ul className="list">
                                        <li>- Pretty merits waited six</li>
                                        <li>- General few civilly amiable pleased account carried.</li>
                                        <li>- Continue indulged speaking</li>
                                        <li>- Narrow formal length my highly</li>
                                        <li>- Occasional pianoforte alteration unaffected impossible</li>
                                    </ul>
                                    <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>
                                    <div className="tags">
                                        <Link href="#" className="theme-btn">SASS</Link>
                                        <Link href="#" className="theme-btn">Development</Link>
                                    </div>
                                    <div className="comments-and-form-wrap">
                                        <div className="comments-and-form-wrap-inner shadow-box">
                                            <h2>2 Comments</h2>
                                            <div className="comments">
                                                <div className="comment-list">
                                                    <div className="comment-avatar">
                                                        <img src="/assets/images/comment.png" alt="Avatar" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <span className="date">25 March 2022</span>
                                                        <h3>Jonathan Doe</h3>
                                                        <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum lobs eu volutpat odio facilisis mauris sit.</p>
                                                        <Link href="#" className="reply-btn theme-btn">Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="children">
                                                    <div className="comment-list">
                                                        <div className="comment-avatar">
                                                            <img src="/assets/images/comment.png" alt="Avatar" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <span className="date">25 March 2022</span>
                                                            <h3>Jonathan Doe</h3>
                                                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus no odio facilisis mauris sit.</p>
                                                            <Link href="#" className="reply-btn theme-btn">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-form">
                                                <h2>Leave A Reply</h2>
                                                <form onSubmit={(e) => e.preventDefault()}>
                                                    <div className="input-group">
                                                        <input type="text" name="name" placeholder="Name*" />
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" name="email" placeholder="Email*" />
                                                    </div>
                                                    <div className="input-group">
                                                        <textarea name="message" placeholder="Your Message*" />
                                                    </div>
                                                    <div className="input-group">
                                                        <button className="theme-btn" type="submit">Send Message</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <BlogSidebar />
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    )
}