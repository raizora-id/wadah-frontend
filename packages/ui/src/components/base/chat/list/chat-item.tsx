import React from "react";
import { Avatar } from "../../avatar";

const ChatItem = ({
  chat,
  selectedChat,
  setSelectedChat,
}: {
  chat: any;
  selectedChat: number;
  setSelectedChat: (index: number) => void;
}) => {
  return (
    <div
      key={chat.id}
      className={`flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer ${
        selectedChat === chat.id ? "bg-gray-100" : ""
      }`}
      onClick={() => setSelectedChat(chat.id)}
    >
      <Avatar className="h-10 w-10 border">
        <img
          src={chat.avatar || "/placeholder.svg"}
          alt={chat.name}
          className="h-full w-full object-cover"
        />
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">
            {chat.name}
          </span>
          <span className="text-xs text-gray-500">
            {chat.time}
          </span>
        </div>
        <p className="text-sm text-gray-500 truncate">
          {chat.lastMessage}
        </p>
      </div>
      {chat.unread > 0 && (
        <div className="flex-shrink-0 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
          <span className="text-xs text-white">
            {chat.unread}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChatItem;
