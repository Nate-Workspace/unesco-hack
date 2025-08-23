"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, FileText, XCircle } from "lucide-react";
import { Question } from "@/types/ModeratePage.types";

export default function QuestionManagementCard({
  questions,
  onAction,
}: {
  questions: Question[];
  onAction: (id: string, action: "approve" | "reject") => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Management</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{question.author}</span>
                      <Badge
                        variant={
                          question.status === "approved"
                            ? "default"
                            : question.status === "rejected"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {question.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{question.timestamp}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{question.content}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{question.votes} votes</span>
                    </div>
                  </div>
                  {question.status === "pending" && (
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" onClick={() => onAction(question.id, "approve")}>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => onAction(question.id, "reject")}>
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
