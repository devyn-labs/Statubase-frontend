"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroCanvas } from "@/components/HeroCanvas";
import { InteractiveChart } from "@/components/InteractiveChart";
import { Marketplace } from "@/components/Marketplace";
import { HowItWorks } from "@/components/HowItWorks";
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

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden pt-20">
      {/* Navbar */}
      <Navbar
        onOpenSellerModal={handleOpenSellerModal}
      />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden border-b border-border-color/20">
        {/* Interactive canvas background */}
        <HeroCanvas />
        {/* Glow overlay */}
        <div className="hero-mesh-overlay" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold font-display leading-[1.1] text-text-primary tracking-tight">
                <span className="block whitespace-nowrap">The Smarter Way to <span className="text-accent-primary">Acquire</span>,</span>
                <span className="block whitespace-nowrap mt-1 sm:mt-2">The Confidential Way to <span className="text-accent-primary italic">Exit</span>.</span>
              </h1>
              <p className="text-base sm:text-lg text-text-secondary font-light max-w-xl leading-relaxed pt-2">
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
                      <span className="px-2.5 py-1 rounded-full bg-[#081B2B]/10 text-[#081B2B] font-semibold text-[10px] tracking-wide uppercase">
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

      {/* How Statubase Works Sections */}
      <HowItWorks />

      {/* Marketplace Listings Section */}
      <Marketplace onOpenBuyerModal={handleOpenBuyerModal} />

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

          <div className="flex items-center gap-6 text-xs font-semibold text-text-secondary">
            <a href="#" className="hover:text-accent-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6 text-xs text-text-tertiary text-center sm:text-left">
          &copy; {new Date().getFullYear()} Statubase Inc. All rights reserved.
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
