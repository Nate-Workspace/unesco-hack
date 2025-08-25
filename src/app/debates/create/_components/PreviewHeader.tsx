"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowLeft } from "lucide-react"

export default function PreviewHeader({ setPreviewMode }: any) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">YouthDebate</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => setPreviewMode(false)}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Edit
            </Button>
            <Button>Publish Debate</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
