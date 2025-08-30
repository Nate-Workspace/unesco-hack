import { pgTable, serial, varchar, text, integer, jsonb, timestamp, pgEnum, boolean, uuid, primaryKey } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

export const debateStatus = pgEnum("debate_status", ["upcoming", "ongoing", "past"]);
export const applicationStatus = pgEnum("application_status", ["pending", "approved", "rejected"]);
export const questionStatus = pgEnum("question_status", ["pending", "approved", "rejected"]);
export const debateRole = pgEnum("debate_role", ["moderator", "debater", "watcher"]);
export const debaterStatus = pgEnum("debater_status", ["ready", "not_ready", "error"]);
export const topics= pgEnum("debate_categories", ["freedom", "privacy", "education","climate", "health", "equality", "economy","technology", "other"])

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

export const debate = pgTable("debate", {
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
  createdBy: text("created_by").references(() => user.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debateParticipant = pgTable("debate_participant", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  role: debateRole("role").notNull(),
  status: debaterStatus().default("not_ready"),
  side: text(), 
});

export const debaterApplication = pgTable("debater_application", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  status: applicationStatus("status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debateSummary = pgTable("debate_summary", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  summary: text("summary").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const pollVote = pgTable("poll_vote", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  side: varchar("side").notNull(),
});

export const question = pgTable("question", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  status: questionStatus("status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const watcherChat = pgTable("watcher_chat", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const debaterChat = pgTable("debater_chat", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const bookmark = pgTable("bookmark", {
  id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  debateId: uuid("debate_id").references(() => debate.id).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});


//Added table relations 
export const userRelations = relations(user, ({ many }) => ({
  debateParticipants: many(debateParticipant),
  bookmarks: many(bookmark),
}));

export const debateRelations = relations(debate, ({ many, one }) => ({
  debateParticipants: many(debateParticipant),
  bookmarks: many(bookmark),
  createdBy: one(user, {
    fields: [debate.createdBy],
    references: [user.id]
  }),
}));

export const debateParticipantRelations = relations(debateParticipant, ({ one }) => ({
  user: one(user, {
    fields: [debateParticipant.userId],
    references: [user.id],
  }),
  debate: one(debate, {
    fields: [debateParticipant.debateId],
    references: [debate.id],
  }),
}));

export const bookmarkRelations = relations(bookmark, ({ one }) => ({
  user: one(user, {
    fields: [bookmark.userId],
    references: [user.id],
  }),
  debate: one(debate, {
    fields: [bookmark.debateId],
    references: [debate.id],
  }),
}));

export const debaterApplicationRelations = relations(debaterApplication, ({ one }) => ({
  user: one(user, {
    fields: [debaterApplication.userId],
    references: [user.id]
  }),
  debate: one(debate, {
    fields: [debaterApplication.debateId],
    references: [debate.id]
  }),
}));

export const pollVoteRelations = relations(pollVote, ({ one }) => ({
  user: one(user, {
    fields: [pollVote.userId],
    references: [user.id]
  }),
  debate: one(debate, {
    fields: [pollVote.debateId],
    references: [debate.id]
  }),
}));

export const questionRelations = relations(question, ({ one }) => ({
  user: one(user, {
    fields: [question.userId],
    references: [user.id]
  }),
  debate: one(debate, {
    fields: [question.debateId],
    references: [debate.id]
  }),
}));

export const watcherChatRelations = relations(watcherChat, ({ one }) => ({
  user: one(user, {
    fields: [watcherChat.userId],
    references: [user.id]
  }),
  debate: one(debate, {
    fields: [watcherChat.debateId],
    references: [debate.id]
  }),
}));

export const debaterChatRelations = relations(debaterChat, ({ one }) => ({
  user: one(user, {
    fields: [debaterChat.userId],
    references: [user.id]
  }),
  debate: one(debate, {
    fields: [debaterChat.debateId],
    references: [debate.id]
  }),
}));

export const debateSummaryRelations = relations(debateSummary, ({ one }) => ({
  debate: one(debate, {
    fields: [debateSummary.debateId],
    references: [debate.id]
  }),
}));

export const schema = {
  user,
  session,
  account,
  verification,
  debate,
  debateParticipant,
  debaterApplication,
  debateSummary,
  pollVote,
  question,
  watcherChat,
  debaterChat,
  bookmark,
  userRelations,
  debateRelations,
  debateParticipantRelations,
  debaterApplicationRelations,
  debateSummaryRelations,
  pollVoteRelations,
  questionRelations,
  watcherChatRelations,
  debaterChatRelations,
  bookmarkRelations,
};