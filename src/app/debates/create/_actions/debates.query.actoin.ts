'use server'

import { getPollResponse } from "@/db/orm/poll/get-poll-response"
import { revalidatePath } from "next/cache"

export async function getPollResponseAction({debateId, userId}: {debateId: string, userId: string}) {
  return await getPollResponse({debateId, userId})
}