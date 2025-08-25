import { pgTable, serial, varchar, text, integer, jsonb, timestamp, pgEnum, boolean, uuid, primaryKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const debateStatus = pgEnum("debate_status", ["upcoming", "ongoing", "past"]);
export const applicationStatus = pgEnum("application_status", ["pending", "approved", "rejected"]);
export const questionStatus = pgEnum("question_status", ["pending", "approved", "rejected"]);
export const debateRole = pgEnum("debate_role", ["moderator", "debater", "watcher"]);
export const debaterStatus = pgEnum("debater_status", ["ready", "not_ready", "error"]);
export const topics= pgEnum("debate_categories", ["freedom", "privacy", "education","climate", "health", "equality", "economy","technology", "other"])

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debate = pgTable("debates", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description"),
  category: topics(),
  startTime: timestamp("start_time", { withTimezone: true }).notNull(),
  duration: text('duration'),
  applicationDeadline: timestamp("application_deadline").notNull(),
  debateDate: timestamp("debate_date").notNull(),
  guidelines: text('guidelines'),
  sides: jsonb("sides").$type<string[]>().notNull().default(sql`'[]'::jsonb`),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debateParticipant = pgTable("debate_participants", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  role: debateRole("role").notNull(),
  status: debaterStatus().default("not_ready"),
  side: text(), 
});

export const debaterApplication = pgTable("debater_applications", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  status: applicationStatus("status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debateSummary = pgTable("debate_summaries", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  summary: text("summary").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const poll = pgTable("poll", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  type: varchar("type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const pollVote = pgTable("poll_vote", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  pollId: uuid("poll_id").references(() => poll.id).notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  side: varchar("side").notNull(),
});

export const question = pgTable("question", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  status: questionStatus("status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const watcherChat = pgTable("watcher_chat", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debaterChat = pgTable("debater_chat", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const bookmark = pgTable("bookmarks", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});
