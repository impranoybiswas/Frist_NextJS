"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function Post() {
  const { id } = useParams();

  return (
    <section className="flex flex-col justify-center items-center gap-2  h-dvh container mx-auto bg-red-50">
      <h1>Post {id}</h1>
    </section>
  );
}
