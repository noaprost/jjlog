"use client";
import API from "@/service/axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";

type Request = {
  title: string;
  description: string;
  writer: string;
  category: string;
  content: string;
};

export default function New({ name }: { name: string }) {
  const [post, setPost] = useState<Request>({
    title: "",
    description: "",
    writer: name,
    category: "",
    content: "",
  });
  const [file, setFile] = useState<File | null>();
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function fetchData() {
      const formData = new FormData();
      formData.append("file", file as File);
      formData.append(
        "postDTO",
        new Blob([JSON.stringify(post)], { type: "application/json" })
      );

      const res = await API.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("new", res.data);
    }
    fetchData().then(() => {
      Swal.fire({
        text: "글이 등록되었습니다.",
        icon: "success",
        timer: 1000,
        confirmButtonText: "확인",
        confirmButtonColor: "orange",
        width: "400px",
      });
      router.push("/");
    });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setPost((post) => ({ ...post, [name]: value }));
  };
  return (
    <form
      className="flex flex-col mt-12 mx-32 px-12 border-neutral-200 dark:border-neutral-900 border-2 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="text-2xl font-semibold outline-none p-3 mt-12 dark:bg-black rounded-md"
        required
        autoFocus
        placeholder="제목을 입력하세요"
        name="title"
        type="text"
        value={post.title || ""}
        onChange={handleChange}
      />
      <hr className="mb-6" />
      <br />
      <input
        className="p-2 mb-8 border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 dark:bg-neutral-900 rounded-md"
        required
        placeholder="글에 대한 설명을 한줄로 입력해주세요"
        name="description"
        type="text"
        value={post.description || ""}
        onChange={handleChange}
      />
      <p className="mb-8 font-semibold">{post.writer}</p>
      <input
        className="p-2 mb-8 border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 rounded-md dark:bg-neutral-900"
        required
        accept="*.jpg,*.png"
        type="file"
        name="file"
        placeholder="사진을 선택하세요"
        onChange={handleChange}
      />
      <div className="mb-8">
        <label htmlFor="category">카테고리 : </label>
        <select
          id="category"
          className="w-min border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 dark:bg-neutral-900 rounded-md p-1"
          name="category"
          required
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
        className="p-2 border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 rounded-md mb-8 dark:bg-neutral-900"
        placeholder="내용 / 마크다운 문법을 사용해 입력해주세요"
        rows={20}
        value={post.content || ""}
        onChange={handleChange}
      />
      <button className="bg-orange-400 p-3 text-lg font-semibold rounded-md mb-8 text-black">
        등록하기
      </button>
    </form>
  );
}
