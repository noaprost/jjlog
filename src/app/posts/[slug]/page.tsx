type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  // post 상세페이지 구현
  return <h1>Post! {slug}</h1>;
}
