import connectDB from "@/lib/mongo-client";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const postCollection = await connectDB("posts");
    const query = { _id: new ObjectId(id) };
    const post = await postCollection.findOne(query);
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  try {
    const postCollection = await connectDB("posts");
    const query = { _id: new ObjectId(id) };
    const updatedPost = { $set: body };
    const result = await postCollection.updateOne(query, updatedPost);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}