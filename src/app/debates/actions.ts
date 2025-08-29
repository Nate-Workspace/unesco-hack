"use server";

import { db } from "@/db";
import { debate } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getDebates() {
  return await db.select().from(debate).orderBy(desc(debate.createdAt));
}
