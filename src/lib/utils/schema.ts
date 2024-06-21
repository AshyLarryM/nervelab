import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable().optional(),
  email: z.string().email().nullable().optional(),
  image: z.string().nullable().optional(),
  createdAt: z.date(),
  role: z.enum(['User', 'Admin']),
});

export type User = z.infer<typeof UserSchema>;
