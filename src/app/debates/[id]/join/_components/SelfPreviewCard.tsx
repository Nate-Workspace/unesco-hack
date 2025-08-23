"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Camera, CameraOff, ScreenShare, Hand, CheckCircle, Clock } from "lucide-react"

export default function SelfPreviewCard() {
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [isReady, setIsReady] = useState(false)

  return (
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
              <Button size="sm" variant={isMicOn ? "default" : "secondary"} className="rounded-full w-10 h-10 p-0" onClick={() => setIsMicOn(!isMicOn)}>
                {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant={isCameraOn ? "default" : "secondary"} className="rounded-full w-10 h-10 p-0" onClick={() => setIsCameraOn(!isCameraOn)}>
                {isCameraOn ? <Camera className="w-4 h-4" /> : <CameraOff className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant={isScreenSharing ? "default" : "secondary"} className="rounded-full w-10 h-10 p-0" onClick={() => setIsScreenSharing(!isScreenSharing)} disabled={!isReady}>
                <ScreenShare className="w-4 h-4" />
              </Button>
              <Button size="sm" variant={isHandRaised ? "default" : "secondary"} className="rounded-full w-10 h-10 p-0" onClick={() => setIsHandRaised(!isHandRaised)} disabled={!isReady}>
                <Hand className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            {!isMicOn && (
              <Badge className="bg-red-500 text-white text-xs">
                <MicOff className="w-3 h-3 mr-1" /> Muted
              </Badge>
            )}
            {isHandRaised && (
              <Badge className="bg-yellow-500 text-white text-xs">
                <Hand className="w-3 h-3 mr-1" /> Hand Raised
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
