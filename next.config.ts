import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All product/logo/reviewer assets are local SVGs served from /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
