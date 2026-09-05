import React from 'react';
import { X, Phone, MessageSquare, ShieldCheck, Gauge, Fuel, Cog, Calendar, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Car, DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';
import { BrandLogo } from './BrandLogo';

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  const whatsappUrl = getWhatsAppInquiryUrl(car.name, car.pricePkr);

  return (
    <div
      id="car-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="car-detail-modal-content"
        className="relative w-full max-w-4xl bg-[#0B224E] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-95 cursor-pointer"
          aria-label="Close vehicle specifications"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header with Brand */}
        <div className="bg-[#071A3D] px-6 py-3 border-b border-white/10 flex items-center justify-between">
          <BrandLogo size="sm" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] bg-[#FF8A00]/10 px-3 py-1 rounded-full border border-[#FF8A00]/20">
            {car.badge || 'Imported Spec'}
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main Car Photo & Quick Highlights */}
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-black/40 border border-white/10 aspect-[16/9] max-h-[380px]">
            <img
              src={car.image}
              alt={`${car.name} - Premium Imports Peshawar`}
              className="w-full h-full object-cover object-center"
            />
            {/* Price Badge Overlay */}
            <div className="absolute bottom-4 left-4 bg-[#071A3D]/95 border border-[#FF8A00]/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
              <div className="text-[10px] uppercase font-bold text-slate-400">Demand Price</div>
              <div className="font-heading font-black text-xl sm:text-2xl text-[#FF8A00]">
                {car.pricePkr}
              </div>
            </div>

            {/* Auction Grade Tag */}
            <div className="absolute top-4 left-4 bg-emerald-700/90 text-white font-bold text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm shadow flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Auction: {car.auctionGrade}</span>
            </div>
          </div>

          {/* Vehicle Name & Tagline */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7B61C9] bg-[#7B61C9]/10 px-2.5 py-0.5 rounded border border-[#7B61C9]/30">
                {car.make} • {car.category}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Model {car.modelYear} • {car.bodyType}
              </span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
              {car.name}
            </h2>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-[#071A3D]/80 p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Cog className="w-4 h-4 text-[#FF8A00]" />
                <span>Engine</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-100">{car.engine}</div>
            </div>

            <div className="bg-[#071A3D]/80 p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Gauge className="w-4 h-4 text-emerald-400" />
                <span>Mileage</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-100">{car.mileage}</div>
            </div>

            <div className="bg-[#071A3D]/80 p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Fuel className="w-4 h-4 text-[#7B61C9]" />
                <span>Fuel Type</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-100">{car.fuelType}</div>
            </div>

            <div className="bg-[#071A3D]/80 p-3 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Transmission</span>
              </div>
              <div className="font-bold text-sm sm:text-base text-slate-100">{car.transmission}</div>
            </div>
          </div>

          {/* Features List */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Options & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {car.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dealership Disclaimer Note for Demo */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 mb-6 flex items-start gap-2.5 text-xs text-amber-200/90">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Dealership Owner Note:</strong> This is a structured demo inventory item. You can easily customize this car's title, high-resolution photography, specifications, auction sheet grade, and demand price in <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-amber-300">dealershipData.ts</code>.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-700/30 transition-transform active:scale-95 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
              className="bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF8A00]/25 transition-transform active:scale-95 text-center tracking-wide"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Dealership ({DEALERSHIP_INFO.contact.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
