import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Menu, X, ShieldCheck, Zap } from 'lucide-react';
import { STORE_INFO } from '../data/electronicsData.ts';

interface HeaderProps {
  onOpenQuote: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Notification / Urgency Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs sm:text-sm py-2 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-blue-950 text-[11px] font-extrabold px-2 py-0.5 rounded tracking-wide uppercase">
              Limited Deals
            </span>
            <span className="font-semibold text-slate-100 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Special Cash Discounts on Inverter ACs & Refrigerators in Shabqadar
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1 text-blue-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Genuine Brand Warranties
            </span>
            <button
              onClick={onOpenQuote}
              className="underline text-amber-300 hover:text-amber-200 font-bold transition-colors cursor-pointer"
            >
              Get Custom Price Quote →
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-700 group-hover:bg-blue-800 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md transition-all">
                M
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-blue-900 tracking-tight leading-none">
                    MALIK
                  </span>
                  <span className="font-heading font-black text-2xl sm:text-3xl text-orange-600 tracking-tight leading-none">
                    ELECTRONICS
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-1">
                  <span>Shabqadar, KPK</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-blue-700 font-semibold">15+ Years of Trust</span>
                </div>
              </div>
            </a>
          </div>

            {/* Desktop Navigation & Status */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-sm font-bold text-slate-800 tracking-tight">
              <button
                onClick={() => scrollTo('categories')}
                className="hover:text-blue-700 transition-colors cursor-pointer"
              >
                Categories
              </button>
              <button
                onClick={() => scrollTo('featured')}
                className="hover:text-blue-700 transition-colors cursor-pointer"
              >
                Featured Deals
              </button>
              <button
                onClick={() => scrollTo('trust')}
                className="hover:text-blue-700 transition-colors cursor-pointer"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollTo('reviews')}
                className="hover:text-blue-700 transition-colors cursor-pointer"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollTo('location')}
                className="hover:text-blue-700 transition-colors cursor-pointer"
              >
                Location & Map
              </button>
            </nav>

            {/* Store Status Indicator */}
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-full text-xs font-black flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{STORE_INFO.statusText}</span>
            </div>

            {/* Header Direct Call CTA */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                id="header-call-btn"
                className="bg-red-600 hover:bg-red-700 text-white font-heading font-black px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition-transform active:scale-95 text-sm tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>{STORE_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Malik%20Electronics%2C%20I%20am%20interested%20in%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 text-sm tracking-wide"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="bg-red-600 text-white p-2.5 rounded-lg text-sm font-bold flex items-center gap-1.5"
              aria-label="Call Store"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-extrabold hidden sm:inline">Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              {STORE_INFO.statusText}
            </span>
            <span className="text-slate-500 font-normal">Daily 9 AM - 8 PM</span>
          </div>

          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <button
              onClick={() => scrollTo('categories')}
              className="text-left py-2 px-3 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              Product Categories <span>→</span>
            </button>
            <button
              onClick={() => scrollTo('featured')}
              className="text-left py-2 px-3 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              Featured Products & Deals <span>→</span>
            </button>
            <button
              onClick={() => scrollTo('trust')}
              className="text-left py-2 px-3 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              Why Choose Malik Electronics <span>→</span>
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="text-left py-2 px-3 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              Customer Reviews <span>→</span>
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="text-left py-2 px-3 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              Store Location & Directions <span>→</span>
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-center text-base shadow-sm"
            >
              <Phone className="w-5 h-5" /> Call Now: {STORE_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Malik%20Electronics%2C%20I%20am%20messaging%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-center text-base shadow-sm"
            >
              <MessageSquare className="w-5 h-5 fill-white" /> WhatsApp Chat
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-blue-700 text-white font-bold py-2.5 rounded-lg flex items-center justify-center text-sm"
            >
              Request Custom Quote / Wedding Package
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
