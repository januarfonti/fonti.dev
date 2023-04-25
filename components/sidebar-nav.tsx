"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "types"
import { cn } from "@/lib/utils"

export interface PlaygroundsSidebarNavProps {
  items: SidebarNavItem[]
}

export function PlaygroundsSidebarNav({ items }: PlaygroundsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <PlaygroundsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null
}

interface PlaygroundsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function PlaygroundsSidebarNavItems({
  items,
  pathname,
}: PlaygroundsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            className={cn(
              "flex w-full items-center rounded-md p-2 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              {
                "bg-accent": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : null
      )}
    </div>
  ) : null
}
