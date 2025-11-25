import React from 'react';
import styles from "./portfolio.module.css";
import connectDB from "@/database/db";
import { getProjects as getProjectsfromDB } from "@/database/projectSchema";
import { BlogPreviewProps } from '@/components/blogPreview';

export const dynamic = 'force-dynamic';

export default async function ProjectIndex() {
    const projects = await getProjectsfromDB();

    if (!projects) {
        return (
            <div className={styles.blogContainer}>
                <h1>Portfolio</h1>
                <p>No projects found at this moment. Please check again later!</p>
            </div>
        );
    }
    if (projects.length === 0) {
        return <main className="p-6">No projects found</main>;
    }

    const previews: BlogPreviewProps[] = projects.map((project) => ({
        title: project.title,
        date: project.date.toLocaleDateString(),
        description: project.description,
        image: project.image,
        imageAlt: project.image_alt,
        slug: project.slug,
        content: project.content,
    }));

/* Displays website code right here ! */
    return (
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Projects</h1>
            <div className={styles.grid}>
        {projects.map((project) => (
            <div key={project.slug} className={styles.gridCard}>
            <div className={styles.gridCardInner}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDate}>{new Date(project.date).toLocaleDateString()}</p>
                <a href={`/portfolio/${project.slug}`}>
                <img
                    src={project.image}
                    alt={project.image_alt}
                    className={styles.projectImage}
                />
                </a>
                <p className={styles.projectDescription}>{project.description}</p>
                <a href={`/portfolio/${project.slug}`} className={styles.readMoreLink}>Read More</a>
            </div>
            </div>
            ))}
            </div>
            </div>
            </main>
    );
}