"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../../base/avatar"
import { Button } from "../../base/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../base/dropdown-menu"
import { BellIcon } from "lucide-react"

// Sample data for comments
const comments = [
  {
    id: 1,
    user: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    comment: "Left a comment on your post 'Getting Started with Next.js'",
    time: "2 minutes ago",
    isUnread: true,
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    comment: "Mentioned you in a comment",
    time: "1 hour ago",
    isUnread: true,
  },
  {
    id: 3,
    user: {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    comment: "Replied to your comment on 'UI Design Tips'",
    time: "3 hours ago",
    isUnread: false,
  },
  {
    id: 4,
    user: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AT",
    },
    comment: "Liked your comment",
    time: "5 hours ago",
    isUnread: false,
  },
]

export function NotificationBell() {
  const [unreadCount, setUnreadCount] = React.useState(2)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs font-normal text-muted-foreground"
              onClick={() => setUnreadCount(0)}
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-auto">
          {comments.map((item) => (
            <DropdownMenuItem key={item.id} className="flex gap-4 p-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={item.user.avatar} alt={item.user.name} />
                <AvatarFallback>{item.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium leading-none">{item.user.name}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.comment}</p>
                {item.isUnread && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-medium text-blue-500">New</span>
                  </div>
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-2 text-center">
          <Button variant="ghost" className="w-full text-sm" size="sm">
            View all notifications
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

