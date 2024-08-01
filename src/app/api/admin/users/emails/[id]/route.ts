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
          orderBy: {
            createdAt: "desc"
          },
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
          orderBy: {
            createdAt: "desc"
          },
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
        },
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

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid email ID' }, { status: 400 });
  }

  try {
    // Attempt to delete the email by ID
    const deletedEmail = await prisma.email.delete({
      where: { id },
    });

    if (!deletedEmail) {
      return NextResponse.json({ error: 'Email not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Email deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete email:', error);
    if (error instanceof Error && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2003') {
        return NextResponse.json({ error: 'You need to delete replies before you can delete the email chain' }, { status: 400 });
      }
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
