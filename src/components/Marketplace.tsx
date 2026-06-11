"use client";

import React, { useState } from "react";
import { listings, Listing } from "@/data/listings";

interface MarketplaceProps {
  onOpenBuyerModal: (listing: Listing) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onOpenBuyerModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { key: "all", label: "All Sectors" },
    { key: "saas", label: "SaaS" },
    { key: "ecommerce", label: "E-Commerce" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "agency", label: "Agency / Retainers" },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(2).replace(/\.00$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return String(num);
  };

  const filteredListings = activeFilter === "all"
    ? listings
    : listings.filter((item) => item.category === activeFilter);

  return (
    <section id="marketplace" className="py-24 border-t border-border-color/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Active Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4">
            Browse Live Verified Opportunities
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Filter through pre-vetted digital assets, SaaS products, e-commerce stores, and retainer agencies ready for acquisition.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-fade-in">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all border ${
                activeFilter === filter.key
                  ? "bg-accent-primary border-accent-primary text-bg-primary shadow-lg shadow-accent-primary/20"
                  : "bg-bg-secondary border-border-color/40 text-text-secondary hover:border-border-color hover:text-text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] transition-all duration-300">
          {filteredListings.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between bg-card-bg border border-card-border p-6 rounded-2xl hover:border-accent-primary/40 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border-color/30">
                  <span className="text-xs font-semibold tracking-wider text-text-tertiary uppercase">
                    {item.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    Verified
                  </span>
                </div>

                {/* Body */}
                <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-accent-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary font-light mb-6 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col p-2.5 rounded-xl bg-bg-secondary border border-border-color/20">
                    <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">
                      ARR
                    </span>
                    <span className="text-base font-bold font-display text-text-primary mt-0.5">
                      ${formatNumber(item.arr)}
                    </span>
                  </div>
                  <div className="flex flex-col p-2.5 rounded-xl bg-bg-secondary border border-border-color/20">
                    <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">
                      Net Profit
                    </span>
                    <span className="text-base font-bold font-display text-text-primary mt-0.5">
                      ${formatNumber(item.profit)}
                    </span>
                  </div>
                  <div className="flex flex-col p-2.5 rounded-xl bg-bg-secondary border border-border-color/20">
                    <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">
                      Margin
                    </span>
                    <span className="text-base font-bold font-display text-text-primary mt-0.5">
                      {item.margin}%
                    </span>
                  </div>
                  <div className="flex flex-col p-2.5 rounded-xl bg-bg-secondary border border-border-color/20">
                    <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">
                      Growth
                    </span>
                    <span className="text-base font-bold font-display text-text-primary mt-0.5">
                      +{item.growth}% YoY
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border-color/30 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-tertiary uppercase tracking-wider">
                    Asking Price
                  </span>
                  <span className="text-lg font-extrabold font-display text-text-primary">
                    ${formatNumber(item.askingPrice)}
                  </span>
                </div>
                <button
                  onClick={() => onOpenBuyerModal(item)}
                  className="px-4 py-2 text-xs font-bold bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary rounded-xl transition-all"
                >
                  Access Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
