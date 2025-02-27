import {
  LucideIcon
} from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  parent_id: number | null;
  children: MenuItem[];
  icon?: LucideIcon;
}

export interface MenuItemProps {
  item: MenuItem;
}
