import { useEffect } from "react";
import { createChat } from "@n8n/chat";

export default function N8nChat() {
  useEffect(() => {
    if (window.__n8nChatInitialized) return;
    window.__n8nChatInitialized = true;

    createChat({
      webhookUrl: "https://webhook.eavox.com.br/webhook/5eda7cd3-979b-45b0-80f6-aab225da1d1f/chat",
      mode: "window",
      showWelcomeScreen: true,
      initialMessages: [
        "Olá! 🤖 Sou a assistente virtual da EAVOX.",
        "Como posso ajudar seu negócio hoje?"
      ],
      theme: {
        primaryColor: "#ff7a18",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif'
      }
    });
  }, []);

  return null;
}