"use client";

import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      className="bg-orange-400 py-1 px-2 rounded-xl text-black font-semibold text-sm"
      onClick={() => router.push("/contact")}
    >
      Contact us
    </button>
  );
}
