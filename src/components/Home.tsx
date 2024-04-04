import React from "react";
import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import Slide from "@/components/Slide";
import { Response } from "@/app/page";

export default function Home({ data }: { data: Response }) {
  const { featuredList, ymlList } = data;
  return (
    <div>
      <Profile />
      <h1 className="text-2xl font-bold pl-12">Featured Posts</h1>
      <div className="px-12">
        <Slide>
          {featuredList.map((card) => (
            <PostCard
              key={card.id}
              id={card.id}
              fileName={card.fileName}
              day={card.day}
              title={card.title}
              description={card.description}
              category={card.category}
            />
          ))}
        </Slide>
      </div>
      <h1 className="text-2xl font-bold pl-12 pt-24">You may like</h1>
      <div className="px-12">
        <Slide>
          {ymlList.map((card) => (
            <PostCard
              key={card.id}
              id={card.id}
              fileName={card.fileName}
              day={card.day}
              title={card.title}
              description={card.description}
              category={card.category}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
}
