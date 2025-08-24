"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Maximize, Volume2, VolumeX, Video } from "lucide-react"

export default function VideoPlayer() {
  const [volume, setVolume] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium">Live Debate Stream</p>
            <p className="text-sm opacity-75">Freedom of Expression in Digital Age</p>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setVolume(!volume)}
              >
                {volume ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </Button>
              <div className="flex items-center space-x-2 text-white text-sm">
                <Clock className="w-4 h-4" />
                <span>23:45 / Live</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Debater Info Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between space-x-2">
          <Card className="bg-black/60 backdrop-blur-sm border-white/20">
            <CardContent className="p-3 flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/young-debater.png" />
                <AvatarFallback>A1</AvatarFallback>
              </Avatar>
              <div className="text-white">
                <p className="text-sm font-medium">Alex Chen</p>
                <p className="text-xs opacity-75">Pro-Regulation</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/60 backdrop-blur-sm border-white/20">
            <CardContent className="p-3 flex items-center space-x-2 justify-end">
              <div className="text-white text-right">
                <p className="text-sm font-medium">Jordan Smith</p>
                <p className="text-xs opacity-75">Pro-Freedom</p>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/young-debater-2.png" />
                <AvatarFallback>J1</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  )
}
