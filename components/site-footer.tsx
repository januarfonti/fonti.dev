"use client"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { useTheme } from "next-themes"

export function SiteFooter() {
  const { theme } = useTheme()
  return (
    <footer className="bg-background text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-4 border-t py-10 md:h-24 md:flex-row md:py-0">
        <div className="container flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {theme === "dark" ? (
            <Icons.logoDark className="h-6 w-6" />
          ) : (
            <Icons.logo className="h-6 w-6" />
          )}
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="umami--click--footer-twitter-link font-medium underline underline-offset-4"
            >
              Fonti
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="umami--click--footer-vercel-link font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . Illustrations by{" "}
            <a
              href="https://undraw.co/"
              target="_blank"
              rel="noreferrer"
              className="umami--click--footer-undraw-link font-medium underline underline-offset-4"
            >
              unDraw
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
