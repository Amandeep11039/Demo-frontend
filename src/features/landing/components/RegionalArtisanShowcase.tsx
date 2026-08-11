import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { MOCK_ARTISAN_CRAFTS } from "../data/mockData";
import type { ArtisanCraft } from "../types";

interface RegionalArtisanShowcaseProps {
  onOpenArtisanModal: (craft: ArtisanCraft) => void;
}

export const RegionalArtisanShowcase = ({
  onOpenArtisanModal,
}: RegionalArtisanShowcaseProps) => {
  return (
    <section
      id="regional-artisan-section"
      className="bg-white py-12 lg:py-20 border-b border-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <HeartHandshake size={13} />
              <span>Direct Weaver Collective • 0% Middleman Markups</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#111111] mt-2">
              State-Wise Handloom & GI Provenance
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-md">
            Every thread woven by master artisans with centuries of generational heritage, verified through Gemini AI provenance scanner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ARTISAN_CRAFTS.map((craft) => (
            <div
              key={craft.id}
              onClick={() => onOpenArtisanModal(craft)}
              className="group cursor-pointer rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C69A63] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E5E5]">
                <img
                  src={craft.imageUrl}
                  alt={craft.craftName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#111111]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-[#C69A63]">
                    <ShieldCheck size={11} className="text-[#22C55E]" />
                    <span>{craft.heritageYears}+ Years Heritage</span>
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="rounded-md bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-[#111111]">
                    {craft.state}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#C69A63] font-semibold">
                    <MapPin size={12} />
                    <span>{craft.region}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#111111] mt-1 group-hover:text-[#C69A63] transition-colors">
                    {craft.craftName}
                  </h3>

                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                    {craft.description}
                  </p>
                </div>

                <div className="rounded-lg bg-white p-2.5 border border-[#E5E5E5] text-[11px] text-[#4B5563]">
                  <div className="flex items-center gap-1 text-[#C69A63] font-semibold mb-0.5 text-[10px]">
                    <Sparkles size={11} />
                    <span>AI Storyteller:</span>
                  </div>
                  <p className="line-clamp-2 italic">"{craft.aiStorySnippet}"</p>
                </div>

                <div className="pt-2 border-t border-[#EAEAEA] flex items-center justify-between text-xs font-bold text-[#111111]">
                  <span>{craft.featuredProductCount} Handloom Pieces</span>
                  <div className="flex items-center gap-1 text-[#C69A63] group-hover:translate-x-1 transition-transform">
                    <span>Weaver Story</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
