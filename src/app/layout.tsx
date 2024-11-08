import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/nav";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://fonti.dev"),
  title: {
    default: "Januar Fonti",
    template: "%s | Januar Fonti",
  },
  description: "Cyclist, Traveller & Web Developer",
  openGraph: {
    title: "Januar Fonti",
    description: "Cyclist, Traveller & Web Developer",
    url: "https://fonti.dev",
    siteName: "Januar Fonti",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Januar Fonti",
    card: "summary_large_image",
  },
};
export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "antialiased font-sans min-h-[100dvh]",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-3xl px-4 py-16">
            <Navbar />
            <main className="mt-16">{children}</main>
          </div>
        </ThemeProvider>
        <script
          defer
          src="/stats/script.js"
          data-website-id="50b8f501-f757-4765-9bb6-295d30e7afd9"
        />
        <DotPattern
          width={15}
          height={15}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "fixed inset-0 opacity-30",
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </body>
    </html>
  );
}
