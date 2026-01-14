import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Bu satır önemli, Nginx için gerekli
  images: {
    unoptimized: true, // Static export için gerekli
  },
};

export default nextConfig;