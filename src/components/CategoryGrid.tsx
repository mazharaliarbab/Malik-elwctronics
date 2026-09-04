import React from 'react';
import { 
  Refrigerator, 
  Snowflake, 
  Fan, 
  Tv, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CATEGORIES, Category } from '../data/electronicsData.ts';

// Washing machine icon SVG component for crisp rendering
const WashingMachineIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    <circle cx="8" cy="6" r="1" />
    <circle cx="12" cy="6" r="1" />
  </svg>
);

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onQuickInquire: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickInquire
}) => {
  const getCategoryIcon = (id: string, className: string) => {
    switch (id) {
      case 'refrigerators':
        return <Refrigerator className={className} />;
      case 'air-conditioners':
        return <Snowflake className={className} />;
      case 'fans':
        return <Fan className={className} />;
      case 'washing-machines':
        return <WashingMachineIcon className={className} />;
      case 'televisions':
        return <Tv className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="categories" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <span>Explore Store Catalog</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Top Home Appliance Categories
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Authorized retailer carrying complete model ranges from Pakistan’s top tier manufacturers with official warranties.
          </p>
        </div>

        {/* Product Categories - Prominent Grid (5 items) */}
        {/* Large icons + category names (22-28px bold text), Hover effect with color change, White cards with shadows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border-2 flex flex-col justify-between relative overflow-hidden ${
                  isSelected 
                    ? 'border-blue-700 ring-2 ring-blue-700/20 bg-blue-50/20' 
                    : 'border-slate-100 hover:border-blue-600'
                }`}
              >
                {/* Subtle top color highlight stripe on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300 ${
                  isSelected ? 'bg-blue-700' : 'bg-slate-200 group-hover:bg-blue-600'
                }`} />

                <div>
                  {/* Category Lifestyle Image Thumbnail */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5 bg-slate-100">
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Large Icon */}
                    <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-blue-700 text-white' 
                        : 'bg-white text-blue-700 group-hover:bg-blue-700 group-hover:text-white'
                    }`}>
                      {getCategoryIcon(cat.id, 'w-6 h-6')}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      {cat.itemCount}+ Models
                    </div>
                  </div>

                  {/* Category Name: 22-28px bold text */}
                  <h3 className={`font-heading font-black text-[22px] sm:text-[25px] xl:text-[26px] leading-tight tracking-tight transition-colors duration-300 ${
                    isSelected 
                      ? 'text-blue-700' 
                      : 'text-slate-950 group-hover:text-blue-700'
                  }`}>
                    {cat.name}
                  </h3>

                  <p className="text-slate-500 text-sm font-medium mt-1">
                    {cat.tagline}
                  </p>

                  {/* Popular brands tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {cat.popularBrands.map((b) => (
                      <span 
                        key={b} 
                        className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded group-hover:bg-blue-50 group-hover:text-blue-800 transition-colors"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-bold">
                  <span className={`flex items-center gap-1 transition-colors ${
                    isSelected ? 'text-blue-700' : 'text-slate-600 group-hover:text-blue-700'
                  }`}>
                    <span>{isSelected ? 'Viewing Models' : 'View Deals'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickInquire(cat.name);
                    }}
                    className="text-orange-600 hover:text-orange-700 hover:underline cursor-pointer"
                  >
                    Rates
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categories Quick Filter Ribbon */}
        <div className="mt-10 bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Filter Catalog:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Products
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium hidden md:block">
            Showing in-stock items ready for pickup / delivery
          </div>
        </div>

      </div>
    </section>
  );
};
