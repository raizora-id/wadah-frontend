"use client";

import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import DraggableBlockPlugin from "./plugins/draggable-block-plugin";
import { PreserveSelectionPlugin } from "./plugins/preserve-selection-plugin";
import { FloatingToolbar } from "./floating-toolbar";

// Konfigurasi Lexical tanpa Liveblocks
const initialConfig = {
  namespace: "Demo",
  nodes: [
    HorizontalRuleNode,
    CodeNode,
    LinkNode,
    ListNode,
    ListItemNode,
    HeadingNode,
    QuoteNode,
  ],
  onError: (error: unknown) => {
    console.error(error);
    throw error;
  },
  theme: {
    text: {
      bold: "lexical-bold",
      italic: "lexical-italic",
      underline: "lexical-underline",
      strikethrough: "lexical-strikethrough",
    },
  },
};

export function Editor() {
  // Digunakan untuk draggable block
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="first:*:z-10 contents">
        <div className="editor-container relative flex flex-row justify-between h-[calc(100%-60px)] w-full flex-1">
          <div className="relative h-full w-full overflow-y-auto overflow-x-hidden">
            <div className="xl:mr-[200px]">
              <div className="relative max-w-[740px] w-full mx-auto pb-[400px] p-8">
                <section className="relative">
                  {/* The editor */}
                  <RichTextPlugin
                    contentEditable={
                      <div ref={onRef}>
                        <ContentEditable className="relative outline-none w-full h-full px-8 py-4" />
                      </div>
                    }
                    placeholder={
                      <span className="pointer-events-none absolute top-7 mt-px left-8 text-muted-foreground w-full h-full">
                        Try mentioning a user with @
                      </span>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                  />

                  {/* Click and drag editor blocks by their handle */}
                  {floatingAnchorElem ? (
                    <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                  ) : null}

                  {/* Toolbar untuk teks */}
                  <FloatingToolbar />
                </section>
              </div>
            </div>
          </div>
        </div>
        <PreserveSelectionPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </LexicalComposer>
  );
}
