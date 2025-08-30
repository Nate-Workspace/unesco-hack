"use server";

import { db } from "@/db";
import { debate, bookmark } from "@/db/schema";
import { sql, eq, or, ilike, lte, gte, and } from "drizzle-orm";
import { SQL } from "drizzle-orm/sql/sql";

type DebateCategory =
  | "freedom"
  | "privacy"
  | "education"
  | "climate"
  | "health"
  | "equality"
  | "economy"
  | "technology"
  | "other";

export async function getDebatesAction(filters?: {
  status?: string;
  topic?: string;
  search?: string;
}) {
  const now = new Date();

  let whereClause: SQL<unknown> = sql`1=1`;

  if (filters?.topic && filters.topic !== "All Topics") {
    const categoryFilter = filters.topic as DebateCategory;
    whereClause = sql`${whereClause} and ${eq(debate.category, categoryFilter)}`;
  }

  if (filters?.search) {
    whereClause = sql`${whereClause} and (${or(
      ilike(debate.title, `%${filters.search}%`),
      ilike(debate.description, `%${filters.search}%`)
    )})`;
  }

  if (filters?.status && filters.status !== "All") {
    const debateDuration = sql`CAST(${debate.duration} AS interval)`;
    const nowTimestamp = sql`CAST(${now.toISOString()} AS timestamp)`;

    if (filters.status === "Live") {
      whereClause = sql`${whereClause} and ${and(
        lte(debate.startTime, nowTimestamp),
        gte(debate.startTime, sql`${nowTimestamp} - ${debateDuration}`)
      )}`;
    } else if (filters.status === "Upcoming") {
      whereClause = sql`${whereClause} and ${gte(debate.startTime, nowTimestamp)}`;
    } else if (filters.status === "Completed") {
      whereClause = sql`${whereClause} and ${lte(debate.startTime, sql`${nowTimestamp} - ${debateDuration}`)}`;
    }
  }

  const debatesWithCounts = await db
    .select({
      id: debate.id,
      title: debate.title,
      description: debate.description,
      category: debate.category,
      startTime: debate.startTime,
      duration: debate.duration,
      applicationDeadline: debate.applicationDeadline,
      debateDate: debate.debateDate,
      guidelines: debate.guidelines,
      interestedCount: sql<number>`count(distinct ${bookmark.id})`.as(
        "interested_count"
      ),
    })
    .from(debate)
    .leftJoin(bookmark, eq(debate.id, bookmark.debateId))
    .where(whereClause)
    .groupBy(debate.id)
    .orderBy(debate.startTime);

  const participants = await db.query.debateParticipant.findMany({
    with: {
      user: true,
    },
  });

  const debatesWithParticipants = debatesWithCounts.map(d => {
    const debateParticipants = participants
      .filter(p => p.debateId === d.id)
      .map(p => ({
        id: p.id,
        role: p.role,
        user: {
          id: p.user.id,
          name: p.user.name,
          image: p.user.image,
        },
      }));
    return {
      ...d,
      participants: debateParticipants,
    };
  });
  
  const liveDebates = debatesWithParticipants
    .filter((debate) => {
      const debateStart = new Date(debate.startTime);
      const debateEnd = new Date(debateStart.getTime() + Number(debate.duration) * 60000);
      return now >= debateStart && now <= debateEnd;
    })
    .map((debate) => ({
      id: Number(debate.id),
      title: debate.title,
      description: debate.description ?? "",
      watchers: debate.interestedCount,
      avatars: debate.participants.map(p => p.user.image).filter(Boolean) as string[],
      icon: "MessageSquare",
    }));

  const upcomingDebates = debatesWithParticipants
    .filter((debate) => {
      const debateStart = new Date(debate.startTime);
      return now < debateStart;
    })
    .map((debate) => ({
      id: Number(debate.id),
      title: debate.title,
      description: debate.description ?? "",
      date: new Date(debate.debateDate).toDateString(),
      time: new Date(debate.startTime).toLocaleTimeString(),
      applicationsOpen: true,
      interested: debate.interestedCount,
      icon: "Scale",
    }));

  return { live: liveDebates, upcoming: upcomingDebates };
}