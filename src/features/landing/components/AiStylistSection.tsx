import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Sparkles,
  Send,
  Palette,
  CheckCircle2,
  RefreshCw,
  ShoppingBag,
  AlertCircle,
} from "lucide-react";
import { MOCK_STYLIST_PRESETS, MOCK_PRODUCTS } from "../data/mockData";
import type { AiStylistQuery, Product } from "../types";
import { Button } from "../../../components/ui/Button";
import { askGeminiStylist } from "../api/geminiApi";
import {
  askGeminiSchema,
  type AskGeminiFormValues,
} from "../schema/askGeminiSchema";
import Markdown from "react-markdown";

interface AiStylistSectionProps {
  onSelectProduct: (product: Product) => void;
  customInitialPrompt?: string;
}

export const AiStylistSection = ({
  onSelectProduct,
  customInitialPrompt,
}: AiStylistSectionProps) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeStylistResult, setActiveStylistResult] =
    useState<AiStylistQuery>(MOCK_STYLIST_PRESETS[0]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AskGeminiFormValues>({
    resolver: zodResolver(askGeminiSchema),
    defaultValues: {
      prompt: customInitialPrompt || "",
      occasion: "",
      city: "",
      model: "",
      temperature: 0,
    },
  });

  useEffect(() => {
    if (customInitialPrompt) {
      setValue("prompt", customInitialPrompt);
    }
  }, [customInitialPrompt, setValue]);

  const handleSelectPreset = (index: number) => {
    setActiveQueryIndex(index);
    setActiveStylistResult(MOCK_STYLIST_PRESETS[index]);
    setValue("prompt", MOCK_STYLIST_PRESETS[index].prompt);
  };

  const onSubmit = async (data: AskGeminiFormValues) => {
    const promptText = data.prompt.trim();
    if (!promptText) return;

    setIsGenerating(true);
    const matched =
      MOCK_STYLIST_PRESETS.find((p) =>
        p.prompt.toLowerCase().includes(promptText.toLowerCase().slice(0, 5)),
      ) || MOCK_STYLIST_PRESETS[1];

    try {
      const geminiResponse = await askGeminiStylist({
        prompt: promptText,
        city: data.city,
        occasion: data.occasion,
      });
      setIsGenerating(false);
      setActiveStylistResult({
        ...matched,
        prompt: promptText,
        occasion: `Custom Inquiry: "${promptText}"`,
        aiAdvice: geminiResponse.text,
      });
    } catch {
      setIsGenerating(false);
      setActiveStylistResult({
        ...matched,
        prompt: promptText,
        occasion: `Custom Inquiry: "${promptText}"`,
        aiAdvice: `Gemini AI Stylist: Based on your prompt "${promptText}", we recommend an artisanal balance of rich textures and breathable handloom. Handcrafted zari details catch warm evening lighting while tailored posture ensures effortless grace.`,
      });
    }
  };

  const matchingProduct = MOCK_PRODUCTS.find(
    (p) => p.id === activeStylistResult.outfitRecommendation.matchingProductId,
  );

  return (
    <section
      id="ai-stylist-section"
      className="bg-[#111111] py-12 lg:py-20 text-white border-b border-[#2D2D2D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C69A63]/40 bg-[rgba(198,154,99,0.1)] px-3.5 py-1 text-xs font-semibold text-[#C69A63] mb-3">
            <Sparkles size={14} className="animate-pulse" />
            <span>Google Gemini 3.5 Pro AI Style Engine</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Conversational Fashion Stylist & Color Harmonizer
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF]">
            Ask Gemini for contextual outfit recommendations tailored to Indian
            weddings, climate, city vibe, and skin undertones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C69A63]">
              Select a Styling Prompt:
            </p>

            <div className="space-y-2.5">
              {MOCK_STYLIST_PRESETS.map((preset, idx) => {
                const isSelected = activeQueryIndex === idx;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? "border-[#C69A63] bg-[rgba(198,154,99,0.12)] text-white shadow-lg"
                        : "border-[#2D2D2D] bg-[#181818] text-[#9CA3AF] hover:border-[#4B5563] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">
                        {preset.occasion}
                      </span>
                      {isSelected && (
                        <CheckCircle2 size={14} className="text-[#C69A63]" />
                      )}
                    </div>
                    <p className="mt-1 text-[11px] text-[#9CA3AF] line-clamp-2">
                      "{preset.prompt}"
                    </p>
                  </button>
                );
              })}
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4 p-3 rounded-xl border border-[#2D2D2D] bg-[#1A1A1A] space-y-2"
            >
              <label
                htmlFor="stylist-custom-input"
                className="text-[11px] font-semibold text-[#9CA3AF] block"
              >
                Or Ask Gemini Anything (Any Occasion, Theme or City):
              </label>

              <div className="flex items-center gap-2">
                <textarea
                  id="stylist-custom-input"
                  placeholder="e.g. Minimalist Kurta for an outdoor Kolkata brunch..."
                  {...register("prompt")}
                  className={`flex-1 bg-[#111111] border rounded-lg px-3 py-2 text-xs text-white placeholder-[#6B7280] outline-none transition-colors ${
                    errors.prompt
                      ? "border-red-500/80 focus:border-red-500"
                      : "border-[#2D2D2D] focus:border-[#C69A63]"
                  }`}
                />
                <Button
                  type="submit"
                  disabled={isGenerating}
                  className="bg-[#C69A63] text-[#111111] hover:bg-[#B38550] text-xs py-2 px-3 shrink-0 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <RefreshCw size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                </Button>
              </div>

              {errors.prompt && (
                <p className="flex items-center gap-1 text-[11px] text-red-400 font-medium pt-0.5">
                  <AlertCircle size={12} />
                  <span>{errors.prompt.message}</span>
                </p>
              )}

              <div>
                <label htmlFor="occasion" className="text-sm text-white">
                  Occasion
                </label>

                <input
                  id="occasion"
                  placeholder="e.g. Minimalist Kurta for an outdoor Kolkata brunch..."
                  {...register("occasion")}
                  className={`flex-1 bg-[#111111] border rounded-lg px-3 py-2 text-xs text-white placeholder-[#6B7280] outline-none transition-colors ${
                    errors.occasion
                      ? "border-red-500/80 focus:border-red-500"
                      : "border-[#2D2D2D] focus:border-[#C69A63]"
                  }`}
                />

                <label htmlFor="city" className="text-sm text-white">
                  City
                </label>

                <input
                  id="city"
                  placeholder="Enter City"
                  {...register("city")}
                  className={`flex-1 bg-[#111111] border rounded-lg px-3 py-2 text-xs text-white placeholder-[#6B7280] outline-none transition-colors ${
                    errors.city
                      ? "border-red-500/80 focus:border-red-500"
                      : "border-[#2D2D2D] focus:border-[#C69A63]"
                  }`}
                />
              </div>
            </form>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#2D2D2D] bg-[#161616] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C69A63]">
                  <Sparkles size={16} />
                  <span>Gemini Generative Styling Analysis</span>
                </div>
                <span className="rounded-md bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]">
                  Real-time Sandbox Response
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-white">
                  Stylist Recommendation:
                </p>
                <div className="rounded-xl bg-[#1F1F1F] p-4 border border-[#2D2D2D] text-xs text-[#E5E5E5] leading-relaxed">
                  <div className="prose prose-invert prose-sm max-w-none">
                    <Markdown>{activeStylistResult.aiAdvice}</Markdown>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Palette size={14} className="text-[#C69A63]" />
                  <span>Curated Harmonic Color Palette:</span>
                </div>
                <div className="flex items-center gap-3">
                  {activeStylistResult.recommendedPalette.map((hex, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <div
                        className="h-6 w-6 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-[10px] font-mono text-[#9CA3AF]">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {matchingProduct && (
                <div className="rounded-xl border border-[#C69A63]/30 bg-[#1A1A1A] p-4 flex flex-col sm:flex-row items-center gap-4">
                  <img
                    src={matchingProduct.imageUrl}
                    alt={matchingProduct.name}
                    className="h-20 w-20 rounded-lg object-cover shrink-0 border border-[#2D2D2D]"
                  />

                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <span className="text-[10px] font-bold text-[#C69A63] uppercase tracking-wider">
                      Primary AI Recommendation
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-white">
                      {matchingProduct.name}
                    </h4>
                    <p className="text-[11px] text-[#9CA3AF]">
                      {activeStylistResult.outfitRecommendation.stylingTip}
                    </p>
                  </div>

                  <Button
                    type="button"
                    onClick={() => onSelectProduct(matchingProduct)}
                    className="bg-[#C69A63] hover:bg-[#B38550] text-[#111111] font-bold text-xs py-2 px-3 shrink-0"
                  >
                    <ShoppingBag size={13} />
                    <span>View Piece</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
