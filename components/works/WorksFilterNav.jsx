import React from "react"

export default function WorksFilterNav({
    activeFilter,
    setActiveFilter,
    totalCount,
    mobileCount,
    designCount,
}) {
    return (
        <div className="works-filter-nav" data-aos="fade-up" data-aos-delay="100">
            <button
                type="button"
                className={`works-filter-btn${activeFilter === "all" ? " active" : ""}`}
                onClick={() => setActiveFilter("all")}
            >
                All <span className="filter-count">{totalCount}</span>
            </button>
            <button
                type="button"
                className={`works-filter-btn${activeFilter === "mobile" ? " active" : ""}`}
                onClick={() => setActiveFilter("mobile")}
            >
                Mobile Apps <span className="filter-count">{mobileCount}</span>
            </button>
            <button
                type="button"
                className={`works-filter-btn${activeFilter === "design" ? " active" : ""}`}
                onClick={() => setActiveFilter("design")}
            >
                Graphic Design <span className="filter-count">{designCount}</span>
            </button>
        </div>
    )
}
