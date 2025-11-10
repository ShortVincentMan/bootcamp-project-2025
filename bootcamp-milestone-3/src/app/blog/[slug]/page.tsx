import Image from "next/image";
import styles from "./blog.module.css";
import { getBlogsBySlug, getBlogs } from "@/database/blogSchema";

const blogs = (await getBlogs()) ?? [];

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log("⛳ slug param:", slug);
  const blog = await getBlogsBySlug(slug);
  console.log("📄 blog found?", !!blog);
  if (!blog) {
    return(
      <div className={styles.blogContainer}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  };

  return (
    <main className={styles.blogPostContainer}>
      <article className={styles.blogPost}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>
            {new Date(blog.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})  }
          </p>
          <Image
            alt=""
            width={800}
            height={400}
            src={blog.image}
            className={styles.blogImage}
          />
        </header>

        <div className={styles.blogContent}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <footer className={styles.blogFooter}>
          <p>Written by Vincent Le</p>
        </footer>
      </article>
    </main>
  );
}


export async function generateStaticParams() {
  const blogs = await getBlogs();
  if (!blogs) return [];
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
} 

//Metadata for each post
export async function generateMetadata({ params }: { params: Params  }) {
  const { slug } = await params;
  const blog = await getBlogsBySlug(slug);
  return blog
    ? { title: `${blog.title} • Vincent Le`, description: blog.description }
    : { title: "Blog Post Not Found" };
}

