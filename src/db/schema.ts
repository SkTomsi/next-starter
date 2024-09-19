import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const todo = pgTable("messages", {
  id: integer("id").primaryKey(),
  message: text("text").notNull(),
  userName: text("userName").notNull(),
});
