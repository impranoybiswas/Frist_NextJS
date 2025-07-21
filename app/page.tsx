"use client";
import Modal from "@/components/Modal";
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="container mx-auto bg-gray-100 flex flex-col justify-center items-center py-20 my-10 rounded-lg shadow-md ">
      <h1 className="text-3xl font-semibold">Count: {count}</h1>

      <div className="flex gap-4 mt-4 items-center">
        <button
          onClick={increment}
          className="flex justify-center items-center size-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >+</button>
        <button
          onClick={decrement}
          className="flex justify-center items-center size-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >-</button>
      </div>

      <button
      onClick={openModal}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-5'>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <p>Modal Content</p>
      </Modal>


    </div>
  );
}
