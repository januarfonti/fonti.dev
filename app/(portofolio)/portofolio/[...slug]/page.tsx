import { notFound } from "next/navigation"
import { allAuthors, allPortofolios } from "contentlayer/generated"

import { Mdx } from "@/components/mdx"
import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { absoluteUrl, formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"
import GiscusComment from "@/components/giscus"

interface PortofolioPageProps {
  params: {
    slug: string[]
  }
}

async function getPortofolioFromParams(params) {
  const slug = params?.slug?.join("/")
  const portofolio = allPortofolios.find((portofolio) => portofolio.slugAsParams === slug)

  if (!portofolio) {
    null
  }

  return portofolio
}

export async function generateMetadata({
  params,
}: PortofolioPageProps): Promise<Metadata> {
  const portofolio = await getPortofolioFromParams(params)

  if (!portofolio) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", portofolio.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: portofolio.title,
    description: portofolio.description,
    authors: portofolio.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: portofolio.title,
      description: portofolio.description,
      type: "article",
      url: absoluteUrl(portofolio.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: portofolio.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: portofolio.title,
      description: portofolio.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PortofolioPageProps["params"][]
> {
  return allPortofolios.map((portofolio) => ({
    slug: portofolio.slugAsParams.split("/"),
  }))
}

export default async function PortofolioPage({ params }: PortofolioPageProps) {
  const portofolio = await getPortofolioFromParams(params)

  if (!portofolio) {
    notFound()
  }

  const authors = portofolio.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  return (
    <article className="container relative max-w-5xl py-6 lg:py-10">
      <Link
        href="/portofolio"
        className="absolute left-[-185px] hidden items-center justify-center text-sm font-medium xl:inline-flex"
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all portofolios
      </Link>
      <div>
        {portofolio.date && (
          <time dateTime={portofolio.date} className="block text-sm text-muted-foreground">
            Published on {formatDate(portofolio.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight lg:text-5xl">
          {portofolio.title}
        </h1>
        {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium text-muted-foreground">{author.title}</p>
                    <p className="text-xs text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {portofolio.image && (
        <Image
          src={portofolio.image}
          alt={portofolio.title}
          width={720}
          height={405}
          className="my-8 w-auto rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
          priority
        />
      )}
      <Mdx code={portofolio.body.code} />
      <hr className="my-4" />
      <GiscusComment />
      <hr className="my-4" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/portofolio"
          className="inline-flex items-center justify-center text-sm font-medium"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all portofolios
        </Link>
      </div>
    </article>
  )
}
