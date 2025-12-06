import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Project from '@/database/projectSchema';

type IParams = {
    params: Promise<{ slug: string }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
    try {
        await connectDB(); // connect to MongoDB
        const body = await req.json();
        // parse req (req is short for request btw) data
        const { slug } = await params;
        const { user, content } = body;

        // validation for required fields
        if (!slug) {
            return NextResponse.json(
                { error: 'Missing portfolio slug' }, 
                { status: 400 }
            );
        }

        if (!user || !content) {
            return NextResponse.json(
                { error: 'Missing user or content for comment' },
                { status: 400 }
            );
        }
        // add comment to project post
        const newComment = await Project.findOneAndUpdate(
            { slug },
            { $push: { comments: { user, content, date: new Date() } } },
            { new: true }
        );
        if (!newComment) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }
        // return success response
        return NextResponse.json(
            { message: 'Comment added successfully', project: newComment },
            { status: 201 }
        );
    }
    // If nothing appears in try, go to catch so webpage doesn't eat shit
    catch (error) {
        console.error('Error adding comment')
        return NextResponse.json(
            { error: 'Error adding comment' }, 
            { status: 500 }
        );
    }
}