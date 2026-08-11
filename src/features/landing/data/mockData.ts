import type {
  Product,
  ArtisanCraft,
  FestivalTheme,
  AiStylistQuery,
  TrendItem,
  Language,
} from "../types";

export const MOCK_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
];

export const MOCK_HYPERLOCAL_CITIES = [
  {
    city: "Bengaluru",
    minTime: "45 mins",
    activeRiders: 142,
    hub: "Indiranagar Atelier Hub",
  },
  {
    city: "Mumbai",
    minTime: "60 mins",
    activeRiders: 218,
    hub: "Bandra West Rapid Vault",
  },
  {
    city: "Delhi-NCR",
    minTime: "55 mins",
    activeRiders: 195,
    hub: "South Ex Express Hub",
  },
  {
    city: "Hyderabad",
    minTime: "50 mins",
    activeRiders: 110,
    hub: "Jubilee Hills Pod",
  },
  {
    city: "Chennai",
    minTime: "65 mins",
    activeRiders: 88,
    hub: "T. Nagar Fast-Track",
  },
  {
    city: "Kolkata",
    minTime: "70 mins",
    activeRiders: 76,
    hub: "Salt Lake Heritage Hub",
  },
];

export const MOCK_FESTIVALS: FestivalTheme[] = [
  {
    id: "diwali",
    name: "Diwali Lights Atelier",
    tagline: "Golden Zari & Royal Velvets for the Festival of Splendour",
    accentColor: "#C69A63",
    region: "Pan-India",
    recommendedStyles: [
      "Banarasi Brocade",
      "Raw Silk Sherwani",
      "Tissue Silk Sarees",
      "Antique Zardozi",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "durga-puja",
    name: "Durga Puja Mahotsav",
    tagline: "Crimson Lal-Par & Dhaani Silks with AI Draping Guidance",
    accentColor: "#DC2626",
    region: "Bengal & East",
    recommendedStyles: [
      "Lal-Par Baluchari",
      "Dhikai Cotton",
      "Tussar Kurtas",
      "Kantha Stitch Jackets",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pongal",
    name: "Pongal & Makar Sankranti",
    tagline: "Temple Borders, Pure Kanchipuram Gold & Festive Veshtis",
    accentColor: "#D97706",
    region: "Tamil Nadu & South",
    recommendedStyles: [
      "Korvai Kanjivaram",
      "Kasavu Handlooms",
      "Silk Pattu Pavadai",
      "Angavastram Sets",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wedding-season",
    name: "Royal Indian Vivah",
    tagline: "AI Coordinated Bridal & Groom Ensembles with Doorstep Try-on",
    accentColor: "#B91C1C",
    region: "Royal Rajasthan & Delhi",
    recommendedStyles: [
      "Hand-Embroidered Lehengas",
      "Pashmina Achkans",
      "Bandhani Dupattas",
      "Polki Jewellery Sets",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const MOCK_ARTISAN_CRAFTS: ArtisanCraft[] = [
  {
    id: "banarasi",
    craftName: "Banarasi Kadwa Brocade",
    region: "Varanasi, Ghats of Ganga",
    state: "Uttar Pradesh",
    heritageYears: 650,
    weaversCommunity: "Ansari Master Weavers Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description:
      "Hand-spun mulberry silk woven on pit looms with genuine gold & silver testing silver threads.",
    aiStorySnippet:
      "Each saree takes 28 days of hand-weaving. Gemini AI verified the authentic warp count of 120 ends/inch.",
    specialtyTag: "GI Tag Certified • 100% Zero Synthetic",
    featuredProductCount: 42,
  },
  {
    id: "kanjivaram",
    craftName: "Kanchipuram Korvai Silk",
    region: "Kanchipuram Temple Town",
    state: "Tamil Nadu",
    heritageYears: 400,
    weaversCommunity: "Kanchi Silk Handloom Cooperative",
    imageUrl:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    description:
      "Three-shuttle interlocking weave connecting contrasting pallu and border with solid temple motifs.",
    aiStorySnippet:
      "Woven with double-warp threads for heirloom weight. Gemini AI estimates 300+ years fabric longevity.",
    specialtyTag: "Temple Heritage Weave • Pure Silver Zari",
    featuredProductCount: 38,
  },
  {
    id: "bandhani",
    craftName: "Kutch Bandhani & Ajrakh",
    region: "Bhuj & Mandvi",
    state: "Gujarat",
    heritageYears: 500,
    weaversCommunity: "Khatri Master Dyers",
    imageUrl:
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80",
    description:
      "Micro-knot resist dyeing using natural madder root, indigo, and pomegranate peel pigments.",
    aiStorySnippet:
      "Contains up to 45,000 hand-tied micro knots. Worn by royal courts across Kutch and Saurashtra.",
    specialtyTag: "100% Organic Dyes • Solar Cured",
    featuredProductCount: 29,
  },
  {
    id: "pochampally",
    craftName: "Pochampally Double Ikat",
    region: "Bhoodan Pochampally",
    state: "Telangana",
    heritageYears: 320,
    weaversCommunity: "Padmashali Weaver Collective",
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description:
      "Complex geometric precision where both warp and weft threads are tie-dyed prior to loom mounting.",
    aiStorySnippet:
      "Mathematical symmetry validated by our visual pattern scanner with 99.4% alignment score.",
    specialtyTag: "UNESCO Intangible Heritage • Geometric Silk",
    featuredProductCount: 24,
  },
  {
    id: "chanderi",
    craftName: "Chanderi Gossamer Tissue",
    region: "Chanderi Fort District",
    state: "Madhya Pradesh",
    heritageYears: 700,
    weaversCommunity: "Scindia Royal Patrons Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    description:
      "Featherlight sheer silk cotton infused with fine zari buttis, favored by Mughal and Bundela royalty.",
    aiStorySnippet:
      "Breathable airy drape ideal for Indian summers and daytime festive galas.",
    specialtyTag: "Lightweight Luxury • Royal Scindia Weave",
    featuredProductCount: 31,
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "mit-p-101",
    name: "Ayodhya Royal Banarasi Katan Silk Saree",
    subTitle: "Pure Gold Floral Jaal with Meenakari Accents",
    category: "ethnic",
    region: "Varanasi, UP",
    price: 24999,
    originalPrice: 32999,
    rating: 4.9,
    reviewsCount: 148,
    imageUrl:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    secondaryImageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    badge: "Rapido 45-Min Dispatch",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 45,
    fabric: "100% Pure Mulberry Katan Silk with Tested Zari",
    careGuide: "Dry clean only. Store wrapped in pure unbleached muslin cloth.",
    aiStyleNotes:
      "Gemini Stylist: Pair with antique temple choker in 22k antique matte finish and raw silk emerald blouse.",
    sustainability: {
      carbonSavedKg: 14.2,
      waterSavedLiters: 1850,
      artisanDirectSharePercent: 68,
    },
    matchingAccessories: [
      {
        name: "Kundan & Pearl Temple Choker",
        price: 4999,
        imageUrl:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Handcrafted Zardozi Potli Clutch",
        price: 2499,
        imageUrl:
          "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=300&q=80",
      },
    ],
    aiSentimentSummary: {
      pros: [
        "Exceptional heavyweight drape",
        "Authentic zari shine without glare",
        "Immediate delivery confirmed in 38 mins via Rapido",
      ],
      cons: ["Heavyweight (approx 950g) - best for evening/festive wear"],
      fitSummary:
        "Universal saree length 6.3m (including unstitched blouse piece). Suitable for heights 5'0\" to 6'2\".",
    },
  },
  {
    id: "mit-p-102",
    name: "Jodhpur Royal Angrakha Sherwani Set",
    subTitle: "Ivory Raw Silk with Hand-Embroidered Marodi Needlework",
    category: "menswear",
    region: "Jodhpur, Rajasthan",
    price: 34500,
    originalPrice: 42000,
    rating: 4.8,
    reviewsCount: 92,
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    secondaryImageUrl:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
    badge: "Doorstep Try-On Available",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 60,
    fabric: "Heavy Matka Raw Silk with Cotton Mulmul Lining",
    careGuide: "Specialist dry cleaning only. Steam press on low silk setting.",
    aiStyleNotes:
      "Gemini Stylist: Ideal for groom or close reception. Accompany with emerald safa and mojari.",
    sustainability: {
      carbonSavedKg: 19.5,
      waterSavedLiters: 2400,
      artisanDirectSharePercent: 72,
    },
    matchingAccessories: [
      {
        name: "Hand-block Chanderi Safa Turban",
        price: 3200,
        imageUrl:
          "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Hand-stitched Zari Jutti Shoes",
        price: 3800,
        imageUrl:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=80",
      },
    ],
    aiSentimentSummary: {
      pros: [
        "Regal structured tailoring",
        "Breathable inner mulmul lining",
        "True-to-chest fit recommended accurately by AI",
      ],
      cons: ["Needs professional steaming post-unboxing"],
      fitSummary:
        "Structured fit. AI recommends sizing up if wearing thick thermal innerwear.",
    },
  },
  {
    id: "mit-p-103",
    name: "Kanchipuram Sunset Korvai Pattu Saree",
    subTitle: "Deep Ochre Body with Contrast Temple Crimson Border",
    category: "regional",
    region: "Kanchipuram, TN",
    price: 28900,
    originalPrice: 35000,
    rating: 5.0,
    reviewsCount: 114,
    imageUrl:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    badge: "UNESCO Heritage Weave",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 50,
    fabric: "Pure Mulberry 3-Ply Silk with 3G Tested Silver Zari",
    careGuide: "Air out every 6 months in mild shade. Keep with neem leaves.",
    aiStyleNotes:
      "Gemini Stylist: Traditional wedding staple. Ideal with high-neck blouse and gold jhumkas.",
    sustainability: {
      carbonSavedKg: 16.0,
      waterSavedLiters: 2100,
      artisanDirectSharePercent: 70,
    },
    matchingAccessories: [
      {
        name: "Temple Kemp Stone Jhumkas",
        price: 2999,
        imageUrl:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80",
      },
    ],
    aiSentimentSummary: {
      pros: [
        "Rich heirloom weight",
        "Striking contrast border",
        "Received genuine GI-tag authentication certificate",
      ],
      cons: ["Requires experienced hands for crisp pleating"],
      fitSummary: "Traditional 9-yard or standard 6-yard drape configuration.",
    },
  },
  {
    id: "mit-p-104",
    name: "Chikankari Hand-Embroidered Anarkali Gown",
    subTitle: "Georgette Silk with Shadow Work & Pearl Beads",
    category: "festive",
    region: "Lucknow, UP",
    price: 18499,
    originalPrice: 23999,
    rating: 4.8,
    reviewsCount: 88,
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    badge: "Trending 2026",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 45,
    fabric: "Pure Viscose Silk Georgette with Cotton Thread Needlework",
    careGuide: "Gentle handwash or cold dry clean.",
    aiStyleNotes:
      "Gemini Stylist: Flattering silhouette for cocktail sangeets. Pair with delicate polki studs.",
    sustainability: {
      carbonSavedKg: 11.8,
      waterSavedLiters: 1500,
      artisanDirectSharePercent: 65,
    },
    matchingAccessories: [
      {
        name: "Polki Solitaire Studs",
        price: 1999,
        imageUrl:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80",
      },
    ],
    aiSentimentSummary: {
      pros: [
        "Ultra lightweight floaty movement",
        "Intricate 32-stitch hand Chikankari",
        "Matches modern pastel aesthetics",
      ],
      cons: ["Semi-sheer sleeves - inner slip included for torso"],
      fitSummary:
        "True to standard Indian bust sizes. Free alteration voucher included.",
    },
  },
  {
    id: "mit-p-105",
    name: "Neo-Heritage Kutch Ajrakh Bandhgala",
    subTitle: "Natural Indigo Block Print on Handspun Khadi Silk",
    category: "menswear",
    region: "Bhuj, Gujarat",
    price: 16999,
    originalPrice: 21999,
    rating: 4.9,
    reviewsCount: 76,
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    badge: "Carbon Neutral Certified",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 60,
    fabric: "Handspun Khadi Silk with 100% Herbal Indigo Dye",
    careGuide: "Dry clean first 2 washes to preserve raw indigo luster.",
    aiStyleNotes:
      "Gemini Stylist: Versatile jacket — dress down with linen trousers or dress up with silk churidar.",
    sustainability: {
      carbonSavedKg: 22.4,
      waterSavedLiters: 3200,
      artisanDirectSharePercent: 75,
    },
    matchingAccessories: [],
    aiSentimentSummary: {
      pros: [
        "Artisanal geometric patterns",
        "Extremely comfortable in humid climates",
        "Compliment magnet at cultural summits",
      ],
      cons: ["Limited batch runs due to seasonal sun drying"],
      fitSummary: "Slim-tailored fit. Order regular jacket size.",
    },
  },
  {
    id: "mit-p-106",
    name: "Pochampally Ikat Contemporary Indo-Western Co-ord",
    subTitle: "Structured Crop Jacket with Flared Pleated Trousers",
    category: "western",
    region: "Pochampally, Telangana",
    price: 12800,
    originalPrice: 16500,
    rating: 4.7,
    reviewsCount: 63,
    imageUrl:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    badge: "AI Sizing Guaranteed",
    isHyperlocalAvailable: true,
    estimatedDeliveryMin: 55,
    fabric: "High-Twist Double Ikat Mercised Cotton-Silk",
    careGuide: "Machine wash cold gentle cycle.",
    aiStyleNotes:
      "Gemini Stylist: Modern boardroom to dinner transition outfit.",
    sustainability: {
      carbonSavedKg: 13.5,
      waterSavedLiters: 1600,
      artisanDirectSharePercent: 67,
    },
    matchingAccessories: [],
    aiSentimentSummary: {
      pros: [
        "Sharp structured silhouette",
        "Doesn't wrinkle easily",
        "Pockets in trousers!",
      ],
      cons: ["Jacket waist is fitted"],
      fitSummary: "High-waist trousers with comfort stretch waistband.",
    },
  },
];

export const MOCK_STYLIST_PRESETS: AiStylistQuery[] = [
  {
    id: "q-1",
    prompt:
      "What should I wear for an evening Diwali party at a heritage rooftop in Jaipur?",
    occasion: "Diwali Festive Party • Jaipur Heritage",
    recommendedPalette: ["#800020", "#C69A63", "#1B4D3E", "#FFFDD0"],
    aiAdvice:
      "Opt for our Ayodhya Royal Banarasi Silk with deep ruby red or emerald base. Jaipur evenings in November have a mild chill — a lightweight velvet potli and antique kundan choker complete the regal Rajasthan ambiance.",
    outfitRecommendation: {
      primaryItem: "Ayodhya Royal Banarasi Katan Silk Saree",
      stylingTip:
        "Drape in Gujarati/Seedha Pallu style to highlight the heavy gold floral jaal work.",
      accessories: [
        "22k Antique Kundan Choker",
        "Raw Silk Emerald Blouse",
        "Velvet Jutti with Zari Work",
      ],
      matchingProductId: "mit-p-101",
    },
  },
  {
    id: "q-2",
    prompt:
      "Need a groom reception outfit that blends Royal Heritage with contemporary comfort.",
    occasion: "Groom Reception • Royal Fusion",
    recommendedPalette: ["#FAF9F6", "#C69A63", "#2C3E50", "#D4AF37"],
    aiAdvice:
      "The Jodhpur Royal Angrakha in Ivory Raw Silk offers structured posture without heavy bulk. We recommend custom silk churidar in midnight blue accents and a hand-tied Chanderi safa.",
    outfitRecommendation: {
      primaryItem: "Jodhpur Royal Angrakha Sherwani Set",
      stylingTip:
        "Pair with an unbuttoned angrakha overlap showing inner hand-embroidered contrast piping.",
      accessories: [
        "Hand-block Chanderi Safa Turban",
        "Polki Brooch with Tourmaline Drop",
      ],
      matchingProductId: "mit-p-102",
    },
  },
  {
    id: "q-3",
    prompt:
      "Looking for an authentic South Indian wedding saree for my sister's morning Muhurtham in Chennai.",
    occasion: "South Indian Morning Muhurtham",
    recommendedPalette: ["#CC3333", "#FFBF00", "#006644", "#E5C158"],
    aiAdvice:
      "Morning temple ceremonies call for our Kanchipuram Sunset Korvai Pattu. The double-warp weave catches morning golden hour sunlight magnificently while the crimson border aligns with auspicious traditions.",
    outfitRecommendation: {
      primaryItem: "Kanchipuram Sunset Korvai Pattu Saree",
      stylingTip:
        "Style with real fresh Jasmine flowers (Gajra) and a temple Kemp gold waist-belt (Oddiyanam).",
      accessories: ["Temple Kemp Stone Jhumkas", "Oddiyanam Gold Waist Belt"],
      matchingProductId: "mit-p-103",
    },
  },
];

export const MOCK_TRENDS: TrendItem[] = [
  {
    id: "t-1",
    trendName: "Neo-Heritage Tissue Silks",
    growthPercentage: 142,
    regionFocus: "Varanasi & Delhi-NCR",
    description:
      "Ultra-metallic gold & copper tissue weaves replacing synthetic glitter at Gen-Z destination weddings.",
    colorHex: "#C69A63",
    tag: "High Demand • 4.9x Search Surge",
  },
  {
    id: "t-2",
    trendName: "Hyperlocal Doorstep Sizing",
    growthPercentage: 210,
    regionFocus: "Bengaluru & Mumbai",
    description:
      "60-minute Rapido rider delivery with 15-minute doorstep try-on session before final UPI capture.",
    colorHex: "#22C55E",
    tag: "Industry First • Zero Return Hassle",
  },
  {
    id: "t-3",
    trendName: "State-Wise Handloom Provenance",
    growthPercentage: 98,
    regionFocus: "Global NRI Diaspora & Metros",
    description:
      "AI QR certificates tracing individual weaver cooperatives across Kutch, Pochampally, and Kanchipuram.",
    colorHex: "#3B82F6",
    tag: "100% Authentic GI Tag Verified",
  },
  {
    id: "t-4",
    trendName: "Pastel Chikankari Men's Sherwanis",
    growthPercentage: 165,
    regionFocus: "Jaipur, Lucknow & Hyderabad",
    description:
      "Ivory, mint green, and powdered rose tone bandhgalas for intimate sunset sangeet ceremonies.",
    colorHex: "#EC4899",
    tag: "Celebrity Wedding Staple",
  },
];

export const MOCK_REVIEWS = [
  {
    id: "r-1",
    author: "Ananya Deshmukh",
    city: "Mumbai (Bandra)",
    verified: true,
    rating: 5,
    productName: "Ayodhya Royal Banarasi Katan Silk Saree",
    timeAgo: "2 hours ago",
    comment:
      "Ordered via Hyperlocal Express at 3:15 PM, and the Rapido rider was at my door in Bandra by 4:02 PM! The AI size & blouse fit was spot on. Felt like royalty at my cousin's Sangeet.",
    aiTag: "Speed: 47 mins • 100% Fit Match",
  },
  {
    id: "r-2",
    author: "Raghavendra Rao",
    city: "Bengaluru (Indiranagar)",
    verified: true,
    rating: 5,
    productName: "Jodhpur Royal Angrakha Sherwani Set",
    timeAgo: "Yesterday",
    comment:
      "The Gemini AI Stylist recommended pairing the ivory raw silk with a hand-blocked turban and emerald safa. Looked incredible in stage lighting. Truly India-first luxury.",
    aiTag: "AI Stylist Match • 5-Star Craft",
  },
  {
    id: "r-3",
    author: "Dr. Meenakshi Sundaram",
    city: "Chennai (Adyar)",
    verified: true,
    rating: 5,
    productName: "Kanchipuram Sunset Korvai Pattu Saree",
    timeAgo: "3 days ago",
    comment:
      "My mother has collected Kanchipuram silks for 40 years and she was deeply impressed with the heavy Korvai interlocking. The QR code linked directly to the weaver family in Kanchi.",
    aiTag: "Verified GI Provenance",
  },
];
