import Blog from '@/database/blogSchema';
import connectDB from '@/database/db';
import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'path';



export async function POST(req:NextRequest) {
    const body = await req.json();
    const BlogSlug = parse(body.slug).base;

    await connectDB();

    if (!body.comment || !body.name) {
        console.error('Invalid comment data:', body);
        return NextResponse.json({ error: 'Invalid comment data' }, { status: 400 });
    }

    Blog.updateOne(
        { slug: BlogSlug },
        { $push: { comments: { user: body.name, content: body.comment } } }
    ).then(() => {
        return NextResponse.json('Comment added successfully.', { status: 200 });
    }).catch((error) => {
        console.error('Error adding comment:', error);
        return NextResponse.json({ error: 'Error adding comment' }, { status: 500 });
    });
}