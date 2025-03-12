import React from "react";

type HeaderChatProps = {
  title: string;
  showChatsModal: boolean;
};

export default function HeaderChat(
  { title, showChatsModal }: HeaderChatProps,
) {
  return (
    <div className="p-[18px] border-b flex justify-between items-center">
      <h2 className="font-semibold text-lg">{title}</h2>
      <div className="flex gap-2">
      </div>
    </div>
  );
}
