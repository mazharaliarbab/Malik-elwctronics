import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { CATEGORIES, STORE_INFO } from '../data/electronicsData.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillCategory = ''
}) => {
  const [selectedCats, setSelectedCats] = useState<string[]>(
    prefillCategory ? [prefillCategory] : ['Refrigerators', 'Air Conditioners']
  );
  const [customerName, setCustomerName] = useState('');
  const [locality, setLocality] = useState('Shabqadar Bazar');
  const [dealType, setDealType] = useState('Single Appliance Cash Deal');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const toggleCat = (catName: string) => {
    if (selectedCats.includes(catName)) {
      setSelectedCats(selectedCats.filter((c) => c !== catName));
    } else {
      setSelectedCats([...selectedCats, catName]);
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const categoriesText = selectedCats.length > 0 ? selectedCats.join(', ') : 'General Electronics';
    const message = `Assalam o Alaikum Malik Electronics (Shabqadar),
I would like to request the best price quote:
- Customer Name: ${customerName || 'Valued Customer'}
- Locality: ${locality}
- Requirement: ${dealType}
- Products Needed: ${categoriesText}
${notes ? `- Additional Details: ${notes}` : ''}
Please share your best available cash discount rates and warranty info. Thank you!`;

    window.open(
      `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer text-white"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Fast Price Quote & Wholesale Rates</span>
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            Request Best Price Quote
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm mt-1">
            Get instant special rates directly from Malik Electronics for Shabqadar & nearby areas.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="p-6 space-y-4 text-left">
          {/* Select Categories */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Select Appliances You Need:
            </label>
            <div className="flex flex-wrap gap-2">
              {['Refrigerators', 'Air Conditioners', 'Fans', 'Washing Machines', 'Televisions'].map((cat) => {
                const isSelected = selectedCats.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCat(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-blue-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deal Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Package Type:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Single Appliance Cash Deal', 'Full Wedding Package (Jahez)', 'Home Renovation Setup', 'Bulk Office / Mosque Order'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setDealType(type)}
                  className={`p-2 rounded-lg text-xs font-semibold text-left transition-all border cursor-pointer ${
                    dealType === type
                      ? 'border-blue-700 bg-blue-50 text-blue-900 font-bold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Locality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Name:
              </label>
              <input
                type="text"
                placeholder="e.g. Haji Farooq"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Town / Village:
              </label>
              <input
                type="text"
                placeholder="e.g. Shabqadar, Matta, Tangi"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Any specific brand or capacity? (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 1.5 Ton Gree Inverter AC, Dawlance 18 cu.ft, Pak Fan"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Actions */}
          <div className="pt-3 space-y-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-transform active:scale-95 cursor-pointer text-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Send Quote Request on WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-heading font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Phone Inquiry: {STORE_INFO.phone}</span>
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};
