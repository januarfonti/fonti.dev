"use client";

import { cn } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/work": {
    name: "Work",
  },
  "/portfolio": {
    name: "Portfolio",
  },
  "/products": {
    name: "Products",
  },
};

export function Navbar() {
  return (
    <aside className="fixed top-2 left-2 right-2 w-auto lg:w-auto lg:sticky lg:top-20 mb-16 tracking-tight z-20">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-center justify-between relative pb-0 fade md:overflow-auto scroll-pr-6 md:relative px-4 backdrop-filter backdrop-blur-xl bg-[#262626] bg-opacity-70 h-[50px]"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </Suspense>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/januarfonti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                  size={20}
                />
              </a>
              <a
                href="https://twitter.com/januarfonti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                  size={20}
                />
              </a>
              <a
                href="https://instagram.com/januarfonti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                  size={20}
                />
              </a>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cn(
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
        {
          "text-neutral-500": !isActive,
        },
      )}
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
