/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- BU SATIRI EKLE
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;