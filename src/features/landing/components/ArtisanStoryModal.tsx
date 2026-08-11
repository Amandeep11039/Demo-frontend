import { X, Sparkles, MapPin, Award, CheckCircle2 } from "lucide-react";
import type { ArtisanCraft } from "../types";
import { Button } from "../../../components/ui/Button";

interface ArtisanStoryModalProps {
  craft: ArtisanCraft | null;
  onClose: () => void;
  onExploreCraftProducts: (craft: ArtisanCraft) => void;
}

export const ArtisanStoryModal = ({
  craft,
  onClose,
  onExploreCraftProducts,
}: ArtisanStoryModalProps) => {
  if (!craft) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-2xl my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#111111] transition-colors rounded-full hover:bg-[#F4F4F4]"
          aria-label="Close artisan story modal"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C69A63] mb-1">
              <MapPin size={14} />
              <span>
                {craft.region} • {craft.state}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              {craft.craftName}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Preserved by {craft.weaversCommunity} ({craft.heritageYears}+ Years Lineage)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#EAEAEA] border border-[#E5E5E5]">
              <img
                src={craft.imageUrl}
                alt={craft.craftName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl border border-[#C69A63]/40 bg-[rgba(198,154,99,0.06)] p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-[#C69A63]/30 pb-2">
                <span className="font-serif font-bold text-[#111111] flex items-center gap-1.5">
                  <Award size={15} className="text-[#C69A63]" />
                  <span>AI Provenance Guarantee</span>
                </span>
                <span className="text-[10px] font-bold text-[#22C55E]">
                  100% Authentic
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] text-[#4B5563]">
                <p>
                  <strong className="text-[#111111]">Certification:</strong>{" "}
                  {craft.specialtyTag}
                </p>
                <p>
                  <strong className="text-[#111111]">Direct Weaver Share:</strong>{" "}
                  65%–75% of retail price paid directly to weaver cooperatives.
                </p>
                <p>
                  <strong className="text-[#111111]">Warp/Weft Test:</strong> Pure
                  natural fibers, zero synthetic adulteration verified via optical scanning.
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1 text-[10px] text-green-800 font-semibold bg-green-100 px-2 py-0.5 rounded">
                  <CheckCircle2 size={11} />
                  <span>Smart Contract Provenance ID: #MIT-WEAVE-2026</span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#F8F8F8] p-4 border border-[#E5E5E5] text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#111111]">
              <Sparkles size={14} className="text-[#C69A63]" />
              <span>Gemini AI Weaver Chronicle:</span>
            </div>
            <p className="text-[#4B5563] leading-relaxed">
              {craft.description} {craft.aiStorySnippet}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              variant="primary"
              onClick={() => {
                onClose();
                onExploreCraftProducts(craft);
              }}
              fullWidth
              className="bg-[#111111] text-white hover:bg-[#2D2D2D] py-3 text-xs sm:text-sm font-bold"
            >
              <span>Explore {craft.craftName} Catalog</span>
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="bg-white border-[#E5E5E5] text-[#111111] text-xs sm:text-sm px-6"
            >
              <span>Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
