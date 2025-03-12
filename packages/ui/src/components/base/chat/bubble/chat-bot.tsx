import React from "react";
import { RefreshCw, X } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import ChatMessages from "./chat-message";
import ChatInput from "./chat-input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatBotProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onReset: () => void;
  onClose: () => void;
}

export default function ChatBot(
  { messages, onSendMessage, onReset, onClose }: ChatBotProps,
) {
  const isUserTyping = false;

  return (
    <Card className="w-100 h-[900px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-2">
        <div className="flex flex-row space-x-2 items-center">
          <CardTitle>Group Chat</CardTitle>
          <span className="text-xs text-muted-foreground">
            A simple Group Chat
          </span>
        </div>
        <div className="flex space-x-2">
          {
            /* <Button variant="ghost" size="icon" onClick={onReset}>
            <RefreshCw className="h-4 w-4" />
          </Button> */
          }
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-grow overflow-y-auto">
        <ChatMessages messages={messages} isTyping={isUserTyping} />
      </CardContent>
      <ChatInput onSendMessage={onSendMessage} />
    </Card>
  );
}
