import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, HTMLProps } from "react";
import { highlight } from "sugar-high";

// eslint-disable-next-line id-length
const a = ({ href, ...properties }: HTMLProps<HTMLAnchorElement>) => {
  if (typeof href !== "string") {
    throw new TypeError("href is required");
  }

  if (href.startsWith("/")) {
    return <Link href={href} {...properties} />;
  }

  return (
    <a {...properties} href={href} target="_blank" rel="noopener noreferrer" />
  );
};

const img = (properties: HTMLProps<HTMLImageElement>) => {
  if (
    typeof properties.src !== "string" ||
    typeof properties.alt !== "string"
  ) {
    throw new TypeError("Image src and alt are required");
  }

  return (
    <Image
      src={properties.src}
      alt={properties.alt}
      width={1240}
      height={698}
      unoptimized={properties.src.startsWith("http")}
      className="overflow-hidden rounded-none"
    />
  );
};

const CompanyName = () => "next-forge";

const Code = ({ children, ...props }: ComponentProps<"code">) => {
  const codeHTML = highlight(children as string);
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

export const Mdx = ({
  code,
  components,
}: ComponentProps<typeof MDXContent>) => (
  <div className="prose prose-neutral dark:prose-invert">
    <MDXContent
      code={code}
      components={{
        a,
        img,
        CompanyName,
        Code,
        ...components,
      }}
    />
  </div>
);
