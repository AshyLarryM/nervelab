import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prismadb';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
  }

  try {
    const userEmails = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        sentEmails: {
          include: {
            fromUser: {
              select: {
                name: true,
                email: true,
              }
            },
            toUser: {
              select: {
                name: true,
                email: true,
              }
            },
            replies: {
              include: {
                user: {
                  select: {
                    name: true,
                    email: true
                  }
                }
              }
            },
          }
        },
        receivedEmails: {
          include: {
            fromUser: {
              select: {
                name: true,
                email: true,
              }
            },
            toUser: {
              select: {
                name: true,
                email: true,
              }
            },
            replies: {
              include: {
                user: {
                  select: {
                    name: true,
                    email: true
                  }
                }
              }
            },
          },
        }
      }
    });

    if (!userEmails) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ userEmails }, { status: 200 });

  } catch (error) {
    console.error('Failed to fetch user emails:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
