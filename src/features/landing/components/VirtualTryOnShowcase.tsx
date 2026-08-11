import { useState } from "react";
import { Sparkles, Eye, CheckCircle2, Camera } from "lucide-react";

export const VirtualTryOnShowcase = () => {
  const [selectedOutfitIndex, setSelectedOutfitIndex] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  const outfits = [
    {
      name: "Ayodhya Royal Banarasi Silk",
      type: "6-Yard Pleated Saree",
      avatarImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
      aiFitRating: "99.4% Match",
      palluAngle: "Seedha Gujarati Drape",
    },
    {
      name: "Jodhpur Angrakha Raw Silk",
      type: "Menswear Regal Sherwani",
      avatarImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
      aiFitRating: "98.9% Match",
      palluAngle: "Structured Chest Silhouette",
    },
    {
      name: "Kanchipuram Sunset Korvai",
      type: "Temple Wedding Saree",
      avatarImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80",
      aiFitRating: "99.1% Match",
      palluAngle: "Traditional 9-Yard Drape",
    },
  ];

  const handleOutfitChange = (index: number) => {
    setIsRendering(true);
    setSelectedOutfitIndex(index);
    setTimeout(() => {
      setIsRendering(false);
    }, 600);
  };

  const activeOutfit = outfits[selectedOutfitIndex];

  return (
    <section className="bg-[#111111] py-12 lg:py-20 text-white border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <Eye size={14} />
              <span>WebAR & Gemini AI Try-On Simulator</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white leading-tight">
              Virtual Ethnic Fitting & Digital Wardrobe
            </h2>

            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Eliminate sizing anxiety before your Rapido rider arrives. Our AI neural network maps pleating fall, pallu length, and shoulder drop onto your 3D digital twin.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-semibold text-white">
                Select Look for 3D Neural Fit Simulation:
              </p>
              <div className="space-y-2">
                {outfits.map((outfit, idx) => {
                  const isSelected = selectedOutfitIndex === idx;
                  return (
                    <button
                      key={outfit.name}
                      type="button"
                      onClick={() => handleOutfitChange(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${
                        isSelected
                          ? "border-[#C69A63] bg-[rgba(198,154,99,0.12)] text-white"
                          : "border-[#2D2D2D] bg-[#181818] text-[#9CA3AF] hover:border-[#4B5563]"
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-white">{outfit.name}</p>
                        <p className="text-[11px] text-[#9CA3AF]">{outfit.type}</p>
                      </div>
                      <span className="text-[10px] font-bold text-[#22C55E] bg-green-950/40 px-2 py-0.5 rounded border border-green-800/40">
                        {outfit.aiFitRating}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <div className="rounded-xl border border-[#2D2D2D] bg-[#1A1A1A] p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <Camera size={16} className="text-[#C69A63]" />
                  <span>Instant Selfie Sizing (Undressed-to-Dressed Engine)</span>
                </div>
                <span className="text-[10px] font-bold text-[#C69A63] uppercase">
                  Sandbox Active
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[#2D2D2D] bg-[#181818] p-4 sm:p-6 shadow-2xl overflow-hidden">
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626]">
                <img
                  src={activeOutfit.avatarImage}
                  alt={activeOutfit.name}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isRendering ? "opacity-40 blur-xs" : "opacity-100"
                  }`}
                />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="rounded-md bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white flex items-center gap-1 border border-white/10">
                    <Sparkles size={11} className="text-[#C69A63]" />
                    <span>Neural Mesh: 1,420 Vertices</span>
                  </span>
                  <span className="rounded-md bg-[#22C55E]/90 px-2 py-0.5 text-[10px] font-bold text-black">
                    Live WebAR
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/80 backdrop-blur-md p-3 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">
                      {activeOutfit.name}
                    </span>
                    <span className="text-[11px] font-bold text-[#C69A63]">
                      {activeOutfit.palluAngle}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#9CA3AF]">
                    <span>Real-time Pleat Fluidity: Optimal</span>
                    <span className="text-[#22C55E] flex items-center gap-1 font-semibold">
                      <CheckCircle2 size={11} />
                      <span>Zero Clip Detection</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
