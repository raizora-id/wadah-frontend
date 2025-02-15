import { ContentLayout } from "@/components/layouts/content-layout"

export default function BooksPage() {
  return (
    <ContentLayout title="Books" subtitle="All your books in one place">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4">
            <div className="aspect-[3/4] w-full bg-muted" />
            <div className="mt-4">
              <h3 className="font-semibold">Book Title {i + 1}</h3>
              <p className="text-sm text-muted-foreground">Author Name</p>
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

