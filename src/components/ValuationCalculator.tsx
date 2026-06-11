"use client";

import React, { useState, useEffect } from "react";

interface ValuationCalculatorProps {
  onOpenSellerModal: () => void;
}

export const ValuationCalculator: React.FC<ValuationCalculatorProps> = ({ onOpenSellerModal }) => {
  const [modelType, setModelType] = useState<"saas" | "ecommerce" | "mobile" | "agency">("saas");
  const [arr, setArr] = useState<number>(500000);
  const [margin, setMargin] = useState<number>(40);
  const [growth, setGrowth] = useState<number>(35);
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(2).replace(/\.00$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return String(num);
  };

  const multiples: Record<string, number> = { saas: 5, ecommerce: 2, mobile: 4, agency: 1.5 };
  const baseMultiple = multiples[modelType] || 3;

  // Growth Modifier
  let growthModifier = 1;
  if (growth < 0) {
    growthModifier = 0.75 + growth / 400;
  } else if (growth <= 20) {
    growthModifier = 1 + growth / 100;
  } else if (growth <= 60) {
    growthModifier = 1.2 + (growth - 20) / 80;
  } else {
    growthModifier = 1.7 + (growth - 60) / 280;
  }

  // Margin Modifier
  let marginModifier = 1;
  if (margin < 15) {
    marginModifier = 0.75;
  } else if (margin <= 40) {
    marginModifier = 0.8 + ((margin - 15) / 50) * 0.4;
  } else {
    marginModifier = 1 + ((margin - 40) / 60) * 0.4;
  }

  const finalMultiple = baseMultiple * growthModifier * marginModifier;
  const lowEstimate = arr * finalMultiple * 0.88;
  const highEstimate = arr * finalMultiple * 1.12;

  const valuationRange = `$${formatNumber(lowEstimate)} - $${formatNumber(highEstimate)}`;
  const multipleText = `Est. Multiple: ${finalMultiple.toFixed(2)}x Revenue`;

  // Removed useEffect and state for derived values

  return (
    <section id="calculator" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Valuation Estimator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary mb-4">
            Calculate Your Business Exit Value
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Adjust the sliders to estimate your potential valuation based on sector-specific benchmarks.
          </p>
        </div>

        {/* Calculator Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card-bg border border-card-border rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
          {/* Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">
                Business Model Category
              </label>
              <select
                value={modelType}
                onChange={(e) => setModelType(e.target.value as "saas" | "ecommerce" | "mobile" | "agency")}
                className="w-full px-4 py-3.5 rounded-xl bg-bg-secondary border border-card-border focus:border-accent-primary focus:outline-none text-text-primary text-sm font-semibold transition-all"
              >
                <option value="saas">SaaS</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="mobile">Mobile App</option>
                <option value="agency">Agency</option>
              </select>
            </div>

            {/* ARR Slider */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                  Annual Recurring Revenue
                </label>
                <span className="px-3 py-1 rounded-lg bg-accent-primary/15 text-accent-primary text-xs font-bold font-mono">
                  ${formatNumber(arr)}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="25000"
                value={arr}
                onChange={(e) => setArr(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>

            {/* Net Profit Margin Slider */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                  Net Profit Margin
                </label>
                <span className="px-3 py-1 rounded-lg bg-accent-primary/15 text-accent-primary text-xs font-bold font-mono">
                  {margin}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>

            {/* Growth Slider */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                  YoY Revenue Growth
                </label>
                <span className="px-3 py-1 rounded-lg bg-accent-primary/15 text-accent-primary text-xs font-bold font-mono">
                  {growth >= 0 ? "+" : ""}
                  {growth}%
                </span>
              </div>
              <input
                type="range"
                min="-10"
                max="200"
                step="5"
                value={growth}
                onChange={(e) => setGrowth(Number(e.target.value))}
                className="w-full h-1.5 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary"
              />
            </div>
          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 flex flex-col justify-between items-center text-center p-8 bg-bg-secondary border border-card-border/60 rounded-2xl">
            <div className="w-full">
              <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider block mb-4">
                Estimated Acquisition Range
              </span>
              <div className="text-3xl lg:text-4xl font-extrabold font-display text-text-primary tracking-tight mb-2">
                {valuationRange}
              </div>
              <span className="inline-flex px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold font-mono tracking-wide">
                {multipleText}
              </span>
            </div>

            <button
              onClick={onOpenSellerModal}
              className="w-full mt-8 py-4 px-6 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover font-bold text-sm tracking-wide transition-all shadow-xl shadow-accent-primary/20 hover:shadow-accent-primary/30"
            >
              Connect with Advisors to Exit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
