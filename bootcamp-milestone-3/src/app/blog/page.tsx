import styles from "./blog.module.css";
import BlogPreview, { BlogPreviewProps } from '@/components/blogPreview';
import { getBlogs as getBlogsFromDB } from "@/database/blogSchema";

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

    return (
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Blogs</h1>
            <div className={styles.grid}>
        {previews.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
            content={blog.content}
            />
            ))}
            </div>
            </div>
            </main>
    );
}