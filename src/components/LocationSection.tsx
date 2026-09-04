import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Navigation, 
  ExternalLink, 
  CheckCircle2,
  Building2,
  Car
} from 'lucide-react';
import { STORE_INFO } from '../data/electronicsData.ts';

export const LocationSection: React.FC = () => {
  const operatingHours = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM (Jummah Break 12:30 - 2:00 PM)', status: 'Open' },
    { day: 'Saturday', hours: '9:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Sunday', hours: '9:00 AM - 8:00 PM', status: 'Open' }
  ];

  return (
    <section id="location" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Store Location & Directions</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Visit Malik Electronics in Shabqadar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Located at the heart of Main Bazar Shabqadar. Easily accessible with ample parking and loading space.
          </p>
        </div>

        {/* 2-Column Grid: Left is Store Details & Hours, Right is Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Store Details & Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-5">
              
              {/* Store Status Pill */}
              <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-heading font-extrabold text-base flex items-center justify-between shadow-md shadow-emerald-600/20">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <span>🟢 {STORE_INFO.statusText}</span>
                </span>
                <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded font-medium">
                  7 Days / Week
                </span>
              </div>

              {/* Exact Address */}
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                  Store Address
                </div>
                <h3 className="font-heading font-black text-xl text-slate-900 leading-snug">
                  Malik Electronics Store
                </h3>
                <p className="text-slate-700 text-sm mt-1 leading-relaxed">
                  {STORE_INFO.address}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Landmark: {STORE_INFO.landmark}</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-heading font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {STORE_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Assalam%20o%20Alaikum%20Malik%20Electronics%2C%20I%20am%20coming%20to%20your%20store%20in%20Shabqadar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* External Google Maps Button */}
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-heading font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-center shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps for Live Navigation</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

            </div>

            {/* Hours Table Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-slate-900 mb-4">
                <Clock className="w-5 h-5 text-blue-700" />
                <span>Weekly Store Hours</span>
              </div>

              <div className="space-y-2 text-xs">
                {operatingHours.map((item) => (
                  <div 
                    key={item.day}
                    className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-none"
                  >
                    <span className="font-bold text-slate-800 w-24">{item.day}</span>
                    <span className="text-slate-600 font-medium text-right">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Car className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated loading space available for appliance transport</span>
              </div>
            </div>

          </div>

          {/* Right: Interactive Map Embed & Regional Distances (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Map Frame Card */}
            <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-200 overflow-hidden">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-xl overflow-hidden bg-slate-200">
                <iframe
                  title="Malik Electronics Store Location Shabqadar"
                  src={STORE_INFO.googleMapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map showing Shabqadar, Pakistan"
                />

                {/* Overlay Badge for Store Identification */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 max-w-[240px]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                      M
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs text-slate-950">
                        Malik Electronics
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Main Bazar Shabqadar
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-1.5"
                  >
                    <span>Get Route</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Distances Guide */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Approximate Travel Time to Store
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="font-heading font-black text-slate-900 text-base sm:text-lg">
                    1-2 min
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Shabqadar Town
                  </div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="font-heading font-black text-slate-900 text-base sm:text-lg">
                    15 min
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Matta / Tangi
                  </div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="font-heading font-black text-slate-900 text-base sm:text-lg">
                    25 min
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Charsadda City
                  </div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="font-heading font-black text-slate-900 text-base sm:text-lg">
                    35 min
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Peshawar Ring Rd
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
