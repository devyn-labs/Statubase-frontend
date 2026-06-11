"use client";

import React, { useState } from "react";

export const ProcessFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"seller" | "buyer">("seller");

  const sellerSteps = [
    { num: "01", title: "Connect Integrations", desc: "Sync Stripe, Google Analytics, and QuickBooks." },
    { num: "02", title: "Advisor Review", desc: "Experts audit financials and baseline range." },
    { num: "03", title: "Marketplace Listing", desc: "List anonymously for funded buyers." },
    { num: "04", title: "Escrow & Transfer", desc: "Funds enter escrow and assets transfer securely." },
  ];

  const buyerSteps = [
    { num: "01", title: "Verify Liquidity", desc: "Connect bank feed or proof of funds." },
    { num: "02", title: "Request Access", desc: "Send NDA-bound requests to founder profiles." },
    { num: "03", title: "Due Diligence", desc: "Review metrics, code quality, and audit logs." },
    { num: "04", title: "Fund Escrow", desc: "Issue LOIs and transfer purchase capital." },
  ];

  const activeSteps = activeTab === "seller" ? sellerSteps : buyerSteps;

  return (
    <section id="process" className="py-24 border-t border-border-color/50 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Vetting Protocol
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary">
            The Statubase Escrow Workflow
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center border-b border-border-color/50 max-w-xs mx-auto mb-16">
          <button
            onClick={() => setActiveTab("seller")}
            className={`flex-1 pb-4 text-sm font-semibold tracking-wider uppercase border-b-2 text-center transition-all ${
              activeTab === "seller"
                ? "border-accent-primary text-accent-primary"
                : "border-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            For Sellers
          </button>
          <button
            onClick={() => setActiveTab("buyer")}
            className={`flex-1 pb-4 text-sm font-semibold tracking-wider uppercase border-b-2 text-center transition-all ${
              activeTab === "buyer"
                ? "border-accent-primary text-accent-primary"
                : "border-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            For Buyers
          </button>
        </div>

        {/* Grid Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-card-bg border border-card-border p-6 rounded-2xl shadow-lg hover:border-accent-primary/30 transition-all duration-300 animate-fade-in"
            >
              <div className="text-3xl font-extrabold font-display text-accent-primary/25 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold font-display text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
