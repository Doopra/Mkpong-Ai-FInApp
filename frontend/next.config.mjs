/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Suppress noisy build warnings for optional packages
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

export default nextConfig;
