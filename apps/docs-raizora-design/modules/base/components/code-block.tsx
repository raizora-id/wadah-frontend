interface CodeBlockProps {
    children: string
  }
  
  export default function CodeBlock({ children }: CodeBlockProps) {
    return (
      <div className="bg-[#111] p-4 rounded-none border border-[#333] mb-6 font-mono text-sm text-[#ccc]">{children}</div>
    )
  }  