import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname !== '/' && pathname.endsWith('/')) {
    const cleanPath = pathname.slice(0, -1);
    return NextResponse.redirect(
      new URL(cleanPath + search, request.url),
      301
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/webpack-hmr|api/|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|css|js)$).*)',
  ],
};
