"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenSellerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSellerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Seller", href: "#seller" },
    { label: "Buyer", href: "#buyer" },
    { label: "How it works", href: "#process" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-border-color/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/statubase-logo.svg"
              alt="Statubase"
              width={133}
              height={34}
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#marketplace"
              className="px-5 py-2.5 rounded-xl border border-border-color hover:border-accent-primary hover:text-accent-primary text-xs font-bold uppercase tracking-wider text-text-secondary transition-all"
            >
              Browse Listing
            </a>

            <button
              onClick={onOpenSellerModal}
              className="px-5 py-2.5 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-accent-primary/15"
            >
              Sell a Business
            </button>

            {/* Profile Dropdown */}
            <div className="relative group">
              <button
                className="w-10 h-10 rounded-full bg-[#081B2B] flex items-center justify-center text-white focus:outline-none"
                aria-label="Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-bg-primary border border-border-color rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#join" className="block px-4 py-2 text-sm text-text-secondary hover:text-accent-primary hover:bg-bg-secondary">Join now</a>
                  <a href="#help" className="block px-4 py-2 text-sm text-text-secondary hover:text-accent-primary hover:bg-bg-secondary">Help centre</a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-bg-secondary border border-border-color/60 text-text-secondary"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-color/20 bg-bg-primary px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-text-secondary hover:text-accent-primary py-2 border-b border-border-color/10"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="#marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-border-color text-sm font-bold uppercase tracking-wider text-text-secondary"
            >
              Browse Listings
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSellerModal();
              }}
              className="w-full text-center py-3 rounded-xl bg-accent-primary text-bg-primary font-bold text-sm uppercase tracking-wider"
            >
              Sell a Business
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
