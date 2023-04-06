import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

function LatestPosts() {
  const posts = allPosts
    .filter((post) => post.published)
    .slice(0, 4)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <>
      {posts?.length ? (
        <section className="grid gap-10 sm:grid-cols-2 md:max-w-[52rem]">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-xl font-extrabold md:text-2xl">{post.title}</h2>
              {post.description && (
                <p className="text-slate-600">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-slate-600">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <p>No posts published.</p>
      )}
    </>
  )
}

export default LatestPosts