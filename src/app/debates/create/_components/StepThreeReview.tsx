"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";

// type for watchedValues from react-hook-form
interface StepThreeReviewProps {
  form: any;
  watchedValues: {
    title: string;
    description: string;
    topic: string;
    format: string;
    date: string;
    time: string;
    duration: string;
    maxDebaters: string;
    rules: string;
  };
}

export default function StepThreeReview({ watchedValues }: StepThreeReviewProps) {
  // mapping for labels (moved here so the component is self-contained)
  const topics = [
    { value: "freedom", label: "Freedom of Expression" },
    { value: "privacy", label: "Privacy Rights" },
    { value: "education", label: "Education Access" },
    { value: "climate", label: "Climate Justice" },
    { value: "health", label: "Mental Health" },
    { value: "equality", label: "Gender Equality" },
    { value: "economy", label: "Economic Rights" },
    { value: "technology", label: "AI & Technology" },
  ];

  const formats = [
    { value: "oxford", label: "Oxford Style" },
    { value: "town-hall", label: "Town Hall" },
    { value: "fishbowl", label: "Fishbowl" },
    { value: "panel", label: "Panel Discussion" },
  ];

  return (
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
                  Once published, your debate will be visible to the community and people can apply
                  to participate. You can still edit details before the application deadline.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
