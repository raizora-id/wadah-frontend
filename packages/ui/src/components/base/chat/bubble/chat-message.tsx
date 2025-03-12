"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Bot, CircleUserRound } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean; // New prop to detect typing status
}

export default function ChatMessages(
  { messages, isTyping }: ChatMessagesProps,
) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]); // Auto-scroll when messages change or user is typing

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const groupMessages = (messages: Message[]) => {
    const groups: Message[][] = [];
    let currentGroup: Message[] = [];

    messages.forEach((message, index) => {
      if (index === 0) {
        currentGroup.push(message);
        return;
      }

      const prevMessage = messages[index - 1];
      if (!prevMessage) {
        currentGroup.push(message);
        return;
      }

      const prevTimestamp = new Date(prevMessage.timestamp);
      const currentTimestamp = new Date(message.timestamp);
      const sameMinute =
        prevTimestamp.getHours() === currentTimestamp.getHours() &&
        prevTimestamp.getMinutes() === currentTimestamp.getMinutes();

      if (prevMessage.sender === message.sender && sameMinute) {
        currentGroup.push(message);
      } else {
        groups.push([...currentGroup]);
        currentGroup = [message];
      }
    });

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  };

  const messageGroups = groupMessages(messages);

  return (
    <div className="flex flex-col space-y-5">
      {messageGroups.map((group) => {
        if (!group[0]) return null;
        const isUser = group[0].sender === "user";
        return (
          <div
            key={group[0].id}
            className={`flex ${isUser ? "justify-end" : "justify-star m-1"}`}
          >
            {!isUser && (
              <Avatar className="mr-2 self-end">
                <AvatarImage src="/bot-avatar.png" alt="Bot" />
                <AvatarFallback>
                  <Bot className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={`relative flex flex-col ${
                isUser ? "items-end" : "items-start"
              }`}
            >
              {group.map((message, index) => (
                <span
                  key={message.id}
                  className={`relative inline-block p-2 rounded-lg break-all max-w-[200px] ${
                    index === 0
                      ? `${isUser ? "rounded-br-sm" : "rounded-bl-sm"}`
                      : index === group.length - 1
                      ? `${isUser ? "rounded-tr-sm" : "rounded-tl-sm"}`
                      : `${isUser ? "rounded-r-sm" : "rounded-l-sm"}`
                  } ${
                    isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                  } ${index !== 0 ? "mt-1" : ""}`}
                >
                  {message.text}
                  {index === group.length - 1 && (
                    <span
                      className={`absolute bottom-0 w-3 h-3 ${
                        isUser
                          ? "right-0 bg-blue-500 clip-path-triangle-user"
                          : "left-0 bg-gray-200 clip-path-triangle-bot"
                      }`}
                    >
                    </span>
                  )}
                </span>
              ))}
              {group[0] && (
                <span className="text-xs text-gray-500 mt-1">
                  {formatTimestamp(group[0].timestamp)}
                </span>
              )}
            </div>
            {isUser && (
              <Avatar className="ml-2 self-end">
                <AvatarImage src="/user-avatar.png" alt="User" />
                <AvatarFallback>
                  <CircleUserRound className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        );
      })}
      {/* Typing indicator */}
      {isTyping && (
        <div className="flex justify-end">
          <span className="text-gray-500 text-sm">User is typing...</span>
        </div>
      )}
      {/* Invisible div for scrolling reference */}
      <div ref={messagesEndRef} />
    </div>
  );
}
