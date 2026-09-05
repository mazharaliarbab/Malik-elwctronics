import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl, FEATURED_CARS } from '../data/dealershipData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#040E24] text-slate-300 border-t border-white/10 pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7B61C9]/5 blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BrandLogo size="lg" showSubtitle={false} />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              Premier destination for verified Japanese imported cars, luxury hybrids, and family crossovers. Based at Almas Khalil Car Village, Achini Payan, Peshawar.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                Almas Khalil Car Village
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                Peshawar, Pakistan
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-black text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('inventory')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  Buying Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer"
                >
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Inventory Models (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-white text-sm uppercase tracking-wider mb-4">
              Inventory Models
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FEATURED_CARS.slice(0, 5).map((car) => (
                <li key={car.id}>
                  <button
                    onClick={() => scrollTo('inventory')}
                    className="hover:text-[#FF8A00] transition-colors text-left truncate max-w-full cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                    <span>{car.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('inventory')}
                  className="text-[#7B61C9] font-bold text-xs hover:underline cursor-pointer pt-1 block"
                >
                  View All Cars →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Directions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-black text-white text-sm uppercase tracking-wider mb-4">
              Contact Dealership
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Call */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <a
                  href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
                  className="hover:text-white font-bold transition-colors"
                >
                  {DEALERSHIP_INFO.contact.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                <a
                  href={getWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-bold transition-colors"
                >
                  WhatsApp: {DEALERSHIP_INFO.contact.whatsappFormatted}
                </a>
              </div>

              {/* Directions */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300">Almas Khalil Car Village, Achini Payan</span>
                  <span className="block text-slate-400 text-xs">Peshawar, 25000, Pakistan</span>
                </div>
              </div>

              {/* Get Directions Link */}
              <div className="pt-2">
                <a
                  href={DEALERSHIP_INFO.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A00] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            <p>© 2026 Premium Imports. All rights reserved.</p>
            <p className="mt-0.5 text-[11px] text-slate-600">
              Almas Khalil Car Village, Achini Payan, Peshawar, 25000, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
