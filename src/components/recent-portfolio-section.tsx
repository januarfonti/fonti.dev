import { getViewsCount } from "@/db/queries";
import formatDate from "@/lib/formatDate";
import { allPortfolios } from "content-collections";
import Link from "next/link";
import { Suspense } from "react";
import { Badge } from "./ui/badge";
import ViewCounter from "./view-counter";

export default function RecentPortfolioSection() {
  // Only show 3 portfolios and sort them by date
  const portfolios = allPortfolios
    .slice(0, 3)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-medium text-2xl tracking-tighter underlined-text">
          Recent Featured Works
        </h2>
        <Link
          href="/portfolio"
          className="flex items-center text-neutral-900 dark:text-neutral-100 hover:underline"
        >
          See All <span className="ml-1">→</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {portfolios.map((portfolio) => (
          <Link
            key={portfolio.slug}
            className="group flex flex-col gap-2"
            href={`/portfolio/${portfolio.slug}`}
          >
            <div className="flex flex-col">
              <p className="font-medium text-lg text-neutral-900 dark:text-neutral-100 group-hover:underline tracking-tight">
                {portfolio.title}
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span>{formatDate(portfolio.date, "short")}</span>
                <span>•</span>
                <Suspense fallback={<p className="h-6" />}>
                  <Views slug={portfolio.slug} />
                </Suspense>
                <span>•</span>
                <span>Work for {portfolio.company}</span>
              </div>
              {/* Show tech stack using Badge component */}
              <div className="flex flex-wrap gap-2">
                {portfolio.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
