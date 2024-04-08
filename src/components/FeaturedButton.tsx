"use client";

import API from "@/service/axios";
import { error } from "console";
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

  useEffect(() => {
    setData(featured);
  }, [featured]);

  const handleClick = () => {
    async function fetchData() {
      await API.put(`/posts/featured/${id}`, undefined, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((resp) => {
          setData(resp.data);
          console.log("featured button", resp);
        })
        .catch(() => {
          alert("핀 개수를 초과하였습니다 (최대 8개)");
        });
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
