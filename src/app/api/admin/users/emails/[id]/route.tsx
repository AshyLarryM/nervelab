import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prismadb';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        sentEmails: {
          include: {
            replies: true,
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
        receivedEmails: {
          include: {
            replies: true,
          },
          orderBy: {
            createdAt: 'desc'
          },
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }


    return NextResponse.json({ user }, { status: 200 });

  } catch (error) {
    console.error('Failed to fetch user emails:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}