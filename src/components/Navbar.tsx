import { useState } from "react";
import {
  Globe,
  ShoppingBag,
  User,
  Sparkles,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/Button";

interface NavbarProps {
  onNavigateHome?: () => void;
  onOpenAuth?: () => void;
  currentView?: "home" | "login";
  cartCount?: number;
}

export const Navbar = ({
  onNavigateHome,
  onOpenAuth,
  currentView = "home",
  cartCount = 0,
}: NavbarProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "bn", name: "বাংলা (Bengali)" },
    { code: "mr", name: "मराठी (Marathi)" },
  ];

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#2D2D2D] bg-[#111111] px-4 sm:px-8 py-3.5 text-white transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Brand Header & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#9CA3AF] hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div
            onClick={() => handleNavClick()}
            className="cursor-pointer text-left"
          >
            <h1 className="font-serif text-lg sm:text-2xl font-semibold leading-tight tracking-[3px] text-white">
              HOUSE OF MIT
            </h1>
            <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[2px] text-[#C69A63]">
              AI FASHION ATELIER • INDIA
            </p>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-[#9CA3AF] font-medium">
          <button
            type="button"
            onClick={() => handleNavClick()}
            className={`hover:text-white transition-colors ${
              currentView === "home" ? "text-[#C69A63] font-semibold" : ""
            }`}
          >
            Atelier Home
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("featured-products-section")}
            className="hover:text-white transition-colors"
          >
            Curated Shop
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("ai-stylist-section")}
            className="hover:text-white transition-colors flex items-center gap-1 text-white"
          >
            <Sparkles size={13} className="text-[#C69A63]" />
            <span>AI Stylist</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("regional-artisan-section")}
            className="hover:text-white transition-colors"
          >
            Handloom GI
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("hyperlocal-section")}
            className="hover:text-white transition-colors flex items-center gap-1 text-[#22C55E]"
          >
            <Zap size={13} />
            <span>Rapido Speed</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("tryon")}
            className="hover:text-white transition-colors"
          >
            Virtual Try-On
          </button>
        </nav>

        {/* Right Section: Language, Cart & Auth */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowLangMenu(!showLangMenu)}
              aria-expanded={showLangMenu}
              aria-label="Select Language"
              className="flex items-center gap-1.5 rounded-md border border-[#2D2D2D] bg-[#181818] px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:border-[#C69A63]"
            >
              <Globe size={14} className="text-[#C69A63]" />
              <span className="hidden sm:inline">{selectedLanguage}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-44 rounded-xl border border-[#2D2D2D] bg-[#181818] p-1.5 shadow-2xl animate-fade-in">
                {languages.map((language) => {
                  const isSelected = selectedLanguage.includes(
                    language.name.split(" ")[0]
                  );
                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => {
                        setSelectedLanguage(language.name.split(" ")[0]);
                        setShowLangMenu(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-xs transition-colors ${
                        isSelected
                          ? "bg-[rgba(198,154,99,0.15)] text-[#C69A63] font-semibold"
                          : "text-white hover:bg-[#262626]"
                      }`}
                    >
                      <span>{language.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart Bag with Indicator */}
          <button
            type="button"
            onClick={() => handleNavClick("featured-products-section")}
            className="relative flex items-center justify-center p-2 text-[#9CA3AF] hover:text-white rounded-lg hover:bg-[#1E1E1E] transition-colors"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C69A63] text-[9px] font-bold text-[#111111] animate-fade-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Sign In / Atelier Profile Button */}
          {onOpenAuth && (
            <Button
              type="button"
              variant={currentView === "login" ? "primary" : "secondary"}
              onClick={onOpenAuth}
              className={`text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5 ${
                currentView === "login"
                  ? "bg-[#C69A63] text-[#111111] border-[#C69A63]"
                  : "bg-[#181818] text-white border-[#2D2D2D] hover:border-[#C69A63]"
              }`}
            >
              <User size={14} className="text-[#C69A63]" />
              <span className="hidden sm:inline">
                {currentView === "login" ? "Atelier Sign In" : "Sign In / DNA"}
              </span>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2D2D2D] mt-3 pt-3 pb-2 space-y-2 text-xs">
          <button
            type="button"
            onClick={() => handleNavClick()}
            className="block w-full text-left px-2 py-1.5 text-white hover:text-[#C69A63]"
          >
            Atelier Home
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("featured-products-section")}
            className="block w-full text-left px-2 py-1.5 text-white hover:text-[#C69A63]"
          >
            Curated Shop
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("ai-stylist-section")}
            className="block w-full text-left px-2 py-1.5 text-white hover:text-[#C69A63]"
          >
            Gemini AI Stylist
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("regional-artisan-section")}
            className="block w-full text-left px-2 py-1.5 text-white hover:text-[#C69A63]"
          >
            State-Wise Handlooms
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("hyperlocal-section")}
            className="block w-full text-left px-2 py-1.5 text-[#22C55E] hover:text-[#22C55E]"
          >
            Rapido 45-Min Speed
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("tryon")}
            className="block w-full text-left px-2 py-1.5 text-white hover:text-[#C69A63]"
          >
            Virtual Try-On
          </button>
        </div>
      )}
    </header>
  );
};
