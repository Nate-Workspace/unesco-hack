"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Vote, ThumbsUp } from "lucide-react"

export default function LivePolling() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-sans flex items-center">
          <Vote className="w-5 h-5 mr-2 text-primary" />
          Live Audience Poll
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="font-medium">Which argument do you find more compelling so far?</p>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Pro-Regulation
                </Button>
                <span className="text-sm text-muted-foreground">Alex's position</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Pro-Freedom
                </Button>
                <span className="text-sm text-muted-foreground">Jordan's position</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <span className="text-sm font-medium">35%</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">182 votes • Poll updates in real-time</p>
        </div>
      </CardContent>
    </Card>
  )
}
