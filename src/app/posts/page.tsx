import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  // 여기서 기본 포스트를 받아오고
  const postCards = await getPostCard();
  const categoryies: string[] = ["backend", "frontend", "algorithm", "study"];

  return (
    <div>
      <FilterablePosts posts={postCards} categories={categoryies} />
    </div>
  );
}
