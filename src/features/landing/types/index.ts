export type LanguageCode =
  | "en"
  | "hi"
  | "ta"
  | "te"
  | "kn"
  | "bn"
  | "mr"
  | "gu";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export interface Product {
  id: string;
  name: string;
  subTitle: string;
  category: "ethnic" | "western" | "regional" | "festive" | "menswear";
  region?: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  badge?: string;
  isHyperlocalAvailable: boolean;
  estimatedDeliveryMin: number;
  fabric: string;
  careGuide: string;
  aiStyleNotes: string;
  sustainability: {
    carbonSavedKg: number;
    waterSavedLiters: number;
    artisanDirectSharePercent: number;
  };
  matchingAccessories: {
    name: string;
    price: number;
    imageUrl: string;
  }[];
  aiSentimentSummary: {
    pros: string[];
    cons: string[];
    fitSummary: string;
  };
}

export interface ArtisanCraft {
  id: string;
  craftName: string;
  region: string;
  state: string;
  heritageYears: number;
  weaversCommunity: string;
  imageUrl: string;
  description: string;
  aiStorySnippet: string;
  specialtyTag: string;
  featuredProductCount: number;
}

export interface FestivalTheme {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
  region: string;
  recommendedStyles: string[];
  bannerImage: string;
}

export interface AiStylistQuery {
  id: string;
  prompt: string;
  occasion: string;
  recommendedPalette: string[];
  aiAdvice: string;
  outfitRecommendation: {
    primaryItem: string;
    stylingTip: string;
    accessories: string[];
    matchingProductId: string;
  };
}

export interface TrendItem {
  id: string;
  trendName: string;
  growthPercentage: number;
  regionFocus: string;
  description: string;
  colorHex: string;
  tag: string;
}
