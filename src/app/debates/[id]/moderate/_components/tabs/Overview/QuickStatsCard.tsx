"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Debater, Question } from "@/types/ModeratePage.types";

export default function QuickStatsCard({
  watcherCount,
  debaters,
  questions,
}: {
  watcherCount: number;
  debaters: Debater[];
  questions: Question[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Total Watchers</span>
          <span className="font-semibold">{watcherCount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Active Debaters</span>
          <span className="font-semibold">{debaters.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Ready Debaters</span>
          <span className="font-semibold">{debaters.filter((d) => d.status === "ready").length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Pending Questions</span>
          <span className="font-semibold">{questions.filter((q) => q.status === "pending").length}</span>
        </div>
      </CardContent>
    </Card>
  );
}
