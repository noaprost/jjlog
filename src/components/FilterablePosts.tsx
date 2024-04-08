"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Category from "./Category";
import { PostInfo } from "@/service/posts";
import API from "@/service/axios";

// 파라미터를 카테고리만 받고, post는 이 페이지 내에서 계속 받아오는 걸로
// useEffect로 처음 데이터 받아오고, 나중에는 클릭하면 받아오는걸로
// 버튼 그려주는게 조금 어렵겠지만 힘내보장

type Props = {
  categories: string[];
};

type PageInfo = {
  page: number;
  size: number;
  total: number;
  start: number;
  end: number;
  prev: boolean;
  next: boolean;
  postCard: PostInfo[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ categories }: Props) {
  const [selected, setSelected] = useState<string>(ALL_POSTS);
  const [prevCategory, setprevCategory] = useState<string>("1");
  const [clicked, setClicked] = useState<string>("1");
  const [empty, setEmpty] = useState<boolean>(false);
  const [page, setPage] = useState<PageInfo>({
    page: 1,
    size: 0,
    total: 0,
    start: 0,
    end: 0,
    prev: false,
    next: false,
    postCard: [],
  });
  useEffect(() => {
    async function fetchData() {
      if (prevCategory !== selected) {
        setClicked("1");
      }
      if (selected === ALL_POSTS) {
        const res = await API.get(`/list?page=${clicked}`);
        setEmpty(false);
        setprevCategory(selected);
        setPage(res.data);
        console.log("post", res.data);
      } else {
        const res = await API.get(`/list?page=${clicked}&category=${selected}`);
        if (res.data.page === 0) {
          setEmpty(true);
          setprevCategory(selected);
          setPage(res.data);
        } else {
          setEmpty(false);
          setprevCategory(selected);
          setPage(res.data);
        }
        console.log("post", res.data);
      }
    }
    fetchData();
  }, [clicked, selected]);

  const len = Math.ceil(page.postCard ? page.postCard.length / 3 : 0);

  let pages: number[] = [];
  for (let i = page.start; i <= page.end; i++) {
    pages.push(i);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = e.target as HTMLButtonElement;
    setClicked(element.value);
  };

  return (
    <section>
      <div className="flex">
        {empty && (
          <p className="text-center m-auto text-lg">
            {selected} 카테고리에 포스트가 없습니다😢
          </p>
        )}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-${
            len > 2 ? len : 2
          } gap-7 py-8 pl-8`}
        >
          {page.postCard &&
            page.postCard.map((post) => (
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
        {page.prev && <button className="text-orange-500">{`\<`} 이전</button>}
        {!empty &&
          pages.map((item) => (
            <button
              className={`ml-9`}
              key={item}
              value={item}
              onClick={handleClick}
            >
              {item}
            </button>
          ))}
        {page.next && (
          <button className="text-orange-500 ml-9">다음 {`\>`}</button>
        )}
      </div>
    </section>
  );
}
