import PostsByCategory from "@/components/PostsByCategory";

export default function PostsPage() {
  return (
    <div className="flex h-max">
      <PostsByCategory category="backend" />
      <div className="w-1/4 h-72 flex flex-col justify-evenly items-center mt-24 mx-auto">
        <p className="font-bold underline underline-offset-8">Category</p>
        <p className="cursor-pointer font-light hover:scale-110">All Posts</p>
        <p className="cursor-pointer font-light hover:scale-110">algorithm</p>
        <p className="cursor-pointer font-light hover:scale-110 text-orange-400">
          backend
        </p>
        <p className="cursor-pointer font-light hover:scale-110">frontend</p>
        <p className="cursor-pointer font-light hover:scale-110">study</p>
      </div>
    </div>
  );
}
