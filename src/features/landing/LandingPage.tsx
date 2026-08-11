import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { FestivalThemeBanner } from "./components/FestivalThemeBanner";
import { HyperlocalDeliveryBanner } from "./components/HyperlocalDeliveryBanner";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { AiStylistSection } from "./components/AiStylistSection";
import { RegionalArtisanShowcase } from "./components/RegionalArtisanShowcase";
import { VirtualTryOnShowcase } from "./components/VirtualTryOnShowcase";
import { TrendScannerSection } from "./components/TrendScannerSection";
import { InnovationsShowcase } from "./components/InnovationsShowcase";
import { AiReviewSummary } from "./components/AiReviewSummary";
import { LandingFooter } from "./components/LandingFooter";
import { FloatingAiStylist } from "./components/FloatingAiStylist";
import { ProductQuickViewModal } from "./components/ProductQuickViewModal";
import { ArtisanStoryModal } from "./components/ArtisanStoryModal";
import { MOCK_PRODUCTS } from "./data/mockData";
import type { Product, ArtisanCraft } from "./types";

interface LandingPageProps {
  onOpenAuth?: () => void;
  cartCount: number;
  onUpdateCartCount: (count: number) => void;
}

export const LandingPage = ({
  cartCount,
  onUpdateCartCount,
}: LandingPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProductForModal, setSelectedProductForModal] =
    useState<Product | null>(null);
  const [selectedArtisanForModal, setSelectedArtisanForModal] =
    useState<ArtisanCraft | null>(null);
  const [customStylistPrompt, setCustomStylistPrompt] = useState<string>("");

  const handleOpenStylist = (prompt?: string) => {
    if (prompt) {
      setCustomStylistPrompt(prompt);
    }
    const elem = document.getElementById("ai-stylist-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreProducts = () => {
    setSelectedCategory("all");
    const elem = document.getElementById("featured-products-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCheckDelivery = () => {
    const elem = document.getElementById("hyperlocal-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectArtisanSection = () => {
    const elem = document.getElementById("regional-artisan-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = () => {
    onUpdateCartCount(cartCount + 1);
  };

  const handleConsultStylistForProduct = (product: Product) => {
    handleOpenStylist(`What should I pair with ${product.name}?`);
  };

  const handleSelectFestivalTheme = () => {
    handleExploreProducts();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenStylist={handleOpenStylist}
        onExploreProducts={handleExploreProducts}
        onCheckDelivery={handleCheckDelivery}
        onSelectArtisan={handleSelectArtisanSection}
      />

      {/* 2. Live Festival Theme Banner */}
      <FestivalThemeBanner
        onSelectTheme={handleSelectFestivalTheme}
        onExploreFestiveCollection={handleExploreProducts}
      />

      {/* 3. Rapido Sandbox Hyperlocal Delivery Banner */}
      <div id="hyperlocal-section">
        <HyperlocalDeliveryBanner />
      </div>

      {/* 4. Category Grid Navigation */}
      <CategoryGrid
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 5. Featured Products & Live Try-at-Door Showcase */}
      <div id="featured-products-section">
        <FeaturedProducts
          products={MOCK_PRODUCTS}
          selectedCategory={selectedCategory}
          onOpenProductModal={(product) => setSelectedProductForModal(product)}
          onAddToCart={handleAddToCart}
          onConsultStylistForProduct={handleConsultStylistForProduct}
        />
      </div>

      {/* 6. Gemini Conversational Stylist Section */}
      <AiStylistSection
        onSelectProduct={(product) => setSelectedProductForModal(product)}
        customInitialPrompt={customStylistPrompt}
      />

      {/* 7. Regional Handloom & GI Artisans */}
      <RegionalArtisanShowcase
        onOpenArtisanModal={(craft) => setSelectedArtisanForModal(craft)}
      />

      {/* 8. WebAR Virtual Try-On & Digital Wardrobe */}
      <div id="tryon">
        <VirtualTryOnShowcase />
      </div>

      {/* 9. Real-Time AI Trend Scanner */}
      <TrendScannerSection />

      {/* 10. Innovation Blueprint Highlights */}
      <InnovationsShowcase />

      {/* 11. Customer Reviews & AI Sentiment Summary */}
      <AiReviewSummary />

      {/* 12. Full Sitemap Footer */}
      <LandingFooter />

      {/* Floating Gemini AI Stylist Drawer Widget */}
      <FloatingAiStylist onTriggerPrompt={handleOpenStylist} />

      {/* Interactive Modals */}
      {selectedProductForModal && (
        <ProductQuickViewModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onAddToCart={handleAddToCart}
          onOpenStylistForProduct={handleConsultStylistForProduct}
        />
      )}

      {selectedArtisanForModal && (
        <ArtisanStoryModal
          craft={selectedArtisanForModal}
          onClose={() => setSelectedArtisanForModal(null)}
          onExploreCraftProducts={() => {
            setSelectedCategory("regional");
            handleExploreProducts();
          }}
        />
      )}
    </div>
  );
};
