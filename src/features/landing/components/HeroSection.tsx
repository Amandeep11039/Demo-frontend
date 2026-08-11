import { useState } from "react";
import {
  Sparkles,
  Zap,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import { Button } from "../../../components/ui/Button";

interface HeroSectionProps {
  onOpenStylist: (customPrompt?: string) => void;
  onExploreProducts: () => void;
  onCheckDelivery: () => void;
  onSelectArtisan: () => void;
}

export const HeroSection = ({
  onOpenStylist,
  onExploreProducts,
  onCheckDelivery,
  onSelectArtisan,
}: HeroSectionProps) => {
  const [promptInput, setPromptInput] = useState("");

  const quickPrompts = [
    "Diwali Gala in Jaipur",
    "Groom Raw Silk Sherwani",
    "Kanchipuram Temple Saree",
    "Boardroom Ikat Co-ord",
  ];

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promptInput.trim()) {
      onOpenStylist(promptInput.trim());
    } else {
      onOpenStylist();
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#2D2D2D]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(198,154,99,0.18)_0%,rgba(17,17,17,0)_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Innovation Pill Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C69A63]/40 bg-[rgba(198,154,99,0.1)] px-3.5 py-1.5 text-xs font-semibold text-[#C69A63] shadow-xs">
            <Sparkles size={14} className="animate-pulse" />
            <span>Gemini AI Personal Stylist + Rapido Hyperlocal Sandbox</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#1E1E1E] px-3 py-1 text-xs text-[#9CA3AF]">
            <Zap size={13} className="text-[#22C55E]" />
            <span className="text-white font-medium">
              Same-Hour Try-at-Door
            </span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-white">
            India-First Luxury Fashion, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C69A63] via-[#E8C28A] to-[#C69A63]">
              Curated by AI, Delivered in 60 Mins.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Experience the royal heritage of Banarasi, Kanjivaram & Bandhani
            handlooms paired with real-time Gemini AI style consultation and
            doorstep try-before-you-buy logistics.
          </p>
        </div>

        {/* Interactive AI Prompt Search Console */}
        <div className="max-w-2xl mx-auto mb-8">
          <form
            onSubmit={handlePromptSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-2xl focus-within:border-[#C69A63] transition-all"
          >
            <div className="flex items-center gap-2 px-3 w-full sm:w-auto flex-1">
              <input
                type="text"
                placeholder="Ask Gemini: 'What should I wear to a sunset cocktail in Mumbai?'"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#6B7280] outline-none py-2.5"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto bg-[#C69A63] hover:bg-[#B38550] text-[#111111] font-bold border-[#C69A63] text-xs sm:text-sm py-2.5 px-5"
            >
              <span>Consult Stylist</span>
              <ArrowRight size={15} />
            </Button>
          </form>

          {/* Quick Prompt Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-[11px] text-[#9CA3AF]">
            <span className="font-semibold text-[#6B7280]">
              Trending Inquiries:
            </span>
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  setPromptInput(prompt);
                  onOpenStylist(prompt);
                }}
                className="rounded-md border border-[#2D2D2D] bg-[#161616] px-2.5 py-1 text-white/90 hover:border-[#C69A63] hover:text-[#C69A63] transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <Button
            type="button"
            onClick={onExploreProducts}
            className="bg-white text-[#111111] hover:bg-[#F4F4F4] px-6 py-3.5 text-xs sm:text-sm"
          >
            <Compass size={16} />
            <span>Explore Handloom Atelier</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={onCheckDelivery}
            className="bg-transparent text-white border-[#2D2D2D] hover:bg-[#1E1E1E] hover:border-[#C69A63] px-5 py-3.5 text-xs sm:text-sm"
          >
            <MapPin size={16} className="text-[#22C55E]" />
            <span>Check Hyperlocal Speed (Rapido)</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={onSelectArtisan}
            className="bg-transparent text-white border-[#2D2D2D] hover:bg-[#1E1E1E] hover:border-[#C69A63] px-5 py-3.5 text-xs sm:text-sm"
          >
            <ShieldCheck size={16} className="text-[#C69A63]" />
            <span>State-Wise Handloom Map</span>
          </Button>
        </div>

        {/* Live Trust & Logistics Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-[#2D2D2D]/80">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#181818] border border-[#262626]">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22C55E]">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                45-60 Mins
              </p>
              <p className="text-[10px] text-[#9CA3AF]">Doorstep Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#181818] border border-[#262626]">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(198,154,99,0.1)] text-[#C69A63]">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                Gemini 1.5 Pro
              </p>
              <p className="text-[10px] text-[#9CA3AF]">
                Multilingual AI Stylist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#181818] border border-[#262626]">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(59,130,246,0.1)] text-[#3B82F6]">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                GI Tag Certified
              </p>
              <p className="text-[10px] text-[#9CA3AF]">
                100% Authentic Handloom
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#181818] border border-[#262626]">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(236,72,153,0.1)] text-[#EC4899]">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                Doorstep Try-On
              </p>
              <p className="text-[10px] text-[#9CA3AF]">Zero Return Hassle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
