import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  autoUpdate,
  hide,
  limitShift,
  offset,
  shift,
  size,
  useFloating,
} from "@floating-ui/react-dom";
import { useRange } from "@/hooks/use-range";
import { useMouseListener } from "@/hooks/use-mouse-listener";
import { FloatingToolbarOptions } from "./floating-toolbar-options";

const MARGIN_X = 32;

export function FloatingToolbar() {
  const padding = 20;
  const [fullWidth, setFullWidth] = useState(false);
  const [editor] = useLexicalComposerContext();

  // Handle floating and edge cases
  const {
    refs: { setReference, setFloating },
    strategy,
    x,
    y,
  } = useFloating({
    strategy: "fixed",
    placement: "bottom",
    middleware: [
      offset(10),
      hide({ padding }),
      shift({ padding, limiter: limitShift() }),
      size({ padding }),
    ],
    whileElementsMounted: (...args) => {
      return autoUpdate(...args, {
        animationFrame: true,
      });
    },
  });

  // Pass position of current selection to floating ui
  const { range, rangeRef } = useRange();
  useLayoutEffect(() => {
    setReference({
      getBoundingClientRect: () =>
        range?.getBoundingClientRect() || new DOMRect(),
    });
  }, [setReference, range]);

  // When menu closed, go back to narrow width
  useEffect(() => {
    if (range === null) {
      setFullWidth(false);
    }
  }, [range]);

  // Don't show toolbar when mouse is down and creating a new selection
  const [creatingMouseSelection, setCreatingMouseSelection] = useState(false);
  useMouseListener((mouse) => {
    // Wait two ticks in case Lexical needs to remove previous selection
    setTimeout(() => {
      setTimeout(() => {
        setCreatingMouseSelection(
          rangeRef.current === null && mouse === "down"
        );
      });
    });
  });

  if (range === null || creatingMouseSelection) {
    return null;
  }

  return createPortal(
    <div
      ref={setFloating}
      className="pointer-events-auto bg-white rounded flex gap-2 transition-opacity duration-200 z-[1000]"
      style={{
        position: "fixed", 
        top: `${y ?? 0}px`,
        left: `${x ?? 0}px`,
        transform: "translate(-50%, -10px)",
        opacity: range ? 1 : 0,
      }}
    >
      <ToolbarOptions setFullWidth={setFullWidth} />
    </div>,
    document.body
  );
}

function ToolbarOptions({
  setFullWidth,
}: {
  setFullWidth: (isFullWidth: boolean) => void;
}) {
  const [state, setState] = useState<"default" | "closed">("default");

  if (state === "closed") {
    return null;
  }

  return (
    <div className="w-full text-foreground text-sm leading-relaxed">

      {/* Initial toolbar */}
      {state === "default" ? (
        <FloatingToolbarOptions
          state={state}
          setState={setState} 
          setFullWidth={setFullWidth}
        />
      ) : null}
    </div>
  );
}
