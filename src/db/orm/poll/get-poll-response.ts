import 'server-only'

import { db } from "@/db/index"
import { pollVote } from "@/db/schema"
import { eq, and } from "drizzle-orm"

export const getPollResponse = async ({userId, debateId}: {userId: string, debateId: string}) =>{
    return await db
    .select()
    .from(pollVote)
    .where(and(eq(pollVote.debateId, debateId), eq(pollVote.userId, userId)));
}