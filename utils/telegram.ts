
export const sendTelegramNotification = async (data: {
    name: string;
    company: string;
    phone: string;
    problem: string;
}) => {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error('Telegram config missing');
        return false;
    }

    const message = `
🚨 *SUPORTE URGENTE SOLICITADO* 🚨

👤 *Nome:* ${data.name}
🏢 *Empresa:* ${data.company}
📱 *WhatsApp:* ${data.phone}

⚠️ *Problema:*
${data.problem}

_Enviado via Assistente Rocha Tech_
  `.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        return response.ok;
    } catch (error) {
        console.error('Failed to send Telegram message:', error);
        return false;
    }
};
