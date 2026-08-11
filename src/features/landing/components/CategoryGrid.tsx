import { ArrowRight, Compass } from "lucide-react";

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryGrid = ({
  selectedCategory,
  onSelectCategory,
}: CategoryGridProps) => {
  const categories = [
    {
      id: "all",
      title: "All Atelier Creations",
      sub: "Handlooms & Contemporary Sets",
      count: "120+ Pieces",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ethnic",
      title: "Heritage Sarees & Drapes",
      sub: "Banarasi, Kanjivaram & Paithani",
      count: "48 Masterpieces",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "menswear",
      title: "Royal Sherwanis & Kurtas",
      sub: "Raw Silk Achkans & Bandhgalas",
      count: "35 Ensembles",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "regional",
      title: "GI-Certified Handlooms",
      sub: "Direct Weaver Cooperative",
      count: "29 Weaves",
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "festive",
      title: "Chikankari & Anarkalis",
      sub: "Lucknowi Shadow Work",
      count: "24 Gowns",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "western",
      title: "Indo-Western Co-ords",
      sub: "Double Ikat Modern Cut",
      count: "18 Outfits",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(198,154,99,0.12)] px-2.5 py-1 text-xs font-semibold text-[#C69A63]">
              <Compass size={13} />
              <span>Full Site Map & Collections</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] mt-2">
              Curated Wardrobe Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-md">
            Click any category to filter our live catalogue with instant Gemini AI styling insights and Rapido doorstep trial options.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative flex flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "border-[#111111] ring-2 ring-[#111111] shadow-lg"
                    : "border-[#E5E5E5] bg-[#F8F8F8] hover:border-[#C69A63] hover:shadow-md"
                }`}
              >
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-[#EAEAEA]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                  <span className="absolute top-2 right-2 rounded-md bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-white">
                    {cat.count}
                  </span>
                </div>

                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#111111] leading-snug group-hover:text-[#C69A63] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#6B7280] mt-0.5 line-clamp-1">
                      {cat.sub}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[10px] font-bold text-[#111111]">
                    <span>{isSelected ? "Active View" : "Browse"}</span>
                    <ArrowRight
                      size={12}
                      className={`transition-transform duration-200 ${
                        isSelected ? "translate-x-1 text-[#C69A63]" : "text-[#9CA3AF] group-hover:translate-x-1 group-hover:text-[#111111]"
                      }`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
