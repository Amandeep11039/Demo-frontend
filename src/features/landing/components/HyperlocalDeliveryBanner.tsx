import { useState } from "react";
import {
  Zap,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { MOCK_HYPERLOCAL_CITIES } from "../data/mockData";
import { Button } from "../../../components/ui/Button";

export const HyperlocalDeliveryBanner = () => {
  const [selectedCity, setSelectedCity] = useState(MOCK_HYPERLOCAL_CITIES[0].city);
  const [pincode, setPincode] = useState("");
  const [checkStatus, setCheckStatus] = useState<{
    success: boolean;
    message: string;
    hub: string;
    time: string;
  } | null>(null);

  const activeCityData =
    MOCK_HYPERLOCAL_CITIES.find((c) => c.city === selectedCity) ||
    MOCK_HYPERLOCAL_CITIES[0];

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 6) {
      setCheckStatus({
        success: false,
        message: "Please enter a valid 6-digit Indian Pin Code.",
        hub: "",
        time: "",
      });
      return;
    }

    setCheckStatus({
      success: true,
      message: `Hyperlocal Rapido Dispatch confirmed for Pin Code ${pincode}!`,
      hub: activeCityData.hub,
      time: activeCityData.minTime,
    });
  };

  return (
    <section className="bg-[#F8F8F8] py-10 lg:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-md bg-[rgba(34,197,94,0.08)] px-3 py-1 text-xs font-semibold text-green-800">
                <Zap size={14} className="text-[#22C55E]" />
                <span>Rapido API Sandbox • Hyperlocal Express</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] leading-tight">
                Try at Doorstep via Rapido in Under 60 Minutes
              </h2>

              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                India-first e-commerce innovation: Our hyperlocal riders deliver handloom masterpieces to your doorstep within 45 to 60 minutes. Try the fit, verify the pure silk zari, and pay via UPI only for what you keep.
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-[#111111] mb-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#C69A63]" />
                  <span>Select Your Metro Hub:</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {MOCK_HYPERLOCAL_CITIES.map((cityObj) => {
                    const isSelected = selectedCity === cityObj.city;
                    return (
                      <button
                        key={cityObj.city}
                        type="button"
                        onClick={() => {
                          setSelectedCity(cityObj.city);
                          setCheckStatus(null);
                        }}
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-[#111111] text-white shadow-xs"
                            : "bg-[#F4F4F4] text-[#6B7280] hover:bg-[#E5E5E5] hover:text-[#111111]"
                        }`}
                      >
                        {cityObj.city}
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handlePincodeCheck} className="flex gap-2 pt-2 max-w-md">
                <input
                  type="text"
                  maxLength={6}
                  placeholder={`Enter ${selectedCity} Pincode (e.g. 560038)`}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  className="flex-1 rounded-lg border border-[#E5E5E5] bg-[#F8F8F8] px-3.5 py-2 text-xs font-medium text-[#111111] placeholder-[#9CA3AF] outline-none focus:border-[#111111] focus:bg-white transition-all"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-[#111111] text-white px-4 py-2 text-xs shrink-0"
                >
                  Verify Speed
                </Button>
              </form>

              {checkStatus && (
                <div
                  className={`flex items-start gap-2.5 rounded-lg border p-3 text-xs animate-fade-in ${
                    checkStatus.success
                      ? "border-[#22C55E]/40 bg-[rgba(34,197,94,0.06)] text-green-900"
                      : "border-[#EF4444]/40 bg-[rgba(239,68,68,0.06)] text-red-700"
                  }`}
                >
                  {checkStatus.success ? (
                    <CheckCircle2 size={16} className="shrink-0 text-[#22C55E] mt-0.5" />
                  ) : (
                    <MapPin size={16} className="shrink-0 text-[#EF4444] mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">{checkStatus.message}</p>
                    {checkStatus.success && (
                      <p className="mt-0.5 text-[11px] text-green-800">
                        Dispatched from <span className="font-bold">{checkStatus.hub}</span> • Estimated ETA:{" "}
                        <span className="font-bold">{checkStatus.time}</span>.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#E5E5E5] bg-[#111111] p-5 sm:p-6 text-white space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#2D2D2D] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#22C55E] animate-ping" />
                    <span className="text-xs font-semibold text-white">
                      Live Rapido Atelier Fleet • {selectedCity}
                    </span>
                  </div>
                  <span className="rounded-md bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]">
                    {activeCityData.activeRiders} Active Couriers
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#222222] text-[#C69A63] text-xs font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Order Placed with 1-Click Sandbox</p>
                      <p className="text-[11px] text-[#9CA3AF]">
                        AI Wardrobe vault selects item from {activeCityData.hub}.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#222222] text-[#22C55E] text-xs font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Rapido Rider Dispatched with Protective Garment Bag</p>
                      <p className="text-[11px] text-[#9CA3AF]">
                        GPS simulation with real-time temperature & crease-free transit tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#222222] text-[#C69A63] text-xs font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">15-Min Doorstep Fitting & Trial Session</p>
                      <p className="text-[11px] text-[#9CA3AF]">
                        Verify fabric hand-feel, body drape & authentic Silk Mark hologram.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#1C1C1C] p-3 border border-[#2D2D2D] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <Clock size={14} className="text-[#C69A63]" />
                    <span>Average Doorstep Dispatch Time:</span>
                  </div>
                  <span className="text-xs font-bold text-white">{activeCityData.minTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
