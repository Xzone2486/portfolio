/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: "/ansh_portfolio",
        destination: "https://ansh-portfolio-iota.vercel.app/"
      },
      {
        source: "/ansh_portfolio/:path*",
        destination: "https://ansh-portfolio-iota.vercel.app/:path*"
      }
    ]; 
  }
};

export default nextConfig;