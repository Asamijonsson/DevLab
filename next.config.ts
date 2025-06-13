import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to use static export mode

  images: {
    unoptimized: true, // Required if you're using Next.js Image component
  },
};

export default nextConfig;
