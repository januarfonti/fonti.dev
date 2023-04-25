import { cn } from "@/lib/utils"

interface PlaygroundsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function PlaygroundsPageHeader({
  heading,
  text,
  className,
  ...props
}: PlaygroundsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="inline-block text-4xl font-black tracking-tight lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-xl text-muted-foreground">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}
