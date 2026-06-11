"use client";

import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "seller" | "buyer" | null;
  listingTitle?: string;
}

export const AccessModals: React.FC<ModalProps> = ({ isOpen, onClose, type, listingTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  if (!isOpen || !type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Success! Our acquisition advisors will contact you shortly.");
    setFormData({ name: "", email: "", company: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md transition-all duration-300">
      {/* Click Outside to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-card-bg border border-card-border p-8 rounded-2xl shadow-2xl z-10 animate-fade-in text-text-primary">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg-tertiary transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        {type === "seller" ? (
          <>
            <h3 className="text-2xl font-bold font-display mb-2">Value & List Your Business</h3>
            <p className="text-sm text-text-secondary mb-6">
              Connect with our advisors to estimate your valuation and launch a confidential exit campaign.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  Founder Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Founder name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-card-border focus:border-accent-primary focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-card-border focus:border-accent-primary focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  Company / Domain
                </label>
                <input
                  type="text"
                  required
                  placeholder="example.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-card-border focus:border-accent-primary focus:outline-none transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 px-6 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover font-bold text-sm tracking-wide transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30"
              >
                Submit Exit Pitch
              </button>
            </form>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold font-display mb-2">Access Listing Details</h3>
            <p className="text-sm text-text-secondary mb-6">
              {listingTitle ? (
                <>
                  Requesting confidential data room access for <strong>{listingTitle}</strong>.
                </>
              ) : (
                "Unlock full data rooms, legal structures, and audited metrics."
              )}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  Investor Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Investor name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-card-border focus:border-accent-primary focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@fund.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-card-border focus:border-accent-primary focus:outline-none transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 px-6 rounded-xl bg-accent-primary text-bg-primary hover:bg-accent-primary-hover font-bold text-sm tracking-wide transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30"
              >
                Submit Access Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
