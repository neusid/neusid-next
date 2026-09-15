export default function StatsCard({ stats }) {
    return (
        <div className="col-md-6 d-flex" data-aos="zoom-in">
            <div className="about-client-box info-box glass-card w-100">
                <div className="clients d-flex align-items-center gap-24 justify-content-center h-100">
                    {stats.map((stat, i) => (
                        <div className="client-item" key={i}>
                            <h1>{stat.value}</h1>
                            <p>
                                {stat.label.split(" ").map((word, idx) => (
                                    <span key={idx}>
                                        {word}
                                        {idx === 0 && <br />}
                                        {idx > 0 && " "}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
