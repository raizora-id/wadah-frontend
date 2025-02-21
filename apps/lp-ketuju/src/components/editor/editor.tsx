import type { NoteType } from "@/types"
import { EditorToolbar } from "@/components/editor/editor-toolbar"
import { Book } from "lucide-react"

interface EditorProps {
  id: string
  type: NoteType
}

export function Editor({ id, type }: EditorProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      <div className="border-b p-2 flex items-center justify-between">
        <EditorToolbar />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Title"
                className="w-full text-3xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/40"
                defaultValue={`${type === "blog" ? "Blog" : "Note"} ${id}`}
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Book className="w-4 h-4" />
                Last edited 2 hours ago
              </div>
            </div>
            <div className="prose prose-sm max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <h2>Content</h2>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

