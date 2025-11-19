//commentSchema.ts

import { Schema } from "mongoose";
import { IComment } from "@/components/comment/comment";

// Mongoose schema for contents
export const commentSchema = new Schema<IComment>({
    username: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: false, default: Date.now },
});

export default commentSchema;