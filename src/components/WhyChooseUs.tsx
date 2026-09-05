import React from 'react';
import { ShieldCheck, FileCheck2, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/dealershipData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#FF8A00]" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-7 h-7 text-[#7B61C9]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-sky-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-7 h-7 text-emerald-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#040E24] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#7B61C9]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B61C9]/15 border border-[#7B61C9]/30 text-xs font-bold uppercase tracking-widest text-[#7B61C9] mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The Premium Advantage</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why Choose <span className="text-[#FF8A00]">Premium Imports</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We are dedicated to providing Peshawar and Khyber Pakhtunkhwa with authentic Japanese imported vehicles, verifiable auction sheets, and completely transparent dealership standards.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="group relative bg-[#0B224E]/70 hover:bg-[#0F2A61] border border-white/10 hover:border-[#FF8A00]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Top Icon Pill */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(item.iconName)}
                </div>

                {/* Subtitle / tag */}
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {item.subtitle}
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FF8A00] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom check badge */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Dealership Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
