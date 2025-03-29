"use client"

import { BarChart3, Box, Home, LineChart, Package, Settings, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b flex items-center h-14 px-4">
        <div className="flex items-center gap-2">
          <Box className="h-5 w-5 text-primary" />
          <span className="text-lg font-medium group-data-[collapsible=icon]:hidden">Stockwise</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground group-data-[collapsible=icon]:hidden">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/")} className="h-9 text-sm" tooltip="Dashboard">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground group-data-[collapsible=icon]:hidden">
            Inventory
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/forecasting")}
                  className="h-9 text-sm"
                  tooltip="Forecasting"
                >
                  <Link href="/forecasting">
                    <LineChart className="h-4 w-4" />
                    <span>Forecasting</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/reordering")}
                  className="h-9 text-sm"
                  tooltip="Reordering"
                >
                  <Link href="/reordering">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Reordering</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/visibility")}
                  className="h-9 text-sm"
                  tooltip="Visibility"
                >
                  <Link href="/visibility">
                    <Package className="h-4 w-4" />
                    <span>Visibility</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground group-data-[collapsible=icon]:hidden">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/reports")} className="h-9 text-sm" tooltip="Reports">
                  <Link href="/reports">
                    <BarChart3 className="h-4 w-4" />
                    <span>Reports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-9 text-sm" tooltip="Settings">
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-9 text-sm" tooltip="Team">
                  <Link href="/team">
                    <Users className="h-4 w-4" />
                    <span>Team</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

