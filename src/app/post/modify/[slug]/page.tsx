import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function ModifyPage({ params: { slug } }: Props) {
  return <h1>글을 수정할 수 있는 페이지입니다 : {slug}</h1>;
}
