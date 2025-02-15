"use client"

import * as React from "react"
import {
  type LucideIcon
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../../ui/sidebar"

export type User = {
  name: string
  email: string
  avatar: string
}

export type Team = {
  name: string
  logo: LucideIcon
  plan: string
}

export type SubNavItem = {
  title: string
  url: string
}

export type NavItem = {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: SubNavItem[]
}

export type Project = {
  name: string
  url: string
  icon: LucideIcon
}

// Props interface
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: User
  teams?: Team[]
  navItems?: NavItem[]
  projects?: Project[]
}


export function AppSidebar(
  { ...props }: AppSidebarProps
) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {
        props.teams && (
          <SidebarHeader>
          <TeamSwitcher teams={props.teams} />
        </SidebarHeader>
        )
      }

      <SidebarContent>
        {props.navItems && <NavMain items={props.navItems} />}
        {props.projects && <NavProjects projects={props.projects} />}
      </SidebarContent>

      {
        props.user && ( 
        <SidebarFooter>
          <NavUser user={props.user} />
        </SidebarFooter>
        )
      }
      <SidebarRail />
    </Sidebar>
  )
}
