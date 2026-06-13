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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 min-h-[400px] transition-all duration-300">
          {filteredListings.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-card-bg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-color"
            >
              {/* Banner Top */}
              <div className="h-32 w-full bg-gradient-to-tr from-slate-900 via-[#0a1e3f] to-slate-800 relative">
                 <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-green-700 flex items-center gap-1.5 shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.118 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z"/></svg>
                      Verified Business
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-accent-primary shadow-sm">
                      {item.industry}
                    </span>
                 </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 relative pt-12 flex-1 flex flex-col">
                {/* Logo Avatar overlapping */}
                <div className="absolute -top-10 left-6 w-20 h-20 bg-bg-primary rounded-2xl p-1 shadow-md">
                  <div className="w-full h-full bg-[#081B2B] rounded-xl flex items-center justify-center text-white text-3xl font-bold font-display">
                    {item.initial}
                  </div>
                </div>

                {/* Title & Meta */}
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold font-display text-text-primary tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                    <span>by <span className="font-semibold text-text-primary">{item.founder}</span></span>
                    <span className="text-blue-600 bg-blue-50 p-1 rounded">in</span> {/* Fake linkedin logo */}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium text-text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                      Founded {item.foundedYear}
                    </div>
                    <span className="w-px h-3 bg-border-color"></span>
                    <div className="flex items-center gap-1.5">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                      {item.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                  {item.tagline}
                </p>

                {/* Metrics 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border-color/50 bg-bg-secondary/50">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-accent-primary shrink-0">
                      <span className="font-bold text-lg">$</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-text-tertiary uppercase">Annual Revenue</div>
                      <div className="text-sm font-bold text-text-primary">${formatNumber(item.arr)}</div>
                      <div className="text-[10px] text-text-tertiary">ARR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border-color/50 bg-bg-secondary/50">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-text-tertiary uppercase">Net Profit Margin</div>
                      <div className="text-sm font-bold text-text-primary">{item.margin}%</div>
                      <div className="text-[10px] text-text-tertiary">Last 12 Months</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border-color/50 bg-bg-secondary/50">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-text-tertiary uppercase">Licenses Held</div>
                      <div className="text-sm font-bold text-text-primary">{item.licenses}</div>
                      <div className="text-[10px] text-text-tertiary">Active</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border-color/50 bg-bg-secondary/50">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-text-tertiary uppercase">Asking Price</div>
                      <div className="text-sm font-bold text-text-primary">${formatNumber(item.askingPrice)}</div>
                      <div className="text-[10px] text-text-tertiary">USD</div>
                    </div>
                  </div>
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border border-border-color/60 bg-bg-secondary/30 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto"></div>
                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border-color/50">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-color/60 text-sm font-semibold text-text-secondary hover:bg-bg-secondary transition-colors">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-400"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                      {item.likes}
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-color/60 text-sm font-semibold text-text-secondary hover:bg-bg-secondary transition-colors">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
                      Save
                    </button>
                  </div>
                  <button
                    onClick={() => onOpenBuyerModal(item)}
                    className="px-5 py-2.5 bg-accent-primary text-bg-primary hover:bg-accent-primary-hover rounded-xl text-sm font-bold shadow-md shadow-accent-primary/20 transition-all"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
