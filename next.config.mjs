/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "jjblog-bucket1.s3.ap-northeast-2.amazonaws.com",
      "readme-typing-svg.demolab.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
export default nextConfig;
