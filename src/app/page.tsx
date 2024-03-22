import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import Slide from "@/components/Slide";
import { getPostCard } from "@/service/posts";

export default async function Home() {
  // feture, may like 페이지 구현
  const postCards = await getPostCard();
  return (
    <div>
      <Profile />
      <h1 className="text-2xl font-bold pl-12 pt-12 pb-8">Featured Posts</h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 px-12`}
      >
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
      <h1 className="text-2xl font-bold pl-12 pt-24">You may like</h1>
      <div className="p-12">
        <Slide>
          {postCards.map((card) => (
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
        </Slide>
      </div>
    </div>
  );
}
