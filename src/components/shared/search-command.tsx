'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SearchCommand() {
  return (
    <Button
      variant="outline"
      className="relative h-9 w-64 justify-start text-sm text-muted-foreground"
    >
      <Search className="mr-2 size-4" />
      Search...
      <kbd className="pointer-events-none absolute right-2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  )
}
