import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { CustomNextMiddleware } from './types'

export function withPathValidator(next: CustomNextMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    if (request.nextUrl.pathname.startsWith('/tools/')) {
      const slug = request.nextUrl.pathname.split('/tools/')[1]
      const isValidSlug = /^youtube-|facebook-|instagram-|tiktok-/.test(slug)

      if (!isValidSlug) {
        return NextResponse.redirect(new URL('/page-not-found', request.url))
      }
    }

    return next(request, event, response)
  }
}
