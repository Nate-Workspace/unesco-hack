"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Vote, ThumbsUp } from "lucide-react"
import { DebateDetails } from "@/types/debate.types"
import { useState } from "react"

type DebateInfoProps = {
  Details: DebateDetails | null;
}

export default function LivePolling({ Details }: DebateInfoProps) {
  const [selectedSide, setSelectedSide] = useState<number | null>(null)

  // Map colors to Tailwind classes
  const sideColors = [
    { border: "border-blue-500", text: "text-blue-500", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
    { border: "border-orange-500", text: "text-orange-500", bg: "bg-orange-500", hover: "hover:bg-orange-600" },
    { border: "border-green-500", text: "text-green-500", bg: "bg-green-500", hover: "hover:bg-green-600" },
  ]

  const totalVotes = Details?.votesBySide?.reduce((sum, vote) => sum + vote.count, 0) ?? 0

  if (!Details) return <div>Debate details not found</div>

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
            {Details.sides.map((side, index) => {
              const color = sideColors[index] || sideColors[0]
              const isSelected = selectedSide === index

              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      variant={isSelected ? "default" : "outline"}
                      className={isSelected
                        ? `${color.bg} text-white ${color.hover}`
                        : `${color.border} ${color.text} bg-transparent hover:bg-opacity-10`
                      }
                      onClick={() => setSelectedSide(index)}
                    >
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {side}
                    </Button>
                    <span className="text-sm text-muted-foreground">{`Vote ${index + 1}`}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className={`${color.bg} h-2 rounded-full`} style={{ width: "0%" }}></div>
                    </div>
                    <span className="text-sm font-medium">0%</span>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-xs text-muted-foreground">
            {totalVotes} votes • Poll updates in real-time
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
