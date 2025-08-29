"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Eye, Clock, Share2 } from "lucide-react"
import { DebateDetails } from "@/types/debate.types"
import { useEffect, useState } from "react"

type DebateInfoProps = {
  Details: DebateDetails | null;
};

function TimeAgo({ startTime }: { startTime: string }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const diffMs = now.getTime() - new Date(startTime).getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);

  let display = "";
  if (diffMinutes < 60) {
    display = `started ${diffMinutes} min${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    display = `started ${diffHours} hr${diffHours !== 1 ? "s" : ""} ago`;
  } else {
    const diffDays = Math.floor(diffHours / 24);
    display = `started ${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }

  return <span>{display}</span>;
}

export default function DebateInfo({ Details }: DebateInfoProps) {
  if (!Details) return <div>Debate detail not found</div>;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-sans">{Details.title}</CardTitle>
            <p className="text-muted-foreground font-serif">
              {Details.description}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              247 watching
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              1.2k total views
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <TimeAgo startTime={Details.startTime.toString()} />
            </div>
          </div>
          <Badge variant="outline">{Details.category}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
