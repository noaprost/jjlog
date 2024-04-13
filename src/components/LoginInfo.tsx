"use client";
import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import DarkModeToggleButton from "./DarkModeToggleButton";
import WriteButton from "./WriteButton";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

export default function LoginInfo() {
  const { user, updateUser } = useAuthContext();
  const router = useRouter();

  useEffect(() => {}, []);

  const handleLogout = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    sessionStorage.setItem("accessToken", "");
    updateUser(false);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex w-max justify-evenly items-center">
      {user ? (
        <div className="flex justify-evenly items-center">
          <ProfileImage width={32} height={32} />
          <button className="ml-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="ml-3" onClick={handleLogin}>
          Login
        </button>
      )}
      <DarkModeToggleButton />
      {user && <WriteButton />}
    </div>
  );
}
