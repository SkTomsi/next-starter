import { z } from "zod";

export const GuestbookSchema = z.object({
  username: z.string().min(1).max(20),
  message: z.string().min(1).max(100),
});
