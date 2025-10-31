import BlogPreview from '../../components/blogPreview';
import blogs from "../blogData";


export default function BlogIndex() {
    return (
        <main style={{ width: "75%", margin: 20,}}>
            <h1>Blogs</h1>
            <div style={{
                display: "grid",
                gap: 20,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))"
            }}>
        {blogs.map((blog) => (
  <BlogPreview key={blog.slug} {...blog} />))}
        </div>
        </main>
    );
}