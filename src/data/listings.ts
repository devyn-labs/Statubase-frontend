export interface Listing {
  id: number;
  title: string;
  tagline: string;
  category: "saas" | "ecommerce" | "mobile" | "agency";
  industry: string;
  arr: number;
  profit: number;
  margin: number;
  askingPrice: number;
  growth: number;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "AI-Powered B2B CRM Platform",
    tagline: "High-growth SaaS helping sales teams automate follow-ups. Premium enterprise clients.",
    category: "saas",
    industry: "SaaS",
    arr: 385000,
    profit: 327000,
    margin: 85,
    askingPrice: 1620000,
    growth: 42,
  },
  {
    id: 2,
    title: "Direct-to-Consumer Eco-Homeware",
    tagline: "Sustainable kitchen and home products brand with 70%+ repeat purchase rate.",
    category: "ecommerce",
    industry: "E-Commerce",
    arr: 1250000,
    profit: 275000,
    margin: 22,
    askingPrice: 580000,
    growth: 18,
  },
  {
    id: 3,
    title: "SaaS SEO & Content Generator",
    tagline: "Bootstrap AI copywriter tool. Exponential growth with zero paid acquisition.",
    category: "saas",
    industry: "SaaS",
    arr: 120000,
    profit: 108000,
    margin: 90,
    askingPrice: 540000,
    growth: 130,
  },
  {
    id: 4,
    title: "Meditation & Soundscapes Mobile App",
    tagline: "Subscription mobile application with active organic community. Multi-platform.",
    category: "mobile",
    industry: "Mobile App",
    arr: 450000,
    profit: 337000,
    margin: 75,
    askingPrice: 1150000,
    growth: 28,
  },
  {
    id: 5,
    title: "DevOps & Cloud Security Consulting",
    tagline: "Niche boutique consultancy serving Fortune 500 tech firms. Strong recurring retainers.",
    category: "agency",
    industry: "Agency",
    arr: 1800000,
    profit: 504000,
    margin: 28,
    askingPrice: 910000,
    growth: 15,
  },
  {
    id: 6,
    title: "FinTech Newsletter & Content Media",
    tagline: "Weekly newsletter with 65k active premium subscribers and sponsor slots sold out.",
    category: "agency",
    industry: "Content Platform",
    arr: 185000,
    profit: 148000,
    margin: 80,
    askingPrice: 415000,
    growth: 24,
  },
];

export interface ChartSeriesData {
  label: string;
  tooltip: string[];
  values: number[];
}

export const chartSeries: Record<"arr" | "margin", ChartSeriesData> = {
  arr: {
    label: "Acquisition Value (5 Years)",
    tooltip: ["Year 1 · $1.9M", "Year 2 · $2.5M", "Year 3 · $2.4M", "Year 4 · $4.2M", "Year 5 · $6.1M"],
    values: [42, 52, 49, 74, 88],
  },
  margin: {
    label: "Margin Quality Trend",
    tooltip: ["Q1 · 32%", "Q2 · 36%", "Q3 · 41%", "Q4 · 44%", "Now · 46%"],
    values: [35, 46, 58, 66, 72],
  },
};
