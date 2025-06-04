import { updateSession } from '@/utils/supabase/middleware'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const response = await updateSession(request)

  const protectedPaths = ['/dashboard'] // ✅ List of protected routes
  const currentPath = request.nextUrl.pathname

  const isProtectedRoute = protectedPaths.some((path) =>
    currentPath.startsWith(path)
  )

  const userToken = request.cookies.get('sb-access-token') // ✅ Supabase auth token

  // This code for the user route protected
  // 🚨 Redirect to login if accessing a protected route without being authenticated
  // if (isProtectedRoute && !userToken) {
  //   const loginUrl = request.nextUrl.clone()
  //   loginUrl.pathname = '/jobseeker/login'
  //   return NextResponse.redirect(loginUrl)
  // }

  return response
}

// ✅ Apply middleware globally except for static/image assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
