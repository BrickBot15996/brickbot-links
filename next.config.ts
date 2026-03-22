import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.brickbot.ro/**")],
    minimumCacheTTL: 2678400, // 1 month
    unoptimized: true,
  },
};

export default nextConfig;
