import * as React from "react"

import { useSidebar } from "../sidebar";

import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../../base/dropdown-menu";

interface DropdownHeaderContentProps {
  title: String,
  children?: React.ReactNode;
}

const DropdownHeaderContent: React.FC<DropdownHeaderContentProps> = ({ children, title }) => {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      align="start"
      side={isMobile ? "bottom" : "right"}
      sideOffset={4}
    >
      <DropdownMenuLabel className="text-xs text-muted-foreground">
        {title}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {children}
    </DropdownMenuContent>
  );
};

export default DropdownHeaderContent;
