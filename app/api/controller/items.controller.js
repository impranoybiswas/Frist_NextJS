import connectDB from "@/lib/mongo-client";
import { ObjectId } from "mongodb";

export async function getAllItems() {
  const itemsCollection = await connectDB("items");
  const items = await itemsCollection.find().toArray();
  return items;
}

export async function getItem(id) {
  const itemsCollection = await connectDB("items");
  const item = await itemsCollection.findOne({ _id: new ObjectId(id) });
  return item;
}