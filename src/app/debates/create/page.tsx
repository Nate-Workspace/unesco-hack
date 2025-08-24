"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import {
  MessageSquare,
  Calendar,
  Clock,
  Users,
  Globe,
  Scale,
  Heart,
  Zap,
  TrendingUp,
  Save,
  Eye,
  Plus,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

const topicIcons = {
  freedom: Globe,
  privacy: Scale,
  education: Heart,
  climate: Globe,
  health: Heart,
  equality: Users,
  economy: TrendingUp,
  technology: Zap,
}

export default function CreateDebatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [previewMode, setPreviewMode] = useState(false)

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      topic: "",
      date: "",
      time: "",
      duration: "60",
      applicationDeadline: "",
      maxDebaters: "2",
      format: "oxford",
      rules: "",
      tags: "",
    },
  })

  const watchedValues = form.watch()

  const onSubmit = (data: any) => {
    console.log("[v0] Form submitted:", data)
    // Handle form submission
  }

  const topics = [
    { value: "freedom", label: "Freedom of Expression", icon: Globe },
    { value: "privacy", label: "Privacy Rights", icon: Scale },
    { value: "education", label: "Education Access", icon: Heart },
    { value: "climate", label: "Climate Justice", icon: Globe },
    { value: "health", label: "Mental Health", icon: Heart },
    { value: "equality", label: "Gender Equality", icon: Users },
    { value: "economy", label: "Economic Rights", icon: TrendingUp },
    { value: "technology", label: "AI & Technology", icon: Zap },
  ]

  const formats = [
    {
      value: "oxford",
      label: "Oxford Style",
      description: "Traditional formal debate with opening statements, rebuttals, and closing arguments",
    },
    { value: "town-hall", label: "Town Hall", description: "Open discussion format with audience participation" },
    { value: "fishbowl", label: "Fishbowl", description: "Small group discussion with rotating participants" },
    { value: "panel", label: "Panel Discussion", description: "Multiple experts discussing different perspectives" },
  ]

  const renderTopicIcon = () => {
    if (!watchedValues.topic) return null
    const IconComponent = topicIcons[watchedValues.topic as keyof typeof topicIcons] || Globe
    return <IconComponent className="w-6 h-6 mr-3 text-primary" />
  }

  if (previewMode) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
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

        {/* Preview Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-accent/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-accent/10">
                    {new Date(watchedValues.date).toLocaleDateString()}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Applications Open
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-sans flex items-center">
                  {renderTopicIcon()}
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-card to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">Create New Debate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
              Start a meaningful conversation on human rights issues that matter to young people worldwide.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 3 && <div className={`w-16 h-0.5 mx-2 ${currentStep > step ? "bg-primary" : "bg-muted"}`} />}
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

      {/* Form Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Form {...form}>
              <form id="debate-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {currentStep === 1 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-sans">Basic Information</CardTitle>
                      <CardDescription className="font-serif">
                        Start with the fundamentals of your debate topic and format.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Debate Title</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Freedom of Expression in Digital Age"
                                {...field}
                                className="text-base"
                              />
                            </FormControl>
                            <FormDescription>
                              Create a compelling title that clearly states the debate topic
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Debate Question</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Should social media platforms have the right to moderate content, or does this infringe on freedom of expression?"
                                className="min-h-[100px] text-base"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Frame the central question or statement that debaters will argue for or against
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Topic Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a topic category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {topics.map((topic) => (
                                  <SelectItem key={topic.value} value={topic.value}>
                                    <div className="flex items-center space-x-2">
                                      <topic.icon className="w-4 h-4" />
                                      <span>{topic.label}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Choose the human rights category that best fits your debate
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="format"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Debate Format</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select debate format" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {formats.map((format) => (
                                  <SelectItem key={format.value} value={format.value}>
                                    <div>
                                      <div className="font-medium">{format.label}</div>
                                      <div className="text-xs text-muted-foreground">{format.description}</div>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>Choose the structure and style for your debate</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                )}

                {currentStep === 2 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-sans">Scheduling & Logistics</CardTitle>
                      <CardDescription className="font-serif">
                        Set the timing, duration, and participation details for your debate.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field } : {field: any}) => (
                            <FormItem>
                              <FormLabel>Debate Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormDescription>When will the debate take place?</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field } : {field: any}) => (
                            <FormItem>
                              <FormLabel>Start Time</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} />
                              </FormControl>
                              <FormDescription>Time in your local timezone</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="duration"
                          render={({ field } : {field: any}) => (
                            <FormItem>
                              <FormLabel>Duration (minutes)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="30">30 minutes</SelectItem>
                                  <SelectItem value="45">45 minutes</SelectItem>
                                  <SelectItem value="60">60 minutes</SelectItem>
                                  <SelectItem value="90">90 minutes</SelectItem>
                                  <SelectItem value="120">120 minutes</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>Total debate duration</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="maxDebaters"
                          render={({ field } : {field: any}) => (
                            <FormItem>
                              <FormLabel>Debaters per Side</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">1 debater per side</SelectItem>
                                  <SelectItem value="2">2 debaters per side</SelectItem>
                                  <SelectItem value="3">3 debaters per side</SelectItem>
                                  <SelectItem value="4">4 debaters per side</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>Maximum participants per position</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="applicationDeadline"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Application Deadline</FormLabel>
                            <FormControl>
                              <Input type="datetime-local" {...field} />
                            </FormControl>
                            <FormDescription>When should applications to participate close?</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rules"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Special Rules & Guidelines</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any specific rules, time limits, or guidelines for this debate..."
                                className="min-h-[80px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Optional: Add any special rules or guidelines for participants
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tags"
                        render={({ field } : {field: any}) => (
                          <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., social media, censorship, free speech (comma separated)"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>Add relevant tags to help people find your debate</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                )}

                {currentStep === 3 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-sans">Review & Publish</CardTitle>
                      <CardDescription className="font-serif">
                        Review your debate details before publishing to the community.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-accent/5 rounded-lg p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg font-sans">
                            {watchedValues.title || "Untitled Debate"}
                          </h3>
                          <p className="text-muted-foreground font-serif mt-1">
                            {watchedValues.description || "No description provided"}
                          </p>
                        </div>

                        <Separator />

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Topic:</span>{" "}
                            {topics.find((t) => t.value === watchedValues.topic)?.label || "Not selected"}
                          </div>
                          <div>
                            <span className="font-medium">Format:</span>{" "}
                            {formats.find((f) => f.value === watchedValues.format)?.label || "Not selected"}
                          </div>
                          <div>
                            <span className="font-medium">Date:</span>{" "}
                            {watchedValues.date ? new Date(watchedValues.date).toLocaleDateString() : "Not set"}
                          </div>
                          <div>
                            <span className="font-medium">Time:</span> {watchedValues.time || "Not set"}
                          </div>
                          <div>
                            <span className="font-medium">Duration:</span> {watchedValues.duration} minutes
                          </div>
                          <div>
                            <span className="font-medium">Debaters:</span> {watchedValues.maxDebaters} per side
                          </div>
                        </div>

                        {watchedValues.rules && (
                          <>
                            <Separator />
                            <div>
                              <span className="font-medium">Special Rules:</span>
                              <p className="text-muted-foreground mt-1">{watchedValues.rules}</p>
                            </div>
                          </>
                        )}
                      </div>

                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-blue-900">Ready to publish?</p>
                              <p className="text-sm text-blue-800 mt-1">
                                Once published, your debate will be visible to the community and people can apply to
                                participate. You can still edit details before the application deadline.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>

                  <div className="flex items-center space-x-2">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                      <Save className="w-4 h-4 mr-1" />
                      Save Draft
                    </Button>

                    {currentStep < 3 ? (
                      <Button type="button" onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit">
                        <Plus className="w-4 h-4 mr-1" />
                        Publish Debate
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  )
}
