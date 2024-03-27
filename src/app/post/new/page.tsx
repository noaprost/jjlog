"use client";
import { PostData } from "@/service/posts";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function NewPostPage() {
  const [post, setPost] = useState<PostData>({
    id: "",
    image: "",
    writer: "",
    day: "",
    title: "",
    description: "",
    category: "",
    content: "",
    featured: false,
    next: null,
    prev: null,
  });
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 데이터 전송하면
    // 거기서 id 추가 해서 DB 업데이트
    console.log(post);
    router.push("/posts");
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((post) => ({ ...post, [name]: value }));
  };
  return (
    <form
      className="flex flex-col mx-16 p-4 border-neutral-200 dark:border-neutral-900 border-2 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="text-2xl font-semibold outline-none p-3 mb-4 dark:bg-black rounded-md"
        required
        autoFocus
        placeholder="제목을 입력하세요"
        name="title"
        type="text"
        value={post.title || ""}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none dark:bg-neutral-900 rounded-md"
        required
        placeholder="글에 대한 설명을 한줄로 입력해주세요"
        name="description"
        type="text"
        value={post.description || ""}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none dark:bg-neutral-900 rounded-md"
        required
        placeholder="작성자를 입력하세요"
        name="writer"
        type="text"
        value={post.writer || ""}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none dark:bg-neutral-900 rounded-md"
        required
        type="file"
        name="image"
        placeholder="사진을 선택하세요"
        value={post.image || ""}
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="category">카테고리 :</label>
        <select
          id="category"
          className="w-min outline-none dark:bg-neutral-900 rounded-md"
          name="category"
          value={post.category || ""}
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
        className="p-2 outline-neutral-200 outline-offset-1 rounded-md mb-4 dark:bg-neutral-900"
        className="p-2 outline-neutral-200 outline-offset-1 rounded-md mb-4"
        placeholder="내용 / 마크다운 문법을 사용해 입력해주세요"
        rows={20}
        value={post.content || ""}
        onChange={handleChange}
      />
      <button className="bg-orange-400 p-3 text-lg font-semibold rounded-md text-black">
        등록하기
      </button>
    </form>
  );
}
