import { NextMiddlewareResult } from 'next/dist/server/web/types'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export type CustomNextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>

export type MiddlewareFactory = (
  middleware: CustomNextMiddleware
) => CustomNextMiddleware
