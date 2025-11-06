import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./blog.module.css";
import { getBlogsBySlug, getBlogs } from "@/database/blogSchema";
import BlogPreview from "@/components/blogPreview";

const blogs = (await getBlogs()) ?? [];

interface BlogPostProps {
  params: {
    slug: string;
  };
} 

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = params;  
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return notFound();

  return (
    <main className={styles.blogPostContainer}>
      <article className={styles.blogPost}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <p className={styles.blogDate}>
            {new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})  }
          </p>
          <Image
            src={post.image}
            alt={post.imageAlt}
            className={styles.blogImage}
          />
        </header>

        <div className={styles.blogContent}>
          <p>{post.content}</p>
        </div>
        <footer className={styles.blogFooter}>
          <p>Written by Vincent Le</p>
        </footer>
      </article>
    </main>
  );
}

//Metadata for each post
import type { Metadata } from "next";

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const blog = await getBlogsBySlug(params.slug);
  if (!blog) {
    return {
      title: "Blog post not found",
    };
  }
  return {
    title: `${blog.title} • Vincent Le`,
    description: blog.description,
  };
}

