import React from "react";
import { Button } from "../../button";
import { Textarea } from "../../textarea";
import { Paperclip, Send, Smile } from "lucide-react";

const InputChat = () => {
  return (
    <div className="p-4 border-t">
      <div className="flex items-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
        >
          <Paperclip className="h-4 w-4" />
        </Button>
        <Textarea
          placeholder="Write a message..."
          className="min-h-20 resize-none"
          rows={1}
        />
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 flex-shrink-0"
        >
          <Smile className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InputChat;
