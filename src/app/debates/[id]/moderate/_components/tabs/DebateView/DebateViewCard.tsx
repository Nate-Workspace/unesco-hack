"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Minimize, Monitor, Settings, Volume2 } from "lucide-react";
import { Debater } from "@/types/ModeratePage.types";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";

export default function DebateViewCard({
  debateStatus,
  debaters,
  isFullscreen,
  onToggleFullscreen,
}: {
  debateStatus: "waiting" | "live" | "paused" | "ended";
  debaters: Debater[];
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Live Debate Stream
          </CardTitle>
          <Button variant="outline" size="sm" onClick={onToggleFullscreen}>
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Minimize className="h-4 w-4 rotate-90" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`grid gap-4 ${isFullscreen ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
          {/* Main Stage */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                {debateStatus === "live" ? (
                  <div>
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mx-auto mb-2"></div>
                    <p className="text-lg font-semibold">LIVE DEBATE</p>
                    <p className="text-sm opacity-75">Main Stage View</p>
                  </div>
                ) : (
                  <div>
                    <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-lg">Waiting for debate to start...</p>
                  </div>
                )}
              </div>
            </div>
            {debateStatus === "live" && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded">
                <Clock className="h-4 w-4 inline mr-1" />
                15:32
              </div>
            )}
          </div>

          {/* Debater Grid */}
          <div className="grid grid-cols-2 gap-2">
            {debaters.map((debater) => (
              <div key={debater.id} className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                <img src={debater.avatar || "/placeholder.svg"} alt={debater.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {debater.name}
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  {debater.micEnabled ? (
                    <Mic className="h-3 w-3 text-green-400" />
                  ) : (
                    <MicOff className="h-3 w-3 text-red-400" />
                  )}
                  {debater.videoEnabled ? (
                    <Video className="h-3 w-3 text-green-400" />
                  ) : (
                    <VideoOff className="h-3 w-3 text-red-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Button variant="outline" size="sm">
            <Volume2 className="h-4 w-4 mr-1" />
            Audio Controls
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Stream Settings
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-1" />
            Take Notes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
