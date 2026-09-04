import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  Star, 
  Zap, 
  Eye, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { Product, PRODUCTS, STORE_INFO } from '../data/electronicsData.ts';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectProduct: (product: Product) => void;
  onOpenQuote: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onSelectProduct,
  onOpenQuote
}) => {
  const [filterBrand, setFilterBrand] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const brandMatch = filterBrand === 'all' || p.brand === filterBrand;
    return categoryMatch && brandMatch;
  });

  const formatPrice = (val: number) => {
    return 'Rs. ' + val.toLocaleString('en-PK');
  };

  return (
    <section id="featured" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Zap className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
              <span>Special Cash Offers • Limited Stock</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Featured Electronics Deals
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Hand-picked verified bestselling models with manufacturer warranties and exclusive Shabqadar store discounts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              Need a Custom Package Quote?
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const savings = product.originalPrice - product.discountPrice;
            const savingsPercent = Math.round((savings / product.originalPrice) * 100);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative bg-slate-100 aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for photo depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-amber-400 text-blue-950 text-[11px] font-black uppercase px-2.5 py-1 rounded-md shadow tracking-wide">
                        {product.badge}
                      </div>
                    )}

                    {/* Stock Status Indicator */}
                    <div className="absolute top-3 right-3 bg-emerald-700 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                      In Stock
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md backdrop-blur-sm flex items-center gap-1.5 transition-all opacity-95 group-hover:opacity-100 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-700" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Product Content */}
                  <div className="p-5">
                    {/* Brand & Rating */}
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-extrabold text-blue-700 uppercase tracking-wide">
                        {product.brand}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-heading font-extrabold text-slate-950 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[44px]">
                      {product.name}
                    </h3>

                    {/* Warranty pill */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{product.warranty}</span>
                    </div>

                    {/* Key Specs bullets */}
                    <div className="mt-3 space-y-1 text-xs text-slate-600">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bold Pricing Section */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-xs text-slate-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </div>
                          {/* Bold Pricing: High contrast, heavy weight */}
                          <div className="font-heading font-black text-2xl text-slate-950 tracking-tight">
                            {formatPrice(product.discountPrice)}
                          </div>
                        </div>

                        {/* Savings Badge */}
                        <div className="text-right">
                          <span className="inline-flex items-center gap-0.5 bg-orange-100 text-orange-800 text-[11px] font-extrabold px-2 py-0.5 rounded">
                            <TrendingDown className="w-3 h-3 text-orange-600" />
                            Save {savingsPercent}%
                          </span>
                          <div className="text-[10px] text-slate-400 mt-0.5">Best Cash Rate</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="p-4 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Order via WhatsApp */}
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Assalam%20o%20Alaikum%20Malik%20Electronics%2C%20I%20want%20to%20order%20or%20inquire%20about:%20*${encodeURIComponent(product.name)}*%20priced%20at%20*${encodeURIComponent(formatPrice(product.discountPrice))}*.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors text-center tracking-wide"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Call for Deal */}
                    <a
                      href={`tel:${STORE_INFO.phoneClean}`}
                      className="bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors text-center tracking-wide"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full text-center text-xs font-bold text-slate-600 hover:text-blue-700 py-1 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Specifications & Warranty</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Delivery Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-amber-400 text-blue-950 font-black text-xs px-2.5 py-1 rounded uppercase tracking-wider">
              Doorstep Service
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              Buying for a Wedding or Complete House Setup?
            </h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Get an exclusive wholesale package quote with guaranteed lowest total cost and direct delivery to your home in Shabqadar, Matta, and Charsadda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenQuote}
              className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-heading font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer text-center"
            >
              Get Wedding Package Rates
            </button>
            <a
              href={`tel:${STORE_INFO.phoneClean}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-5 py-3.5 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call: {STORE_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
