import PostDetail from "@/components/PostDetail";

type Props = {
  params: {
    slug: number;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  return <PostDetail id={slug} />;
}
