import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import { getPostCard } from "@/service/posts";

export default async function Home() {
  // feture, may like 페이지 구현
  const postCards = await getPostCard();
  return (
    <div>
      <Profile />
      <h1 className="text-xl font-bold pl-12 pt-12 pb-4">Featured Posts</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-y-8 justify-center px-12">
        {postCards
          .filter((card) => card.featured)
          .map((card) => (
            <PostCard
              key={card.id}
              id={card.id}
              image={card.image}
              day={card.day}
              title={card.title}
              description={card.description}
              category={card.category}
            />
          ))}
      </div>
    </div>
  );
}
