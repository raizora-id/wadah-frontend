"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Fiction", href: "/books/fiction" },
  { name: "Non-Fiction", href: "/books/non-fiction" },
  { name: "Science", href: "/books/science" },
  { name: "History", href: "/books/history" },
  { name: "Biography", href: "/books/biography" },
  { name: "Technology", href: "/books/technology" },
  { name: "Business", href: "/books/business" },
  { name: "Self Help", href: "/books/self-help" },
]

export function BookCategories() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-[calc(100vh-7rem)] lg:h-[calc(100vh-7rem)]">
      <div className="space-y-1 p-2">
        {categories.map((category) => (
          <Button
            key={category.href}
            variant="ghost"
            asChild
            className={cn(
              "w-full justify-start",
              pathname === category.href && "bg-primary/5 text-primary hover:bg-primary/10",
            )}
          >
            <Link href={category.href}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}

