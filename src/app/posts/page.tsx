import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  const postCards = await getPostCard();
  const sortedPostCard = postCards.sort((a, b) => Number(b.id) - Number(a.id));
  const categoryies: string[] = ["backend", "frontend", "algorithm", "study"];

  return (
    <div>
      <FilterablePosts posts={sortedPostCard} categories={categoryies} />
    </div>
  );
}
