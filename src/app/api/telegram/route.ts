import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { message } = body

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: 'Telegram configuration missing' },
      { status: 500 }
    )
  }

  // Get User Agent
  const userAgent = request.headers.get('user-agent') || 'Unknown'
  
  // Get IP address
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'Unknown'

  let isp = 'Unknown'
  if (ip !== 'Unknown' && ip !== '::1' && ip !== '127.0.0.1') {
    try {
      const ipResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,isp`)
      const ipData = await ipResponse.json()
      if (ipData.status === 'success') {
        isp = ipData.isp
      }
    } catch (e) {
      console.error('Failed to fetch ISP info:', e)
    }
  }

  const enrichedMessage = `${message}\n\n--- User Information ---\nIP: ${ip}\nISP: ${isp}\nUser-Agent: ${userAgent}`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: enrichedMessage,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.description || 'Failed to send message' },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending message to Telegram:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
