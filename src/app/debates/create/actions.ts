"use server";

import { db } from "@/db";
import { debate } from "@/db/schema";
import { DebateSchema, DebateFormData } from "@/lib/validation/debate";

export async function createDebateAction(formData: DebateFormData) {
  // Server-side validation
  const parsed = DebateSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error(parsed.error.errors.map(e => e.message).join(", "));
  }

  const data = parsed.data;

  await db.insert(debate).values({
  title: data.title,
  description: data.description,
  category: data.topic, 
  startTime: new Date(`${data.date}T${data.time}`),
  duration: data.duration,
  applicationDeadline: new Date(data.applicationDeadline),
  debateDate: new Date(data.date),        // <-- required
  guidelines: data.rules ?? null,         // <-- renamed to match schema
  sides: data.sides ?? [],
  createdBy: "D7HTkMMECZQBgO24f7FGg7H0T52yVQT6",       // must exist in user table
  createdAt: new Date(),
});

}
