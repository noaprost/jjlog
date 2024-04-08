import path from "path";
import { promises as fs, readFileSync } from "fs";

export type PostInfo = {
  id: number;
  title: string;
  description: string;
  writer: string;
  category: string;
  day: string;
  fileName: string;
  featured: boolean;
};

export type PostData = PostInfo & { content: string } & {
  next: PostInfo | null;
  prev: PostInfo | null;
};

export async function getPostCard(): Promise<PostInfo[]> {
  const filePath = path.join(process.cwd(), "data", "post-card.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPostsByCategory(
  category: string
): Promise<PostInfo[]> {
  const posts = await getPostCard();
  if (category === "All Posts") {
    return posts;
  }

  return posts.filter((post) => post.category === category);
}

export async function getPostById(id: number): Promise<PostData> {
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
