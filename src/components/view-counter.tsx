import { EyeOpenIcon } from "@radix-ui/react-icons";

export default function ViewCounter({
  slug,
  allViews,
}: {
  slug: string;
  allViews: {
    slug: string;
    count: number;
  }[];
  trackView?: boolean;
}) {
  const viewsForSlug = allViews?.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  return (
    <p className="text-neutral-600 dark:text-neutral-400 text-sm flex items-center">
      <EyeOpenIcon className="mr-2" />
      {`${number.toLocaleString()} views`}
    </p>
  );
}
