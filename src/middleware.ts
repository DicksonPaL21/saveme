import { init } from './middlewares/init'
import { withPathValidator } from './middlewares/pathValidator'
import { stackMiddlewares } from './middlewares/stackMiddleware'

const middlewares = [init, withPathValidator]

export default stackMiddlewares(middlewares)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - info (Pages)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
