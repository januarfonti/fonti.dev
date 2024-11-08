import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["placehold.co", "picsum.photos"],
    // dangerouslyAllowSVG: true,
    // contentDispositionType: "attachment",
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
