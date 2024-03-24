"use client";

import React, { useState } from "react";
import PostCard from "./PostCard";
import Category from "./Category";

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
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
              image={post.image}
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
      <div className="flex mx-auto w-3/5 justify-between py-12">
        <button className="text-orange-500">이전 페이지</button>
        {pages.map((item) => (
          <button key={item}>{item}</button>
        ))}
        <button className="text-orange-500">다음 페이지</button>
      </div>
    </section>
  );
}
