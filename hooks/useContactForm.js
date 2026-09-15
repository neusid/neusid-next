import { useState } from "react"

export function useContactForm() {
    const [open, setOpen] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError(null)

        try {
            const res = await fetch("https://formspree.io/f/xrbonjeb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                handleOpen()
                setForm({
                    fullname: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            } else {
                throw new Error("Failed to send message. Please try again.")
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return {
        form,
        open,
        submitting,
        error,
        handleChange,
        handleSubmit,
        handleClose,
    }
}
