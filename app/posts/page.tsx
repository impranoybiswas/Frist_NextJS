"use client";
import React, { useState, FormEvent } from "react";
import { Post, usePosts } from "@/app/hooks/usePosts";
import { LuPlus } from "react-icons/lu";
import Card from "./ui/Card";
import Modal from "@/components/Modal";
import axios from "axios";
import Swal from "sweetalert2";

export default function PostsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { data: posts, isLoading, isError, refetch } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  const handleAddPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    if (!title || !description)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Input fields are empty !",
      });

    axios.post("/api/posts", { title, description, date: new Date() });

    Swal.fire({
      title: "Good job!",
      text: "YYour New Post Added Successfully !",
      icon: "success",
      showConfirmButton: false,
      timer: 1300,
    });

    refetch();

    form.reset();
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 py-10 container mx-auto bg-red-50 p-5">
      {posts?.map((post: Post) => (
        <Card key={post._id} post={post} />
      ))}
      <div
        onClick={openModal}
        className="rounded-lg shadow-md p-5 flex flex-col justify-center items-center gap-2 border border-gray-200 group cursor-pointer min-h-50">
        <div
          data-aos="zoom-in"
          className="rounded-full border-[2px] border-gray-200 size-30 text-8xl flex justify-center items-center text-gray-500 group-hover:text-gray-900 group-hover:border-gray-600 transition duration-200 ease-in-out">
          <LuPlus />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Post Details">
        <form onSubmit={handleAddPost}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-400 p-2 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-center mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200 cursor-pointer shadow"
          >
            Save
          </button>
        </form>
      </Modal>
    </section>
  );
}
