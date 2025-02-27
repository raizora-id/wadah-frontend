"use client";

import React from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../base/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "./sidebar";

import { MenuItemProps } from "./../../../types/menu-items";

import {
  ChevronRight
} from "lucide-react";
export function MenuItemComponent({ item }: MenuItemProps) {
  return (
    <>
      {item.children.length > 0 ? (
        <Collapsible asChild>
          <div className="text-center">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton style={{ marginLeft: '6px' }} >
                {item.icon && <item.icon size={20} className="ml--2.5" />}
                <span>{item.name}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-4 space-y-1">
                {item.children.map((subItem) => (
                  <MenuItemComponent key={subItem.id} item={subItem} />
                ))}
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
      ) : (
        <SidebarMenuSubButton asChild>
          <Link href="#" className="block px-4 py-2 text-sm">
            {item.icon && <item.icon size={18} className="ml--2.5" />}
            {item.name}
          </Link>
        </SidebarMenuSubButton>
      )}
    </>
  );
}
