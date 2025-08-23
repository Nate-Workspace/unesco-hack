"use client";

import QuestionManagementCard from "./QuestionManagementCard";
import { Question } from "@/types/ModeratePage.types";

export default function QuestionsTab({
  questions,
  onAction,
}: {
  questions: Question[];
  onAction: (id: string, action: "approve" | "reject") => void;
}) {
  return <QuestionManagementCard questions={questions} onAction={onAction} />;
}
