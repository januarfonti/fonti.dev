import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import formatDate from "@/lib/formatDate";
import { ClockIcon } from "@radix-ui/react-icons";
import { allPortfolios } from "content-collections";
import { Building2Icon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "Blog";
const description = "Thoughts, ideas, and opinions.";

export const metadata: Metadata = {
  title,
  description,
};

export default function Blog() {
  // sort all posts by date
  const portfolios = allPortfolios.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="relative pt-[50px]">
      <section className="mb-12">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter underlined-text">
          My Featured Works
        </h1>
        <p className="text-base leading-7 prose prose-neutral dark:prose-invert">
          Welcome to my portfolio! Here, I present a curated selection of my
          most impactful projects that demonstrate my skills and experiences in
          software development. These projects highlight my ability to deliver
          innovative solutions and my passion for technology. Explore my work
          and see how I can contribute to your team.
        </p>
      </section>

      <div className="grid gap-12">
        {portfolios.map((portfolio) => (
          <Link
            key={portfolio._meta.path}
            href={`/portfolio/${portfolio._meta.path}`}
          >
            <Card className="group overflow-hidden rounded-lg border-0 bg-transparent transition-colors hover:bg-muted/50 p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  blurDataURL={portfolio.imageBlur}
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-medium mb-2 tracking-tight">
                  {portfolio.title}
                </h2>
                <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <time className="font-mono">
                    {formatDate(portfolio.date, "short")}
                  </time>
                  <span className="flex items-center gap-1">
                    {/* Building icon */}
                    <Building2Icon className="h-4 w-4" />
                    Work for {portfolio.company}
                  </span>
                </div>
                {/* Show tech stack using Badge component */}
                <div className="flex flex-wrap gap-2">
                  {portfolio.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {/* <p className="line-clamp-2 text-base text-muted-foreground">
                  {portfolio.description}
                </p> */}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

