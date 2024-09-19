CREATE TABLE IF NOT EXISTS "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" text NOT NULL,
	"userName" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
