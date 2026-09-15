export default function ServiceCard({ service, index }) {
    return (
        <div
            className="svc-card glass-card"
            style={{ "--svc-color": service.color }}
            data-aos="zoom-in"
            data-aos-delay={index * 80}
        >
            <div className="svc-card-glow" />
            <div className="svc-icon-wrap">
                <i className={service.icon} />
            </div>
            <h3 className="svc-card-title">{service.title}</h3>
            <p className="svc-card-desc">{service.desc}</p>
            <div className="svc-tags">
                {service.tags.map((tag, j) => (
                    <span key={j} className="svc-tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}
