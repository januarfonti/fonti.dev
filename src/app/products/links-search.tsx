"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface LinkItem {
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  url: string;
}

interface LinksSearchProps {
  links: LinkItem[];
}

export function LinksSearch({ links }: LinksSearchProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(links.map((l) => l.category)));
    return ["All", ...unique];
  }, [links]);

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesCategory = category === "All" || link.category === category;
      const matchesSearch =
        link.title.toLowerCase().includes(search.toLowerCase()) ||
        link.description.toLowerCase().includes(search.toLowerCase()) ||
        link.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category, links]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full md:w-1/2 rounded-md border border-muted bg-background px-4 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-8">
        {filteredLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group flex overflow-hidden rounded-lg border-0 bg-transparent transition-colors hover:bg-muted/50 p-2">
              <div className="relative aspect-square h-32 w-32 md:h-40 md:w-40 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  placeholder="empty"
                />
              </div>
              <div className="flex flex-col justify-center px-4">
                <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <time className="font-mono">
                    {new Date(link.date).toLocaleDateString()}
                  </time>
                  {link.category && (
                    <span className="px-2 py-1 text-xs rounded-full bg-muted">
                      {link.category}
                    </span>
                  )}
                </div>
                <h2 className="line-clamp-2 text-xl font-medium mb-2 tracking-tight">
                  {link.title}
                </h2>
                <p className="line-clamp-2 text-base text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
        {filteredLinks.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            No products found.
          </div>
        )}
      </div>
    </>
  );
}
