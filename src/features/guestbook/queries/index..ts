import { db } from "@/db";
import { type CreateMessage, messagesTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function CreateMessage(input: CreateMessage) {
  const newMessage = await db.insert(messagesTable).values({
    message: input.message,
    userName: input.userName,
  });

  return newMessage;
}

export async function GetMessages() {
  const messages = await db.query.messagesTable.findMany({
    orderBy: [desc(messagesTable.createdAt)],
  });

  return messages;
}
