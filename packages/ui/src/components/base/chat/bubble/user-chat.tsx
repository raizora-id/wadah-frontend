"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "../button";
import ChatBot from "./chat-bot";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function UserChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSendMessage = (message: string) => {
    addMessage(message, "user");

    const now = new Date();
    const lastMessage = messages[messages.length - 1];
    if (
      lastMessage && lastMessage.sender === "user" &&
      (now.getTime() - lastMessage.timestamp.getTime()) < 5000
    ) {
      return;
    }

    setTimeout(() => {
      addMessage(
        "Thanks for your message! This is a simulated response.",
        "bot",
      );
    }, 5000);

    resetInactivityTimer(); // Reset inactivity timer on user action
  };

  const resetChat = () => {
    setMessages([]);
  };

  // Function to handle inactivity
  const resetInactivityTimer = () => {
    if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);

    inactivityTimeout.current = setTimeout(() => {
      addMessage(
        "👋 It looks like you are currently away. If you need help, please feel free to restart the chat! You can do so by clicking the refresh icon at the right of the chat box. I'll be back as soon as possible!",
        "bot",
      );
    }, 60000); // 1 minute
  };

  // Call resetInactivityTimer only once
  useEffect(() => {
    resetInactivityTimer();
  }, []);

  // Detect user activity
  useEffect(() => {
    const handleUserActivity = () => resetInactivityTimer();

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage("What can I help you?", "bot");
    }
  }, [isOpen, messages]);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen
        ? (
          <ChatBot
            messages={messages}
            onSendMessage={handleSendMessage}
            onReset={resetChat}
            onClose={toggleChat}
          />
        )
        : (
          <Button
            onClick={toggleChat}
            className="rounded-full w-12 h-12 flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
    </div>
  );
}
