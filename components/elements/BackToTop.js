import { useEffect, useState } from "react"

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 120) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!hasScrolled) return null

    return (
        <a
            className="scroll__top scroll-to-target open"
            href="#top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fas fa-angle-up"></i>
        </a>
    )
}