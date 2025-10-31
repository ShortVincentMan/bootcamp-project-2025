import styles from "./blog.module.css";
import BlogPreview from '../../components/blogPreview';
import blogs from "../blogData";


export default function BlogIndex() {
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