"use client";

import React from "react";
import { Send } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import { CardFooter } from "../card";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput(
  { value, onChange, onSubmit }: ChatInputProps,
) {
  return (
    <CardFooter className="pt-2">
      <form onSubmit={onSubmit} className="flex w-full space-x-2">
        <Input
          value={value}
          onChange={onChange}
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
