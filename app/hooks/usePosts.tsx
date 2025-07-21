"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Step 1: Post interface
export interface Post {
  _id: string;
  title: string;
  description: string;
  date: string;
}

// Step 2: Fetch all posts
const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get<Post[]>("/api/posts");
  return res.data;
};

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}

// Step 3: Fetch a single post
const fetchPost = async (id: string): Promise<Post> => {
  const res = await axios.get<Post>(`/api/posts/${id}`);
  return res.data;
};

export function usePost(id: string) {
  return useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
  });
}
