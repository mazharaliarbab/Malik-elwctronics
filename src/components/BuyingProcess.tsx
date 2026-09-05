import React from 'react';
import { Search, Eye, FileSignature, KeyRound, ArrowRight } from 'lucide-react';
import { BUYING_PROCESS_STEPS, getWhatsAppInquiryUrl } from '../data/dealershipData';

export const BuyingProcess: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 text-[#FF8A00]" />;
      case 1:
        return <Eye className="w-6 h-6 text-[#7B61C9]" />;
      case 2:
        return <FileSignature className="w-6 h-6 text-emerald-400" />;
      case 3:
      default:
        return <KeyRound className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#040E24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
            <span>Seamless Experience</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Simple <span className="text-[#FF8A00]">4-Step Process</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            From initial vehicle selection to handing over the keys, we make acquiring your imported car straightforward, transparent, and completely hassle-free.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BUYING_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${idx + 1}`}
              className="relative bg-[#0B224E]/80 border border-white/10 hover:border-[#FF8A00]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Step Top Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-[#FF8A00] tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Pill */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Step {idx + 1} of 4</span>
                {idx < 3 && <span className="text-[#FF8A00]">Next →</span>}
                {idx === 3 && <span className="text-emerald-400 font-bold">Ready to Drive</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF8A00] hover:text-[#FFA029] underline underline-offset-4 transition-colors"
          >
            <span>Have questions about our buying process? Talk to our team on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
