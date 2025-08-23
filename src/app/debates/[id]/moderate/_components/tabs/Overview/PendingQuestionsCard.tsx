"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { Question } from "@/types/ModeratePage.types";

export default function PendingQuestionsCard({
  questions,
  onAction,
}: {
  questions: Question[];
  onAction: (id: string, action: "approve" | "reject") => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Pending Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-48">
          <div className="space-y-3">
            {questions
              .filter((q) => q.status === "pending")
              .map((question) => (
                <div key={question.id} className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">{question.author}</p>
                  <p className="text-sm text-gray-600 mt-1">{question.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">{question.votes} votes</span>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" onClick={() => onAction(question.id, "approve")}>
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => onAction(question.id, "reject")}>
                        <XCircle className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
