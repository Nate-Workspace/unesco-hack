"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Users } from "lucide-react";
import { ChatMessage } from "@/types/ModeratePage.types";
import { useCallback } from "react";

export default function DebaterChatCard({
  messages,
  newMessage,
  setNewMessage,
  onSend,
}: {
  messages: ChatMessage[];
  newMessage: string;
  setNewMessage: (v: string) => void;
  onSend: () => void;
}) {
  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") onSend();
    },
    [onSend]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Debater Chat
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 mb-4">
          <div className="space-y-3">
            {messages
              .filter((m) => m.type === "debater" || m.type === "moderator")
              .map((message) => (
                <div
                  key={message.id}
                  className={`p-2 rounded-lg ${
                    message.type === "moderator" ? "bg-blue-50 ml-4" : "bg-gray-50 mr-4"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{message.author}</span>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            placeholder="Message debaters..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKey}
          />
          <Button onClick={onSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
