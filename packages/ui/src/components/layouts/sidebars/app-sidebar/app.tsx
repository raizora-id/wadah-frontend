import React, { ReactNode } from "react";
import { Sidebar, SidebarHeader, SidebarContent } from "./../sidebar";

interface AppSidebarProps {
  header?: ReactNode;
  content?: ReactNode;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ header, content, ...props }) => {
  return (
    <Sidebar  {...props}>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {content && <SidebarContent>{content}</SidebarContent>}
    </Sidebar>
  );
};

export default AppSidebar;
