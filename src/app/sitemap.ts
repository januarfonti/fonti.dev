// biome-ignore lint/correctness/noNodejsModules: Generates sitemap on Node.js
import fs from "node:fs";
import type { MetadataRoute } from "next";

// Read directories in the 'app' folder
const appFolders = fs.readdirSync("src/app", { withFileTypes: true });
const pages = appFolders
  .filter((file) => file.isDirectory())
  .filter((folder) => !folder.name.startsWith("_"))
  .filter((folder) => !folder.name.startsWith("("))
  .map((folder) => folder.name);

// Read blog files in the 'content/blog' folder
const blogs = fs
  .readdirSync("src/content/blog", { withFileTypes: true })
  .filter((file) => !file.isDirectory())
  .filter((file) => !file.name.startsWith("_"))
  .filter((file) => !file.name.startsWith("("))
  .map((file) => file.name.replace(".mdx", ""));

// Read portfolio files in the 'content/portfolio' folder
const portfolios = fs
  .readdirSync("src/content/portfolio", { withFileTypes: true })
  .filter((file) => !file.isDirectory())
  .filter((file) => !file.name.startsWith("_"))
  .filter((file) => !file.name.startsWith("("))
  .map((file) => file.name.replace(".mdx", ""));

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fonti.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...pages.map((page) => ({
      url: new URL(page, baseUrl).href,
      lastModified: new Date(),
    })),
    ...blogs.map((blog) => ({
      url: new URL(`blog/${blog}`, baseUrl).href,
      lastModified: new Date(),
    })),
    ...portfolios.map((portfolio) => ({
      url: new URL(`portfolio/${portfolio}`, baseUrl).href,
      lastModified: new Date(),
    })),
  ];
}
