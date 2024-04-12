import Link from "next/link";
import React from "react";
import LoginInfo from "./LoginInfo";

export default function Header() {
  return (
    <header className="flex justify-between p-4 mx-8">
      <Link href="/" className="text-2xl font-semibold">
        JJBlog
      </Link>
      <LoginInfo />
    </header>
  );
}
