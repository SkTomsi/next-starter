"use server";

import { GuestbookSchema } from "@/features/guestbook/models";
import { CreateMessage } from "@/features/guestbook/queries/index.";
import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";

export async function createGuestbookEntry(prevState: any, formData: FormData) {
  const data = parseWithZod(formData, {
    schema: GuestbookSchema,
  });

  if (data.status !== "success") {
    return data.reply({ resetForm: true });
  }

  await CreateMessage({
    message: data.value.message,
    userName: data.value.username,
  });

  revalidatePath("/guestbook");

  return null;
}
