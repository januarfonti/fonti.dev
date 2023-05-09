"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"
import { useTheme } from "next-themes"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const { theme } = useTheme()
  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
      {theme === "dark" ? (
        <Icons.logoDark className="h-6 w-6" />
      ) : theme === "light" ? (
        <Icons.logo className="h-6 w-6" />
      ) : (
        <Icons.logoDark className="h-6 w-6" />
      )}

        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-semibold sm:text-sm",
                item.href.startsWith(`/${segment}`) && "text-muted-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={handleShowMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : (theme === "dark" ? (
          <Icons.logoDark className="h-6 w-6" />
        ) : (
          <Icons.logo className="h-6 w-6" />
        ))}

        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} handleShowMobileMenu={handleShowMobileMenu}>{children}</MobileNav>
      )}
    </div>
  )
}
