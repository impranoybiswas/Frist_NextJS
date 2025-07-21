import Link from "next/link";
import React from "react";

interface CardProps {
  post: {
    _id: string;
    title: string;
    description: string;
  };
}

export default function Card({ post: { _id, title, description } }: CardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg shadow-md p-5 w-full border border-gray-200 min-h-50">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="text-blue-500" href={`/posts/${_id}`}>Read More</Link>
    </div>
  );
}
