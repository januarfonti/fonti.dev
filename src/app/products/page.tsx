import links from "@/data/links.json";
import type { Metadata } from "next";
import { LinksSearch } from "./links-search";

interface LinkItem {
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  url: string;
}

const title = "Products that I love";
const description = "Here's a list of products that I use and recommend.";

export const metadata: Metadata = {
  title,
  description,
};

export default function Links() {
  // Type the imported links and sort all links by date (only if links exist)
  const typedLinks = links as LinkItem[];
  const sortedLinks = typedLinks.length > 0 
    ? typedLinks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : [];

  return (
    <div className="relative pt-[50px]">
      <section className="mb-12">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter underlined-text">
          Products that I love
        </h1>
        <p className="text-base leading-7 prose prose-neutral dark:prose-invert">
          Here's a list of products that I use and recommend.
        </p>
      </section>
      <LinksSearch links={sortedLinks} />
    </div>
  );
}
