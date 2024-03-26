"use client";
import { PostData } from "@/service/posts";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FeaturedButton({ post }: { post: PostData }) {
  const [featuredPost, setFeaturedPost] = useState<PostData>(post);
  const handleClick = () => {
    setFeaturedPost({
      ...featuredPost,
      featured: !featuredPost.featured,
    });
    // 데이터 보내서 수정
    console.log(post);
  };
  return (
    <FaStar
      className={`w-4 h-4 cursor-pointer ${
        featuredPost.featured ? "text-orange-500" : ""
      }`}
      onClick={handleClick}
    />
  );
}
