import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting to login...');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const isAdmin = token.role === 'Admin';
  const isUser = token.role === 'User';

  const adminPaths = ['/admin', '/register'];
  
  const userPaths = ['/user'];

  if (adminPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !isAdmin) {
    console.log('Access to admin path denied');
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  // Check if the user is trying to access a user path without the proper role
  if (userPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !isUser) {
    console.log('Access to user path denied');
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

// Define the paths where the middleware should be applied
export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
