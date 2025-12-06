"use client";

import { useState } from "react";
import React from "react";
import styles from "./commentForm.module.css";

type CommentFormProps = {
    slug: string;
    apiPath?: string;
};

export default function CommentForm({ slug, apiPath = "Blogs" }: CommentFormProps) {
    const [ user, setUser] = useState("");
    const [ content, setContent] = useState("");
    const [ isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");
        
        try {
            const response = await fetch(`/api/${apiPath}/${slug}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user, content }),
            });
            const data = await response.json();
            
            if (response.ok) {
                setMessage("Comment submitted successfully!");
                setUser("");
                setContent("");
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                setMessage(data.error || "Failed to add comment.");
            }
        } catch (error) {
            setMessage("Error submitting comment.");
        } finally {
            setIsSubmitting(false);
        }
    };

// actual form JSX
    return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
        <div className={styles.formGroup}>
            <label htmlFor="user">Name:</label>
            <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="Your name"
            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="content">Comment:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                disabled={isSubmitting}
                placeholder="Share your thoughts..."
                rows={4}
            />
        </div>
        <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
        {message && (
            <p className={message.includes("success") ? styles.success : styles.error}>
                {message}
            </p>
        )}
    </form>
    );
}