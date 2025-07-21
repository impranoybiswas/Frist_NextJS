import Link from "next/link";
import React from "react";

interface CardProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

export default function Card({ post: { id, title, body } }: CardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg shadow-md p-5 w-50">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link className="text-blue-500" href={`/posts/${id}`}>Read More</Link>
    </div>
  );
}
