"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function WriteButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/post/new");
  };
  return (
    <button
      className="bg-orange-400 rounded-full p-2 text-black"
      onClick={handleClick}
    >
      <FaRegPenToSquare className="mx-auto my-auto" />
    </button>
  );
}
