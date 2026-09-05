import React from 'react';
import { Phone, MessageSquare, MapPin, Car } from 'lucide-react';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

interface QuickActionBarProps {
  onViewInventory: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onViewInventory }) => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0B224E]/90 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl shadow-black/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {/* 1. CALL */}
          <a
            id="quick-call-btn"
            href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
            className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white shadow-lg shadow-rose-900/30 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[11px] uppercase tracking-wider text-rose-100 font-bold">Direct Phone</div>
              <div className="font-heading font-black text-sm sm:text-base leading-tight tracking-wide">CALL NOW</div>
            </div>
          </a>

          {/* 2. WHATSAPP */}
          <a
            id="quick-whatsapp-btn"
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5 fill-white" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[11px] uppercase tracking-wider text-emerald-100 font-bold">Fast Chat</div>
              <div className="font-heading font-black text-sm sm:text-base leading-tight tracking-wide">WHATSAPP</div>
            </div>
          </a>

          {/* 3. GET DIRECTIONS */}
          <a
            id="quick-directions-btn"
            href={DEALERSHIP_INFO.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7B61C9] to-[#6042B8] hover:from-[#8B72D4] hover:to-[#7050C7] text-white shadow-lg shadow-[#7B61C9]/30 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[11px] uppercase tracking-wider text-purple-200 font-bold">Peshawar Location</div>
              <div className="font-heading font-black text-sm sm:text-base leading-tight tracking-wide">GET DIRECTIONS</div>
            </div>
          </a>

          {/* 4. VIEW INVENTORY */}
          <button
            id="quick-inventory-btn"
            onClick={onViewInventory}
            className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF8A00] to-[#E67A00] hover:from-[#FFA029] hover:to-[#F58200] text-[#071A3D] shadow-lg shadow-[#FF8A00]/30 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#071A3D]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Car className="w-5 h-5 fill-current" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-[11px] uppercase tracking-wider text-[#071A3D]/80 font-bold">All Models</div>
              <div className="font-heading font-black text-sm sm:text-base leading-tight tracking-wide">VIEW INVENTORY</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
