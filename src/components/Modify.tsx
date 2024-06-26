"use client";
import API from "@/service/axios";
import { PostData } from "@/service/posts";
import React, { useEffect, useState } from "react";
import ModifyForm from "./ui/form/ModifyForm";

export default function Modify({ id }: { id: number }) {
  const [data, setData] = useState<PostData>({
    id: 0,
    title: "",
    description: "",
    writer: "",
    category: "",
    day: "",
    fileName: "",
    featured: false,
    content: "",
    next: null,
    prev: null,
  });
  useEffect(() => {
    async function fetchData() {
      const res = await API.get(`/posts/${id}`);
      setData(res.data);
    }
    fetchData();
  }, [id]);
  return <ModifyForm post={data} />;
}
