import "server-only"

import { db } from "@/db"
import { debate } from "@/db/schema";
import { desc } from "drizzle-orm";

export const getAllDebates = async ()=>{
    return await db
    .select().from(debate).orderBy(desc(debate.createdAt));
}