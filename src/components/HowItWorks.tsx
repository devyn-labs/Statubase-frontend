"use client";

import React from "react";

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight text-text-primary mb-4">
            How Statu<span className="text-accent-primary">base</span> Works
          </h2>
          <p className="text-lg text-text-secondary font-light">
            A two-sided marketplace built for serious transactions<br className="hidden md:block"/> not listings, but verified opportunities.
          </p>
        </div>

        {/* 3 Columns Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-32 relative animate-fade-in">
           {/* Connecting Line behind */}
           <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-12 bg-slate-400/20 z-0"></div>

           {/* Seller Box */}
           <div className="flex flex-col items-center z-10 w-full md:w-1/3">
             <div className="w-72 h-80 bg-card-bg shadow-xl rounded-2xl border border-border-color p-6 flex flex-col mb-6 bg-white">
                <div className="text-xs font-bold mb-4">Exit Readiness Score</div>
                <div className="text-5xl font-black mb-8 text-text-primary">84<span className="text-sm font-normal text-text-tertiary">/100</span></div>
                <div className="space-y-4">
                  <div className="flex gap-3 bg-bg-secondary/50 p-2.5 rounded-lg border border-border-color/50"><div className="w-8 h-8 rounded bg-accent-primary/20 shrink-0"></div><div className="space-y-1.5 w-full"><div className="h-2 w-3/4 bg-border-color rounded"></div><div className="h-1.5 w-1/2 bg-border-color/50 rounded"></div></div></div>
                  <div className="flex gap-3 bg-bg-secondary/50 p-2.5 rounded-lg border border-border-color/50"><div className="w-8 h-8 rounded bg-accent-primary/20 shrink-0"></div><div className="space-y-1.5 w-full"><div className="h-2 w-3/4 bg-border-color rounded"></div><div className="h-1.5 w-1/2 bg-border-color/50 rounded"></div></div></div>
                </div>
             </div>
             <h3 className="text-xl font-bold font-display text-text-primary mb-1">Seller</h3>
             <p className="text-sm text-text-secondary">Exit on your terms.</p>
           </div>

           {/* Middle Logo Box */}
           <div className="flex flex-col items-center z-10 w-full md:w-1/3 mt-12 md:mt-0">
             <div className="w-72 h-80 bg-card-bg shadow-xl rounded-2xl border border-border-color p-8 flex flex-col items-center justify-center mb-6 relative bg-white">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-[#081B2B] rounded-sm transform rotate-45 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-[#E5B540] transform translate-y-1/2"></div>
                    </div>
                    <span className="text-2xl font-display font-medium tracking-tight text-[#081B2B]">
                      statu<span className="text-[#E5B540] font-bold">base</span>
                    </span>
                </div>
                <div className="w-full space-y-4">
                  <div className="py-3 px-4 bg-bg-secondary rounded-lg text-xs font-semibold text-center border border-border-color/50 flex items-center justify-center gap-2"><svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Every listing verified</div>
                  <div className="py-3 px-4 bg-bg-secondary rounded-lg text-xs font-semibold text-center border border-border-color/50 flex items-center justify-center gap-2"><svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>Escrow integrated end-to-end</div>
                  <div className="py-3 px-4 bg-bg-secondary rounded-lg text-xs font-semibold text-center border border-border-color/50 flex items-center justify-center gap-2"><svg className="w-4 h-4 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>NDA signed before access</div>
                </div>
             </div>
             <h3 className="text-xl font-bold font-display text-text-primary mb-1">
                statu<span className="text-accent-primary">base</span>
             </h3>
           </div>

           {/* Buyer Box */}
           <div className="flex flex-col items-center z-10 w-full md:w-1/3 mt-12 md:mt-0">
             <div className="w-72 h-80 bg-card-bg shadow-xl rounded-2xl border border-border-color p-6 flex flex-col mb-6 bg-white">
                <div className="text-xs font-semibold text-text-secondary leading-relaxed mb-6 text-center">Browse verified businesses with audited financials and motivated sellers.</div>
                <div className="bg-bg-secondary rounded-xl p-4 border border-border-color/50 space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-[#081B2B] rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
                    <div><div className="text-sm font-bold">Acme CRM</div><div className="text-[10px] text-accent-primary font-bold">SaaS</div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="bg-bg-primary p-2.5 rounded-lg border border-border-color/30"><div className="text-[9px] text-text-tertiary">ARR</div><div className="text-sm font-bold">$1.8M</div></div>
                     <div className="bg-bg-primary p-2.5 rounded-lg border border-border-color/30"><div className="text-[9px] text-text-tertiary">Net Profit</div><div className="text-sm font-bold text-green-600">$327K</div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="bg-bg-primary p-2.5 rounded-lg border border-border-color/30"><div className="text-[9px] text-text-tertiary">Licenses</div><div className="text-sm font-bold">4</div></div>
                     <div className="bg-bg-primary p-2.5 rounded-lg border border-border-color/30"><div className="text-[9px] text-text-tertiary">Asking Price</div><div className="text-sm font-bold text-accent-primary">$7.5M</div></div>
                  </div>
                </div>
             </div>
             <h3 className="text-xl font-bold font-display text-text-primary mb-1">Buyer</h3>
             <p className="text-sm text-text-secondary">Acquire what took others years to build.</p>
           </div>
        </div>

        {/* Section 2: Acquire */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-24 relative reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="w-full md:w-1/2 relative flex justify-center py-12">
             {/* Beige Background Shape */}
             <div className="absolute inset-0 bg-[#e6dcc5]/40 transform -skew-y-6 rounded-[3rem] z-0 scale-105" style={{ transformOrigin: 'center left' }}></div>
             {/* Fake Card */}
             <div className="relative z-10 w-80 max-w-full bg-white rounded-3xl shadow-2xl border border-border-color p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="text-sm font-bold mb-6 text-text-secondary">Exit Readiness Score</div>
               <div className="text-6xl font-black mb-8 text-text-primary">84<span className="text-xl font-normal text-text-tertiary">/100</span></div>
               <div className="space-y-4">
                 <div className="flex gap-4 bg-bg-secondary/40 p-3 rounded-xl border border-border-color/40"><div className="w-10 h-10 rounded-lg bg-accent-primary/20 shrink-0"></div><div className="space-y-2 w-full pt-1"><div className="h-2.5 w-3/4 bg-[#e5b540] rounded"></div><div className="h-1.5 w-1/2 bg-border-color rounded"></div></div></div>
                 <div className="flex gap-4 bg-bg-secondary/40 p-3 rounded-xl border border-border-color/40"><div className="w-10 h-10 rounded-lg bg-accent-primary/20 shrink-0"></div><div className="space-y-2 w-full pt-1"><div className="h-2.5 w-3/4 bg-[#e5b540] rounded"></div><div className="h-1.5 w-1/2 bg-border-color rounded"></div></div></div>
                 <div className="flex gap-4 bg-bg-secondary/40 p-3 rounded-xl border border-border-color/40"><div className="w-10 h-10 rounded-lg bg-accent-primary/20 shrink-0"></div><div className="space-y-2 w-full pt-1"><div className="h-2.5 w-3/4 bg-[#e5b540] rounded"></div><div className="h-1.5 w-1/2 bg-border-color rounded"></div></div></div>
               </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 pl-0 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] text-text-primary tracking-tight">
              Acquire what took others<br/> years to build.
            </h2>
            <p className="text-lg text-text-secondary font-light mb-8 max-w-lg leading-relaxed">
              Browse verified businesses with real financials, active licences, and direct founder access. No intermediaries. No noise.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#d4c39c] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Every listing verified before it goes live</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#d4c39c] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Filter by revenue, licence type, industry, and asking price</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#d4c39c] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Submit enquiries under NDA escrow ready from day one</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Exit */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24 relative mt-12 reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="w-full md:w-1/2 space-y-6 pr-0 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] text-text-primary tracking-tight">
              Exit on your terms.
            </h2>
            <p className="text-lg text-text-secondary font-light mb-8 max-w-lg leading-relaxed">
              List confidentially, get matched with qualified buyers, and close with full advisory support without exposing your business before the deal is done.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#9eb6cc] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Credibility score and exit readiness report before you go live</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#9eb6cc] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Buyer enquiries gated behind NDA</span>
              </li>
              <li className="flex items-start gap-4 text-text-primary font-medium text-lg">
                 <svg className="w-6 h-6 text-[#9eb6cc] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5l-10-5V17l10 5 10-5v-6.5l-10 5z"/></svg>
                 <span>Dedicated support from listing to final transfer</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center py-12">
             {/* Light Blue Background Shape */}
             <div className="absolute inset-0 bg-[#e1e8ef]/60 transform skew-y-6 rounded-[3rem] z-0 scale-105" style={{ transformOrigin: 'center right' }}></div>
             {/* Fake Card */}
             <div className="relative z-10 w-80 max-w-full bg-white rounded-3xl shadow-2xl border border-border-color p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="text-sm font-semibold text-center mb-6 text-text-secondary">Browse verified businesses with audited financials and motivated sellers.</div>
               <div className="bg-bg-secondary/40 rounded-2xl p-5 border border-border-color/50 space-y-4">
                 <div className="flex gap-3 items-center mb-2">
                   <div className="w-12 h-12 bg-[#081B2B] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner">A</div>
                   <div><div className="font-bold text-lg">Acme CRM</div><div className="text-xs text-green-600 font-semibold">Verified ✓</div></div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-border-color/30 shadow-sm"><div className="text-[10px] text-text-tertiary uppercase font-bold">ARR</div><div className="font-black text-lg text-text-primary">$1.8M</div></div>
                    <div className="bg-white p-3 rounded-xl border border-border-color/30 shadow-sm"><div className="text-[10px] text-text-tertiary uppercase font-bold">Net Profit</div><div className="font-black text-lg text-green-600">$327K</div></div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-border-color/30 shadow-sm"><div className="text-[10px] text-text-tertiary uppercase font-bold">Licenses</div><div className="font-black text-lg text-blue-600">4</div></div>
                    <div className="bg-white p-3 rounded-xl border border-border-color/30 shadow-sm"><div className="text-[10px] text-text-tertiary uppercase font-bold">Asking Price</div><div className="font-black text-lg text-[#e5b540]">$7.5M</div></div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
