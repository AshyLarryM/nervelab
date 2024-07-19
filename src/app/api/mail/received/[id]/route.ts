import { prisma } from "@/lib/utils/prismadb";
import { NextRequest, NextResponse } from 'next/server';

export async function  GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id: userId } = params;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const receivedEmails = await prisma.email.findMany({
      where: { toUserId: userId },
      include: {
        fromUser: true,
        toUser: true,
        replies: {
          include: {
            user: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({ receivedEmails });
  } catch (error) {
    console.error('Failed to fetch user emails', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
