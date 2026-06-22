"use client";

import { useState } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<
    { role: string; content: string }[]
  >([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setChat((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.response,
      },
    ]);

    setMessage("");
  }

  return (
    <div className="w-full max-w-md border p-4 rounded-lg">
      <div className="h-80 overflow-y-auto">
        {chat.map((msg, i) => (
          <div key={i}>
            <strong>{msg.role}: </strong>
            {msg.content}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border w-full p-2 mt-2"
      />

      <button
        onClick={sendMessage}
        className="bg-black text-white px-4 py-2 mt-2"
      >
        Send
      </button>
    </div>
  );
}