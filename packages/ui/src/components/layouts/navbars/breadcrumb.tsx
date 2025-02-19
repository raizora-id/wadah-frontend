"use client"

import React from 'react';
import { Breadcrumb as UiBreadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../base/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isPage?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}


export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <UiBreadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem
              className={item.isPage ? "" : "hidden md:block"}
              aria-disabled={item.isPage}
            >
              {item.isPage ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href!} aria-disabled={!item.href}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
};

