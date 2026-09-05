import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#040E24] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-[#7B61C9]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/15 border border-[#FF8A00]/30 text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Peshawar Showroom</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Visit Our <span className="text-[#FF8A00]">Dealership</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Come inspect our premium imported cars in person at Almas Khalil Car Village, Achini Payan, Peshawar.
          </p>
        </div>

        {/* Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B224E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div>
              {/* Brand Header */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <BrandLogo size="md" showSubtitle />
              </div>

              {/* Exact Location Breakdown (Required text) */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-lg sm:text-xl">
                      Premium Imports
                    </h3>
                    <div className="text-slate-300 text-sm sm:text-base mt-1 font-medium">
                      Almas Khalil Car Village
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base font-medium">
                      Achini Payan, Peshawar, 25000
                    </div>
                    <div className="text-xs font-semibold text-[#FF8A00] mt-1">
                      Peshawar, Pakistan
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Telephone</div>
                    <a
                      href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
                      className="font-heading font-black text-white hover:text-[#FF8A00] text-base sm:text-lg transition-colors"
                    >
                      {DEALERSHIP_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">WhatsApp Chat</div>
                    <a
                      href={getWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-black text-emerald-400 hover:text-emerald-300 text-base sm:text-lg transition-colors"
                    >
                      {DEALERSHIP_INFO.contact.whatsappFormatted}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-400 uppercase font-semibold">Operating Hours</div>
                    <div className="text-slate-200 font-bold text-sm">{DEALERSHIP_INFO.timings.days}</div>
                    <div className="text-slate-300">{DEALERSHIP_INFO.timings.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* HIGH VISIBILITY GET DIRECTIONS BUTTON */}
            <div className="pt-2">
              <a
                id="location-get-directions-btn"
                href={DEALERSHIP_INFO.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-[#FF8A00]/25 flex items-center justify-center gap-3 transition-transform active:scale-95 text-center tracking-wide"
              >
                <Navigation className="w-5 h-5 fill-current" />
                <span>GET DIRECTIONS IN GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame & Showroom Guidance */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0B224E]/80 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Map Preview / Interactive Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#071A3D] aspect-[16/10] sm:aspect-[16/9] w-full mb-6">
              <iframe
                title="Premium Imports Location at Almas Khalil Car Village, Achini Payan, Peshawar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.918978189874!2d71.4550!3d33.9780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9173bb5a556ef%3A0xb2146f3438a95e0c!2sAchini%20Payan%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1709500000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(105%) brightness(90%) invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Pin Overlay Card */}
              <div className="absolute top-4 left-4 bg-[#071A3D]/95 border border-white/20 backdrop-blur-md p-3 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
                  <span className="font-heading font-black text-xs text-white">Premium Imports</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Almas Khalil Car Village, Achini Payan
                </p>
              </div>

              {/* Direct Open in Google Maps link overlay */}
              <a
                href={DEALERSHIP_INFO.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#FF8A00] text-[#071A3D] font-black text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Travel Directions Guidance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-heading font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                  <span className="text-[#FF8A00]">🚗</span> From Ring Road Peshawar
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Easily accessible from Ring Road via Achini Payan turn. Head towards Almas Khalil Car Market where our showroom is prominently located.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-heading font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                  <span className="text-[#7B61C9]">🏢</span> Test Drive & Inspection
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Spacious showroom lot with room for detailed mechanical inspections and smooth test drives before finalizing any deal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
