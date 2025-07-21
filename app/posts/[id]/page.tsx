"use client";
import { Post, usePost } from "@/app/hooks/usePosts";
import Loading from "@/app/loading";
import { useParams } from "next/navigation";
import React from "react";

export default function PostPage() {
  const { id } = useParams();
  const { data: post, isLoading, isError } = usePost(id as string);
  
    if (isLoading) return <Loading/>;
    if (isError) return <p>Failed to load posts.</p>;

    const { title, description } = post as Post;

  return (
    <section className="flex flex-col items-center gap-2 h-dvh container mx-auto bg-red-50 py-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{description}</p>
    </section>
  );
}
