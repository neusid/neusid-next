import Link from "next/link"

export default function BlogSidebar() {
    return (
        <div className="col-md-4">
            <div className="blog-sidebar">
                <div className="blog-sidebar-inner">
                    <div className="blog-sidebar-widget search-widget">
                        <div className="blog-sidebar-widget-inner" data-aos="zoom-in">
                            <form className="shadow-box" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Search Here..." />
                                <button className="theme-btn" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="blog-sidebar-widget recent-post-widget" data-aos="zoom-in">
                        <div className="blog-sidebar-widget-inner shadow-box">
                            <h3>Recent Posts</h3>
                            <ul>
                                <li>
                                    <Link href="/blog-details">
                                        Consulted admitting is power acuteness.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-details">
                                        Unsatiable entreaties may collecting Power.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-details">
                                        Discovery incommode earnestly no he commanded
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-details">
                                        Unsatiable entreaties may collecting Power.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-sidebar-widget categories-widget" data-aos="zoom-in">
                        <div className="blog-sidebar-widget-inner shadow-box">
                            <h3>Categories</h3>
                            <ul>
                                <li><Link href="/blog-details">-Analysis</Link></li>
                                <li><Link href="/blog-details">-Firewall</Link></li>
                                <li><Link href="/blog-details">-IT Solutions</Link></li>
                                <li><Link href="/blog-details">-Security</Link></li>
                                <li><Link href="/blog-details">-Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-sidebar-widget tags-widget" data-aos="zoom-in">
                        <div className="blog-sidebar-widget-inner shadow-box">
                            <h3>Tags</h3>
                            <ul>
                                <li><Link className="theme-btn" href="/blog-details">SAAS</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">Development</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">UI/UX</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">Web</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">Figma</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">Java</Link></li>
                                <li><Link className="theme-btn" href="/blog-details">WordPress</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
