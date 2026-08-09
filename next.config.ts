import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 폴더의 package-lock.json 때문에 루트가 잘못 잡히는 것 방지
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
