import { NextResponse } from "next/server";
import { getAllUsers } from "../controller/user.controller";

export async function GET() {
  try {
    const items = await getAllUsers();
    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
