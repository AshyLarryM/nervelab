// api/auth/users.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { UserSchema } from '@/lib/utils/schema';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: true,
      },
    });
    const parsedUsers = UserSchema.array().parse(users);
    console.log("server users: ", parsedUsers);
    console.log("users length: ", parsedUsers.length);
    return NextResponse.json(parsedUsers, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}
