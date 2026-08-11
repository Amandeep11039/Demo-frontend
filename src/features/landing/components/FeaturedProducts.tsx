import { useState } from "react";
import {
  Sparkles,
  Zap,
  Star,
  Eye,
  ShoppingBag,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import type { Product } from "../types";
import { Button } from "../../../components/ui/Button";

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onConsultStylistForProduct: (product: Product) => void;
}

export const FeaturedProducts = ({
  products,
  selectedCategory,
  onOpenProductModal,
  onAddToCart,
  onConsultStylistForProduct,
}: FeaturedProductsProps) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-[#F8F8F8] py-12 lg:py-20 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <Sparkles size={13} />
              <span>AI Fit Certified • Rapido Doorstep Try-On</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-[#111111] mt-2">
              Featured Luxury Atelier Pieces
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-md">
            Every creation comes with Gemini AI size recommendation, Silk Mark authentication, and instant 45-min Rapido courier dispatch in select metro zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isHovered = hoveredProductId === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className="group relative flex flex-col rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/4] sm:aspect-[4/4.5] w-full overflow-hidden bg-[#F2F2F2]">
                  <img
                    src={
                      isHovered && product.secondaryImageUrl
                        ? product.secondaryImageUrl
                        : product.imageUrl
                    }
                    alt={product.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />

                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.badge && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#111111]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-[#C69A63]">
                        <Zap size={11} className="text-[#22C55E]" />
                        <span>{product.badge}</span>
                      </span>
                    )}

                    {product.region && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-[#111111] border border-[#E5E5E5]">
                        <ShieldCheck size={11} className="text-[#C69A63]" />
                        <span>{product.region}</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => onOpenProductModal(product)}
                      className="bg-white/95 text-[#111111] hover:bg-white text-xs py-2 px-3 shadow-md flex-1"
                    >
                      <Eye size={14} />
                      <span>AI Size & Fit</span>
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => onConsultStylistForProduct(product)}
                      className="bg-[#111111]/90 text-white hover:bg-[#111111] text-xs py-2 px-3 shadow-md"
                    >
                      <Sparkles size={14} className="text-[#C69A63]" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        <Star size={13} fill="currentColor" />
                        <span className="font-bold text-[#111111] text-xs">
                          {product.rating}
                        </span>
                        <span className="text-[#9CA3AF]">
                          ({product.reviewsCount})
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#22C55E]">
                        <Leaf size={11} />
                        <span>-{product.sustainability.carbonSavedKg}kg CO₂</span>
                      </span>
                    </div>

                    <div>
                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="font-serif text-base sm:text-lg font-semibold text-[#111111] leading-snug cursor-pointer hover:text-[#C69A63] transition-colors"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#6B7280] line-clamp-1 mt-0.5">
                        {product.subTitle}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#F8F8F8] p-2.5 border border-[#EBEBEB]">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#111111] mb-1">
                        <Sparkles size={11} className="text-[#C69A63]" />
                        <span>AI Review Highlights:</span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] line-clamp-2 italic">
                        "{product.aiSentimentSummary.pros[0]}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2F2F2] flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-bold text-[#111111]">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-[#9CA3AF] line-through">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#22C55E] font-semibold">
                        Includes Rapido Doorstep Try-On
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => onAddToCart(product)}
                      className="bg-[#111111] text-white hover:bg-[#2D2D2D] text-xs py-2 px-3 sm:px-4 shrink-0"
                    >
                      <ShoppingBag size={14} />
                      <span className="hidden sm:inline">Try & Buy</span>
                      <span className="sm:hidden">Add</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
