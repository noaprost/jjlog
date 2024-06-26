"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { LuPen } from "react-icons/lu";

export default function ModifiyButton({ id }: { id: number }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/post/modify/${id}`);
  };
  return <LuPen className="w-5 h-5 cursor-pointer" onClick={handleClick} />;
}
