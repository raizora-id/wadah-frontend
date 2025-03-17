import type { ReactNode } from "react"

interface StyleTableRowProps {
  example: ReactNode
  className: string
  usage: string
  isLast?: boolean
}

export default function TableBordered({ example, className, usage, isLast = false }: StyleTableRowProps) {
  return (
    <div className={`grid grid-cols-3 p-4 items-center ${!isLast ? "border-b border-[#333]" : ""}`}>
      <div>{example}</div>
      <div className="font-mono text-sm text-[#888]">{className}</div>
      <div className="text-[#888]">{usage}</div>
    </div>
  )
}

