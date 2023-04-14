import Link from "next/link"
import { Post } from "contentlayer/generated"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

interface PostItemProps {
  post: Post
  index: number
}

export function PostItem({ post, index }: PostItemProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={804}
          height={452}
          className="w-auto rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
          priority={index <= 1}
        />
      )}
      <h2 className="text-xl font-extrabold md:text-2xl">{post.title}</h2>
      {post.description && <p className="text-slate-600">{post.description}</p>}
      {post.date && (
        <p className="text-sm text-slate-600">{formatDate(post.date)}</p>
      )}
      <Link href={post.slug} className="umami--click--blog-detail-link absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  )
}
