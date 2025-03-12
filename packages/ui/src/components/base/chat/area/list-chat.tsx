import React from "react";
import { ScrollArea } from "../../scroll-area";

interface Message {
  id: number;
  content: string;
  time: string;
  type: "file" | "text";
  fileSize?: string;
  isMe: boolean | null;
}

const MessageBubble = (
  {
    message,
    isMe,
  }: {
    message: Message;
    isMe: boolean | null;
  },
) => {
  const isFile = message.type === "file";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      {isMe === null
        ? (
          <div className="text-xs text-gray-500 bg-gray-100 py-1 px-3 rounded-full mx-auto">
            {message.content}
          </div>
        )
        : isFile
        ? (
          <div
            className={`max-w-[80%] ${
              isMe ? "bg-primary text-primary-foreground" : "bg-gray-100"
            } rounded-lg p-3`}
          >
            <div className="flex items-center gap-2">
              <div className="bg-white bg-opacity-20 p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">
                  </path>
                  <polyline points="14 2 14 8 20 8">
                  </polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <div className="font-medium text-sm">
                  {message.content}
                </div>
                {message.fileSize && (
                  <div className="text-xs opacity-70">
                    {message.fileSize}
                  </div>
                )}
              </div>
            </div>
            <div className="text-xs mt-1 opacity-70 text-right">
              {message.time}
            </div>
          </div>
        )
        : (
          <div
            className={`max-w-[80%] ${
              isMe ? "bg-primary text-primary-foreground" : "bg-gray-100"
            } rounded-lg p-3`}
          >
            <div>{message.content}</div>
            <div className="text-xs mt-1 opacity-70 text-right">
              {message.time}
            </div>
          </div>
        )}
    </div>
  );
};

const ChatMessages = ({ messages }: { messages: Message[] }) => {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isMe={message.isMe}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
