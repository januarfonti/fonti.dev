import React from 'react'
import { getLatestBlogPosts } from 'app/db/blog';
import Link from 'next/link';
import { Suspense } from 'react';

export function LatestBlog() {
  let latestBlogs = getLatestBlogPosts();
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        latest blog
      </h1>
      {latestBlogs.map((post) => (
        <Link
        key={post.slug}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${post.slug}`}
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 hover:underline tracking-tight lowercase">
            {post.metadata.title}
          </p>
        </div>
      </Link>
      ))}
      <Link href="/blog">
        <p className="text-neutral-900 dark:text-neutral-100 hover:underline tracking-tight lowercase inline-flex font-semibold">more <img alt="More" src="/arrow-right.svg" width="20" height="20" /></p>
      </Link>
    </section>
  )
}
