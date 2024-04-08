"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";
import Category from "./Category";

// 파라미터를 카테고리만 받고, post는 이 페이지 내에서 계속 받아오는 걸로
// useEffect로 처음 데이터 받아오고, 나중에는 클릭하면 받아오는걸로
// 버튼 그려주는게 조금 어렵겠지만 힘내보장

type Props = {
  posts: any[];
  categories: string[];
};
const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  const len = Math.ceil(filterd.length / 3);
  const pages = [1, 2];
  const next = false;
  const prev = false;

  return (
    <section>
      <div className="flex">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-${
            len > 2 ? len : 2
          } gap-7 py-8 pl-8`}
        >
          {filterd.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              fileName={post.fileName}
              day={post.day}
              title={post.title}
              description={post.description}
              category={post.category}
            />
          ))}
        </div>
        <div className="mx-auto">
          <Category
            categories={[ALL_POSTS, ...categories]}
            selected={selected}
            onClick={setSelected}
          />
        </div>
      </div>
      <div className="flex mx-auto w-max justify-between py-12">
        {prev && <button className="text-orange-500">{`\<`} 이전</button>}
        {pages.map((item) => (
          <button className={`ml-9`} key={item}>
            {item}
          </button>
        ))}
        {next && <button className="text-orange-500 ml-9">다음 {`\>`}</button>}
      </div>
    </section>
  );
}
