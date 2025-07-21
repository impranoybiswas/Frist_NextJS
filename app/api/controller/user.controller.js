import connectDB from "@/lib/mongo-client";

export async function getAllUsers() {
  const usersCollection = await connectDB("users");
  const items = await usersCollection.find().toArray();
  return items;
}
