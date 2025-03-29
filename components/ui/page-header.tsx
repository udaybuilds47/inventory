"use client"

import { usePathname } from "next/navigation"
import { getPageTitle } from "@/lib/page-titles"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function PageHeader() {
  const pathname = usePathname()
  
  return (
    <header className="h-14 border-b flex items-center px-4">
      <SidebarTrigger className="h-8 w-8 mr-4" />
      <h1 className="text-lg font-medium">{getPageTitle(pathname)}</h1>
    </header>
  )
}
