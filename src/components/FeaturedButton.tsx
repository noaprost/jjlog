"use client";
import { PostData } from "@/service/posts";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FeaturedButton({ post }: { post: PostData }) {
  const [featuredPost, setFeaturedPost] = useState<PostData>(post);
  const pinCount: number = 4;
  const handleClick = () => {
    if (featuredPost.featured) {
      setFeaturedPost({
        ...featuredPost,
        featured: !featuredPost.featured,
      });
      // 데이터 보내서 수정
      console.log(post);
    } else {
      if (pinCount == 4) {
        alert("pin은 4개까지만 등록할 수 있습니다.");
      } else {
        setFeaturedPost({
          ...featuredPost,
          featured: !featuredPost.featured,
        });
        // 데이터 보내서 수정
        console.log(post);
      }
    }
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
