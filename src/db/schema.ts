import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  userName: text("userName").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  // pfpUrl: text("pfpUrl"),
});

export type CreateMessage = typeof messagesTable.$inferInsert;
export type Messages = typeof messagesTable.$inferSelect;
