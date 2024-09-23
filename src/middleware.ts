import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Always allow access to the login page if unauthenticated
	if (pathname.startsWith('/login')) {
		const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

		// If authenticated, redirect away from login page
		if (token) {
			console.log('Authenticated user attempting to access /login, redirecting to /');
			return NextResponse.redirect(new URL('/', request.url));
		}
		return NextResponse.next();
	}

	const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

	// Redirect unauthenticated users to login
	if (!token) {
		console.log('No token found, redirecting to login...');
		return NextResponse.redirect(new URL('/login', request.url));
	}

	const isAdmin = token.role === 'Admin';
	const isUser = token.role === 'User';

	const adminPaths = ['/admin', '/register'];
	const userPaths = ['/mail'];

	// Restrict admin paths to Admin role
	if (adminPaths.some(path => pathname.startsWith(path)) && !isAdmin) {
		console.log('Access to admin path denied');
		return NextResponse.redirect(new URL('/unauthorized', request.url));
	}

	// Restrict user paths to User role
	if (userPaths.some(path => pathname.startsWith(path)) && !isUser) {
		console.log('Access to user path denied');
		return NextResponse.redirect(new URL('/unauthorized', request.url));
	}

	// Allow access to all other routes
	return NextResponse.next();
}

// Define the paths where the middleware should be applied
export const config = {
	matcher: ['/admin/:path*', '/mail/:path*', '/login/:path*'],
};
