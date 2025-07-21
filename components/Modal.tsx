import React, { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
  }

export default function Modal({ isOpen , onClose, title, children } : ModalProps) {
  return (
    <div
      className={`min-w-120 min-h-60 rounded-lg shadow-lg bg-white border border-gray-200 p-5 absolute transition-all duration-500 ease-in-out transform left-1/2 -translate-x-1/2 z-60  
  ${isOpen ? "top-10 opacity-100" : "-top-130 opacity-0"}`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span
          className="size-8 border border-gray-300 rounded-full text-2xl cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-900 hover:border-gray-600 transition duration-300 ease-in-out"
          onClick={onClose}
        >
          <IoCloseOutline />
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
