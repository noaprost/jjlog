"use client";
import API from "@/service/axios";
import { PostData } from "@/service/posts";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

type Request = {
  title: string;
  description: string;
  category: string;
  content: string;
};

export default function ModifyForm({ post }: { post: PostData }) {
  const [modifyPost, setModifyPost] = useState<Request>({
    title: "",
    description: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    setModifyPost((mpost) => ({
      ...mpost,
      title: post.title,
      description: post.description,
      category: post.category,
      content: post.content,
    }));
  }, [post.title, post.description, post.category, post.content]);

  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function fetchData() {
      const formData = new FormData();
      if (file === undefined) {
        setFile(null);
      }
      formData.append("file", file as File);
      formData.append(
        "postDTO",
        new Blob([JSON.stringify(modifyPost)], { type: "application/json" })
      );

      const res = await API.put(`/posts/${post.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(res.data);
    }
    fetchData();
    router.push(`/`);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      console.log(files && files[0]);
      setFile(files ? files[0] : null);
      return;
    }
    setModifyPost((mpost) => ({ ...mpost, [name]: value }));
  };
  return (
    <form
      className="flex flex-col mx-16 p-4 border-neutral-200 dark:border-neutral-900 border-2 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="text-2xl font-semibold outline-none p-3 mb-4 dark:bg-neutral-900 rounded-md"
        required
        autoFocus
        placeholder="제목을 입력하세요"
        name="title"
        type="text"
        value={modifyPost.title}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none bg-neutral-100 dark:bg-neutral-900 rounded-md"
        required
        placeholder="글에 대한 설명을 한줄로 입력해주세요"
        name="description"
        type="text"
        value={modifyPost.description}
        onChange={handleChange}
      />
      <p className="p-2 mb-4">{post.writer}</p>
      <input
        className="p-2 mb-4 outline-none dark:bg-neutral-900 rounded-md"
        type="file"
        name="file"
        placeholder="사진을 선택하세요"
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="category">카테고리 :</label>
        <select
          id="category"
          className="w-min outline-none bg-neutral-100 dark:bg-neutral-900 rounded-md"
          name="category"
          value={modifyPost.category}
          onChange={handleChange}
        >
          <option>frontend</option>
          <option>backend</option>
          <option>algorithm</option>
          <option>study</option>
        </select>
      </div>
      <textarea
        required
        name="content"
        className="p-2  outline-neutral-200 outline-offset-1 rounded-md mb-4 bg-neutral-100 dark:bg-neutral-900"
        placeholder="내용 / 마크다운 문법을 사용해 입력해주세요"
        rows={20}
        value={modifyPost.content}
        onChange={handleChange}
      />
      <button className="bg-orange-400 p-3 text-lg font-semibold rounded-md text-black">
        수정하기
      </button>
    </form>
  );
}
