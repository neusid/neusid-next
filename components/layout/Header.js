import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import ThemeSwitch from "../elements/ThemeSwitch"

export default function Header() {
    const router = useRouter()
    const [isToggled, setToggled] = useState(false)

    const handleToggle = () => setToggled(!isToggled)
    const closeMenu = () => setToggled(false)

    useEffect(() => {
        setToggled(false)
    }, [router.asPath])

    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="gx-row d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo" onClick={closeMenu}>
                            <img src="/assets/images/logo.svg" alt="Logo" />
                        </Link>
                        <nav className={isToggled ? "navbar active" : "navbar"}>
                            <ul className="menu">
                                <li className={router.pathname == "/" ? "active" : ""}>
                                    <Link href="/" onClick={closeMenu}>Home</Link>
                                </li>
                                <li className={router.pathname == "/about" ? "active" : ""}>
                                    <Link href="/about" onClick={closeMenu}>About</Link>
                                </li>
                                <li className={router.pathname == "/works" ? "active" : ""}>
                                    <Link href="/works" onClick={closeMenu}>Works</Link>
                                </li>
                                <li className={router.pathname == "/contact" ? "active" : ""}>
                                    <Link href="/contact" onClick={closeMenu}>Contact</Link>
                                </li>
                            </ul>
                            <Link href="/contact" className="theme-btn" onClick={closeMenu}>Let's talk</Link>
                        </nav>
                        <Link href="/contact" className="theme-btn">Let's talk</Link>
                        <ThemeSwitch />
                        <div className={isToggled ? "show-menu active" : "show-menu"} onClick={handleToggle}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
