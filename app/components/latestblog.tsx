import React from 'react'
import ViewCounter from '../../app/blog/view-counter';
import { getViewsCount } from 'app/db/queries';
import { getLatestBlogPosts } from 'app/db/blog';
import Link from 'next/link';
import { Suspense } from 'react';
import formatDate from 'lib/formatDate';

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
          <div className='flex flex-row space-x-2'>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, 'short')}
              </p>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 lowercase">
                •
              </span>
            <Suspense fallback={<p className="h-6" />}>
              <Views slug={post.slug} />
            </Suspense>
          </div>
        </div>
      </Link>
      ))}
      <Link href="/blog">
        <p className="text-neutral-900 dark:text-neutral-100 hover:underline tracking-tight lowercase inline-flex font-semibold">more <img alt="More" src="/arrow-right.svg" width="20" height="20" className='text-neutral-100'/></p>
      </Link>
    </section>
  )
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
