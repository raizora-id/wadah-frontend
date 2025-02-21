import { Book } from "lucide-react"

export function EditorContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Title"
              className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/40"
              defaultValue="Meeting Notes"
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Book className="w-4 h-4" />
              Work • Last edited 2 hours ago
            </div>
          </div>
          <div className="prose prose-sm max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <h2>Agenda</h2>
            <ul>
              <li>Project updates</li>
              <li>Timeline review</li>
              <li>Resource allocation</li>
              <li>Next steps</li>
            </ul>
            <h2>Action Items</h2>
            <ul>
              <li>Follow up with team about deliverables</li>
              <li>Schedule follow-up meeting</li>
              <li>Update project documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

