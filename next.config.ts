import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/home", // Route mà bạn muốn redirect
        destination: "/", // Chuyển hướng về route này
        permanent: true, // Nếu là true, sẽ trả về mã trạng thái 308 (permanent redirect)
      },
    ];
  },
};

export default nextConfig;
