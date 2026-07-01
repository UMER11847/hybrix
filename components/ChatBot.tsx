"use client";

import { useState } from "react";
import { LoaderCircle, MessageCircle, SendHorizonal, X } from "lucide-react";

type ChatMessage = {
  role: string;
  content: string;
};

type SectionMatch = {
  id: string;
  label: string;
  keywords: string[];
};

const sectionMatches: SectionMatch[] = [
  { id: "hero", label: "home", keywords: ["hero", "home", "top", "start", "welcome"] },
  { id: "solutions", label: "solutions", keywords: ["solution", "solutions", "services", "service"] },
  { id: "industries", label: "industries", keywords: ["industry", "industries", "sectors", "sector"] },
  { id: "how-it-works", label: "how it works", keywords: ["how it works", "process", "workflow", "steps"] },
  { id: "live-demo", label: "live demo", keywords: ["live demo", "demo", "showcase", "preview"] },
  { id: "benefits", label: "benefits", keywords: ["benefits", "advantages", "why us", "why choose us"] },
  { id: "testimonials", label: "testimonials", keywords: ["testimonials", "reviews", "customers", "social proof"] },
  { id: "case-studies", label: "case studies", keywords: ["case studies", "case study", "success stories", "results"] },
  { id: "pricing", label: "pricing", keywords: ["pricing", "plans", "packages", "cost"] },
  { id: "about", label: "about", keywords: ["about", "about us", "who we are", "company"] },
  { id: "demo-section", label: "demo request", keywords: ["book a demo", "request demo", "contact", "get in touch", "schedule"] },
  { id: "faq", label: "FAQ", keywords: ["faq", "questions", "help"] },
  { id: "footer", label: "footer", keywords: ["footer", "contact info", "links"] },
];

function findSectionMatch(message: string): SectionMatch | null {
  const normalized = message.toLowerCase().trim();
  const isNavigationRequest = /(take me to|go to|show me|open|jump to|navigate to|scroll to|bring me to|view the|view|go straight to|take me)/.test(normalized)
    || normalized.includes(" section")
    || normalized.includes(" page");

  if (!isNavigationRequest) return null;

  return sectionMatches.find(({ keywords }) => keywords.some((keyword) => normalized.includes(keyword))) ?? null;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m HybrixAI’s assistant. I can help answer questions about our services, demos, pricing, and next steps.",
    },
  ]);

  async function sendMessage() {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmedMessage,
    };

    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    const sectionMatch = findSectionMatch(trimmedMessage);

    if (sectionMatch) {
      setIsLoading(false);
      const sectionElement = document.getElementById(sectionMatch.id);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Absolutely — I’m taking you to the ${sectionMatch.label} section.`,
        },
      ]);
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: [{ role: "user", content: trimmedMessage }],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseText = await res.text();
      let data: { text?: string; response?: string; error?: string } = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          data = { text: responseText };
        }
      }

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.text ||
            data.response ||
            "Sorry, I could not generate a response right now.",
        },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I’m having trouble answering right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(52_211_153)] text-white shadow-[0_8px_30px_rgba(52,211,153,0.4)] transition-all duration-200 hover:bg-[rgb(45_200_140)]"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[70] flex w-[min(92vw,360px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 text-slate-100 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">HybrixAI Assistant</p>
              <p className="text-xs text-slate-400">Online now</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto bg-slate-950/60 p-4">
            {chat.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  msg.role === "user"
                    ? "ml-auto bg-[rgb(52_211_153)] text-slate-950"
                    : "bg-white/10 text-slate-100"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div className="max-w-[85%] rounded-2xl bg-white/10 px-3 py-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <LoaderCircle size={16} className="animate-spin" />
                  <span>Thinking…</span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 border-t border-white/10 bg-slate-900/80 p-3"
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !message.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(52_211_153)] text-slate-950 transition hover:bg-[rgb(45_200_140)] disabled:cursor-not-allowed disabled:opacity-60"
              aria-label="Send message"
            >
              {isLoading ? <LoaderCircle size={18} className="animate-spin" /> : <SendHorizonal size={18} />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}