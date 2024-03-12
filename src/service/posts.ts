import path from "path";
import { promises as fs } from "fs";

export type PostCard = {
  id: string;
  image: string;
  day: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
};

export async function getPostCard(): Promise<PostCard[]> {
  const filePath = path.join(process.cwd(), "data", "post-card.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPostsByCategory(
  category: string
): Promise<PostCard[]> {
  const posts = await getPostCard();
  if (category === "All Posts") {
    return posts;
  }
  return posts.filter((post) => post.category === category);
}

export async function getPostById(id: string): Promise<PostCard> {
  const posts = await getPostCard();
  return posts.filter((post) => post.id === id)[0];
}
