import type { ReactNode } from "react"

interface StyleSectionProps {
  title: string
  description?: string
  children: ReactNode
  hasBorder?: boolean
}

export default function Section({ title, description, children, hasBorder = false }: StyleSectionProps) {
  return (
    <div className={`mb-16 ${hasBorder ? "border-b border-[#333] pb-16" : ""}`}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {description && <p className="mb-6 text-[#ccc]">{description}</p>}
      {children}
    </div>
  )
}
