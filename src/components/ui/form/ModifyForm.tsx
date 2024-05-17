"use client";
import API from "@/service/axios";
import { PostData } from "@/service/posts";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Writer from "../../Writer";

type Request = {
  title: string;
  description: string;
  category: string;
  content: string;
};

export default function ModifyForm({ post }: { post: PostData }) {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { id, title, description, category, content, writer } = post;
  const router = useRouter();
  
  const [modifyPost, setModifyPost] = useState<Request>({
    title: "",
    description: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    setModifyPost((mpost) => ({
      ...mpost,
      title: title,
      description: description,
      category: category,
      content: content,
    }));
  }, [title, description, category, content]);

  const [file, setFile] = useState<File | null>(null);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmit) {
      return;
    }
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

      API.put(`/posts/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    }
    setIsSubmit(true);
    fetchData()
      .then(() => {
        Swal.fire({
          text: "수정이 완료되었습니다.",
          confirmButtonColor: "orange",
          confirmButtonText: "확인",
          icon: "success",
          width: "400px",
          timer: 1000,
        });
        setIsSubmit(false);
        router.back();
      })
      .catch((e) => alert(`글 수정에 실패했습니다. Error :  ${e}`));
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files ? files[0] : null);
      return;
    }
    setModifyPost((mpost) => ({ ...mpost, [name]: value }));
  };
  return (
    <form
      className="flex flex-col mx-40 mt-12 px-12 border-neutral-200 dark:border-neutral-900 border-2 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="text-2xl font-semibold outline-none p-3 mt-12 dark:bg-black rounded-md"
        required
        autoFocus
        placeholder="제목을 입력하세요"
        name="title"
        type="text"
        value={modifyPost.title}
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
        value={modifyPost.description}
        onChange={handleChange}
      />
      <Writer writer={writer} />
      <input
        className="p-2 mb-8 border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 rounded-md dark:bg-neutral-900"
        type="file"
        name="file"
        placeholder="사진을 선택하세요"
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="category">카테고리 :</label>
        <select
          id="category"
          className="w-min border dark:border-2 border-neutral-200 dark:border-neutral-800 outline-neutral-300 dark:outline-neutral-900 outline-offset-1 dark:bg-neutral-900 rounded-md p-1"
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
        className="p-2 outline-neutral-200 outline-offset-1 rounded-md mb-4 bg-neutral-100 dark:bg-neutral-900"
        placeholder="내용 / 마크다운 문법을 사용해 입력해주세요"
        rows={20}
        value={modifyPost.content}
        onChange={handleChange}
      />
      <button className="bg-orange-400 p-3 text-lg font-semibold rounded-md text-black mb-8">
        수정하기
      </button>
    </form>
  );
}
