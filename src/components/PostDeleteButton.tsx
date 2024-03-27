"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function PostDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const handleClick = () => {
    // id 보내서 삭제 되도록
    router.back();
  };
  return (
    <FaRegTrashAlt
      className="mr-2 w-4 h-4 cursor-pointer"
      onClick={handleClick}
    />
  );
}
