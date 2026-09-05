import React from 'react';
import { MapPin, Phone, MessageSquare, Check, ShieldCheck, Award, Car } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#071A3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B224E]">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
                alt="Premium Imports Showroom in Peshawar"
                className="w-full h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-[#071A3D]/40 to-transparent"></div>

              {/* In-Card Floating Info Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B224E]/90 backdrop-blur-md border border-white/15 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FF8A00] text-[#071A3D] flex items-center justify-center font-black">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-white text-base leading-tight">
                      Almas Khalil Car Village
                    </h4>
                    <p className="text-xs text-slate-300">
                      Achini Payan, Peshawar, 25000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent glowing aura */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#7B61C9]/30 blur-[70px] rounded-full pointer-events-none"></div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-4">
              <span>About Our Dealership</span>
            </div>

            {/* Mandatory Title */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Your Trusted Destination for{' '}
              <span className="text-[#7B61C9]">Premium</span>{' '}
              <span className="text-[#FF8A00]">Imported Cars</span>
            </h2>

            {/* Professional dealership copy strictly respecting user instructions */}
            <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>Premium Imports</strong>, our mission is to redefine the imported car buying experience in Peshawar. Located conveniently at Almas Khalil Car Village in Achini Payan, we specialize in high-grade Japanese and imported vehicles chosen specifically for their superior build quality, fuel efficiency, and road safety.
              </p>
              <p>
                We believe that purchasing an imported vehicle should be straightforward and completely transparent. That is why every car in our collection is backed by verifiable auction sheet records, honest vehicle inspections, and straightforward pricing with zero hidden surprises.
              </p>
              <p>
                Customer satisfaction is at the center of everything we do. From the moment you step onto our showroom floor to the final handover of your keys, our dedicated team offers courteous, professional guidance to help you select the ideal automobile for your family or personal travel.
              </p>
            </div>

            {/* Quality Commitments */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-bold text-sm">Authentic Imported Vehicles</strong>
                  <span className="text-slate-300">Clean titles and verified import documentation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-bold text-sm">Transparent Dealings</strong>
                  <span className="text-slate-300">Honest guidance on vehicle history and condition.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
                className="bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-sm px-6 py-3 rounded-xl shadow-lg shadow-[#FF8A00]/20 transition-transform active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Us: {DEALERSHIP_INFO.contact.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm px-5 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition-transform active:scale-95 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
