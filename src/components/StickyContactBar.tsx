import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/electronicsData.ts';

export const StickyContactBar: React.FC = () => {
  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside aria-label="Quick contact" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Quick store identity & live status on desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-700 text-white font-extrabold flex items-center justify-center text-sm shadow">
            M
          </div>
          <div>
            <div className="font-heading font-black text-sm text-slate-900 leading-none">
              Malik Electronics Shabqadar
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Until 8:00 PM
              </span>
              <span>• Best Prices Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Right / Center: Action Buttons for High Conversion */}
        <div className="flex items-center justify-between w-full md:w-auto gap-2 sm:gap-3">
          
          {/* Call Now Button - Red */}
          <a
            href={`tel:${STORE_INFO.phoneClean}`}
            id="sticky-call-btn"
            className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 text-center tracking-wide"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span className="whitespace-nowrap">Call: {STORE_INFO.phone}</span>
          </a>

          {/* WhatsApp Button - Green */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Assalam%20o%20Alaikum%20Malik%20Electronics%2C%20I%20am%20contacting%20you%20from%20your%20website%20for%20current%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            id="sticky-whatsapp-btn"
            className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 text-center tracking-wide"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span className="whitespace-nowrap">WhatsApp Chat</span>
          </a>

          {/* Visit Store Button - Blue (desktop and tablet) */}
          <button
            onClick={scrollToLocation}
            id="sticky-visit-btn"
            className="hidden sm:flex bg-blue-700 hover:bg-blue-800 text-white font-heading font-black text-xs sm:text-sm px-4 py-3 rounded-xl items-center justify-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer text-center tracking-wide"
          >
            <MapPin className="w-4 h-4" />
            <span>Store Map</span>
          </button>

        </div>

      </div>
    </aside>
  );
};
