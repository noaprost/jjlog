"use client";
import MovePost from "@/components/MovePost";
import PostContent from "@/components/PostContent";
import API from "@/service/axios";
import { PostData } from "@/service/posts";
import { useEffect, useState } from "react";

export default function PostDetail({ id }: { id: number }) {
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
      console.log("post detail", res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <PostContent
        id={data.id}
        writer={data.writer}
        day={data.day}
        title={data.title}
        fileName={data.fileName}
        description={data.description}
        content={data.content}
        featured={data.featured}
      />
      <MovePost prev={data.prev} next={data.next} />
    </>
  );
}
