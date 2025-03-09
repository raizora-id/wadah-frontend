import React from "react";
import { Button } from "../button";
import { CardHeader, CardTitle } from "../card";
import { RefreshCw, X } from "lucide-react";

export interface HeaderChatProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

export default function HeaderChat(
  { onClose, title, subtitle }: HeaderChatProps,
) {
  return (
    <CardHeader className="flex flex-row items-center justify-between border-2">
      <div className="flex flex-row space-x-2 items-center">
        <CardTitle>{title}</CardTitle>
        <span className="text-xs text-muted-foreground">
          {subtitle}
        </span>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
}
