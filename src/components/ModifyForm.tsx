"use client";
import { PostData } from "@/service/posts";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function ModifyForm({ post }: { post: PostData }) {
  const [modifyPost, setModifyPost] = useState<PostData>(post);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 데이터 전송하면 DB 업데이트
    console.log(post);
    router.push(`/posts/${modifyPost.id}`);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setModifyPost((post) => ({ ...post, [name]: value }));
  };
  return (
    <form
      className="flex flex-col mx-16 p-4 border-neutral-200 border-2 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="text-2xl font-semibold outline-none p-3 mb-4"
        required
        autoFocus
        placeholder="제목을 입력하세요"
        name="title"
        type="text"
        value={modifyPost.title}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none"
        required
        placeholder="글에 대한 설명을 한줄로 입력해주세요"
        name="description"
        type="text"
        value={modifyPost.description}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none"
        required
        placeholder="작성자를 입력하세요"
        name="writer"
        type="text"
        value={modifyPost.writer}
        onChange={handleChange}
      />
      <input
        className="p-2 mb-4 outline-none"
        required
        type="file"
        name="image"
        placeholder="사진을 선택하세요"
        value={modifyPost.image || ""}
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="category">카테고리 :</label>
        <select
          id="category"
          className="w-min outline-none"
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
        className="p-2 outline-neutral-200 outline-offset-1 rounded-md mb-4"
        placeholder="내용 / 마크다운 문법을 사용해 입력해주세요"
        rows={20}
        value={modifyPost.content}
        onChange={handleChange}
      />
      <button className="bg-orange-400 p-3 text-lg font-semibold rounded-md">
        수정하기
      </button>
    </form>
  );
}
