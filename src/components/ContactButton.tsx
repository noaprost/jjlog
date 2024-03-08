"use client";

import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      className="bg-orange-400 p-1 rounded-xl text-black font-semibold text-sm"
      onClick={() => router.push("/contact")}
    >
      Contact me
    </button>
  );
}
