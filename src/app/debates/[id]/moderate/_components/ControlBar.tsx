"use client";

import { Button } from "@/components/ui/button";
import { Pause, Play, XCircle } from "lucide-react";

export default function ControlBar({
  debateStatus,
  allReady,
  onStart,
  onEnd,
  title,
  description,
}: {
  debateStatus: "waiting" | "live" | "paused" | "ended";
  allReady: boolean;
  onStart: () => void;
  onEnd: () => void;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm mb-6">
      <Button onClick={onStart} disabled={debateStatus === "live" || !allReady} className="flex items-center gap-2">
        <Play className="h-4 w-4" />
        Start Debate
      </Button>
      <Button variant="outline" disabled={debateStatus !== "live"} className="flex items-center gap-2 bg-transparent">
        <Pause className="h-4 w-4" />
        Pause
      </Button>
      <Button variant="destructive" disabled={debateStatus !== "live"} onClick={onEnd} className="flex items-center gap-2">
        <XCircle className="h-4 w-4" />
        End Debate
      </Button>
      <div className="ml-auto">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
