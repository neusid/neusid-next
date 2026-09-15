import React from "react"
import Link from "next/link"
import { getProjectImageUrl } from "@/util/imageHelper"

export default function WorkCard({ item, idx, onCardClick }) {
    return (
        <div
            className="col-lg-4 col-md-6 col-12"
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={idx * 60}
        >
            <div className="project-item glass-card h-100 d-flex flex-column justify-content-between">
                {item.clickable ? (
                    <Link
                        className="overlay-link"
                        href={`/project/${item.id}`}
                        onClick={onCardClick}
                    />
                ) : (
                    <div className="overlay-link not-clickable" />
                )}

                <div>
                    <div className="project-img">
                        {item.badge && (
                            <div className="project-card-badge">
                                <span className={`badge-dot ${item.badgeType || "live"}`} />
                                {item.badge}
                            </div>
                        )}
                        {item.year && <span className="project-card-year">{item.year}</span>}
                        <img src={getProjectImageUrl(item.img)} alt={item.title} />
                    </div>

                    {item.tags && item.tags.length > 0 && (
                        <div className="project-card-tags">
                            {item.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="project-card-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                    <div className="project-info">
                        <p>{item.category}</p>
                        <h1>{item.title}</h1>
                    </div>
                    {item.clickable ? (
                        <Link
                            href={`/project/${item.id}`}
                            onClick={onCardClick}
                            className="project-btn"
                            aria-label="View Project"
                        >
                            <img src="/assets/images/icon.svg" alt="Button" />
                        </Link>
                    ) : (
                        <span className="project-btn not-clickable" aria-label="Concept">
                            <img src="/assets/images/icon.svg" alt="Button" />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
