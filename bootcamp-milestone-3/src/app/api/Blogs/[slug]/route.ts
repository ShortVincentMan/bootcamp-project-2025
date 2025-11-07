import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

type IParams = {
    params: {
        slug: string
    }
}

export async function GET() {
    try {

        const connection = await connectDB()

        if (connection) {
            return NextResponse.json(
                {
                    message:"Database connected successfully.",
                    status: "Connected",
                    database: connection.connection.name,
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    message: "Database connection failed.",
                    status: "Not Connected",
                },
                { status: 500 }
            );
        }
    } catch (err) {
        console.error("Database connection error:", err);
        return NextResponse.json(
            {
                message: "Database connection error.",
                status: "Error",
                error: err instanceof Error ? err.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}


