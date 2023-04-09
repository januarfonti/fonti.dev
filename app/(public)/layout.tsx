import Link from "next/link"

import { publicConfig } from "@/config/public"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Icons } from "@/components/icons"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={publicConfig.mainNav} />
          <nav className="flex gap-6 text-gray-600">
            <Link
              href="https://instagram.com/januarfonti"
              target="_blank"
              rel="noreferrer"
              className="umami--click--header-instagram-link"
            >
              <Icons.instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/januarfonti/"
              target="_blank"
              rel="noreferrer"
              className="umami--click--header-linkedin-link"
            >
              <Icons.linkedIn className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/januarfonti"
              target="_blank"
              rel="noreferrer"
              className="umami--click--header-twitter-link"
            >
              <Icons.twitter className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
