import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  type RehypeCodeOptions,
  rehypeCode,
  remarkGfm,
  remarkHeading,
} from "fumadocs-core/mdx-plugins";
import readingTime from "reading-time";
import { sqip } from "sqip";

const rehypeCodeOptions: RehypeCodeOptions = {
  themes: {
    light: "catppuccin-mocha",
    dark: "catppuccin-mocha",
  },
};

const posts = defineCollection({
  name: "posts",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
  transform: async (page, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page, {
        remarkPlugins: [remarkGfm, remarkHeading],
        rehypePlugins: [[rehypeCode, rehypeCodeOptions]],
      }),
    );

    const blur = await context.cache(page._meta.path, async () =>
      sqip({
        input: `./public/${page.image}`,
        plugins: [
          "sqip-plugin-primitive",
          "sqip-plugin-svgo",
          "sqip-plugin-data-uri",
        ],
      }),
    );

    const result = Array.isArray(blur) ? blur[0] : blur;

    return {
      ...page,
      body,
      date: new Date(page.date),
      slug: page._meta.path,
      readingTime: readingTime(page.content).text,
      image: page.image,
      imageBlur: result.metadata.dataURIBase64 as string,
    };
  },
});

const portfolios = defineCollection({
  name: "portfolios",
  directory: "src/content/portfolio",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tech: z.array(z.string()),
    link: z.string(),
    company: z.string(),
  }),
  transform: async (page, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page, {
        remarkPlugins: [remarkGfm, remarkHeading],
        rehypePlugins: [[rehypeCode, rehypeCodeOptions]],
      }),
    );

    const blur = await context.cache(page._meta.path, async () =>
      sqip({
        input: `./public/${page.image}`,
        plugins: [
          "sqip-plugin-primitive",
          "sqip-plugin-svgo",
          "sqip-plugin-data-uri",
        ],
      }),
    );

    const result = Array.isArray(blur) ? blur[0] : blur;

    return {
      ...page,
      body,
      date: new Date(page.date),
      slug: page._meta.path,
      readingTime: readingTime(page.content).text,
      image: page.image,
      imageBlur: result.metadata.dataURIBase64 as string,
    };
  },
});

export default defineConfig({
  collections: [posts, portfolios],
});
