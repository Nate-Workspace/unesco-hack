"use client";

import DebaterStatusCard from "./DebaterStatusCard";
import PendingQuestionsCard from "./PendingQuestionsCard";
import QuickStatsCard from "./QuickStatsCard";
import { Debater, Question } from "@/types/ModeratePage.types";

export default function OverviewTab({
  debaters,
  questions,
  watcherCount,
  onQuestionAction,
}: {
  debaters: Debater[];
  questions: Question[];
  watcherCount: number;
  onQuestionAction: (id: string, action: "approve" | "reject") => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <DebaterStatusCard debaters={debaters} />
      <PendingQuestionsCard questions={questions} onAction={onQuestionAction} />
      <QuickStatsCard watcherCount={watcherCount} debaters={debaters} questions={questions} />
    </div>
  );
}
