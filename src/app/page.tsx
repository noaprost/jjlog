import Home from "@/components/Home";
import { PostInfo } from "@/service/posts";

export type Response = {
  featuredList: PostInfo[];
  ymlList: PostInfo[];
};

export default async function HomePage() {
  return <Home />;
}
