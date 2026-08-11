import { ShieldCheck } from "lucide-react";

export const LandingFooter = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-14 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#262626] items-center">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-[2px] text-white">
              HOUSE OF MIT
            </h2>
            <p className="text-xs text-[#9CA3AF] max-w-md leading-relaxed">
              India-first, world-ready luxury fashion atelier. Powered by Google
              Gemini 1.5 Pro AI Personal Stylist and Rapido Hyperlocal Doorstep
              Try-on logistics.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#2D2D2D] bg-[#181818] p-4 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold text-white">
                  Join the AI Wardrobe Concierge
                </p>
                <p className="text-[11px] text-[#9CA3AF]">
                  Receive seasonal handloom drop alerts & AI sizing profiles.
                </p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-[#333333] bg-[#111111] px-3 py-2 text-xs text-white placeholder-[#6B7280] outline-none"
                />
                <button
                  type="button"
                  className="rounded-lg bg-[#C69A63] text-[#111111] font-bold px-3 py-2 text-xs hover:bg-[#B38550] transition-colors"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs">
          <div className="space-y-2.5">
            <h3 className="font-semibold uppercase tracking-wider text-[11px] text-[#C69A63]">
              Curated Shop
            </h3>
            <ul className="space-y-1.5 text-[#9CA3AF]">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Ethnic Wear & Sarees
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Royal Sherwanis & Kurtas
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  State-Wise Regional Handlooms
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Contemporary Indo-Western
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Festival Wardrobes 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-semibold uppercase tracking-wider text-[11px] text-[#C69A63]">
              AI Technology Suite
            </h3>
            <ul className="space-y-1.5 text-[#9CA3AF]">
              <li>
                <a
                  href="#ai-stylist"
                  className="hover:text-white transition-colors"
                >
                  Gemini AI Stylist Chat
                </a>
              </li>
              <li>
                <a href="#tryon" className="hover:text-white transition-colors">
                  WebAR Virtual Try-On
                </a>
              </li>
              <li>
                <a
                  href="#trends"
                  className="hover:text-white transition-colors"
                >
                  AI Trend Scanner
                </a>
              </li>
              <li>
                <a href="#size" className="hover:text-white transition-colors">
                  Neural Body Fit Recommender
                </a>
              </li>
              <li>
                <a
                  href="#wardrobe"
                  className="hover:text-white transition-colors"
                >
                  My Digital Style-DNA
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-semibold uppercase tracking-wider text-[11px] text-[#C69A63]">
              Hyperlocal Logistics
            </h3>
            <ul className="space-y-1.5 text-[#9CA3AF]">
              <li>
                <a
                  href="#rapido"
                  className="hover:text-white transition-colors"
                >
                  Rapido 45-Min Express (Demo)
                </a>
              </li>
              <li>
                <a
                  href="#try-at-door"
                  className="hover:text-white transition-colors"
                >
                  Try-at-Doorstep Model
                </a>
              </li>
              <li>
                <a
                  href="#tracking"
                  className="hover:text-white transition-colors"
                >
                  Live Map GPS Tracking
                </a>
              </li>
              <li>
                <a href="#cod" className="hover:text-white transition-colors">
                  UPI & Post-Trial Payment
                </a>
              </li>
              <li>
                <a
                  href="#global"
                  className="hover:text-white transition-colors"
                >
                  Global Diaspora Shipping
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-semibold uppercase tracking-wider text-[11px] text-[#C69A63]">
              Artisan & Sustainability
            </h3>
            <ul className="space-y-1.5 text-[#9CA3AF]">
              <li>
                <a
                  href="#artisans"
                  className="hover:text-white transition-colors"
                >
                  GI Tag Weaver Guilds
                </a>
              </li>
              <li>
                <a
                  href="#carbon"
                  className="hover:text-white transition-colors"
                >
                  AI Carbon & Water Tracker
                </a>
              </li>
              <li>
                <a
                  href="#fair-trade"
                  className="hover:text-white transition-colors"
                >
                  Direct 70% Weaver Share
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Vision & Blueprint
                </a>
              </li>
              <li>
                <a href="#admin" className="hover:text-white transition-colors">
                  Admin Simulator Panel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#C69A63]" />
            <span>
              HOUSE OF MIT © 2026 • Demo Build (Google Gemini API + Rapido API
              Sandbox).
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#9CA3AF]">Terms of Atelier</span>
            <span className="text-[#9CA3AF]">Privacy Shield</span>
            <span className="text-[#9CA3AF]">Handloom GI Protocols</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
