import { Card } from "@/components/ui/card";
import formatDate from "@/lib/formatDate";
import { ClockIcon } from "@radix-ui/react-icons";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "Blog";
const description = "Thoughts, ideas, and opinions.";

export const metadata: Metadata = {
  title,
  description,
};

export default function Blog() {
  // sort all posts by date
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="relative pt-[50px]">
      <section className="mb-12">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter underlined-text">
          Read my blog
        </h1>
        <p className="text-base leading-7 prose prose-neutral dark:prose-invert">
          Join me in my digital space where I share personal adventures, travel
          tales, and geeky insights on software development and tech. Written
          mostly in bahasa, occasionally in english—let's explore life's stories
          together, one blog post at a time!
        </p>
      </section>

      <div className="grid gap-8">
        {posts.map((post) => (
          <Link key={post._meta.path} href={`/blog/${post._meta.path}`}>
            <Card className="group flex overflow-hidden rounded-lg border-0 bg-transparent transition-colors hover:bg-muted/50 p-2">
              <div className="relative aspect-square h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  blurDataURL={post.imageBlur}
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col justify-center px-4">
                <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <time className="font-mono">
                    {formatDate(post.date, "short")}
                  </time>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="line-clamp-2 text-xl font-medium mb-2 tracking-tight">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-base text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

