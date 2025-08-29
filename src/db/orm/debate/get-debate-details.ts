import { db } from "@/db/index"
import { debate, pollVote } from "@/db/schema"
import { DebateDetails } from "@/types/debate.types"
import { eq, sql } from "drizzle-orm"

export const getDebateDetails = async (id: string): Promise<DebateDetails | null> => {
  //You can copy this code to join page by just changing the database and the attributes you select
  const [debateData] = await db
    .select({
      id: debate.id,
      title: debate.title,
      description: debate.description,
      startTime: debate.startTime,
      category: debate.category,
      sides: debate.sides,
    })
    .from(debate)
    .where(eq(debate.id, id))

    //The below code is specific to my use.
  if (!debateData) return null

  const votesBySide = await db
    .select({
      side: pollVote.side,
      count: sql<number>`COUNT(*)`
    })
    .from(pollVote)
    .where(eq(pollVote.debateId, id))
    .groupBy(pollVote.side)

  return {
    ...debateData,
    votesBySide: votesBySide, // array like [{ side: "A", count: 5 }, { side: "B", count: 7 }]
  }
}
