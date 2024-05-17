"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Category from "./Category";
import { PostInfo } from "@/service/posts";
import API from "@/service/axios";

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
      }
    }
    fetchData();
  }, [clicked, selected, prevCategory]);

  let pages: number[] = [];
  for (let i = page.start; i <= page.end; i++) {
    pages.push(i);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = e.target as HTMLButtonElement;
    setClicked(element.value);
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(String(Number(pages[0]) - 10));
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(String(Number(pages[0]) + 10));
  };

  return (
    <section className="mx-28">
      <div className="flex">
        {empty && (
          <p className="text-lg w-11/12 text-center my-48">
            {selected} 카테고리에 포스트가 없습니다😢
          </p>
        )}
        {!empty && (
          <div className="flex flex-wrap w-11/12">
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
        )}
        <div className="ml-12">
          <Category
            categories={[ALL_POSTS, ...categories]}
            selected={selected}
            onClick={setSelected}
          />
        </div>
      </div>
      <div className="flex mx-auto w-max justify-between py-12">
        {page.prev && (
          <button className="text-orange-500" onClick={handlePrevClick}>
            {`\<`} 이전
          </button>
        )}
        {!empty &&
          pages.map((item) => (
            <button
              className={`ml-9 ${page.page === item ? "text-orange-500" : ""}`}
              key={item}
              value={item}
              onClick={handleClick}
            >
              {item}
            </button>
          ))}
        {page.next && (
          <button className="text-orange-500 ml-9" onClick={handleNextClick}>
            다음 {`\>`}
          </button>
        )}
      </div>
    </section>
  );
}
