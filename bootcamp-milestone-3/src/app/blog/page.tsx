import React from 'react';
import styles from "./blog.module.css";
import BlogPreview from '@/components/blogPreview';
import blogs from "../blogData";
import connectDB from "@/database/db";
import { getBlogs } from "@/database/blogSchema";


export default async function BlogIndex() {
    const blogs = await getBlogs();

    if (!blogs) {
        return (
            <div className={styles.blogContainer}>
                <h1>Blogs</h1>
                <p>No blogs found at this moment. Please check again later!</p>
            </div>
        );
    }
    return (
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Blogs</h1>
            <div className={styles.grid}>
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.image_alt}
            slug={blog.slug}
            content={blog.content}
            />
            ))}
            </div>
            </div>
            </main>
    );
}