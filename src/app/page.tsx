import Home from "@/components/Home";
import { PostCard } from "@/service/posts";

export type Response = {
  featuredList: PostCard[];
  ymlList: PostCard[];
};

export default async function HomePage() {
  return <Home />;
}
