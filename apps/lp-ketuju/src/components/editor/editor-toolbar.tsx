import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { IconButton } from "@/components/ui/icon-button"
import {
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  CheckSquare,
  Link2,
} from "lucide-react"

export function EditorToolbar() {
  return (
    <ScrollArea className="w-full" orientation="horizontal">
      <div className="flex items-center gap-1">
        <IconButton icon={Type} />
        <Separator orientation="vertical" className="h-6" />
        <IconButton icon={Bold} tooltip="Bold" />
        <IconButton icon={Italic} tooltip="Italic" />
        <IconButton icon={Underline} tooltip="Underline" />
        <Separator orientation="vertical" className="h-6" />
        <IconButton icon={AlignLeft} tooltip="Align left" />
        <IconButton icon={AlignCenter} tooltip="Align center" />
        <IconButton icon={AlignRight} tooltip="Align right" />
        <Separator orientation="vertical" className="h-6" />
        <IconButton icon={List} tooltip="Bullet list" />
        <IconButton icon={ListOrdered} tooltip="Numbered list" />
        <IconButton icon={CheckSquare} tooltip="Checklist" />
        <Separator orientation="vertical" className="h-6" />
        <IconButton icon={Link2} tooltip="Insert link" />
      </div>
    </ScrollArea>
  )
}

