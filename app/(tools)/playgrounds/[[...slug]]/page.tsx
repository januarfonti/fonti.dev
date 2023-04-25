import { notFound } from "next/navigation"
import { allPlaygrounds } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/mdx"
import { PlaygroundsPageHeader } from "@/components/page-header"
import { PlaygroundsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import "@/styles/mdx.css"
import { Metadata } from "next"

import { absoluteUrl } from "@/lib/utils"

interface PlaygroundPageProps {
  params: {
    slug: string[]
  }
}

async function getPlaygroundFromParams(params) {
  const slug = params.slug?.join("/") || ""
  const playground = allPlaygrounds.find((playground) => playground.slugAsParams === slug)

  if (!playground) {
    null
  }

  return playground
}

export async function generateMetadata({
  params,
}: PlaygroundPageProps): Promise<Metadata> {
  const playground = await getPlaygroundFromParams(params)

  if (!playground) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", playground.description ?? playground.title)
  ogUrl.searchParams.set("type", "Playground")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: playground.title,
    description: playground.description,
    openGraph: {
      title: playground.title,
      description: playground.description,
      type: "article",
      url: absoluteUrl(playground.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: playground.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: playground.title,
      description: playground.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PlaygroundPageProps["params"][]
> {
  return allPlaygrounds.map((playground) => ({
    slug: playground.slugAsParams.split("/"),
  }))
}

export default async function PlaygroundPage({ params }: PlaygroundPageProps) {
  const playground = await getPlaygroundFromParams(params)

  if (!playground) {
    notFound()
  }

  const toc = await getTableOfContents(playground.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <PlaygroundsPageHeader heading={playground.title} text={playground.description} />
        <Mdx code={playground.body.code} />
        <hr className="my-4 md:my-6" />
        <PlaygroundsPager playground={playground} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
