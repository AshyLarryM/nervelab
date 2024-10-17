import { NextRequest, NextResponse } from 'next/server';
import { UpdateUserSchema, UserSchema } from '@/lib/utils/schema';
import { prisma } from '@/lib/utils/prismadb';


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

    // Set no-cache headers
    const response = NextResponse.json(parsedUsers, { status: 200 });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}



export async function PUT(req: NextRequest) {
  try {
    const { id, name, email, role } = await req.json();

    // Validate the user data
    const validatedUser = UpdateUserSchema.parse({ id, name, email, role });

    const updatedUser = await prisma.user.update({
      where: { id: validatedUser.id },
      data: {
        name: validatedUser.name,
        email: validatedUser.email,
        role: validatedUser.role,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}
