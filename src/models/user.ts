import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name must only have 50 or below characters." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Email is in an invalid format." })
    .min(2, { message: "Email must be at least 2 characters" }),
});

export type User = z.infer<typeof UserSchema>;
