"use client";

import * as React from "react";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "../../base/dropdown-menu";

interface Module {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  onClick: () => void;
}

interface ListModuleERPProps {
  modules: Module[];
}

const ListModuleERP: React.FC<ListModuleERPProps> = (
  { modules }
) => {
  return (
    <>
      {modules.map((module, index) => (
        <DropdownMenuItem
        key={module.name}
        onClick={module.onClick}
        className="gap-2 p-2"
      >
        <div className="flex size-6 items-center justify-center rounded-md border bg-background">
          <module.icon size={24} />
        </div>
        <div className="font-medium text-muted-foreground">{module.name}</div>
        <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
      </DropdownMenuItem>
    ))}
    </>
  );
};

export default ListModuleERP;
