import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  const postCards = await getPostCard();
  const sortedPostCard = postCards.sort((a, b) => b.id - a.id);
  const categoryies: string[] = ["backend", "frontend", "algorithm", "study"];

  return (
    <div>
      <FilterablePosts posts={sortedPostCard} categories={categoryies} />
    </div>
  );
}
