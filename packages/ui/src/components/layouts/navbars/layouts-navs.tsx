import React from 'react';
import { Header } from "./header"
import { Separator } from '../../base/separator';
import { Breadcrumb, BreadcrumbProps } from './breadcrumb'
import { SearchForm } from "../sidebars/search-form";
import { NotificationBell } from '../sidebars/notification-bell';


export interface LayoutsNavsProps {
  breadcrumbProps?: BreadcrumbProps
  sidebarTrigger: React.ReactElement
}

export function LayoutsNavs({ breadcrumbProps, sidebarTrigger }: LayoutsNavsProps) {
  return (
    <Header className='ss'>
      {sidebarTrigger}
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex flex-1">
        <Breadcrumb {...{ ...breadcrumbProps, items: breadcrumbProps?.items ?? [] }} />
      </div>
      <div className="grid grid-cols-2 items-center justify-end gap-2">
        <NotificationBell />
        <SearchForm />
      </div>
    </Header>
  )
}

