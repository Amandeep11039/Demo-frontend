import { TrendingUp, ArrowUpRight } from "lucide-react";
import { MOCK_TRENDS } from "../data/mockData";

export const TrendScannerSection = () => {
  return (
    <section className="bg-white py-12 lg:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <TrendingUp size={13} />
              <span>Real-Time AI Fashion Intelligence</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] mt-2">
              Gemini AI Trend Scanner • Festive 2026
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-md">
            Aggregating search velocity, Instagram bridal mood boards, and regional wedding mandates into predictive fashion trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MOCK_TRENDS.map((trend) => (
            <div
              key={trend.id}
              className="rounded-2xl border border-[#E5E5E5] bg-[#F8F8F8] p-5 flex flex-col justify-between hover:border-[#C69A63] hover:shadow-md transition-all space-y-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C69A63]">
                    {trend.regionFocus}
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-[#22C55E]">
                    +{trend.growthPercentage}%
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#111111] mt-2">
                  {trend.trendName}
                </h3>

                <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                  {trend.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between">
                <span className="text-[10px] font-semibold text-[#111111]">
                  {trend.tag}
                </span>
                <div
                  className="h-4 w-4 rounded-full border border-white shadow-xs"
                  style={{ backgroundColor: trend.colorHex }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
