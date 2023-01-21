import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email().min(2),
});

export type User = z.infer<typeof UserSchema>;
