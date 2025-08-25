"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowLeft, Eye, Plus, CheckCircle } from "lucide-react"

export default function PageHeader({ currentStep, setPreviewMode }: any) {
  return (
    <>
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
              <Button variant="outline" asChild>
                <a href="/debates">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Debates
                </a>
              </Button>
              <Button variant="outline" onClick={() => setPreviewMode(true)}>
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
              <Button form="debate-form" type="submit">
                <Plus className="w-4 h-4 mr-1" />
                Create Debate
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress steps */}
      <section className="bg-gradient-to-br from-primary/10 via-card to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">
              Create New Debate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
              Start a meaningful conversation on human rights issues that matter to young people worldwide.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-0.5 mx-2 ${
                        currentStep > step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Basic Info</span>
              <span>Details</span>
              <span>Review</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
