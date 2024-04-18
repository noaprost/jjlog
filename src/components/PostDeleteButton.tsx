"use client";
import API from "@/service/axios";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function PostDeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const handleClick = () => {
    async function fetchData() {
      const result = await Swal.fire({
        text: "정말 삭제하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "orange",
        confirmButtonText: "확인",
        cancelButtonColor: "gray",
        cancelButtonText: "취소",
        width: "400px",
      });

      if (result.isConfirmed) {
        const res = await API.delete(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        console.log("post 삭제", res.data);
        Swal.fire({
          text: "삭제가 완료되었습니다.",
          icon: "success",
          confirmButtonColor: "orange",
          confirmButtonText: "확인",
          width: "400px",
          timer: 1000,
        });
        router.back();
      } else if (result.isDismissed) {
        Swal.fire({
          text: "삭제가 취소되었습니다.",
          icon: "success",
          confirmButtonColor: "orange",
          confirmButtonText: "확인",
          width: "400px",
          timer: 1000,
        });
      }
    }
    fetchData()
      .then()
      .catch((e) => alert(`삭제 실패 : ${e}`));
  };
  return (
    <FaRegTrashAlt
      className="w-5 h-5 cursor-pointer"
      onClick={handleClick}
    />
  );
}
