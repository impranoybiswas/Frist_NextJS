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


