import Link from "next/link"

import { publicConfig } from "@/config/public"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/80 shadow-sm backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={publicConfig.mainNav} />
          <nav className="flex gap-6 text-gray-600">
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
