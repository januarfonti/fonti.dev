import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "picsum.photos",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default withContentCollections(nextConfig);
