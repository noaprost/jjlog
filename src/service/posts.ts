import path from "path";
import { promises as fs, readFile, readFileSync } from "fs";

export type PostCard = {
  id: string;
  image: string;
  writer: string;
  day: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
};

export type PostData = PostCard & { content: string } & {
  next: PostCard | null;
  prev: PostCard | null;
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

export async function getPostById(id: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data/post", `${id}.md`);
  const posts = await getPostCard();
  const post = posts.filter((post) => post.id === id)[0];

  if (!post) {
    throw new Error("해당 포스트를 찾을 수 없음");
  }
  const content = readFileSync(filePath, "utf-8");
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  return { ...post, content, next, prev };
}
