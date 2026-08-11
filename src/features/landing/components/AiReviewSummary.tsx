import { Star, Sparkles } from "lucide-react";
import { MOCK_REVIEWS } from "../data/mockData";

export const AiReviewSummary = () => {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
                <Sparkles size={13} />
                <span>AI Sentiment Synthesizer</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] mt-2">
                Real Customer Sentiment & Doorstep Speed
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#111111]">4.92 / 5.0</span>
              <span className="text-xs text-[#6B7280]">(1,480+ Verified Doorstep Deliveries)</span>
            </div>
          </div>

          <div className="rounded-xl border border-[#C69A63]/30 bg-[rgba(198,154,99,0.06)] p-4 sm:p-5 mb-8 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111]">
              <Sparkles size={15} className="text-[#C69A63]" />
              <span>Gemini AI Consensus Summary (Across 1,480 Reviews):</span>
            </div>
            <p className="text-[#4B5563] leading-relaxed">
              <strong>Key Strengths:</strong> 98.6% praise the exact weight and texture of hand-spun pure silk zari. Rapido delivery was completed in an average of 48.4 minutes in Bengaluru, Mumbai, and Delhi-NCR. Sizing accuracy via Gemini AI body predictor reduced return requests to under 1.8%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {MOCK_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="rounded-xl border border-[#E5E5E5] bg-white p-5 space-y-3 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <span className="rounded-md bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]">
                      {rev.aiTag}
                    </span>
                  </div>

                  <p className="text-xs text-[#374151] leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2F2F2] flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#111111]">{rev.author}</p>
                    <p className="text-[10px] text-[#9CA3AF]">{rev.city}</p>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF]">{rev.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
