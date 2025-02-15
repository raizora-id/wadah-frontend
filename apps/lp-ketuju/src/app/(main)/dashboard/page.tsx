import { ContentLayout } from "@/components/layouts/content-layout"

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" subtitle="Welcome back!">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Total Notes</h3>
          <p className="text-3xl font-bold">128</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Books</h3>
          <p className="text-3xl font-bold">45</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Folders</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Shopping Lists</h3>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>
    </ContentLayout>
  )
}

