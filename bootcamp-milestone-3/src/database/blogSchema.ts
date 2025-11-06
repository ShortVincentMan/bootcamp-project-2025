import mongoose, { Schema } from "mongoose";
import connectDB from "./db";

// typescript type
export type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
    image: string;
    imageAlt: string;
    comments: Comment[];
};

//mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export async function getBlogs(): Promise<Blog[] | null> {
    await connectDB()

    try {
        const blogs = await Blog.find().sort({ date: -1 }).orFail();
        return blogs;
    } catch (err) {
        console.error("Error fetching blogs:", err)
        return null;
    }
}

export async function getBlogsBySlug(slug: string): Promise<Blog | null> {
    await connectDB()

    try {
        const blog = await Blog.findOne({ slug }).orFail();
        return blog as unknown as Blog;
    } catch (err) {
        console.error(`Error fetching blog with slug ${slug}:`, err)
        return null;
    }
}   

export default Blog;