import React from "react"

export default function WorkAdminFilterNav({
    activeFilter,
    setActiveFilter,
    totalCount,
    mobileCount,
    designCount,
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="works-filter-nav" style={{ margin: 0 }}>
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

            {activeFilter === "all" ? (
                <span className="admin-reorder-hint">
                    <i className="iconoir-drag" style={{ fontSize: "14px" }} />
                    Drag card by its header to rearrange sequence
                </span>
            ) : (
                <span
                    className="admin-reorder-hint"
                    style={{ opacity: 0.75, cursor: "pointer" }}
                    onClick={() => setActiveFilter("all")}
                    title="Click to view all and enable card reordering"
                >
                    <i className="iconoir-drag" style={{ fontSize: "14px" }} />
                    Switch to &quot;All&quot; filter to reorder cards
                </span>
            )}
        </div>
    )
}
