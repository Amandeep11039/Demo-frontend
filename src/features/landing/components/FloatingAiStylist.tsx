import { useState } from "react";
import { Sparkles, X, Send, Bot } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { askGeminiStylist } from "../api/geminiApi";

interface FloatingAiStylistProps {
  onTriggerPrompt?: (prompt: string) => void;
}

export const FloatingAiStylist = ({ onTriggerPrompt }: FloatingAiStylistProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "gemini"; text: string; time: string }[]
  >([
    {
      sender: "gemini",
      text: "Namaste! I am your House of MIT AI Fashion Stylist powered by Gemini 1.5 Pro. Ask me anything about Indian handlooms, saree pleating, wedding palettes, or 45-min Rapido delivery!",
      time: "Just now",
    },
  ]);

  const quickQuestions = [
    "What saree matches 22k temple jewellery?",
    "How does Rapido 60-min Try-at-Door work?",
    "Suggest an outfit for a sangeet in Goa",
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    if (onTriggerPrompt) {
      // also notify parent if desired
    }

    const userMsg = {
      sender: "user" as const,
      text: text.trim(),
      time: "Now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    askGeminiStylist({ prompt: text.trim() })
      .then((data) => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "gemini" as const,
            text: data.text,
            time: "Just now",
          },
        ]);
      })
      .catch(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "gemini" as const,
            text: "Gemini Stylist: For that occasion, we recommend pairing our Ayodhya Banarasi Katan Silk with warm antique gold accessories and an emerald or ruby blouse.",
            time: "Just now",
          },
        ]);
      });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 rounded-full border border-[#C69A63]/60 bg-[#111111] px-4 py-3 text-white shadow-2xl hover:bg-[#222222] hover:scale-105 transition-all duration-300"
          aria-label="Open AI Fashion Stylist Chat"
        >
          <div className="relative">
            <Sparkles size={18} className="text-[#C69A63] animate-pulse" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#22C55E]" />
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            AI Stylist Assistant
          </span>
          <span className="rounded-full bg-[#C69A63] text-[9px] font-bold text-[#111111] px-1.5 py-0.5">
            Gemini
          </span>
        </button>
      )}

      {isOpen && (
        <div className="relative w-[340px] sm:w-[380px] rounded-2xl border border-[#2D2D2D] bg-[#111111] text-white shadow-2xl animate-fade-in overflow-hidden flex flex-col h-[480px]">
          <div className="flex items-center justify-between border-b border-[#2D2D2D] bg-[#181818] p-3.5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(198,154,99,0.15)] text-[#C69A63]">
                <Bot size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-none">
                  House of MIT AI Stylist
                </p>
                <p className="text-[10px] text-[#22C55E] mt-0.5">
                  ● Gemini 1.5 Pro Online
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-[#9CA3AF] hover:text-white hover:bg-[#2D2D2D] transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
            {messages.map((msg, idx) => {
              const isGemini = msg.sender === "gemini";
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isGemini ? "items-start" : "items-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                      isGemini
                        ? "bg-[#1F1F1F] text-[#E5E5E5] border border-[#2D2D2D]"
                        : "bg-[#C69A63] text-[#111111] font-medium"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-[#6B7280] mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] bg-[#1F1F1F] border border-[#2D2D2D] p-2.5 rounded-xl w-fit">
                <Sparkles size={13} className="text-[#C69A63] animate-spin" />
                <span>Gemini is generating bespoke styling advice...</span>
              </div>
            )}
          </div>

          <div className="px-3 py-1.5 border-t border-[#262626] bg-[#161616] flex flex-wrap gap-1.5">
            {quickQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSend(q)}
                className="text-[10px] rounded-md bg-[#222222] border border-[#333333] px-2 py-1 text-[#9CA3AF] hover:text-white hover:border-[#C69A63] transition-colors text-left"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-[#2D2D2D] bg-[#181818] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type in English, Hindi, Tamil, etc..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 rounded-lg border border-[#2D2D2D] bg-[#111111] px-3 py-2 text-xs text-white placeholder-[#6B7280] outline-none focus:border-[#C69A63]"
            />
            <Button
              type="submit"
              className="bg-[#C69A63] text-[#111111] hover:bg-[#B38550] p-2 rounded-lg text-xs"
            >
              <Send size={14} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
