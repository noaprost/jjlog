"use client";

import API from "@/service/axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FeaturedButton({
  id,
  featured,
}: {
  id: number;
  featured: boolean;
}) {
  const [data, setData] = useState<boolean>(featured);

  const handleClick = () => {
    async function fetchData() {
      const res = await API.put(`/posts/featured/${id}`, undefined, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(res.data);
      setData(res.data);
    }
    fetchData();
  };
  return (
    <FaStar
      className={`w-4 h-4 cursor-pointer ${data ? "text-orange-500" : ""}`}
      onClick={handleClick}
    />
  );
}
