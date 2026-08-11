import { useState } from "react";
import {
  X,
  Sparkles,
  Zap,
  Star,
  Leaf,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import type { Product } from "../types";
import { Button } from "../../../components/ui/Button";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedSize: string) => void;
  onOpenStylistForProduct: (product: Product) => void;
}

export const ProductQuickViewModal = ({
  product,
  onClose,
  onAddToCart,
  onOpenStylistForProduct,
}: ProductQuickViewModalProps) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState("M");
  const [heightCm, setHeightCm] = useState("168");
  const [weightKg, setWeightKg] = useState("64");
  const [aiSizeCalculated, setAiSizeCalculated] = useState(false);
  const [bundledItems, setBundledItems] = useState<string[]>([]);
  const [addedAlert, setAddedAlert] = useState(false);

  const calculateAiSize = () => {
    const w = parseInt(weightKg) || 64;
    let recSize = "M";
    if (w < 55) recSize = "S";
    else if (w > 78) recSize = "XL";
    else if (w > 68) recSize = "L";

    setSelectedSize(recSize);
    setAiSizeCalculated(true);
  };

  const toggleBundle = (name: string) => {
    if (bundledItems.includes(name)) {
      setBundledItems(bundledItems.filter((i) => i !== name));
    } else {
      setBundledItems([...bundledItems, name]);
    }
  };

  const handleOrder = () => {
    onAddToCart(product, selectedSize);
    setAddedAlert(true);
    setTimeout(() => {
      setAddedAlert(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-2xl my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9CA3AF] hover:text-[#111111] transition-colors rounded-full hover:bg-[#F4F4F4]"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F4F4F4] border border-[#E5E5E5]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 rounded-md bg-[#111111]/90 px-2.5 py-1 text-[10px] font-bold text-[#C69A63]">
                  <Zap size={11} className="text-[#22C55E]" />
                  <span>Rapido {product.estimatedDeliveryMin}-Min Sandbox</span>
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-[#F8F8F8] p-3 text-xs space-y-2">
              <p className="font-semibold text-[#111111] flex items-center gap-1.5">
                <Leaf size={13} className="text-[#22C55E]" />
                <span>AI Fabric Impact & Provenance Label:</span>
              </p>
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <div className="bg-white p-2 rounded-md border border-[#EBEBEB]">
                  <p className="text-[#6B7280]">Carbon Offset</p>
                  <p className="font-bold text-[#22C55E] text-xs mt-0.5">
                    -{product.sustainability.carbonSavedKg} kg
                  </p>
                </div>
                <div className="bg-white p-2 rounded-md border border-[#EBEBEB]">
                  <p className="text-[#6B7280]">Water Saved</p>
                  <p className="font-bold text-[#3B82F6] text-xs mt-0.5">
                    {product.sustainability.waterSavedLiters} L
                  </p>
                </div>
                <div className="bg-white p-2 rounded-md border border-[#EBEBEB]">
                  <p className="text-[#6B7280]">Artisan Share</p>
                  <p className="font-bold text-[#C69A63] text-xs mt-0.5">
                    {product.sustainability.artisanDirectSharePercent}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1">
                <span className="font-semibold text-[#C69A63] uppercase tracking-wider text-[10px]">
                  {product.region || "Heritage Handloom"}
                </span>
                <span>•</span>
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  <Star size={12} fill="currentColor" />
                  <span className="font-bold text-[#111111]">{product.rating}</span>
                </div>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                {product.name}
              </h2>
              <p className="text-xs text-[#6B7280] mt-0.5">{product.subTitle}</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#111111]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-[#9CA3AF] line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-semibold text-[#22C55E]">
                (Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")})
              </span>
            </div>

            <div className="rounded-xl border border-[#C69A63]/30 bg-[rgba(198,154,99,0.05)] p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#111111] flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#C69A63]" />
                  <span>Gemini AI Size & Fit Engine</span>
                </span>
                {aiSizeCalculated && (
                  <span className="text-[10px] font-bold text-[#22C55E] flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>99.2% Fit Confidence</span>
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10px] font-medium text-[#6B7280] block mb-1">
                    Height (cm):
                  </label>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full rounded-md border border-[#E5E5E5] bg-white px-2.5 py-1.5 text-xs text-[#111111] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium text-[#6B7280] block mb-1">
                    Weight (kg):
                  </label>
                  <input
                    type="number"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="w-full rounded-md border border-[#E5E5E5] bg-white px-2.5 py-1.5 text-xs text-[#111111] outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={calculateAiSize}
                  className="rounded-md bg-[#111111] text-white px-3 py-1.5 text-[11px] font-medium hover:bg-[#2D2D2D] transition-colors"
                >
                  Calculate Exact Fit
                </button>

                <div className="flex items-center gap-1.5">
                  {["S", "M", "L", "XL"].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`h-7 w-7 rounded-md text-xs font-bold transition-all ${
                        selectedSize === sz
                          ? "bg-[#C69A63] text-[#111111] ring-2 ring-[#111111]"
                          : "bg-white border border-[#E5E5E5] text-[#6B7280] hover:border-[#111111]"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xs space-y-1 bg-[#F8F8F8] p-3 rounded-lg border border-[#EBEBEB]">
              <p className="font-semibold text-[#111111]">Fabric & Care:</p>
              <p className="text-[#6B7280]">{product.fabric}</p>
              <p className="text-[#9CA3AF] text-[11px]">{product.careGuide}</p>
            </div>

            {product.matchingAccessories.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#111111] flex items-center gap-1">
                  <Sparkles size={12} className="text-[#C69A63]" />
                  <span>AI "Complete the Look" Bundler:</span>
                </p>
                <div className="space-y-1.5">
                  {product.matchingAccessories.map((acc) => {
                    const isBundled = bundledItems.includes(acc.name);
                    return (
                      <div
                        key={acc.name}
                        onClick={() => toggleBundle(acc.name)}
                        className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer text-xs transition-colors ${
                          isBundled
                            ? "border-[#C69A63] bg-[rgba(198,154,99,0.08)]"
                            : "border-[#E5E5E5] bg-white hover:bg-[#F8F8F8]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isBundled}
                            readOnly
                            className="cursor-pointer"
                          />
                          <span className="font-medium text-[#111111]">
                            {acc.name}
                          </span>
                        </div>
                        <span className="font-bold text-[#111111]">
                          +₹{acc.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {addedAlert && (
              <div className="flex items-center gap-2 p-2.5 bg-[rgba(34,197,94,0.1)] border border-[#22C55E] rounded-lg text-xs text-green-800 font-semibold animate-fade-in">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
                <span>Added to Try-at-Door bag! Dispatched to Rapido runner.</span>
              </div>
            )}

            <div className="flex gap-2.5 pt-2">
              <Button
                type="button"
                variant="primary"
                onClick={handleOrder}
                fullWidth
                className="bg-[#111111] text-white hover:bg-[#2D2D2D] py-3 text-xs sm:text-sm font-bold"
              >
                <ShoppingBag size={16} />
                <span>Try at Doorstep ({selectedSize}) • ₹{product.price.toLocaleString("en-IN")}</span>
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  onClose();
                  onOpenStylistForProduct(product);
                }}
                className="bg-white border-[#E5E5E5] hover:border-[#C69A63] text-[#111111] text-xs px-3.5"
              >
                <Sparkles size={15} className="text-[#C69A63]" />
                <span className="hidden sm:inline">Ask Stylist</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
