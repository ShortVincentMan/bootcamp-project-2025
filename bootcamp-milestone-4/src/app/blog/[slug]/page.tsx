import Image from "next/image";
import styles from "./blog.module.css";
import { getBlogsBySlug, getBlogs } from "@/database/blogSchema";
import Comment from "@/components/comment/comment";
import CommentForm from "@/components/comment/commentForm";

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
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
              })  
            }
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
          <p>Written by <strong>Vincent Le</strong></p>
        </footer>
      </article>
      <div className={styles.commentsSection}>
        <h2 >Comments ({blog.comments?.length || 0}) </h2>
        {Array.isArray(blog.comments) && blog.comments.length > 0 ? (
          <div className={styles.commentsList}>
            {blog.comments.map((comment, index) => {
              return(
                <Comment key={index} comment={comment} />
              )
            })}
          </div>
        ) : (
          <p className={styles.noComments}>It's empty here... Please comment!</p>
          )}
        <h3>Add a Comment</h3>
        <CommentForm slug={blog.slug}/>
      </div>
    </main>
  );
}
