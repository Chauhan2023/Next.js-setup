'use client'

import { ModeToggle } from '@/components/shared/mode-toggle'
import { UserNav } from '@/components/shared/user-nav'
import { SearchCommand } from '@/components/shared/search-command'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b px-6">
      <SearchCommand />
      <div className="ml-auto flex items-center gap-2">
        <ModeToggle />
        <Separator orientation="vertical" className="h-6" />
        <UserNav />
      </div>
    </header>
  )
}
