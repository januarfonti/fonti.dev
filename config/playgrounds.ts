import { PlaygroundsConfig } from "types"
import { allPlaygrounds } from "contentlayer/generated"

const playgroundItems = allPlaygrounds
  .sort((a, b) => (a.title > b.title ? 1 : -1))
  .filter((playground) => playground.title !== "Playgrounds")
  .map((playground) => ({
    title: playground.title,
    href: `${playground.slug}`,
  }))

export const playgroundsConfig: PlaygroundsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/playgrounds",
        },
      ],
    },
    {
      title: "Tools",
      items: playgroundItems,
    },
  ],
}
