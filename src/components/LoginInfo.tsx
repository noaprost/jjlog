"use client";
import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";
import WriteButton from "./WriteButton";

export default function LoginInfo() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("accessToken")!);
  }, []);

  return (
    <div className="flex w-max justify-evenly items-center">
      {token !== "" && (
        <div className="flex justify-evenly items-center">
          <ProfileImage width={32} height={32} />
          <button
            className="ml-3"
            onClick={() => {
              localStorage.setItem("accessToken", "");
              localStorage.setItem("refreshToken", "");
              setToken("");
            }}
          >
            Logout
          </button>
        </div>
      )}
      {token === "" && (
        <Link className="ml-3" href="/login">
          Login
        </Link>
      )}
      <DarkModeToggleButton />
      {token !== "" && <WriteButton />}
    </div>
  );
}
