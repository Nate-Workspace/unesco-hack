"use server";

import { revalidatePath } from 'next/cache';
import { DebateSchema } from "@/lib/validation/debate"; // import schema
import { createDebate } from '@/db/orm/debate/create-debate';
import { createPollResponse } from '@/db/orm/poll/create-poll-response';

const BASE_URL = '/debates';

export async function createDebateAction(formData: any) {
  const parsed = DebateSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  const data = parsed.data;

  try {
  const response = await createDebate({
    title: data?.title,
    description: data?.description,
    category: data?.topic,
    debateDate: new Date(data?.date),
    startTime: new Date(`${data?.date}T${data?.time}:00`),
    duration: data?.duration,
    applicationDeadline: new Date(data?.applicationDeadline),
    sides: data?.sides,
    guidelines: data?.rules ?? null,
  });
  revalidatePath(BASE_URL);
  return { id: response?.id };
} catch (err) {
  console.error(err);
    if (err instanceof Error && err.message === 'duplicate') {
      return { errors: 'duplicate' };
    }
    return { errors: 'Failed to create Debate' };
}
}

export async function createPollResponseAction({debateId, side, userId}: {debateId: string, side: string, userId: string}) {
  await createPollResponse({debateId, side, userId})
}
