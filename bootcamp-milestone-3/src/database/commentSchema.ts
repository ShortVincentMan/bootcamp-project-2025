//commentSchema.ts

import mongoose, { Schema } from "mongoose";

export interface IComment {
    username: string;
    content: string;
    date: Date;
}

// Mongoose schema for contents
export const commentSchema = new Schema<IComment>({
    username: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: false, default: Date.now },
});

export default commentSchema;
