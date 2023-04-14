import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Typing from "@/components/typing"
import LatestTool from "@/components/latest-tool"

import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { PostItem } from "@/components/post-item"

export default async function IndexPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .slice(0, 4)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-7xl">
            Hello,
          </h1>
          <Typing />
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:leading-8">
            I&apos;m a Full-Stack Developer with 6+ years of the overall experience and +6 years of remote work experience. On my site, I share my personal journey, notes, and programming or some random resources, as well as photos and videos. I&apos;ve also created some simple tools on my <Link href="/playground" className="font-medium underline underline-offset-8">playground</Link> page.
          </p>
        </div>
        <div className="flex">
          <Link href="/about" className={cn(buttonVariants({ size: "lg" }), 'umami--click--homepage-about-link')}>
            Who am I?
          </Link>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-4xl">
            Latest Posts
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            I&apos;ve been writing about my journey as a developer, and I&apos;ve also been sharing some of my notes and resources.
          </p>
        </div>
        {posts?.length ? (
        <section className="grid gap-10 sm:grid-cols-2 md:max-w-[52rem]">
          {posts.map((post, index) => (
            <PostItem key={post.slug} post={post} index={index} />
          ))}
        </section>
      ) : (
        <p>No posts published.</p>
      )}
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-4xl">
            Playground
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            I&apos;ve been creating some simple tools on my playground page using React.js and there are some more tools coming soon.
          </p>
        </div>
        <LatestTool />
      </section>
    </>
  )
}
