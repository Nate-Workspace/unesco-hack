"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Debater } from "@/types/ModeratePage.types";

export default function DebaterPerformanceCard({ debaters }: { debaters: Debater[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Debater Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {debaters.map((debater) => (
            <div key={debater.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={debater.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">
                    {debater.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{debater.name}</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Speaking Time</div>
                <div className="text-sm font-semibold">12:45</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
