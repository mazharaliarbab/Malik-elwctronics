import React from 'react';
import { 
  ShieldCheck, 
  Percent, 
  Truck, 
  Wrench, 
  Award, 
  BadgeCheck, 
  PhoneCall, 
  Clock 
} from 'lucide-react';
import { BRANDS, STORE_INFO } from '../data/electronicsData.ts';

export const TrustFeatures: React.FC = () => {
  return (
    <section id="trust" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Serving Shabqadar Since 2009</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Why Shabqadar Trusts Malik Electronics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Over 15 years of delivering authentic company electronics without middleman markups.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2">
              100% Authentic Brand Warranty
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every single AC, refrigerator, fan, and washing machine comes with an original company warranty card, verified serial number, and official seal.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2">
              Guaranteed Best Local Prices
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Why travel to Peshawar or Charsadda when you get better cash discounts and wholesale rates directly in Shabqadar Main Bazar?
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2">
              Safe Doorstep Delivery
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Safe appliance transportation directly to your doorstep in Shabqadar, Matta, Tangi, and nearby localities with payment on delivery.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-2">
              Direct After-Sales Service
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Malik Electronics stands behind every sale. We facilitate manufacturer warranty claims, installation advice, and electrical safety support.
            </p>
          </div>

        </div>

        {/* Authorized Brands Marquee / Grid */}
        <div className="mt-14 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Official Authorized Dealer For Pakistan’s Top Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl p-3.5 text-center transition-all group"
              >
                <div className="font-heading font-black text-base sm:text-lg text-slate-800 group-hover:text-blue-700 transition-colors">
                  {brand.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5 group-hover:text-blue-600">
                  {brand.slogan}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
