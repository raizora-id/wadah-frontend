import { cn } from "@/lib/utils"

interface NoteItemProps {
  title: string
  subtitle: string
  selected?: boolean
  className?: string
}

export function NoteItem({ title, subtitle, selected, className }: NoteItemProps) {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-lg p-3 transition-colors duration-200",
        selected ? "bg-yellow-100 hover:bg-yellow-200" : "hover:bg-gray-100",
        className,
      )}
    >
      <h3 className="font-medium leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}

