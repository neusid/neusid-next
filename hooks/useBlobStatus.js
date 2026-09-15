import { useState, useEffect } from "react"

/**
 * Custom hook to observe real-time Vercel Blob cloud storage health.
 */
export function useBlobStatus() {
    const [blobStatus, setBlobStatus] = useState({
        loading: true,
        status: null,
        message: "",
        isVercel: false,
    })

    const refreshStatus = () => {
        setBlobStatus((prev) => ({ ...prev, loading: true }))
        fetch("/api/blob-status")
            .then((r) => r.json())
            .then((data) => {
                setBlobStatus({
                    loading: false,
                    status: data.status,
                    message: data.message,
                    isVercel: data.isVercel,
                })
            })
            .catch((err) => {
                setBlobStatus({
                    loading: false,
                    status: "error",
                    message: "Gagal memverifikasi status koneksi storage: " + err.message,
                    isVercel: false,
                })
            })
    }

    useEffect(() => {
        refreshStatus()
    }, [])

    return {
        ...blobStatus,
        refresh: refreshStatus,
    }
}

export default useBlobStatus
