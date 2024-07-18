import { prisma } from '@/lib/utils/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';
import validator from 'validator';



export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { subject, body: emailBody, fromUserId, toUserId,  } = body;

    // Validate required fields
    if (!validator.isLength(subject, { min: 1 })) {
      console.log('Invalid subject:', subject);
      return NextResponse.json({ error: 'Invalid subject' }, { status: 400 });
    }
    if (!validator.isLength(emailBody, { min: 1 })) {
      console.log('Invalid emailBody:', emailBody);
      return NextResponse.json({ error: 'Invalid emailBody' }, { status: 400 });
    }

    // Sanitize HTML content
    const sanitizedBody = sanitizeHtml(emailBody);
    
    const sanitizedSubject = validator.escape(subject);
    

    const email = await prisma.email.create({
      data: {
        subject: sanitizedSubject,
        body: sanitizedBody,
        fromUserId,
        toUserId,
      },
    });

    return NextResponse.json(email, { status: 201 });
  } catch (error) {
    console.error('Failed to create email:', error);
    return NextResponse.json({ error: 'Failed to create email' }, { status: 500 });
  }
}
