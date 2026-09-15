import React from "react"

export default function BlobStatusBanner({
    loading,
    status,
    message,
    isVercel,
    compact = false,
}) {
    if (loading) {
        return (
            <div
                style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "12px 18px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "24px",
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#eab308",
                    }}
                />
                Memeriksa status penyimpanan Vercel Blob...
            </div>
        )
    }

    if (status === "connected") {
        return (
            <div
                style={{
                    background: "rgba(34, 197, 94, 0.08)",
                    border: "1px solid rgba(34, 197, 94, 0.28)",
                    borderRadius: "14px",
                    padding: compact ? "10px 16px" : "14px 20px",
                    fontSize: "13.5px",
                    color: "#86efac",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "24px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            width: "9px",
                            height: "9px",
                            borderRadius: "50%",
                            background: "#22c55e",
                            boxShadow: "0 0 10px #22c55e",
                        }}
                    />
                    <strong style={{ color: "#fff" }}>Vercel Blob Terhubung & Aktif</strong>
                    {!compact && (
                        <span style={{ color: "rgba(255,255,255,0.6)" }}>
                            — Upload gambar dan data akan disimpan permanen di Cloud Blob
                        </span>
                    )}
                </div>
                <span
                    style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        background: "rgba(34,197,94,0.18)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        color: "#4ade80",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                    }}
                >
                    Cloud Storage Live
                </span>
            </div>
        )
    }

    if (isVercel && status === "missing_token") {
        return (
            <div
                style={{
                    background: "rgba(245, 158, 11, 0.12)",
                    border: "1px solid rgba(245, 158, 11, 0.45)",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    fontSize: "13.5px",
                    color: "#fde68a",
                    marginBottom: "24px",
                }}
            >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ fontSize: "20px", lineHeight: "1" }}>⚠️</span>
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                fontWeight: 700,
                                color: "#fbbf24",
                                marginBottom: "4px",
                                fontSize: "14px",
                            }}
                        >
                            Vercel Blob Belum Aktif di Deployment Ini (Perlu Redeploy)
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.5" }}>
                            Anda sudah menghubungkan Vercel Blob di dashboard, tetapi Vercel{" "}
                            <strong>wajib di-Redeploy</strong> agar environment variable (token) baru disuntikkan ke server Vercel.
                        </div>
                        <div
                            style={{
                                marginTop: "10px",
                                padding: "10px 14px",
                                background: "rgba(0,0,0,0.35)",
                                borderRadius: "8px",
                                fontSize: "12.5px",
                                color: "#fef08a",
                            }}
                        >
                            👉 <strong>Langkah Cepat:</strong> Buka <strong>Vercel Dashboard</strong> → Pilih Project Anda → Klik tab <strong>Deployments</strong> → Klik titik tiga <strong>(...)</strong> pada deployment teratas → Pilih <strong>Redeploy</strong>.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            style={{
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                borderRadius: "14px",
                padding: "12px 18px",
                fontSize: "13px",
                color: "#93c5fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "24px",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                    style={{
                        display: "inline-block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#60a5fa",
                    }}
                />
                <span>
                    Mode Penyimpanan: <strong>Local Offline Fallback</strong>
                </span>
            </div>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>
                {message}
            </span>
        </div>
    )
}
