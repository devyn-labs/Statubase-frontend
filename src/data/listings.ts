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
  founder: string;
  foundedYear: number;
  location: string;
  licenses: number;
  likes: number;
  tags: string[];
  initial: string;
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
    founder: "John Carter",
    foundedYear: 2018,
    location: "Austin, Texas, USA",
    licenses: 4,
    likes: 127,
    tags: ["Patent Holder", "Escrow Ready", "Stripe Verified", "Open to Offers"],
    initial: "A",
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
    founder: "Sarah Jenkins",
    foundedYear: 2020,
    location: "Portland, Oregon, USA",
    licenses: 2,
    likes: 314,
    tags: ["Trademarked", "Supplier Contracts", "Shopify Plus"],
    initial: "D",
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
    founder: "Michael Chen",
    foundedYear: 2022,
    location: "Remote / Global",
    licenses: 1,
    likes: 89,
    tags: ["High Margin", "Escrow Ready", "No Debt"],
    initial: "S",
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
    founder: "Elena Rodriguez",
    foundedYear: 2019,
    location: "Barcelona, Spain",
    licenses: 5,
    likes: 205,
    tags: ["App Store Featured", "IP Included", "Recurring Rev"],
    initial: "M",
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
    founder: "David Smith",
    foundedYear: 2015,
    location: "London, UK",
    licenses: 12,
    likes: 56,
    tags: ["B2B Enterprise", "Long-term Contracts", "High LTV"],
    initial: "D",
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
    founder: "Alex Wright",
    foundedYear: 2021,
    location: "New York City, NY",
    licenses: 0,
    likes: 421,
    tags: ["Media Asset", "Sponsorships", "High Engagement"],
    initial: "F",
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
