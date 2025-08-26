"use server";

import { db } from "@/db";
import { debate } from "@/db/schema";
import { DebateSchema } from "@/lib/validation/debate"; // import schema

export async function createDebateAction(formData: any) {
  const parsed = DebateSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  const data = parsed.data;

  await db.insert(debate).values({
    title: data.title,
    description: data.description,
    topic: data.topic,
    date: new Date(`${data.date}T${data.time}`),
    duration: parseInt(data.duration),
    applicationDeadline: new Date(data.applicationDeadline),
    maxDebaters: parseInt(data.maxDebaters),
    format: data.format,
    rules: data.rules ?? null,
  });
}
