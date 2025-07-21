"use client";
import React from "react";
import { Post, usePosts } from "@/app/hooks/usePosts";
import Card from "./ui/Card";

export default function PostsPage() {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 py-10 container mx-auto bg-red-50 p-5">
      {posts?.map((post : Post) => (
        <Card key={post._id} post={post} />
      ))}
    </section>
  );
}
