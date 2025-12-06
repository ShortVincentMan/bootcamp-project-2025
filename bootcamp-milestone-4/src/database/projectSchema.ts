import mongoose, { Schema } from "mongoose";
import connectDB from "./db";

export type IComment = {
    user: string;
    content: string;
    date: Date;
}

// typescript type
export type Project = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
    image: string;
    image_alt: string;
    comments: IComment[];
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: false, default: Date.now },
    }, {_id: false}
);
 
//mongoose schema
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    comments: { type: [commentSchema], required: true, default: [] },
})

// defining the collection and model
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export async function getProjects(): Promise<Project[] | null> {
    await connectDB()

    try {
        const projects = await Project.find().sort({ date: -1 }).orFail();
        return projects;
    } catch (err) {
        console.error("Error fetching projects:", err)
        return null;
    }
}

export async function getProjectsbySlug(slug: string): Promise<Project | null> {
    console.log("🔎 getProjectsbySlug called with:", slug);
    if  (!slug) {
        console.error("getProjectsbySlug called without slug");
        return null;
    }

    await connectDB()

    try {
        const project = await Project.findOne({ slug }).orFail();
        return project;
    } catch (err) {
        console.error("Error fetching project:", err)
        return null;
    }
}

export default Project;