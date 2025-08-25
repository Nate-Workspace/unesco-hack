"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"

export default function StepOneBasicInfo({ form, topics, formats }: any) {
  return (
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
          render={({ field }) => (
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
          render={({ field }) => (
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {topics?.map((topic: any) => (
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Debate Format</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select debate format" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {formats?.map((format: any) => (
                    <SelectItem key={format.value} value={format.value}>
                      <div>
                        <div className="font-medium">{format.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {format.description}
                        </div>
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
  )
}
