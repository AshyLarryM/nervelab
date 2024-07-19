import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prismadb';

export async function POST(req: NextRequest) {
  try {
    const { subject, body, emailId, userId } = await req.json();

    if (!subject || !body || !emailId || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newReply = await prisma.reply.create({
      data: {
        subject,
        body,
        emailId,
        userId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(newReply, { status: 201 });
  } catch (error) {
    console.error('Failed to create reply:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
