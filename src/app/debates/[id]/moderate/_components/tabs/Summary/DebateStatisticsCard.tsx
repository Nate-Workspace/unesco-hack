"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DebateStatisticsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Debate Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Duration</span>
          <span className="font-semibold">45:32</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Peak Viewers</span>
          <span className="font-semibold">312</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Questions Asked</span>
          <span className="font-semibold">18</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Questions Approved</span>
          <span className="font-semibold">12</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Chat Messages</span>
          <span className="font-semibold">156</span>
        </div>
      </CardContent>
    </Card>
  );
}
