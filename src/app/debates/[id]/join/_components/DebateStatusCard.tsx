"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function DebateStatusCard() {
  const [isReady, setIsReady] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-sans">Freedom of Expression in Digital Age</CardTitle>
        <p className="text-muted-foreground font-serif">
          Should social media platforms have the right to moderate content, or does this infringe on freedom of expression?
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
              <p className="text-sm text-blue-800 mt-1">Arguing for platform responsibility in content moderation</p>
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
              {isReady ? "You're ready to join the debate!" : "Mark yourself as ready when your setup is complete"}
            </p>
            <Button onClick={() => setIsReady(!isReady)} variant={isReady ? "outline" : "default"} size="sm">
              {isReady ? "Not Ready" : "I'm Ready"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
