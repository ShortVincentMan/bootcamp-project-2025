import styles from "./blog.module.css";
import BlogPreview, { BlogPreviewProps } from '@/components/blogPreview';
import { getBlogs as getBlogsFromDB } from "@/database/blogSchema";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    const Blog = await getBlogsFromDB();

    if (!Blog) {
        return (
            <div className={styles.blogContainer}>
                <h1>Blogs</h1>
                <p>No blogs found at this moment. Please check again later!</p>
            </div>
        );
    }
    if (Blog.length === 0) {
        return <main className="p-6">No blogs found</main>;
    }

    const previews: BlogPreviewProps[] = Blog.map((blog) => ({
        title: blog.title,
        date: blog.date.toLocaleDateString(),
        description: blog.description,
        image: blog.image,
        imageAlt: blog.imageAlt,
        slug: blog.slug,
        content: blog.content,
    }));


    //if blog data exists
    return (
        <div>
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Blogs</h1>
            <div className={styles.grid}>
        {previews.map((blog) => (
            <div key={blog.slug} className={styles.gridCard}>
            <div className={styles.gridCardInner}>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogDate}>{blog.date}</p>
                <a href={`/blog/${blog.slug}`}>
                <img
                    src={blog.image}
                    alt={blog.imageAlt}
                    className={styles.blogImage}
                />
                </a>
                <p className={styles.blogDescription}>{blog.description}</p>
                <a href={`/blog/${blog.slug}`} className={styles.readMoreLink}>Read More</a>
            </div>
            </div>
        ))}
            </div>
            </div>
            </main> 
      </Suspense>
    </div>
    );
}