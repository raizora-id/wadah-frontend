"use client"

import { $createParagraphNode, $getSelection, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from "lexical"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { type MouseEventHandler, type ReactNode, useCallback, useState } from "react"
import { $setBlocksType } from "@lexical/selection"
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text"
import { useActiveBlock } from "@/hooks/use-active-block"
import { motion } from "framer-motion"

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Type,
  Quote,
  Heading1,
  Heading2,
  ChevronDown,
  AlignCenter,
  AlignLeft,
  AlignJustify,
  Table
} from "lucide-react"

const DROPDOWN_OPTIONS = [
  {
    id: "paragraph",
    text: "Paragraph",
    icon: <Type className="w-4 h-4" />,
  },
  {
    id: "quote",
    text: "Quote",
    icon: <Quote className="w-4 h-4" />,
  },
  {
    id: "h1",
    text: "Heading 1",
    icon: <Heading1 className="w-4 h-4" />,
  },
  {
    id: "h2",
    text: "Heading 2",
    icon: <Heading2 className="w-4 h-4" />,
  },
  {
    id: "h3",
    text: "Heading 3",
    icon: <Type className="w-4 h-4" />,
  },
  {
    id: "h4",
    text: "Heading 4",
    icon: <Type className="w-4 h-4" />,
  },
  {
    id: "h5",
    text: "Heading 5",
    icon: <Type className="w-4 h-4" />,
  },
  {
    id: "h6",
    text: "Heading 6",
    icon: <Type className="w-4 h-4" />,
  },
]

type DropdownIds = (typeof DROPDOWN_OPTIONS)[number]["id"]

export function FloatingToolbarOptions({
  state,
  setState,
  setFullWidth,
}: {
  state: "default" | "closed"
  setState: (state: "default" | "closed") => void
  setFullWidth: (isFullWidth: boolean) => void
}) {
  const [editor] = useLexicalComposerContext()
  const activeBlock = useActiveBlock()
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Change between block types
  const toggleBlock = useCallback(
    (type: DropdownIds) => {
      editor.update(() => {
        const selection = $getSelection()

        if (activeBlock === type || type === "paragraph") {
          return $setBlocksType(selection, () => $createParagraphNode())
        }

        if (type === "h1") {
          return $setBlocksType(selection, () => $createHeadingNode("h1"))
        }

        if (type === "h2") {
          return $setBlocksType(selection, () => $createHeadingNode("h2"))
        }

        if (type === "h3") {
          return $setBlocksType(selection, () => $createHeadingNode("h3"))
        }

        if (type === "h4") {
          return $setBlocksType(selection, () => $createHeadingNode("h4"))
        }

        if (type === "h5") {
          return $setBlocksType(selection, () => $createHeadingNode("h5"))
        }

        if (type === "h6") {
          return $setBlocksType(selection, () => $createHeadingNode("h6"))
        }

        if (type === "quote") {
          return $setBlocksType(selection, () => $createQuoteNode())
        }
      })
      setDropdownOpen(false)
    },
    [activeBlock, editor],
  )

  const getActiveOption = () => {
    return DROPDOWN_OPTIONS.find((option) => option.id === activeBlock) || DROPDOWN_OPTIONS[0]
  }

  return (
    <motion.div
      layoutId="floating-toolbar-main"
      layout="size"
      className="p-2 rounded-lg border border-gray-200 bg-white pointer-events-auto origin-top"
      initial={{ x: 0, y: 0, opacity: 0, scale: 0.93 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "spring",
        duration: 0.25,
      }}
    >
      <div className="flex items-center gap-1 flex-wrap">
        {/* Format section */}
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {getActiveOption().icon}
              <span className="hidden sm:inline">{getActiveOption().text}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 w-40">
                {DROPDOWN_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleBlock(option.id as DropdownIds)}
                    className={`flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                      activeBlock === option.id ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {option.icon}
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-gray-200 mx-1"></div>
        </div>

        {/* Text formatting */}
        <div className="flex items-center">
          <ToolbarButton
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
            }}
            tooltip="Bold"
          >
            <Bold className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
            }}
            tooltip="Italic"
          >
            <Italic className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
            }}
            tooltip="Underline"
          >
            <Underline className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
            }}
            tooltip="Strikethrough"
          >
            <Strikethrough className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")
            }}
            tooltip="Code"
          >
            <Code className="w-4 h-4" />
          </ToolbarButton>

          <div className="h-6 w-px bg-gray-200 mx-1"></div>
        </div>

        {/* Alignment and other options */}
        <div className="flex items-center">
          <ToolbarButton 
            tooltip="Link"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")
            }}
          >
            <AlignLeft className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton 
            tooltip="AlignCenter"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
            }}
          >
            <AlignCenter className="w-4 h-4" />
          </ToolbarButton>


          <ToolbarButton 
            tooltip="AlignCenter"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")
            }}
          >
            <AlignJustify className="w-4 h-4" />
          </ToolbarButton>

          <ToolbarButton 
            tooltip="Table"
          >
            <Table className="w-4 h-4" />
          </ToolbarButton>

          <div className="h-6 w-px bg-gray-200 mx-1"></div>
        </div>
      </div>
    </motion.div>
  )
}

interface ToolbarButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  tooltip?: string
  className?: string
}

function ToolbarButton({ onClick, children, tooltip, className }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      title={tooltip}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:opacity-50 px-2 py-1.5 text-gray-700 hover:bg-gray-100 ${className || ""}`}
    >
      {children}
    </button>
  )
}

