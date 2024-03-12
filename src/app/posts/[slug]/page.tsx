import PostCard from "@/components/PostCard";
import { getPostById } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  // post 상세페이지 구현
  const post = await getPostById(slug);
  return (
    <div>
      <Image
        src={`/images/${post.image}`}
        alt={post.title}
        width={280}
        height={100}
      />
      <h1>{post.title}</h1>
      <p>{post.day}</p>
      <p>{post.description}</p>
      <p>{post.category}</p>
    </div>
  );
}
