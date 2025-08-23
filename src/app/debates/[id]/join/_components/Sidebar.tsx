"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, Monitor, MessageSquare, Send } from "lucide-react"

export default function Sidebar() {
  const [chatMessage, setChatMessage] = useState("")

  const handleSend = () => {
    if (!chatMessage.trim()) return
    // TODO: wire this to your chat/send endpoint
    setChatMessage("")
  }

  return (
    <div className="lg:col-span-1 space-y-4">
      {/* Other Debaters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-sans">Other Debaters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/young-debater-2.png" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Jordan Smith</p>
              <p className="text-xs text-muted-foreground">Pro-Freedom Position</p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">Ready</span>
            </div>
          </div>
          <Separator />
          <div className="text-center py-2">
            <p className="text-xs text-muted-foreground">Waiting for moderator to start...</p>
          </div>
        </CardContent>
      </Card>

      {/* Moderator Chat */}
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-sm font-sans">Moderator Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3 pr-4">
              {/* Message 1 */}
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">M</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-medium text-primary">Maya Rodriguez</span>
                    <Badge variant="secondary" className="text-xs px-1 py-0">Moderator</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Welcome to the green room! We'll start in about 3 minutes. Please test your audio and video.
                  </p>
                  <span className="text-xs text-muted-foreground">2m ago</span>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">M</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-medium text-primary">Maya Rodriguez</span>
                    <Badge variant="secondary" className="text-xs px-1 py-0">Moderator</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Remember: You'll have 3 minutes for opening statements, then we'll move to rebuttals.
                  </p>
                  <span className="text-xs text-muted-foreground">5m ago</span>
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex items-start space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/young-debater-2.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs font-medium">Jordan Smith</span>
                    <span className="text-xs text-muted-foreground">6m ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Audio and video looking good on my end! Ready when you are.
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="mt-4 space-y-2">
            <div className="flex space-x-2">
              <Input
                placeholder="Message moderator..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="text-sm"
              />
              <Button size="sm" onClick={handleSend} aria-label="Send message">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Direct communication with the moderator</p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-sans">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Audio/Video Settings
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <Monitor className="w-4 h-4 mr-2" />
            Test Screen Share
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
            <MessageSquare className="w-4 h-4 mr-2" />
            View Debate Notes
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
