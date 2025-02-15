import type React from "react"
import { SubLayout } from "@/components/layouts/sub-layout"
import { BookCategories } from "./book-categories"

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SubLayout sidebar={<BookCategories />}>{children}</SubLayout>
}

