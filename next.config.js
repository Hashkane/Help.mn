/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.pixabay.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
