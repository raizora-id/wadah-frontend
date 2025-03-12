"use client";

import React from "react";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { CardFooter } from "../card";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <CardFooter className="pt-2">
      <form onSubmit={handleSubmit} className="flex w-full space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow"
        />
        <Button type="submit">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </CardFooter>
  );
}
