"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { topics } from "@/constants/topics"
import { Plus, Trash } from "lucide-react"

export default function StepOneBasicInfo({ form }: any) {

  const sides = form.watch("sides") || []

  const addSide = () => {
    if (sides.length < 3) {
      form.setValue("sides", [...sides, ""])
    }
  }

  const removeSide = (index: number) => {
    const updated = sides.filter((_: any, i: number) => i !== index)
    form.setValue("sides", updated)
  }

  const updateSide = (index: number, value: string) => {
    const updated = [...sides]
    updated[index] = value
    form.setValue("sides", updated)
  }

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

        <div className="space-y-3">
          <FormLabel>Debate Sides</FormLabel>
          <FormDescription>
            Define the perspectives or stances for this debate (up to 3).
          </FormDescription>

          <div className="space-y-2">
            {sides.map((side: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={side}
                  onChange={(e) => updateSide(index, e.target.value)}
                  placeholder={`Side ${index + 1}`}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSide(index)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {sides.length < 3 && (
            <Button type="button" variant="outline" onClick={addSide} className="mt-2">
              <Plus className="w-4 h-4 mr-2" />
              Add Side
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
