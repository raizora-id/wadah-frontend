import React from "react";
import { ScrollArea } from "../../scroll-area";
import ChatItem from "./chat-item";

const ChatList = ({
  chats,
  selectedChat,
  setSelectedChat,
}: {
  chats: any[];
  selectedChat: number;
  setSelectedChat: (id: number) => void;
}) => {
  return (
    <ScrollArea className="flex-1">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setSelectedChat(chat.id)}
        >
          <ChatItem
            chat={chat}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        </div>
      ))}
    </ScrollArea>
  );
};

export default ChatList;
