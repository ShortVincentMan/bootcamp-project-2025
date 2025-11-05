import styles from "./blog.module.css";
import BlogPreview from '../../components/blogPreview';
import blogs from "../blogData";
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";

async function getBlogs(){
    await connectDB()

    try {
        const blogs = (await Blog.find()).sort({ date: -1}).orFail()
        return blogs
    } catch (err) {
        return null
    }
}
export default async function BlogIndex() {
    const blogs = await getBlogs();

    if (!blogs) {
        return <p>Failed to load blogs</p>;
    }


    return (
        <main className="main">
            <div className="page-wrap">
            <h1 className="page-title">Blogs</h1>
            <div className={styles.grid}>
        {blogs.map((blog) => (
  <BlogPreview key={blog.slug} {...blog} />))}
        </div>
        </div>
        </main>
    );
}