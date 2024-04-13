"use client";
import New from "@/components/New";
import { useAuthContext } from "@/context/AuthContext";

export default function NewPostPage() {
  const { getUserName } = useAuthContext();
  const name = getUserName();
  return <New name={name} />;
}
