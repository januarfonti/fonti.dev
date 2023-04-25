import Link from "next/link"
import { Playground } from "contentlayer/generated"

import { playgroundsConfig } from "@/config/playgrounds"
import { Icons } from "@/components/icons"

interface PlaygroundsPagerProps {
  playground: Playground
}

export function PlaygroundsPager({ playground }: PlaygroundsPagerProps) {
  const pager = getPagerForPlayground(playground)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className="inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className="ml-auto inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium hover:border-slate-200 hover:bg-accent focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          {pager.next.title}
          <Icons.chevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForPlayground(playground: Playground) {
  const flattenedLinks = [null, ...flatten(playgroundsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => playground.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}
