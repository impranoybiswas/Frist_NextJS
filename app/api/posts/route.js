import connectDB from "@/lib/mongo-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const postCollection = await connectDB("posts");
    const posts = await postCollection.find().toArray();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const body = await req.json();
  try {
    const postCollection = await connectDB("posts");
    const result = await postCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

