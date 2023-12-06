import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import formatDate from 'lib/formatDate';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className='space-y-6'>
      <h1 className="font-medium text-2xl tracking-tighter">
        read my blog
      </h1>
      <p className='text-neutral-900 dark:text-neutral-100 lowercase'>
      Join me in my digital space where I share personal adventures, travel tales, and geeky insights on software development and tech. Written mostly in Bahasa, occasionally in English—let's explore life's stories together, one blog post at a time!
      </p>
      <hr className='border-neutral-200 dark:border-neutral-700' />
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight lowercase">
                {post.metadata.title}
              </p>
              <div className='flex flex-row space-x-2'>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 lowercase">
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
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
