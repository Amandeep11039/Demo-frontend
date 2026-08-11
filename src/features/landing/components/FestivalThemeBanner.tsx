import { useState } from "react";
import { Sparkles, Calendar, ArrowRight, Flame } from "lucide-react";
import { MOCK_FESTIVALS } from "../data/mockData";
import type { FestivalTheme } from "../types";

interface FestivalThemeBannerProps {
  onSelectTheme: (theme: FestivalTheme) => void;
  onExploreFestiveCollection: () => void;
}

export const FestivalThemeBanner = ({
  onSelectTheme,
  onExploreFestiveCollection,
}: FestivalThemeBannerProps) => {
  const [activeFestivalId, setActiveFestivalId] = useState("diwali");

  const activeFestival =
    MOCK_FESTIVALS.find((f) => f.id === activeFestivalId) || MOCK_FESTIVALS[0];

  const handleSelect = (festival: FestivalTheme) => {
    setActiveFestivalId(festival.id);
    onSelectTheme(festival);
  };

  return (
    <section className="bg-[#181818] py-8 sm:py-12 border-b border-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <Flame size={13} />
              <span>AI Regional Festival Curator</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white mt-1.5">
              Live Cultural Calendar & Festive Themes
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {MOCK_FESTIVALS.map((fest) => {
              const isActive = fest.id === activeFestivalId;
              return (
                <button
                  key={fest.id}
                  type="button"
                  onClick={() => handleSelect(fest)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#C69A63] text-[#111111] font-bold shadow-md"
                      : "bg-[#242424] text-[#9CA3AF] hover:text-white hover:bg-[#2D2D2D]"
                  }`}
                >
                  <Calendar size={13} />
                  <span>{fest.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#2D2D2D] bg-[#1F1F1F] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C69A63]">
                {activeFestival.region} • Curated Edition
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                {activeFestival.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                {activeFestival.tagline}
              </p>

              <div className="pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6B7280] mb-2">
                  Gemini AI Handpicked Weaves for this Occasion:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeFestival.recommendedStyles.map((style) => (
                    <span
                      key={style}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#2D2D2D] bg-[#141414] px-3 py-1 text-xs text-[#E5E5E5]"
                    >
                      <Sparkles size={11} className="text-[#C69A63]" />
                      <span>{style}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onExploreFestiveCollection}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-[#111111] hover:bg-[#E5E5E5] transition-colors"
                >
                  <span>Explore {activeFestival.name} Wardrobe</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-[#2D2D2D]">
                <img
                  src={activeFestival.bannerImage}
                  alt={activeFestival.name}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#111111]/80 backdrop-blur-md border border-[#2D2D2D]">
                  <p className="text-[11px] font-medium text-white flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#C69A63]" />
                    <span>Real-time Gemini AI Style-DNA Sync Active</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
