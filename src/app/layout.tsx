import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Statubase | The Premium Business Acquisition Marketplace",
  description: "Statubase is an institutional-grade business acquisition marketplace for verified buyers and confidential sellers.",
  keywords: ["M&A", "Business Acquisition", "SaaS acquisition", "buy business", "sell business", "escrow", "confidential marketplace"],
  icons: {
    icon: "/Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full font-sans antialiased bg-bg-primary text-text-primary transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
