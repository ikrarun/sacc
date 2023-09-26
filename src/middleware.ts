import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
    console.log(request.nextUrl.href)
}
 
export const config = {
    matcher: [
        // '/about/:path*',
     '/dashboard/:path*'],
  }