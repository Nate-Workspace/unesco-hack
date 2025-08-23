"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, Settings, VolumeX } from "lucide-react";

export default function WatcherChatMonitorCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Watcher Chat Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 mb-4">
          <div className="space-y-3">
            <div className="p-2 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">Alex Thompson</span>
                <span className="text-xs text-gray-500">10:40 AM</span>
              </div>
              <p className="text-sm">This is such an important topic! 👏</p>
            </div>
            <div className="p-2 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">Maria Rodriguez</span>
                <span className="text-xs text-gray-500">10:41 AM</span>
              </div>
              <p className="text-sm">Great points from Sarah about policy implementation</p>
            </div>
            <div className="p-2 rounded-lg bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">Anonymous User</span>
                <span className="text-xs text-gray-500">10:42 AM</span>
                <Badge variant="destructive" className="text-xs">
                  Flagged
                </Badge>
              </div>
              <p className="text-sm">Inappropriate comment detected</p>
            </div>
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <VolumeX className="h-4 w-4 mr-1" />
            Mute Chat
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
