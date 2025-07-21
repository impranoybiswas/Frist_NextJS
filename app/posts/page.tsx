"use client";
import React, { useState } from "react";
import { Post, usePosts } from "@/app/hooks/usePosts";
import { LuPlus } from "react-icons/lu";
import Card from "./ui/Card";
import Modal from "@/components/Modal";

export default function PostsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 py-10 container mx-auto bg-red-50 p-5">
      {posts?.map((post : Post) => (
        <Card key={post._id} post={post} />
      ))}
       <div className="rounded-lg shadow-md p-5 flex flex-col justify-center items-center gap-2 border border-gray-200 group cursor-pointer min-h-50">
          <div
            onClick={openModal}
            className="rounded-full border-[2px] border-gray-200 size-30 text-8xl flex justify-center items-center text-gray-500 group-hover:text-gray-900 group-hover:border-gray-600 transition duration-200 ease-in-out"
          >
            <LuPlus />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Post Details">
        <p>This is the content inside the modal.</p>
      </Modal>
    </section>
  );
}
