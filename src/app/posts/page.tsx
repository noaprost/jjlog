import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  const postCards = await getPostCard();
  const filterd = postCards.map((post) => post.category);
  let categoryies: string[] = [];
  filterd.map((item) => {
    if (!categoryies.includes(item)) {
      categoryies.push(item);
    }
  });

  return (
    <div>
      <FilterablePosts posts={postCards} categories={categoryies} />
      {/* 페이지 구현 */}
    </div>
  );
}
