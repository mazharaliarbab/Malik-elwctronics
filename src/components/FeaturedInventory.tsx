import React, { useState, useMemo } from 'react';
import { Car as CarIcon, Gauge, Fuel, Cog, MessageSquare, ExternalLink, Info, Search, Filter } from 'lucide-react';
import { Car, FEATURED_CARS, DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

interface FeaturedInventoryProps {
  onSelectCar: (car: Car) => void;
}

export const FeaturedInventory: React.FC<FeaturedInventoryProps> = ({ onSelectCar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Hybrid', 'Crossover', 'MPV', 'Luxury'];

  const filteredCars = useMemo(() => {
    return FEATURED_CARS.filter((car) => {
      const matchesCategory =
        selectedCategory === 'All' || car.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.modelYear.toString().includes(searchQuery) ||
        car.engine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="inventory" className="py-20 bg-[#071A3D] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7B61C9]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8A00]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/25 text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">
            <CarIcon className="w-3.5 h-3.5" />
            <span>Showroom Collection</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Featured <span className="text-[#FF8A00]">Imported Cars</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Carefully curated Japanese hybrids, executive sedans, and family multi-seaters available for inspection at Almas Khalil Car Village, Peshawar.
          </p>

          {/* Dealership Owner Demo Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900/30 border border-blue-500/20 text-xs text-blue-200">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              <strong>Editable Demo Inventory:</strong> Easily customize car photos, titles, specs, and prices anytime.
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#0B224E]/70 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF8A00] text-[#071A3D] shadow-md shadow-[#FF8A00]/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Cars' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Prius, Aqua, Vezel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#071A3D] border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#FF8A00] transition-colors"
            />
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-16 bg-[#0B224E]/40 rounded-2xl border border-white/10">
            <CarIcon className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">No cars match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#FF8A00] font-bold underline cursor-pointer"
            >
              Reset filters to see all cars
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => {
              const carWhatsAppUrl = getWhatsAppInquiryUrl(car.name, car.pricePkr);

              return (
                <div
                  key={car.id}
                  id={`car-card-${car.id}`}
                  className="group bg-[#0B224E]/80 border border-white/10 hover:border-[#FF8A00]/50 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#040E24]"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={car.image}
                      alt={`${car.name} imported car at Premium Imports Peshawar`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge Overlay */}
                    {car.badge && (
                      <div className="absolute top-3 left-3 bg-[#071A3D]/90 border border-white/15 backdrop-blur-md text-[11px] font-bold text-slate-100 px-2.5 py-1 rounded-lg shadow">
                        {car.badge}
                      </div>
                    )}

                    {/* Auction Grade Tag */}
                    <div className="absolute top-3 right-3 bg-emerald-600/95 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow backdrop-blur-sm">
                      {car.auctionGrade}
                    </div>

                    {/* Model Year Pill */}
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-slate-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Model {car.modelYear}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Make / Category Line */}
                      <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
                        <span className="text-[#7B61C9] uppercase tracking-wider">{car.make}</span>
                        <span>{car.bodyType}</span>
                      </div>

                      {/* Car Name */}
                      <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#FF8A00] transition-colors leading-snug line-clamp-1">
                        {car.name}
                      </h3>

                      {/* Specifications Row */}
                      <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-white/10 text-xs">
                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#071A3D]/60 border border-white/5 text-center">
                          <Cog className="w-3.5 h-3.5 text-[#FF8A00] mb-1" />
                          <span className="text-slate-400 text-[10px] uppercase">Engine</span>
                          <span className="font-bold text-slate-100 truncate w-full">{car.engineCc}cc</span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#071A3D]/60 border border-white/5 text-center">
                          <Gauge className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                          <span className="text-slate-400 text-[10px] uppercase">Mileage</span>
                          <span className="font-bold text-slate-100 truncate w-full">{car.mileage}</span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#071A3D]/60 border border-white/5 text-center">
                          <Fuel className="w-3.5 h-3.5 text-[#7B61C9] mb-1" />
                          <span className="text-slate-400 text-[10px] uppercase">Gear</span>
                          <span className="font-bold text-slate-100 truncate w-full">Auto</span>
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="mb-4">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                          Demand Price
                        </div>
                        <div className="font-heading font-black text-2xl text-[#FF8A00] tracking-tight">
                          {car.pricePkr}
                        </div>
                      </div>
                    </div>

                    {/* Dual Action Buttons: View Details & WhatsApp */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      {/* View Details */}
                      <button
                        onClick={() => onSelectCar(car)}
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                      </button>

                      {/* WhatsApp Button */}
                      <a
                        href={carWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Dealership Action CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B224E] via-[#071A3D] to-[#0B224E] border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              Looking for a Specific Model or Custom Import?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              We help customers in Peshawar source verified Grade 4.5+ auction cars directly from Japan according to your exact budget and preference.
            </p>
          </div>
          <a
            href={getWhatsAppInquiryUrl('Custom Import Request')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#FF8A00]/25 transition-transform active:scale-95"
          >
            Request Custom Car
          </a>
        </div>
      </div>
    </section>
  );
};
