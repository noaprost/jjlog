import ModifyForm from "@/components/ModifyForm";
import { PostData, getPostById } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ModifyPage({ params: { slug } }: Props) {
  const post = await getPostById(Number(slug));
  return (
    <>
      <ModifyForm post={post} />
    </>
  );
}
