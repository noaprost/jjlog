"use client";
import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { useAuthContext } from "@/context/AuthContext";

export default function LoginInfo() {
  const { user, setUser } = useAuthContext();
  const handleClick = () => {
    setUser(false);
  };
  return (
    <div className="flex w-52 justify-evenly items-center">
      {user && (
        <div className="flex justify-evenly items-center">
          <ProfileImage width={32} height={32} />
          <button className="ml-3" onClick={handleClick}>
            Logout
          </button>
        </div>
      )}
      {!user && <Link href="/login">Login</Link>}
      <DarkModeToggleButton />
    </div>
  );
}
