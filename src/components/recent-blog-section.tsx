import formatDate from "@/lib/formatDate";
import { allPosts } from "content-collections";
import Link from "next/link";

export default function RecentBlogSection() {
  // Only show 3 posts and sort them by date
  const posts = allPosts
    .slice(0, 3)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-medium text-2xl tracking-tighter underlined-text">
          Recent blog
        </h2>
        <Link
          href="/blog"
          className="flex items-center text-neutral-900 dark:text-neutral-100 hover:underline"
        >
          See All <span className="ml-1">→</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col gap-2"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col">
              <p className="font-medium text-lg text-neutral-900 dark:text-neutral-100 group-hover:underline tracking-tight">
                {post.title}
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <span>{formatDate(post.date, "short")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

