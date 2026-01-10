import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Example: Redirect all HTTP to HTTPS
  const url = request.nextUrl.clone()
  if (url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

// Apply middleware to all paths
export const config = {
  matcher: '/:path*',
}
