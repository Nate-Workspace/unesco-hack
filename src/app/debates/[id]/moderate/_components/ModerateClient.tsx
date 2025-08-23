"use client";

import { useState } from "react";
import HeaderBar from "./HeaderBar";
import ControlBar from "./ControlBar";
import DebateViewCard from "./tabs/DebateView/DebateViewCard";
import OverviewTab from "./tabs/Overview/OverviewTab";
import DebatersTab from "./tabs/Debaters/DebatersTab";
import QuestionsTab from "./tabs/Questions/QuestionsTab";
import ChatTab from "./tabs/Chat/ChatTab";
import SummaryTab from "./tabs/Summary/SummaryTab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ChatMessage, Debater, Question } from "@/types/ModeratePage.types";

export default function ModerateClient({ params }: { params: { id: string } }) {
  const [debateStatus, setDebateStatus] = useState<"waiting" | "live" | "paused" | "ended">("waiting");
  const [debaters, setDebaters] = useState<Debater[]>([
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "/young-debater-1.png",
      status: "ready",
      micEnabled: true,
      videoEnabled: true,
      joinedAt: "10:25 AM",
    },
    {
      id: "2",
      name: "Marcus Johnson",
      avatar: "/young-debater-2.png",
      status: "not-ready",
      micEnabled: false,
      videoEnabled: true,
      joinedAt: "10:28 AM",
    },
    {
      id: "3",
      name: "Aisha Patel",
      avatar: "/climate-activist.png",
      status: "technical-issues",
      micEnabled: true,
      videoEnabled: false,
      joinedAt: "10:30 AM",
    },
  ]);

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      author: "Alex Thompson",
      content:
        "What specific policies would you implement to ensure equal access to education for all children?",
      timestamp: "10:32 AM",
      status: "pending",
      votes: 12,
    },
    {
      id: "2",
      author: "Maria Rodriguez",
      content:
        "How do you address the concern that some human rights might conflict with cultural traditions?",
      timestamp: "10:35 AM",
      status: "pending",
      votes: 8,
    },
    {
      id: "3",
      author: "David Kim",
      content: "Can you provide examples of successful youth-led human rights movements?",
      timestamp: "10:37 AM",
      status: "approved",
      votes: 15,
    },
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      author: "Sarah Chen",
      content: "Ready to start! My audio is working perfectly.",
      timestamp: "10:25 AM",
      type: "debater",
    },
    {
      id: "2",
      author: "Moderator",
      content: "Great! Waiting for all debaters to be ready.",
      timestamp: "10:26 AM",
      type: "moderator",
    },
    {
      id: "3",
      author: "Marcus Johnson",
      content: "Having some mic issues, working on it.",
      timestamp: "10:28 AM",
      type: "debater",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [watcherCount, setWatcherCount] = useState(247);
  const [debateSummary, setDebateSummary] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const topicTitle = "Youth Rights: Education Access for All";
  const topicSubtitle = "Should education be completely free and accessible to all children worldwide?";

  const handleStartDebate = () => {
    const allReady = debaters.every((d) => d.status === "ready");
    if (allReady) setDebateStatus("live");
    else alert("Not all debaters are ready yet!");
  };

  const handlePauseResume = () =>
    setDebateStatus((s) => (s === "live" ? "paused" : s === "paused" ? "live" : s));

  const handleEndDebate = () => {
    setDebateStatus("ended");
    setActiveTab("summary");
  };

  const handleSaveSummary = () => {
    console.log("[v0] Saving debate summary:", debateSummary);
    alert("Summary saved successfully!");
  };

  const handleQuestionAction = (questionId: string, action: "approve" | "reject") => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, status: action === "approve" ? "approved" : "rejected" } : q))
    );
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        author: "Moderator",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "moderator",
      };
      setChatMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  const toggleMuteDebater = (id: string) =>
    setDebaters((prev) => prev.map((d) => (d.id === id ? { ...d, micEnabled: !d.micEnabled } : d)));

  const approveDebater = (id: string) =>
    setDebaters((prev) => prev.map((d) => (d.id === id ? { ...d, status: "ready" } : d)));

  const allReady = debaters.every((d) => d.status === "ready");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <HeaderBar debateStatus={debateStatus} watcherCount={watcherCount} />

      <div className="container mx-auto px-4 py-6">
        {/* Control Bar */}
        <ControlBar
          debateStatus={debateStatus}
          onStart={handleStartDebate}
          onEnd={handleEndDebate}
          allReady={allReady}
          title= {topicTitle}
          description={topicSubtitle}
        />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="debate-view">Debate View</TabsTrigger>
            <TabsTrigger value="debaters">Debaters</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="summary" disabled={debateStatus !== "ended"}>
              Summary
            </TabsTrigger>
          </TabsList>

          {/* Debate View */}
          <TabsContent value="debate-view" className="space-y-6">
            <DebateViewCard
              debateStatus={debateStatus}
              debaters={debaters}
              isFullscreen={isFullscreen}
              onToggleFullscreen={() => setIsFullscreen((v) => !v)}
            />
          </TabsContent>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <OverviewTab
              debaters={debaters}
              questions={questions}
              watcherCount={watcherCount}
              onQuestionAction={handleQuestionAction}
            />
          </TabsContent>

          {/* Debaters */}
          <TabsContent value="debaters" className="space-y-6">
            <DebatersTab
              debaters={debaters}
            />
          </TabsContent>

          {/* Questions */}
          <TabsContent value="questions" className="space-y-6">
            <QuestionsTab questions={questions} onAction={handleQuestionAction} />
          </TabsContent>

          {/* Chat */}
          <TabsContent value="chat" className="space-y-6">
            <ChatTab
              chatMessages={chatMessages}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              onSend={sendMessage}
            />
          </TabsContent>

          {/* Summary */}
          <TabsContent value="summary" className="space-y-6">
            <SummaryTab
              setValue={setDebateSummary}
              onSave={handleSaveSummary}
              value={debateSummary}
              debaters={debaters}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
