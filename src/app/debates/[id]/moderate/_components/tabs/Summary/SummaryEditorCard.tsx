"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Save } from "lucide-react";

export default function SummaryEditorCard({
  value,
  setValue,
  onSave,
}: {
  value: string;
  setValue: (v: string) => void;
  onSave: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Write Debate Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Write a comprehensive summary of the debate, including key arguments, conclusions, and notable moments..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-[200px]"
        />
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500">{value.length} characters</span>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-1" />
              Generate AI Summary
            </Button>
            <Button onClick={onSave} disabled={!value.trim()}>
              <Save className="h-4 w-4 mr-1" />
              Save Summary
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
