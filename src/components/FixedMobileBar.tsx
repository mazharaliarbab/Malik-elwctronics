import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

export const FixedMobileBar: React.FC = () => {
  return (
    <div
      id="fixed-mobile-actions-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#071A3D]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. CALL */}
        <a
          id="mobile-fixed-call-btn"
          href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-rose-600 to-rose-700 active:scale-95 text-white shadow-md shadow-rose-950/40 text-center transition-transform"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span className="font-heading font-black text-[11px] uppercase tracking-wide leading-none">
            CALL
          </span>
          <span className="text-[9px] text-rose-200 truncate w-full">0344 9102668</span>
        </a>

        {/* 2. WHATSAPP */}
        <a
          id="mobile-fixed-whatsapp-btn"
          href={getWhatsAppInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 active:scale-95 text-white shadow-md shadow-emerald-950/40 text-center transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-white mb-0.5" />
          <span className="font-heading font-black text-[11px] uppercase tracking-wide leading-none">
            WHATSAPP
          </span>
          <span className="text-[9px] text-emerald-200">Instant Chat</span>
        </a>

        {/* 3. DIRECTIONS */}
        <a
          id="mobile-fixed-directions-btn"
          href={DEALERSHIP_INFO.googleMaps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#E67A00] active:scale-95 text-[#071A3D] shadow-md shadow-amber-950/40 text-center transition-transform"
        >
          <MapPin className="w-4 h-4 fill-current mb-0.5" />
          <span className="font-heading font-black text-[11px] uppercase tracking-wide leading-none">
            DIRECTIONS
          </span>
          <span className="text-[9px] text-[#071A3D]/80 font-bold">Google Maps</span>
        </a>
      </div>
    </div>
  );
};
