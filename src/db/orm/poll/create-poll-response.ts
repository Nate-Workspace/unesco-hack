import 'server-only'

import { db } from "@/db/index"
import { pollVote } from "@/db/schema"
import { eq, and } from "drizzle-orm"

export const createPollResponse = async ({
  userId,
  debateId,
  side
}: { userId: string, debateId: string, side: string }) => {
  const existingVote = await db
    .select()
    .from(pollVote)
    .where(and(eq(pollVote.userId, userId), eq(pollVote.debateId, debateId)))

  if (existingVote.length > 0) {
    return await db
      .update(pollVote)
      .set({ side })
      .where(and(eq(pollVote.userId, userId), eq(pollVote.debateId, debateId)))
      .returning()
  } else {
    return await db
      .insert(pollVote)
      .values({
        userId,
        debateId,
        side,
      })
      .returning()
  }
}
