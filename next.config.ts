import type { NextConfig } from "next";
import "./env";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
