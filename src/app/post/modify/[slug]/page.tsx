import Modify from "@/components/Modify";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ModifyPage({ params: { slug } }: Props) {
  return <Modify id={Number(slug)} />;
}
