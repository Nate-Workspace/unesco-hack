"use client";

import DebaterChatCard from "./DebaterChatCard";
import WatcherChatMonitorCard from "./WatcherChatMonitorCard";
import { ChatMessage } from "@/types/ModeratePage.types";

export default function ChatTab({
  chatMessages,
  newMessage,
  setNewMessage,
  onSend,
}: {
  chatMessages: ChatMessage[];
  newMessage: string;
  setNewMessage: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DebaterChatCard
        messages={chatMessages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onSend={onSend}
      />
      <WatcherChatMonitorCard />
    </div>
  );
}
