"use client"

import React from 'react';
import { cn } from '@/lib/utils'

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export function Header({ className, children }: HeaderProps) {
  return (
    <header className={cn("flex sticky top-0 h-16 shrink-0 items-center border-b bg-background gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", className)}>
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        {children}
      </div>
    </header>
  );
}

