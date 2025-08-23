"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Camera, Headphones, CheckCircle } from "lucide-react"

export default function TechnicalCheckCard() {
  return (
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
  )
}
