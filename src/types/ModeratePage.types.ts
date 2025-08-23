export interface Debater {
  id: string;
  name: string;
  avatar: string;
  status: "ready" | "not-ready" | "technical-issues";
  micEnabled: boolean;
  videoEnabled: boolean;
  joinedAt: string;
}

export interface Question {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  status: "pending" | "approved" | "rejected";
  votes: number;
}

export interface ChatMessage {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  type: "debater" | "watcher" | "moderator";
}
