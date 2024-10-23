import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { CustomNextMiddleware } from './types'

export function init(next: CustomNextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const requestHeaders = new Headers(request.headers)

    // The first middleware in the chain has to create the response
    // object and pass it down the chain.
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    // Call the next middleware and pass the request and response
    return next(request, event, response)
  }
}
