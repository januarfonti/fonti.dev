import { Mdx } from "@/components/mdx";
import formatDate from "@/lib/formatDate";
import {
  ArrowLeftIcon,
  CalendarIcon,
  TimerIcon,
} from "@radix-ui/react-icons";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import type { BlogPosting, WithContext } from "schema-dts";

type BlogPostProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: BlogPostProperties): Promise<Metadata> => {
  const { slug } = await params;
  const page = allPosts.find(({ _meta }) => _meta.path === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
};

export const generateStaticParams = (): { slug: string }[] =>
  allPosts.map((page) => ({
    slug: page._meta.path,
  }));

export default async function BlogPost({ params }: BlogPostProperties) {
  const { slug } = await params;
  const page = allPosts.find(({ _meta }) => _meta.path === slug);

  if (!page) {
    notFound();
  }

  const jsonLd: WithContext<BlogPosting> = {
    "@type": "BlogPosting",
    "@context": "https://schema.org",
    datePublished: page.date.toISOString(),
    description: page.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL(`/blog/${slug}`, "https://fonti.dev").toString(),
    },
    headline: page.title,
    image: page.image,
    dateModified: page.date.toISOString(),
    author: page.authors.at(0),
    isAccessibleForFree: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="">
          <Link
            className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
            href="/blog"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="title font-medium text-2xl tracking-tighter">
            <Balancer>{page.title}</Balancer>
          </h1>
          <div className="flex items-center mt-2 mb-8 text-sm gap-6">
            <p className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <CalendarIcon className="mr-1" />
              {formatDate(page.date)}
            </p>
            <p className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <TimerIcon className="mr-1" />
              {page.readingTime}
            </p>
          </div>
          {page.image ? (
            <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-none">
              <Image
                src={page.image}
                alt={page.title}
                fill
                className="object-cover"
                priority
                blurDataURL={page.imageBlur}
                placeholder="blur"
              />
            </div>
          ) : undefined}
          <div className="relative">
            <div className="prose prose-neutral dark:prose-invert" id="content">
              <Mdx code={page.body} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

