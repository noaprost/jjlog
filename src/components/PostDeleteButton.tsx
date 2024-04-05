"use client";
import API from "@/service/axios";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function PostDeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const handleClick = () => {
    async function fetchData() {
      const res = await API.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("post 삭제", res.data);
    }
    fetchData();
    router.back();
  };
  return (
    <FaRegTrashAlt
      className="mr-2 w-4 h-4 cursor-pointer"
      onClick={handleClick}
    />
  );
}
