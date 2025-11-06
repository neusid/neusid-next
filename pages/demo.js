import Link from "next/link"

export default function demo() {
    return (

        <>
            <header className="demo-header-area">
                <div className="container">
                    <Link href="#" className="logo">
                        <img src="/assets/images/logo.svg" alt="Logo" />
                    </Link>
                    <Link href="#" className="theme-btn">Buy Now</Link>
                </div>
            </header>
            <div className="demo-page">
                <div className="container">
                    <h1 className="title-heading">Resume and Personal Portfolio <br />Grid Based <span>HTML Template</span></h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="demo-item">
                                <Link className="shadow-box" href="/">
                                    <img src="/assets/images/gridx-light.svg" alt="Light Mode" />
                                </Link>
                                <Link href="#" className="shadow-box preview-btn">
                                    Light Mode
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="demo-item">
                                <Link className="shadow-box" href="/">
                                    <span className="theme-btn btn-reverse">
                                        Recommended
                                    </span>
                                    <img src="/assets/images/gridx-dark.svg" alt="Dark Mode" />
                                </Link>
                                <Link href="/" className="shadow-box preview-btn">
                                    Dark Mode
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
