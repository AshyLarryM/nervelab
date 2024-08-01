import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prismadb';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){
  const { id } = params;

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid reply ID' }, { status: 400 });
  }

  try {
    //
    const deletedReply = await prisma.reply.delete({
      where: { id },
    });

    return NextResponse.json({ message: `${deletedReply} Reply deleted successfully` }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete reply:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
