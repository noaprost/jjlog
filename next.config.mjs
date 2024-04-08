/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["jjblog-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: `https://ec2-44-218-178-139.compute-1.amazonaws.com:8080/api/:slug*`,
      },
    ];
  },
};
export default nextConfig;
