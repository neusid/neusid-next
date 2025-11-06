import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headTitle, breadcrumbTitle, children, maincls }) {
    return (
        <>
            <PageHead headTitle={headTitle} />

            <main className={`${maincls ? maincls : "main-homepage"}`}>
                <Header />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                < Footer />
            </main >

            <BackToTop />
        </>
    )
}
