import React from "react"
import Link from "next/link"

export default function WorkUploadSuccessModal({
    isEditMode,
    successData,
    onOpenProject,
    onReset,
}) {
    if (!successData) return null

    return (
        <div className="upload-success-modal" data-aos="zoom-in">
            <h3>
                🎉{" "}
                {isEditMode
                    ? "Project Successfully Updated!"
                    : "Project Successfully Published!"}
            </h3>
            <p>
                <strong>&quot;{successData.title}&quot;</strong> has been{" "}
                {isEditMode ? "updated in" : "saved to"} your portfolio database
                (ID: #{successData.id}).
            </p>
            <div className="upload-success-actions">
                <button
                    type="button"
                    className="upload-action-btn primary"
                    onClick={() => onOpenProject(successData.id)}
                >
                    View Case Study Page →
                </button>
                <Link href="/work-admin" className="upload-action-btn secondary">
                    Back to Admin Manager
                </Link>
                <Link href="/works" className="upload-action-btn secondary">
                    View in Works Gallery
                </Link>
                {!isEditMode && (
                    <button
                        type="button"
                        className="upload-action-btn secondary"
                        onClick={onReset}
                    >
                        + Upload Another Project
                    </button>
                )}
            </div>
        </div>
    )
}
