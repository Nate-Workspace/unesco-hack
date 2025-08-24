"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Pin, MoreVertical, Send, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ChatSidebar() {
  const [message, setMessage] = useState("")

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
          </TabsList>

          {/* Chat Tab */}
          <TabsContent value="chat" className="mt-4 space-y-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-sans">Live Chat</CardTitle>
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="ghost">
                  <Pin className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="ghost">
                  <MoreVertical className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="h-[400px] mt-4">
              <div className="space-y-3 pr-4">
                {/* Example message */}
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs">M</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <span className="text-xs font-medium text-primary">Maya_R</span>
                      <Badge variant="secondary" className="text-xs px-1 py-0">
                        Moderator
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Great points from both sides! Remember to keep questions respectful 👍
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <div className="mt-4 space-y-2">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask a question or share your thoughts..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm"
                />
                <Button size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Be respectful and constructive. Messages are moderated.
              </p>
            </div>
          </TabsContent>

          {/* Questions Tab */}
          <TabsContent value="questions" className="mt-4 space-y-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-sans">Audience Questions</CardTitle>
              <Badge variant="secondary" className="text-xs">
                12 pending
              </Badge>
            </div>
            <ScrollArea className="h-[400px] mt-4">
              <div className="space-y-3 pr-4">
                <Card className="p-3 bg-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium">PolicyStudent</span>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Top Question
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        How do we balance free speech with protecting marginalized communities from hate speech?
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                          <ChevronUp className="w-3 h-3 mr-1" />
                          23
                        </Button>
                        <span className="text-xs text-muted-foreground">5m ago</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollArea>

            {/* Question Input */}
            <div className="mt-4 space-y-2">
              <div className="flex space-x-2">
                <Input placeholder="Submit your question for the debaters..." className="text-sm" />
                <Button size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Questions are reviewed before being shared with debaters.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}
