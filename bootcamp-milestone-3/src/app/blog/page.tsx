import React from 'react';
import styles from "./blog.module.css";
import BlogPreview from '../../components/blogPreview';
import blogs from "../blogData";
import connectDB from "../../database/db";
import { getBlogs } from "../../database/blogSchema";


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
            key={blog.slug} {...blog} />))}
            </div>
            </div>
            </main>
    );
}