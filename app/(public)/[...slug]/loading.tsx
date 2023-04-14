import React from 'react'
import { LayoutShell } from '@/components/shell'
import { Skeleton } from '@/components/ui/skeleton'

function Loading() {
  return (
    <LayoutShell>
      <div>
        <Skeleton className="block h-4 w-32 text-sm text-slate-600" />
        <Skeleton className="mt-2 h-12 w-full text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl" />
        <div className="mt-4 flex space-x-4">
          <Skeleton className="h-12 w-32 text-sm" />
          <Skeleton className="h-12 w-32 text-sm" />
        </div>
      </div>
      <Skeleton className="my-8 h-48 w-full rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900" />
    </LayoutShell>
  )
}

export default Loading