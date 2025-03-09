"use client";

import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Bot, CircleUserRound } from "lucide-react";

interface Message {
  id: string;
  message: string;
  sender_id: string;
  is_read: boolean;
  created_at: string;
  users: {
    email: string;
  };
}

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  return (
    <div className="flex flex-col space-y-3 mt-3 rounded-lg max-w-md mx-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender_id === "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          {message.sender_id !== "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080" && (
            <Avatar className="mr-2 self-end">
              <AvatarImage src="/user-avatar.png" alt="User" />
              <AvatarFallback>
                <CircleUserRound className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
          )}
          <div
            className={`relative p-3 rounded-lg max-w-[250px] text-sm shadow-md ${
              message.sender_id === "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080"
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-gray-200 text-black rounded-bl-none"
            }`}
          >
            {message.message}
            <div className="text-xs text-gray-500 mt-1">
              {new Date(message.created_at).toLocaleTimeString()}
            </div>
            <div
              className={`absolute w-3 h-3 bg-inherit rotate-45 ${
                message.sender_id === "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080"
                  ? "-right-1 bottom-1"
                  : "-left-1 bottom-1"
              }`}
            >
            </div>
          </div>
          {message.sender_id === "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080" && (
            <Avatar className="ml-2 self-end">
              <AvatarImage src="/user-avatar.png" alt="User" />
              <AvatarFallback>
                <CircleUserRound className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
