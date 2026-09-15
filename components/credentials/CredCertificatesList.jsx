export default function CredCertificatesList({ certificates }) {
    return (
        <div className="cred-section glass-card" data-aos="fade-up">
            <div className="cred-section-header">
                <i className="iconoir-medal" />
                <h2>Certificates</h2>
            </div>
            <div className="cred-cert-list">
                {certificates.map((cert, i) => (
                    <div
                        key={i}
                        className="cred-cert-item"
                        data-aos="zoom-in"
                        data-aos-delay={i * 60}
                    >
                        <span className="cred-cert-date">{cert.date}</span>
                        <div className="cred-cert-info">
                            <h4 className="cred-cert-name">{cert.name}</h4>
                            <p className="cred-cert-issuer">{cert.issuer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
