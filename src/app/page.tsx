"use client";
import Home from "@/components/Home";
import API from "@/service/axios";
import { PostCard } from "@/service/posts";
import React, { useEffect, useState } from "react";

export type Response = {
  featuredList: PostCard[];
  ymlList: PostCard[];
};

export default function HomePage() {
  const [data, setData] = useState<Response>({
    featuredList: [],
    ymlList: [],
  });
  useEffect(() => {
    async function fetchData() {
      const res = await API.get("/home");
      setData(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);
  return <Home data={data} />;
}
