import * as React from "react";
import { SidebarMenu, SidebarMenuItem } from "../sidebar";
import { DropdownMenu } from "../../../base/dropdown-menu";

interface NavMainProps {
  children?: React.ReactNode;
}

const NavMainContent: React.FC<NavMainProps> = ({ children }) => {
  return (
    <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            {children}
          </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavMainContent;
