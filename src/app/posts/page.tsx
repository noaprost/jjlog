import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  const postCards = await getPostCard();
  const sortedPostCard = postCards.sort((a, b) => Number(b.id) - Number(a.id));
  const filterd = sortedPostCard.map((post) => post.category);
  let categoryies: string[] = [];
  filterd.map((item) => {
    if (!categoryies.includes(item)) {
      categoryies.push(item);
    }
  });

  return (
    <div>
      <FilterablePosts posts={sortedPostCard} categories={categoryies} />
    </div>
  );
}
