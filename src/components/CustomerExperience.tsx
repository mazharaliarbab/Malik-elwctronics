import React from 'react';
import { Star, MessageSquareQuote, Info, MapPin } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/dealershipData';

export const CustomerExperience: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#071A3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B61C9]/15 border border-[#7B61C9]/30 text-xs font-bold uppercase tracking-widest text-[#7B61C9] mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Client <span className="text-[#FF8A00]">Experiences</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Read what car buyers in Peshawar and Khyber Pakhtunkhwa say about our imported vehicles, honest auction sheets, and customer service.
          </p>

          {/* Explicit Notice: Demo Testimonials */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
            <Info className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
            <span>
              <strong>Note for Dealership:</strong> These are marked demo reviews and can be updated with genuine Google reviews anytime in <code className="text-[#FF8A00]">dealershipData.ts</code>.
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0B224E]/70 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#FF8A00]/40 hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-1.5">5.0 Verified</span>
                </div>

                {/* Quote Icon & Text */}
                <p className="text-slate-200 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">
                    {t.author}
                  </h4>
                  <div className="flex items-center gap-1 text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#FF8A00]" />
                    <span>{t.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#7B61C9] bg-[#7B61C9]/10 px-2 py-0.5 rounded border border-[#7B61C9]/20">
                  {t.carPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
