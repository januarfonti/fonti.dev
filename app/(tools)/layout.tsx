import Link from "next/link"

import { playgroundsConfig } from "@/config/playgrounds"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { PlaygroundsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import { publicConfig } from "@/config/public"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={publicConfig.mainNav}>
            <PlaygroundsSidebarNav items={playgroundsConfig.sidebarNav} />
          </MainNav>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}
