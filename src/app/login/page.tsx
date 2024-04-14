"use client";

import { useAuthContext } from "@/context/AuthContext";
import API from "@/service/axios";
import { getTokenAPI } from "@/service/token";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const { updateUser, updateUserName } = useAuthContext();

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setId(e.target.value);
  };
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTokenAPI({ id, pass })
      .then(() => {
        updateUser(true);
        async function fetchData() {
          const res = await API.get("/member", {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          });
          console.log("member", res.data);
          updateUserName(res.data.mid);
        }
        fetchData();
        router.push("/");
      })
      .catch(() => alert("아이디 혹은 비밀번호가 틀립니다."));
  };

  return (
    <section className="w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/3 h-2/3 justify-center items-center mx-auto bg-orange-400 shadow-customLight dark:shadow-custom rounded-2xl p-6"
      >
        <label htmlFor="id" className="self-start text-white mb-2">
          아이디
        </label>
        <input
          onChange={handleIdChange}
          id="id"
          name="id"
          type="text"
          required
          autoFocus
          className="w-full mb-6 p-1 rounded-lg"
        />
        <label htmlFor="pass" className="self-start text-white mb-2">
          password
        </label>
        <input
          onChange={handlePassChange}
          id="pass"
          name="pass"
          type="password"
          required
          className="w-full mb-6 p-1 rounded-lg"
        />
        <button type="submit" className="text-white font-semibold text-lg">
          로그인
        </button>
      </form>
    </section>
  );
}
