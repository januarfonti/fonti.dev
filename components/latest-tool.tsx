import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { allPosts, allPlaygrounds } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

function LatestTool() {
  const posts = allPlaygrounds
    .filter((post) => post.published)
    .filter((post) => post.tool)
    .slice(0, 4)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <>
      {posts?.length ? (
        <section className="grid gap-10 sm:grid-cols-2 md:max-w-[52rem]">
          {posts.map((post, index) => (
            <Link href={post.slug} key={post._id} className='umami--click--tools-detail-link'>
              <article
                className="group relative flex flex-col space-y-2 rounded-md border border-slate-200 p-6 transition-colors hover:border-slate-900"
              >
                <h2 className="text-xl font-extrabold md:text-2xl">{post.title}</h2>
                {post.description && (
                  <p className="text-slate-600">{post.description}</p>
                )}
              </article>
            </Link>
          ))}
        </section>
      ) : (
        <p>No tools published.</p>
      )}
    </>
  )
}

export default LatestTool