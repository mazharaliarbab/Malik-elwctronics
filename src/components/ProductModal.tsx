import React from 'react';
import { 
  X, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  Star, 
  Tag, 
  Truck, 
  Share2 
} from 'lucide-react';
import { Product, STORE_INFO } from '../data/electronicsData.ts';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const savings = product.originalPrice - product.discountPrice;
  const savingsPercent = Math.round((savings / product.originalPrice) * 100);

  const formatPrice = (val: number) => {
    return 'Rs. ' + val.toLocaleString('en-PK');
  };

  const whatsappMessage = `Assalam o Alaikum Malik Electronics, I want to inquire about or buy: *${product.name}* (${product.brand}) priced at *${formatPrice(product.discountPrice)}*. Is it in stock at Shabqadar store?`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Area */}
        <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="bg-amber-400 text-blue-950 font-black text-xs px-2.5 py-1 rounded uppercase tracking-wider">
                {product.brand}
              </span>
              <h2 className="font-heading font-black text-white text-xl sm:text-2xl mt-1.5 leading-snug drop-shadow-md">
                {product.name}
              </h2>
            </div>
            
            <div className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow shrink-0">
              In Stock at Shabqadar
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Pricing & Savings Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400 font-semibold line-through">
                Original Price: {formatPrice(product.originalPrice)}
              </div>
              <div className="font-heading font-black text-3xl text-slate-950">
                {formatPrice(product.discountPrice)}
              </div>
              <div className="text-xs text-emerald-700 font-bold mt-0.5">
                Special Cash Discount Price in Shabqadar
              </div>
            </div>

            <div className="text-right">
              <span className="bg-orange-600 text-white font-heading font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-sm">
                Save {formatPrice(savings)} ({savingsPercent}% OFF)
              </span>
              <div className="text-[11px] text-slate-500 mt-1 font-medium">
                Best Rate Guaranteed
              </div>
            </div>
          </div>

          {/* Warranty Badge */}
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-emerald-900 text-sm font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-extrabold">{product.warranty}</div>
              <div className="text-xs font-normal text-emerald-700">Official company warranty card with store seal provided upon delivery.</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-heading font-bold text-sm text-slate-900 mb-1.5 uppercase tracking-wider">
              Product Overview
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Detailed Specifications */}
          <div>
            <h3 className="font-heading font-bold text-sm text-slate-900 mb-2.5 uppercase tracking-wider">
              Key Technical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Store Guarantees */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Free delivery in Shabqadar town</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Genuine Box-Packed</span>
            </div>
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Order or Inquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${STORE_INFO.phoneClean}`}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-heading font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Store: {STORE_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
