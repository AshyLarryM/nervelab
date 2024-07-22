import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable().optional(),
  email: z.string().email().nullable().optional(),
  image: z.string().nullable().optional(),
  createdAt: z.date(),
  role: z.enum(['User', 'Admin']),
});

export const UpdateUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  role: z.enum(['User', 'Admin']),
});

export type User = z.infer<typeof UserSchema>;
