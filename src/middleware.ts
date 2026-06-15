import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BANNED_BOTS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'ahrefsbot',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google pagead',
  'qwantify',
  'pinterestbot',
  'bitrix link preview',
  'xing-content-hosting',
  'gotit',
  'crawler',
  'spider',
  'bot',
]

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase()

  if (userAgent) {
    const isBot = BANNED_BOTS.some((bot) => userAgent.includes(bot))
    if (isBot) {
      return new NextResponse(null, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
