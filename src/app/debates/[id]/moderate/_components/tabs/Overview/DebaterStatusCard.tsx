"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import { Debater } from "@/types/ModeratePage.types";
import { getStatusColor, getStatusIcon } from "@/utils/StatusIndicator";

export default function DebaterStatusCard({ debaters }: { debaters: Debater[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Debater Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {debaters.map((debater) => (
          <div key={debater.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={debater.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {debater.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">{debater.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(debater.status)}`} />
              {getStatusIcon(debater.status)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
