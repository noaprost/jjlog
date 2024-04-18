"use client";

import API from "@/service/axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

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
    <>
      {data ? (
        <FaStar
          className={"w-5 h-5 cursor-pointer text-orange-500"}
          onClick={handleClick}
        />
      ) : (
        <FaRegStar
          className="w-5 h-5 cursor-pointer text-orange-500"
          onClick={handleClick}
        />
      )}
    </>
  );
}
