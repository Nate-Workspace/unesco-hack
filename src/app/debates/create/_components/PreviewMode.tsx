"use client"

import PreviewHeader from "./PreviewHeader"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye } from "lucide-react"

export default function PreviewMode({ watchedValues, setPreviewMode }: any) {
  return (
    <div className="min-h-screen bg-background">
      <PreviewHeader setPreviewMode={setPreviewMode} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="bg-accent/10">
                  {watchedValues.date
                    ? new Date(watchedValues.date).toLocaleDateString()
                    : "No date set"}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Applications Open
                </Badge>
              </div>
              <CardTitle className="text-2xl font-sans flex items-center">
                {watchedValues.title || "Your Debate Title"}
              </CardTitle>
              <CardDescription className="font-serif text-base">
                {watchedValues.description || "Your debate description will appear here..."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {watchedValues.date || "Date TBD"}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {watchedValues.time || "Time TBD"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Duration: {watchedValues.duration} minutes</span>
                    <span>Max Debaters: {watchedValues.maxDebaters} per side</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    Notify Me
                  </Button>
                  <Button size="sm">Apply to Debate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
