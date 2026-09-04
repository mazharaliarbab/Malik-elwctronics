import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/electronicsData.ts';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Store Bio & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                M
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-white tracking-tight">
                  MALIK <span className="text-orange-500">ELECTRONICS</span>
                </span>
                <div className="text-xs text-slate-400 font-medium">
                  Main Bazar, Shabqadar, KPK, Pakistan
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Shabqadar's leading retailer for genuine company-warranted refrigerators, inverter air conditioners, 100% pure copper fans, washing machines, and smart televisions. Serving customers with pride and honesty for over 15 years.
            </p>

            <div className="space-y-2.5 pt-2 text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneClean}`} className="hover:text-white font-bold transition-colors">
                  {STORE_INFO.phone} (Direct Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open 7 Days a Week: {STORE_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-black text-white text-base tracking-wide uppercase">
              Product Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      scrollTo('categories');
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-slate-100"
                  >
                    <span>›</span> {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors text-xs flex items-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>★</span> Wedding Package Deals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Store Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-black text-white text-base tracking-wide uppercase">
              Store Commitments
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-sm">Official Brand Warranties</div>
                  <div>Direct warranty coverage on Dawlance, Haier, Gree, Pak Fan, and Samsung.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0 text-xs">
                  ✓
                </span>
                <div>
                  <div className="font-bold text-white text-sm">Best Wholesale & Retail Rates</div>
                  <div>Competitive pricing matched against all Peshawar and Charsadda markets.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Malik Electronics Store (Shabqadar, Pakistan). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Main Bazar Shabqadar, Charsadda, KPK</span>
            <span>•</span>
            <span className="text-slate-400">Phone: 0312 9340205</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
