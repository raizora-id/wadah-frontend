"use client"

import * as React from "react"
import {
  LucideIcon
} from "lucide-react"

import { NavMain } from "./nav-main"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "./sidebar"

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface Module {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  onClick: () => void;
}


interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
  switcher: Boolean
  modules: Module[]
}

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: { title: string; url: string }[];
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User;
  teams: Team[];
  navMain: NavItem[];
}

export function AppSidebar({ user, teams, navMain, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
