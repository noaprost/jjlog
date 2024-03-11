import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/service/posts";

type Props = {
  category: string;
};

export default async function PostsByCategory({ category }: Props) {
  const postCards = await getPostsByCategory(category);
  const len = Math.ceil(postCards.length / 3);
  return (
    <div
      className={`grid grid-cols-3 grid-rows-${
        len > 2 ? len : 2
      } gap-7 py-8 pl-8`}
    >
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
    </div>
  );
}
