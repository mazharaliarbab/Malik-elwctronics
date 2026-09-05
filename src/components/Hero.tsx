import React from 'react';
import { Phone, MessageSquare, Car, MapPin, Sparkles, ShieldCheck, ChevronDown, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

interface HeroProps {
  onViewCars: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewCars }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#071A3D]"
    >
      {/* Background Image with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Imported Car Showroom - Premium Imports Peshawar"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
          loading="eager"
        />
        {/* Multilayer dark navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-[#071A3D]/85 to-[#071A3D]/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071A3D]/60 to-[#040E24]"></div>
        
        {/* Subtle glowing ambient lighting */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#7B61C9]/20 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#FF8A00]/15 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200 mb-6 shadow-lg shadow-black/20">
          <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
          <span>Almas Khalil Car Village • Achini Payan, Peshawar</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        {/* PRIMARY BRANDING: Premium (Purple Script) + IMPORTS (Orange Bold) + White Crown */}
        <div className="mb-4 sm:mb-6">
          <BrandLogo size="xl" showSubtitle={true} />
        </div>

        {/* Headline: "Drive Your Dream Car" */}
        <h1
          id="hero-main-headline"
          className="font-heading font-black text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight text-balance max-w-3xl drop-shadow-md mb-4"
        >
          Drive Your <span className="text-[#FF8A00] underline decoration-[#7B61C9]/50 decoration-wavy decoration-2">Dream Car</span>
        </h1>

        {/* Subheadline: "Premium Imported Cars. Trusted Service. Exceptional Quality." */}
        <p className="text-slate-300 text-base sm:text-xl font-normal max-w-2xl text-balance mb-8 sm:mb-10 leading-relaxed drop-shadow-sm">
          Premium Imported Cars. Trusted Service. Exceptional Quality. Discover authentic Japanese hybrids, family crossovers, and luxury vehicles inspected for excellence in Peshawar.
        </p>

        {/* THREE HIGHLY VISIBLE CTA BUTTONS */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {/* 1. VIEW OUR CARS */}
          <button
            id="hero-view-cars-btn"
            onClick={onViewCars}
            className="w-full bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl shadow-[#FF8A00]/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer tracking-wider uppercase border border-white/20"
          >
            <Car className="w-5 h-5 fill-current" />
            <span>View Our Cars</span>
          </button>

          {/* 2. WHATSAPP US */}
          <a
            id="hero-whatsapp-btn"
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1 active:scale-95 text-center tracking-wide"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          {/* 3. CALL NOW */}
          <a
            id="hero-call-btn"
            href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
            className="w-full bg-[#7B61C9] hover:bg-[#6A4FB8] text-white font-heading font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl shadow-[#7B61C9]/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1 active:scale-95 text-center tracking-wide"
          >
            <Phone className="w-5 h-5 fill-current animate-pulse" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Direct Highlights / Assurance Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs font-semibold text-slate-300 w-full max-w-3xl pt-4 border-t border-white/10">
          <div className="flex items-center justify-center gap-1.5 py-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verified Auction Sheets</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1">
            <Sparkles className="w-4 h-4 text-[#FF8A00] shrink-0" />
            <span>Genuine Japanese Imports</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="text-[#7B61C9] font-black">✓</span>
            <span>Transparent Pricing</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1">
            <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Peshawar Showroom</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onViewCars}
          className="mt-8 text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs font-medium cursor-pointer"
          aria-label="Scroll down to inventory"
        >
          <span>Explore Showroom</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
