"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Vote, Bookmark, Play, Eye } from "lucide-react";
import * as Icons from "lucide-react";

interface LiveDebate {
  id: number;
  title: string;
  description: string;
  watchers: number;
  avatars: string[];
  icon: string;
//   icon: keyof typeof Icons;
}

export default function LiveDebatesSection({ liveDebates }: { liveDebates: LiveDebate[] }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground flex items-center font-sans">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
          Live Debates
        </h3>
        <Badge variant="secondary">{liveDebates.length} Active</Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveDebates.map((debate) => {
        //   const Icon = Icons[debate.icon];
          return (
            <Card key={debate.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-500 text-white">LIVE</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {debate.watchers} watching
                  </div>
                </div>
                <CardTitle className="text-lg font-sans flex items-center">
                  {/* {Icon && <Icon className="w-4 h-4 mr-2 text-primary" />} */}
                  {debate.title}
                </CardTitle>
                <CardDescription className="font-serif">{debate.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex -space-x-2">
                    {debate.avatars.map((src, idx) => (
                      <Avatar key={idx} className="w-8 h-8 border-2 border-background">
                        <AvatarImage src={src} />
                        <AvatarFallback>{`U${idx + 1}`}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button size="sm" variant="ghost"><MessageSquare className="w-4 h-4" /></Button>
                    <Button size="sm" variant="ghost"><Vote className="w-4 h-4" /></Button>
                    <Button size="sm" variant="ghost"><Bookmark className="w-4 h-4" /></Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={`/debates/${debate.id}/join`}>
                      <Play className="w-4 h-4 mr-1" /> Join
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={`/debates/${debate.id}/watch`}>
                      <Eye className="w-4 h-4 mr-1" /> Watch
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
