"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  MessageSquare,
  Mic,
  MicOff,
  Monitor,
  Settings,
  PhoneOff,
  Camera,
  CameraOff,
  ScreenShare,
  Hand,
  CheckCircle,
  Headphones,
  Wifi,
  Signal,
  Send,
  AlertCircle,
  Clock,
  Users,
} from "lucide-react"
import { useState } from "react"

export default function JoinDebatePage() {
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(false) // Muted by default in green room
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState("connected")
  const [isReady, setIsReady] = useState(false)
  const [chatMessage, setChatMessage] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
                <Badge className="bg-orange-500 text-white">DEBATER</Badge>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Green Room</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Signal className="w-4 h-4 text-green-500" />
                <span>Excellent</span>
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

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            {!isReady && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-yellow-800">Waiting for Approval</p>
                      <p className="text-sm text-yellow-700">
                        You've requested to join as a debater. The moderator will approve your participation shortly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Self Preview */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-sans">Your Preview</CardTitle>
                  <div className="flex items-center space-x-2">
                    {isReady ? (
                      <Badge variant="outline" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                        Ready to Join
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs bg-yellow-50 border-yellow-200">
                        <Clock className="w-3 h-3 mr-1 text-yellow-600" />
                        Pending Approval
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  {/* Self Video Preview */}
                  {isCameraOn ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src="/young-debater.png" />
                          <AvatarFallback className="text-2xl">YD</AvatarFallback>
                        </Avatar>
                        <p className="text-lg font-medium">Your Camera Preview</p>
                        <p className="text-sm opacity-75">Looking good! Ready to debate.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <CameraOff className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">Camera Off</p>
                        <p className="text-sm opacity-75">Turn on your camera when ready</p>
                      </div>
                    </div>
                  )}

                  {/* Controls Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-3 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2">
                      <Button
                        size="sm"
                        variant={isMicOn ? "default" : "secondary"}
                        className="rounded-full w-10 h-10 p-0"
                        onClick={() => setIsMicOn(!isMicOn)}
                      >
                        {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant={isCameraOn ? "default" : "secondary"}
                        className="rounded-full w-10 h-10 p-0"
                        onClick={() => setIsCameraOn(!isCameraOn)}
                      >
                        {isCameraOn ? <Camera className="w-4 h-4" /> : <CameraOff className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant={isScreenSharing ? "default" : "secondary"}
                        className="rounded-full w-10 h-10 p-0"
                        onClick={() => setIsScreenSharing(!isScreenSharing)}
                        disabled={!isReady}
                      >
                        <ScreenShare className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant={isHandRaised ? "default" : "secondary"}
                        className="rounded-full w-10 h-10 p-0"
                        onClick={() => setIsHandRaised(!isHandRaised)}
                        disabled={!isReady}
                      >
                        <Hand className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    {!isMicOn && (
                      <Badge className="bg-red-500 text-white text-xs">
                        <MicOff className="w-3 h-3 mr-1" />
                        Muted
                      </Badge>
                    )}
                    {isHandRaised && (
                      <Badge className="bg-yellow-500 text-white text-xs">
                        <Hand className="w-3 h-3 mr-1" />
                        Hand Raised
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Debate Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-sans">Freedom of Expression in Digital Age</CardTitle>
                <p className="text-muted-foreground font-serif">
                  Should social media platforms have the right to moderate content, or does this infringe on freedom of
                  expression?
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Your Position</h4>
                    <Card className="p-3 bg-blue-50 border-blue-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-blue-900">Pro-Regulation</span>
                      </div>
                      <p className="text-sm text-blue-800 mt-1">
                        Arguing for platform responsibility in content moderation
                      </p>
                    </Card>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Debate Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Current Phase:</span>
                        <Badge variant="outline">Pre-Debate Setup</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Time to Start:</span>
                        <span className="font-medium">~3 minutes</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Audience:</span>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span className="font-medium">247 waiting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {isReady
                        ? "You're ready to join the debate!"
                        : "Mark yourself as ready when your setup is complete"}
                    </p>
                    <Button onClick={() => setIsReady(!isReady)} variant={isReady ? "outline" : "default"} size="sm">
                      {isReady ? "Not Ready" : "I'm Ready"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Check */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-sans flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Technical Check
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Connection</p>
                      <p className="text-xs text-green-600">Excellent (45ms)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Camera className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Camera</p>
                      <p className="text-xs text-green-600">HD Ready</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Headphones className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Audio</p>
                      <p className="text-xs text-green-600">Clear</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
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
                    <div className="flex items-start space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">M</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium text-primary">Maya Rodriguez</span>
                          <Badge variant="secondary" className="text-xs px-1 py-0">
                            Moderator
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Welcome to the green room! We'll start in about 3 minutes. Please test your audio and video.
                        </p>
                        <span className="text-xs text-muted-foreground">2m ago</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">M</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium text-primary">Maya Rodriguez</span>
                          <Badge variant="secondary" className="text-xs px-1 py-0">
                            Moderator
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Remember: You'll have 3 minutes for opening statements, then we'll move to rebuttals.
                        </p>
                        <span className="text-xs text-muted-foreground">5m ago</span>
                      </div>
                    </div>

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
                    <Button size="sm">
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
        </div>
      </div>
    </div>
  )
}
