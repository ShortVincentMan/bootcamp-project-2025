import React from 'react';
import styles from "./portfolio.module.css";
import BlogPreview from '@/components/blogPreview';
import projects from "../projectData";
import connectDB from "@/database/db";
import { getProjects } from "@/database/projectSchema";


export default async function ProjectIndex() {
    const projects = await getProjects();

    if (!projects) {
        return (
            <div className={styles.blogContainer}>
                <h1>Projects</h1>
                <p>No projects found at this moment. Please check again later!</p>
            </div>
        );
    }
    return (
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Projects</h1>
            <div className={styles.grid}>
        {projects.map((project) => (
          <BlogPreview
            key={project.slug}
            title={project.title}
            date={project.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            description={project.description}
            image={project.image}
            imageAlt={project.image_alt}
            slug={project.slug}
            content={project.content}
            />
            ))}
            </div>
            </div>
            </main>
    );
}