import * as React from "react"

import { cn } from "@/lib/utils"

interface LayoutShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LayoutShell({
  children,
  className,
  ...props
}: LayoutShellProps) {
  return (
    <div className={cn("container grid items-start gap-8", className)} {...props}>
      {children}
    </div>
  )
}