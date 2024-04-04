import MovePost from "@/components/MovePost";
import PostContent from "@/components/PostContent";
import { getPostById } from "@/service/posts";

type Props = {
  params: {
    slug: number;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  // post 상세페이지 구현
  const post = await getPostById(slug);
  const { prev, next } = post;
  return (
    <>
      <PostContent post={post} />
      <MovePost prev={prev} next={next} />
    </>
  );
}
