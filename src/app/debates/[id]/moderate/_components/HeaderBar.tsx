"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, MessageSquare, PhoneOff, Settings, Signal } from "lucide-react";

export default function HeaderBar({
  debateStatus,
  watcherCount,
}: {
  debateStatus: "waiting" | "live" | "paused" | "ended";
  watcherCount: number;
}) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">YouthDebate</h1>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-2">
              <Badge className="bg-purple-500 text-white">MODERATOR</Badge>
              <div className="flex items-center space-x-1">
                <div
                  className={`w-3 h-3 rounded-full ${
                    debateStatus === "live" ? "bg-red-500 animate-pulse" : "bg-yellow-500"
                  }`}
                />
                <span className="text-sm text-muted-foreground">
                  {debateStatus === "live" ? "Live" : debateStatus === "waiting" ? "Preparing" : debateStatus}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Signal className="w-4 h-4 text-green-500" />
              <span>Excellent</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{watcherCount} watching</span>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="destructive" size="sm">
              <PhoneOff className="w-4 h-4 mr-1" />
              Leave
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
