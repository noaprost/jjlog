import PostCard from "@/components/PostCard";
import Profile from "@/components/Profile";
import Slide from "@/components/Slide";
import { getPostCard } from "@/service/posts";

export default async function Home() {
  // feture, may like 페이지 구현
  const notSortedpostCards = await getPostCard();
  const postCards = notSortedpostCards.sort(
    (a, b) => Number(b.id) - Number(a.id)
  );
  return (
    <div>
      <Profile />
      <h1 className="text-2xl font-bold pl-12">Featured Posts</h1>
      <div className="px-12">
        <Slide>
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
        </Slide>
      </div>
      <h1 className="text-2xl font-bold pl-12 pt-24">You may like</h1>
      <div className="px-12">
        <Slide>
          {postCards
            .filter((card) => !card.featured)
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
        </Slide>
      </div>
    </div>
  );
}
