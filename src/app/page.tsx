"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroCanvas } from "@/components/HeroCanvas";
import { InteractiveChart } from "@/components/InteractiveChart";
import { Marketplace } from "@/components/Marketplace";
import { ValuationCalculator } from "@/components/ValuationCalculator";
import { ProcessFlow } from "@/components/ProcessFlow";
import { FaqSection } from "@/components/FaqSection";
import { AccessModals } from "@/components/AccessModals";
import { Listing } from "@/data/listings";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"seller" | "buyer" | null>(null);
  const [activeListing, setActiveListing] = useState<Listing | undefined>(undefined);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);



  // Scroll animations observer
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".reveal-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    scrollElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleOpenSellerModal = () => {
    setModalType("seller");
    setActiveListing(undefined);
    setModalOpen(true);
  };

  const handleOpenBuyerModal = (listing: Listing) => {
    setModalType("buyer");
    setActiveListing(listing);
    setModalOpen(true);
  };

  const pressLogos = ["TechCrunch", "Forbes", "Bloomberg", "VentureBeat", "Silicon Valley Business"];

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      {/* Navbar */}
      <Navbar
        onOpenSellerModal={handleOpenSellerModal}
      />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border-color/20">
        {/* Interactive canvas background */}
        <HeroCanvas />
        {/* Glow overlay */}
        <div className="hero-mesh-overlay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/25 text-accent-primary text-xs font-semibold uppercase tracking-wider">
                Institutional M&A Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-text-primary tracking-tight">
                The Smarter Way to <span className="text-accent-primary">Acquire</span>,<br />
                The Confidential Way to <span className="text-accent-primary italic">Exit</span>.
              </h1>
              <p className="text-base sm:text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
                Statubase connects verified business owners seeking clean exits with qualified institutional and private buyers. Every listing is vetted. Every buyer is screened. Zero friction from first look to final transfer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#marketplace"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover font-bold text-sm tracking-wide transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30"
                >
                  Explore Active Listings <span className="ml-1.5" aria-hidden="true">→</span>
                </a>
                <button
                  onClick={handleOpenSellerModal}
                  className="px-6 py-3.5 rounded-xl bg-bg-secondary border border-border-color hover:border-accent-primary hover:text-accent-primary font-bold text-sm tracking-wide transition-all"
                >
                  Value Your Business
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border-color/25 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary">
                    $380M+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-text-tertiary uppercase tracking-wider mt-1">
                    Volume Closed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary">
                    4.6x
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-text-tertiary uppercase tracking-wider mt-1">
                    Avg SaaS Multiple
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-text-primary">
                    145K+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-text-tertiary uppercase tracking-wider mt-1">
                    Active Buyers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual (Interactive Dashboard mockup) */}
            <div className="lg:col-span-5 w-full reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
              <div className="flex flex-col gap-4">
                {/* Embedded Interactive Chart Component */}
                <InteractiveChart />

                {/* Proposal Logs Card */}
                <div className="bg-card-bg/60 border border-card-border p-5 rounded-2xl shadow-xl backdrop-blur-md">
                  <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider block mb-4">
                    Recent LOI Proposals
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-color/20">
                      <div>
                        <div className="text-sm font-bold text-text-primary">Project Omega</div>
                        <div className="text-[10px] text-text-tertiary font-semibold uppercase mt-0.5">SaaS</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 font-semibold text-[10px] tracking-wide uppercase">
                        Due Diligence
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-bg-secondary border border-border-color/20">
                      <div>
                        <div className="text-sm font-bold text-text-primary">GreenCommerce</div>
                        <div className="text-[10px] text-text-tertiary font-semibold uppercase mt-0.5">Shopify Store</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 font-semibold text-[10px] tracking-wide uppercase">
                        LOI Accepted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Press logos marquee */}
      <section className="py-8 bg-bg-secondary border-b border-border-color/20 overflow-hidden" aria-label="Featured in">
        <div className="relative w-full flex items-center">
          <div className="flex w-max gap-16 animate-marquee whitespace-nowrap">
            {/* Duplicated list of logos for infinite loop */}
            {[...pressLogos, ...pressLogos].map((logo, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base font-extrabold font-display tracking-widest text-text-tertiary/45 uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Listings Section */}
      <Marketplace onOpenBuyerModal={handleOpenBuyerModal} />

      {/* Exit Readiness Section */}
      <section id="features" className="py-24 bg-bg-secondary/40 border-t border-border-color/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold uppercase tracking-wider">
                For Sellers
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-text-primary">
                Exit Confidentially. <br /> Get Maximized Valuation.
              </h2>
              <p className="text-base sm:text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
                We shield your identity, financials, and codebase. Only qualified, vetted buyers with verified liquidity can view details.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "100% secure data rooms decrypt financials only to serious buyers.",
                  "Advisory support from expert business brokers at no upfront fee.",
                  "Optimized valuations tuned to industry-specific multiples."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleOpenSellerModal}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover font-bold text-sm tracking-wide transition-all shadow-md shadow-accent-primary/15"
              >
                Start Exit Process
              </button>
            </div>

            {/* Right Interactive Dashboard */}
            <div className="lg:col-span-5 bg-card-bg border border-card-border p-8 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                  Live Seller Dashboard
                </span>
                <span className="px-2 py-0.5 rounded bg-accent-primary/20 text-accent-primary text-[10px] font-bold uppercase">
                  Verified Stripe
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1">
                  Exit Readiness Score
                </div>
                <div className="text-5xl font-black font-display text-text-primary tracking-tight">
                  92%
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-text-secondary mb-1.5">
                    <span>Financial Vetting Accuracy</span>
                    <span className="font-mono">98%</span>
                  </div>
                  <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <div className="h-full bg-accent-primary rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-text-secondary mb-1.5">
                    <span>Escrow Integration Hook</span>
                    <span className="font-mono">Active (100%)</span>
                  </div>
                  <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <div className="h-full bg-accent-primary rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-text-secondary mb-1.5">
                    <span>Buyer Interest Index</span>
                    <span className="font-mono">High (82%)</span>
                  </div>
                  <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
                    <div className="h-full bg-accent-primary rounded-full" style={{ width: "82%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Estimator Component */}
      <ValuationCalculator onOpenSellerModal={handleOpenSellerModal} />

      {/* Process Workflow Steps */}
      <ProcessFlow />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <footer className="bg-bg-secondary border-t border-border-color/20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/statubase-logo.svg"
              alt="Statubase"
              width={133}
              height={34}
            />
          </a>

          <div className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Statubase Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Access Modals Overlay */}
      <AccessModals
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        listingTitle={activeListing?.title}
      />
    </div>
  );
}
