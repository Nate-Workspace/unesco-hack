"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, UserCheck, Video, VideoOff, Volume2 } from "lucide-react";
import { Debater } from "@/types/ModeratePage.types";
import { getStatusColor } from "@/utils/StatusIndicator";

export default function DebaterCard({ debater }: { debater: Debater }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={debater.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {debater.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{debater.name}</CardTitle>
            <p className="text-sm text-gray-600">Joined at {debater.joinedAt}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(debater.status)}>{debater.status.replace("-", " ")}</Badge>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {debater.micEnabled ? <Mic className="h-4 w-4 text-green-600" /> : <MicOff className="h-4 w-4 text-red-600" />}
            <span className="text-sm">Mic</span>
          </div>
          <div className="flex items-center gap-2">
            {debater.videoEnabled ? (
              <Video className="h-4 w-4 text-green-600" />
            ) : (
              <VideoOff className="h-4 w-4 text-red-600" />
            )}
            <span className="text-sm">Video</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Volume2 className="h-3 w-3 mr-1" />
            Mute
          </Button>
          <Button size="sm" variant="outline">
            <UserCheck className="h-3 w-3 mr-1" />
            Approve
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
