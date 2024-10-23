import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { CustomNextMiddleware, MiddlewareFactory } from './types'

export function stackMiddlewares(
  functions: MiddlewareFactory[],
  index = 0
): CustomNextMiddleware {
  const current = functions[index]

  if (current) {
    const next = stackMiddlewares(functions, index + 1)
    return current(next)
  }

  return (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => response
}
