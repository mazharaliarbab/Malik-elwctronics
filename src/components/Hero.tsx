import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Tag, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/electronicsData.ts';

interface HeroProps {
  onExploreCategories: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCategories, onOpenQuote }) => {
  // Lifestyle appliance showcase slides for the hero
  const slides = [
    {
      title: 'T3 Heavy Duty Inverter ACs',
      subtitle: 'Energy-saving cooling for intense summer heat',
      brand: 'Gree & Haier Inverters',
      badge: 'Up to 60% Energy Saver',
      image: 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?auto=format&fit=crop&w=1200&q=80',
      categoryLink: 'air-conditioners'
    },
    {
      title: 'Glass Door & Inverter Refrigerators',
      subtitle: 'Locks freshness, runs smoothly on low voltage & UPS',
      brand: 'Dawlance & Waves Freezers',
      badge: '12-Yr Compressor Warranty',
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80',
      categoryLink: 'refrigerators'
    },
    {
      title: '100% Pure Copper Fans',
      subtitle: 'BLDC Inverter ceiling & pedestal fans with wireless remote',
      brand: 'Pak Fan & Royal Deluxe',
      badge: 'Guaranteed Pure Copper',
      image: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=1200&q=80',
      categoryLink: 'fans'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges Row: Store Hours & Local Identity */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Store Hours & Status Badge - Bold, large, green background */}
          <div
            id="hero-store-status"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full font-heading font-extrabold text-sm sm:text-base shadow-md shadow-emerald-600/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span>🟢 {STORE_INFO.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-2 rounded-full font-semibold text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Main Bazar Shabqadar, Charsadda KPK</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-900 px-3.5 py-2 rounded-full font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Official Authorized Brand Dealer</span>
          </div>
        </div>

        {/* Hero Main Grid: Text on Left, Lifestyle Appliance Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description, CTAs, Social Proof */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Bold Hero Headline: 48-64px, bold weight, high contrast */}
            <h1
              id="hero-main-headline"
              className="font-heading font-black text-slate-950 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.06] tracking-tight text-balance"
            >
              Premium Electronics at <span className="text-blue-700">Best Prices</span> in{' '}
              <span className="text-orange-600 underline decoration-orange-400 decoration-wavy decoration-2">
                Shabqadar
              </span>
            </h1>

            {/* Subheading text */}
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
              Upgrade your home with 100% authentic refrigerators, inverter air conditioners, copper fans, automatic washing machines, and 4K smart TVs. Backed by verified brand warranties and friendly local service in Shabqadar.
            </p>

            {/* Direct Contact CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              
              {/* 🔴 Call Now Button (Bold, large, clickable) */}
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                id="hero-call-now-btn"
                className="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center tracking-wide"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call Now: {STORE_INFO.phone}</span>
              </a>

              {/* 💬 WhatsApp Button (Green, prominent) */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Assalam%20o%20Alaikum%20Malik%20Electronics%2C%20I%20am%20looking%20for%20electronics%20rates%20in%20Shabqadar.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center tracking-wide"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* 📍 Visit Store Button (Blue with direction icon) */}
              <button
                onClick={scrollToLocation}
                id="hero-visit-store-btn"
                className="bg-blue-700 hover:bg-blue-800 text-white font-heading font-extrabold text-base sm:text-lg px-6 py-4 rounded-xl shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
              >
                <MapPin className="w-5 h-5" />
                <span>Visit Store</span>
              </button>
            </div>

            {/* Trust/Social Proof Badges - Bold, 18px font, colored backgrounds */}
            <div className="pt-4">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5">
                Guaranteed Store Commitments
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                
                {/* Badge 1 */}
                <div
                  id="trust-badge-1"
                  className="bg-blue-700 text-white font-heading font-black text-[18px] px-4 py-3 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
                >
                  <span className="text-xl leading-none">✓</span>
                  <span className="leading-tight">15+ Years Experience</span>
                </div>

                {/* Badge 2 */}
                <div
                  id="trust-badge-2"
                  className="bg-emerald-700 text-white font-heading font-black text-[18px] px-4 py-3 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
                >
                  <span className="text-xl leading-none">✓</span>
                  <span className="leading-tight">Authentic Products</span>
                </div>

                {/* Badge 3 */}
                <div
                  id="trust-badge-3"
                  className="bg-orange-600 text-white font-heading font-black text-[18px] px-4 py-3 rounded-xl shadow-sm flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
                >
                  <span className="text-xl leading-none">✓</span>
                  <span className="leading-tight">Best Prices Guaranteed</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Lifestyle Photos with subtle blue-to-dark gradient overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Lifestyle Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />

                {/* Gradient Overlay: Subtle blue-to-dark gradient on images */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-slate-900/20" />

                {/* Top Badge on image */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="bg-amber-400 text-blue-950 text-xs font-black px-3 py-1.5 rounded-md shadow-md uppercase tracking-wider">
                    {slides[currentSlide].badge}
                  </span>
                  <span className="bg-blue-900/80 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-white/20">
                    {slides[currentSlide].brand}
                  </span>
                </div>

                {/* Bottom info on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-black text-xl sm:text-2xl drop-shadow-md text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm font-medium mt-1 line-clamp-1">
                    {slides[currentSlide].subtitle}
                  </p>
                  
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20">
                    <button
                      onClick={onExploreCategories}
                      className="text-xs font-bold text-white flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      View in Store <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    
                    {/* Slide indicators */}
                    <div className="flex gap-1.5">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-white/50'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card: Fast Delivery & Wholesale Discount */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-100 max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold shrink-0">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-sm text-slate-900">
                      Wedding Packages
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Special discounts for complete home setup in Shabqadar
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Guarantee Chip: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-blue-700 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-blue-500 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Official Warranty Cards</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
