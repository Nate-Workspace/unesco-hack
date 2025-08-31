"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, Bookmark, BookmarkCheck } from "lucide-react";
import * as Icons from "lucide-react";

interface UpcomingDebate {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  applicationsOpen: boolean;
  interested: number;
  icon: string;
  upcoming: boolean;
}

export default function UpcomingDebatesSection({ upcomingDebates }: { upcomingDebates: UpcomingDebate[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground font-sans">Upcoming Debates</h3>
        <Badge variant="outline">{upcomingDebates.length} Scheduled</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {upcomingDebates.map((debate, index) => {
          // Use a combination of a unique identifier and the index as a fallback
          const key = debate.id || debate.title + index;
          return (
            <Card key={key} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-accent/10">{debate.date}</Badge>
                  <div className="flex items-center space-x-1">
                    <Button size="sm" variant="ghost">
                      {debate.applicationsOpen ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </Button>
                    <span className="text-sm text-muted-foreground">{debate.interested} interested</span>
                  </div>
                </div>
                <CardTitle className="font-sans flex items-center">
                  {debate.title}
                </CardTitle>
                <CardDescription className="font-serif">{debate.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {debate.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {debate.time}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className={debate.applicationsOpen ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                  >
                    {debate.applicationsOpen ? "Applications Open" : "Applications Soon"}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" /> Notify Me
                    </Button>
                    <Button size="sm" disabled={!debate.applicationsOpen}>
                      {debate.applicationsOpen ? "Apply to Debate" : "Coming Soon"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}