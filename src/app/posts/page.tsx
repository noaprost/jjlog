import FilterablePosts from "@/components/FilterablePosts";

export default async function PostsByCategory() {
  const categoryies: string[] = ["backend", "frontend", "algorithm", "study"];

  return (
    <div className="px-12">
      <FilterablePosts categories={categoryies} />
    </div>
  );
}
