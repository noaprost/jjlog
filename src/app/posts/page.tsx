import FilterablePosts from "@/components/FilterablePosts";
import { getPostCard } from "@/service/posts";

export default async function PostsByCategory() {
  const categoryies: string[] = ["backend", "frontend", "algorithm", "study"];

  return (
    <div>
      <FilterablePosts categories={categoryies} />
    </div>
  );
}
