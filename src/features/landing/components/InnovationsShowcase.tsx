import {
  Sparkles,
  Zap,
  Users,
  Leaf,
  Smile,
  ShieldCheck,
} from "lucide-react";

export const InnovationsShowcase = () => {
  const innovations = [
    {
      icon: <Zap className="text-[#22C55E]" size={20} />,
      title: "Try-at-Door via Rapido Logistics",
      badge: "India-First Logistics",
      description:
        "Riders bring up to 3 sizes to your doorstep within 60 mins. Take 15 mins to try, verify the pure silk zari, and pay only for what you keep.",
    },
    {
      icon: <Sparkles className="text-[#C69A63]" size={20} />,
      title: "AI Festival Wardrobe Planner",
      badge: "Gemini AI Automation",
      description:
        "Input your 5-day Diwali or wedding itinerary. Gemini automatically plans coordinated, non-repeating ensembles for every ritual.",
    },
    {
      icon: <Users className="text-[#3B82F6]" size={20} />,
      title: "Group Shopping Rooms",
      badge: "Real-Time Family Cart",
      description:
        "Collaborate in a shared live room for family wedding shopping. AI ensures the bridesmaids and groom's family don't clash in color palettes.",
    },
    {
      icon: <Smile className="text-[#EC4899]" size={20} />,
      title: "Mood-Based Intuitive Shopping",
      badge: "Contextual AI Search",
      description:
        "Type natural expressions like 'Confident for my startup pitch in Bengaluru' or 'Effortless cocktail night in Goa' and get instant fits.",
    },
    {
      icon: <Leaf className="text-[#22C55E]" size={20} />,
      title: "Carbon & Water Nutrition Label",
      badge: "Eco-Transparency",
      description:
        "Every creation displays transparent metrics on natural rainwater harvested, solar loom usage, and fair artisan compensation shares.",
    },
    {
      icon: <ShieldCheck className="text-[#C69A63]" size={20} />,
      title: "100% GI Tag & Weaver Storytelling",
      badge: "Artisanal Direct",
      description:
        "Direct-to-consumer partnerships with master weavers across Kanchipuram, Varanasi, and Kutch, eliminating exploitative middlemen.",
    },
  ];

  return (
    <section className="bg-[#111111] py-14 lg:py-24 text-white border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C69A63]/40 bg-[rgba(198,154,99,0.1)] px-3.5 py-1 text-xs font-semibold text-[#C69A63] mb-3">
            <Sparkles size={14} />
            <span>Innovation Blueprint • World-Ready Architecture</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Features Never Done Before in Fashion E-Commerce
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#9CA3AF]">
            Merging hyperlocal speed, generational Indian craftsmanship, and conversational AI into a unified luxury experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#2D2D2D] bg-[#181818] p-6 space-y-3 hover:border-[#C69A63] hover:bg-[#1E1E1E] transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222222] border border-[#2D2D2D]">
                  {item.icon}
                </div>
                <span className="rounded-md bg-[#252525] px-2 py-0.5 text-[10px] font-semibold text-[#C69A63] border border-[#333333]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
