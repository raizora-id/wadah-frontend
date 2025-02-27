"use client";

import * as React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../../../base/dropdown-menu";
import { SidebarMenuButton } from "../sidebar";
import { ChevronsUpDown } from "lucide-react";

interface LogoSidebar {
  logo: React.ElementType;
  name: string;
  plan: string;
}

interface HeaderSidebarProps {
  logoSidebars?: LogoSidebar;
  isClickable?: boolean;
  defaultLabel?: string;
}

const HeaderSidebar: React.FC<HeaderSidebarProps> = ({ logoSidebars, isClickable = true, defaultLabel = "" }) => {
  const [selectedLabel, setSelectedLabel] = React.useState<string>(
    logoSidebars?.name || defaultLabel
  );

  const handleClick = () => {
    if (isClickable && logoSidebars) {
      setSelectedLabel(logoSidebars.name);
    }
  };

  return (
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          onClick={handleClick}
          className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground ${!isClickable ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!isClickable}
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            {logoSidebars?.logo && <logoSidebars.logo className="size-5" />}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{selectedLabel}</span>
            <span className="truncate text-xs">{logoSidebars?.plan}</span>
          </div>
          {isClickable && <ChevronsUpDown className="ml-auto" />}
        </SidebarMenuButton>
      </DropdownMenuTrigger>
  );
};

export default HeaderSidebar;
