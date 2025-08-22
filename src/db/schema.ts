import { pgTable, serial, varchar, text, integer, timestamp, pgEnum, boolean, primaryKey } from "drizzle-orm/pg-core";

export const debateStatus = pgEnum("debate_status", ["upcoming", "ongoing", "past"]);
export const applicationStatus = pgEnum("application_status", ["pending", "approved", "rejected"]);
export const debateRole = pgEnum("debate_role", ["moderator", "debater", "watcher"]);
export const debateSide = pgEnum("debate_side", ["pro", "con"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const debates = pgTable("debates", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description"),
  status: debateStatus("status").default("upcoming").notNull(),
  scheduledAt: timestamp("scheduled_at").notNull(),
  createdBy: integer("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const debateParticipants = pgTable("debate_participants", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  role: debateRole("role").notNull(),
  side: debateSide("side"), 
});

export const debaterApplications = pgTable("debater_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  status: applicationStatus("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const debateSummaries = pgTable("debate_summaries", {
  id: serial("id").primaryKey(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  summary: text("summary").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const polls = pgTable("polls", {
  id: serial("id").primaryKey(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  type: varchar("type", { length: 20 }).notNull(),
});

export const pollVotes = pgTable("poll_votes", {
  id: serial("id").primaryKey(),
  pollId: integer("poll_id").references(() => polls.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  choice: varchar("choice", { length: 50 }).notNull(),
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  flagged: boolean("flagged").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  debateId: integer("debate_id").references(() => debates.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
