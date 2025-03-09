import { MessageCircle, RefreshCw, X } from "lucide-react";
import { Button } from "@packages/ui/components/base/button";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@packages/ui/components/base/card";
import HeaderChat from "@packages/ui/components/base/chat/chat-header";
import { ChatInput } from "@packages/ui/components/base/chat/chat-input";
import { ChatMessages } from "@packages/ui/components/base/chat/list-message";
import { supabase } from "./../../../lib/supabase";

export default function ChatLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<any[]>([]);
    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            fetchMessages("b4de5508-3a94-4aa6-b88d-c9389e2b90b6");
            const subscription = supabase.channel("frontend")
                .on("postgres_changes", {
                    event: "UPDATE",
                    schema: "public",
                    table: "chat_room_messages",
                }, (payload) => {
                    console.log("payload channel", payload);
                    setMessages((prev) =>
                        prev.map((
                            msg,
                        ) => (msg.id === payload.new.id ? payload.new : msg))
                    );
                })
                .subscribe();

            return () => {
                supabase.removeChannel(subscription);
            };
        }
    }, [isOpen]);

    const fetchMessages = async (room_id: string) => {
        const { data } = await supabase
            .from("chat_room_messages")
            .select(`
                id,
                message,
                    sender_id,
                    users(email),
                is_read,
                created_at
            `)
            .eq("chat_room_id", room_id)
            .order("created_at", { ascending: true });
        setMessages(data || []);
    };

    const handleSubmitMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            const { data, error } = await supabase
                .from("chat_room_messages")
                .insert([
                    {
                        chat_room_id: "b4de5508-3a94-4aa6-b88d-c9389e2b90b6",
                        sender_id: "6c48a77a-46ae-4ac7-a32c-97cfcbeb1080",
                        message: message,
                    },
                ])
                .select();

            if (error) {
                console.error("Error sending message:", error);

                return;
            }

            if (data) {
                setMessages((prev) => [...prev, data[0]]);
            }

            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-4 right-4">
            {isOpen
                ? (
                    <Card className="w-140 h-[900px] flex flex-col">
                        <HeaderChat
                            title={"Chat Groups"}
                            subtitle={"Simple Chat Message"}
                            onClose={toggleChat}
                        />
                        <CardContent className="flex-grow overflow-y-auto">
                            <ChatMessages
                                messages={messages}
                            />
                        </CardContent>
                        <ChatInput
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onSubmit={handleSubmitMessage}
                        />
                    </Card>
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
