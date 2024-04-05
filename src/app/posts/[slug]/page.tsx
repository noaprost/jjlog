import PostDetail from "@/components/PostDetail";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  return <PostDetail id={Number(slug)} />;
}
