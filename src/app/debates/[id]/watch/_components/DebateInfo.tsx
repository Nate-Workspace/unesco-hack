"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Eye, Clock, Heart, Share2 } from "lucide-react"

export default function DebateInfo() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-sans">Freedom of Expression in Digital Age</CardTitle>
            <p className="text-muted-foreground font-serif">
              Should social media platforms have the right to moderate content, or does this infringe on freedom of expression?
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-1" />
              Like
            </Button>
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
              Started 23 min ago
            </div>
          </div>
          <Badge variant="outline">Human Rights</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
