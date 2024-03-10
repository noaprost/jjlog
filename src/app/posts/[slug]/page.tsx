type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  // post 상세페이지 구현
  return <h1>{slug}라는 id를 가진 포스트입니다.</h1>;
}
