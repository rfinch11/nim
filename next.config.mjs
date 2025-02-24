import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default {
  siteMetadata: {
    title: "Ryan Finch",
    description: "Design leader | UX Thinker | Writer",
    author: "Ryan Finch",
  }
}

