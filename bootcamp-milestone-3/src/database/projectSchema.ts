import mongoose, { Schema } from "mongoose";
import connectDB from "./db";

// typescript type
export type Project = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
    image: string;
    image_alt: string;
    comments: Comment[];
};

//mongoose schema
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
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

export async function getProjectsbyProject(slug: string): Promise<Project | null> {
    console.log("🔎 getProjectsbyProject called with:", slug);
    if  (!slug) {
        console.error("getProjectsbyProject called without slug");
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