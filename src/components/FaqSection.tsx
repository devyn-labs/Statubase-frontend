"use client";

import React, { useState } from "react";

export const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does Statubase charge listing or brokerage fees?",
      a: "Listing is free. Statubase charges a flat success fee upon successful exit closure.",
    },
    {
      q: "How do you verify seller financial metrics?",
      a: "Sellers connect verified APIs such as Stripe, Plaid, QuickBooks, and analytics sources.",
    },
    {
      q: "How does escrow security protect transactions?",
      a: "Funds are held through escrow and released after asset transfer is verified.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-border-color/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-text-primary">
            Frequently Answered Protocols
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-card-bg border border-card-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent-primary/30"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold font-display text-text-primary text-base md:text-lg focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-accent-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-sm text-text-secondary leading-relaxed font-light border-t border-border-color/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
