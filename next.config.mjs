/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
};

export default nextConfig;
