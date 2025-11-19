import mongoose, { Schema } from "mongoose";
import connectDB from "./db";
import commentSchema, { type IComment } from "./commentSchema";

// typescript type
export type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
    image: string;
    imageAlt: string;
    comments: IComment[];
};

// mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    comments: { type: [commentSchema], required: true, default: [] },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export async function getBlogs(): Promise<Blog[] | null> {
    await connectDB()

    try {
        return await Blog.find().sort({ date: -1 }).orFail();
    } catch (err) {
        console.error("Error fetching blogs:", err);
        return null;
    }
}

export async function getBlogsBySlug(slug: string): Promise<Blog | null> {
    console.log("🔎 getBlogsBySlug called with:", slug);
    if  (!slug) {
        console.error("getBlogsBySlug called without slug");
        return null;
    }
    await connectDB();

    try {
        return await Blog.findOne({ slug }).orFail();
    } catch (err) {
        console.error(`Error fetching blog with slug ${slug}:`, err)
        return null;
    }
}   

export default Blog;