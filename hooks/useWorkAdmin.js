import { useState } from "react"

/**
 * Custom hook managing projects state, filtering, drag-and-drop reordering,
 * and deletions for the Work Admin control panel.
 */
export function useWorkAdmin({ initialProjects = [] }) {
    const [projects, setProjects] = useState(initialProjects)
    const [activeFilter, setActiveFilter] = useState("all")
    const [deletingId, setDeletingId] = useState(null)
    const [actionLoading, setActionLoading] = useState(false)
    const [notification, setNotification] = useState(null)

    // Drag and drop state
    const [draggedIndex, setDraggedIndex] = useState(null)
    const [dragOverIndex, setDragOverIndex] = useState(null)
    const [saveStatus, setSaveStatus] = useState(null) // null | "saving" | "saved"

    const filteredProjects = projects.filter((item) => {
        if (activeFilter === "mobile") return item.category === "MOBILE DEVELOPMENT"
        if (activeFilter === "design") return item.category === "GRAPHIC DESIGN"
        return true
    })

    const totalCount = projects.length
    const mobileCount = projects.filter((d) => d.category === "MOBILE DEVELOPMENT").length
    const designCount = projects.filter((d) => d.category === "GRAPHIC DESIGN").length

    const handleDragStart = (e, index) => {
        if (activeFilter !== "all") return
        setDraggedIndex(index)
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/plain", index.toString())
    }

    const handleDragEnter = (e, index) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        if (draggedIndex !== null && draggedIndex !== index) {
            setDragOverIndex(index)
        }
    }

    const handleDragOver = (e) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        e.dataTransfer.dropEffect = "move"
    }

    const handleDrop = async (e, dropIndex) => {
        if (activeFilter !== "all") return
        e.preventDefault()
        if (draggedIndex === null || draggedIndex === dropIndex) {
            setDraggedIndex(null)
            setDragOverIndex(null)
            return
        }

        const updated = [...projects]
        const [movedItem] = updated.splice(draggedIndex, 1)
        updated.splice(dropIndex, 0, movedItem)

        setProjects(updated)
        setDraggedIndex(null)
        setDragOverIndex(null)

        await persistOrder(updated)
    }

    const handleDragEnd = () => {
        setDraggedIndex(null)
        setDragOverIndex(null)
    }

    const persistOrder = async (newList) => {
        setSaveStatus("saving")
        try {
            const orderedIds = newList.map((p) => p.id)
            const res = await fetch("/api/reorder-work", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderedIds }),
            })
            const data = await res.json()
            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to save card order.")
            }
            setSaveStatus("saved")
            setTimeout(() => {
                setSaveStatus(null)
            }, 3000)
        } catch (err) {
            console.error("Order save error:", err)
            setSaveStatus(null)
            setNotification({ type: "error", message: err.message })
        }
    }

    const handleDelete = async (id) => {
        setActionLoading(true)
        setNotification(null)

        try {
            const res = await fetch("/api/delete-work", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            })

            const data = await res.json()

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to delete project.")
            }

            setProjects((prev) => prev.filter((p) => String(p.id) !== String(id)))
            setNotification({ type: "success", message: `Project #${id} successfully deleted!` })
            setDeletingId(null)
        } catch (err) {
            setNotification({ type: "error", message: err.message })
        } finally {
            setActionLoading(false)
        }
    }

    return {
        projects,
        setProjects,
        filteredProjects,
        activeFilter,
        setActiveFilter,
        totalCount,
        mobileCount,
        designCount,
        deletingId,
        setDeletingId,
        actionLoading,
        notification,
        setNotification,
        draggedIndex,
        dragOverIndex,
        saveStatus,
        handleDragStart,
        handleDragEnter,
        handleDragOver,
        handleDrop,
        handleDragEnd,
        handleDelete,
    }
}
