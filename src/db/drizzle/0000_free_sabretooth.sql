CREATE TYPE "public"."application_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."debate_role" AS ENUM('moderator', 'debater', 'watcher');--> statement-breakpoint
CREATE TYPE "public"."debate_side" AS ENUM('pro', 'con');--> statement-breakpoint
CREATE TYPE "public"."debate_status" AS ENUM('upcoming', 'ongoing', 'past');--> statement-breakpoint
CREATE TABLE "bookmarks" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"debate_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debate_participants" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"debate_id" integer NOT NULL,
	"role" "debate_role" NOT NULL,
	"side" "debate_side"
);
--> statement-breakpoint
CREATE TABLE "debate_summaries" (
	"id" serial PRIMARY KEY NOT NULL,
	"debate_id" integer NOT NULL,
	"summary" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debater_applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"debate_id" integer NOT NULL,
	"status" "application_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debates" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" text,
	"status" "debate_status" DEFAULT 'upcoming' NOT NULL,
	"scheduled_at" timestamp NOT NULL,
	"created_by" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "poll_votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"poll_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"choice" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "polls" (
	"id" serial PRIMARY KEY NOT NULL,
	"debate_id" integer NOT NULL,
	"type" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"debate_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"content" text NOT NULL,
	"flagged" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debate_participants" ADD CONSTRAINT "debate_participants_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debate_participants" ADD CONSTRAINT "debate_participants_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debate_summaries" ADD CONSTRAINT "debate_summaries_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debater_applications" ADD CONSTRAINT "debater_applications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debater_applications" ADD CONSTRAINT "debater_applications_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debates" ADD CONSTRAINT "debates_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "poll_votes" ADD CONSTRAINT "poll_votes_poll_id_polls_id_fk" FOREIGN KEY ("poll_id") REFERENCES "public"."polls"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "poll_votes" ADD CONSTRAINT "poll_votes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_debate_id_debates_id_fk" FOREIGN KEY ("debate_id") REFERENCES "public"."debates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;