import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { CategoryGrid } from './components/CategoryGrid.tsx';
import { FeaturedProducts } from './components/FeaturedProducts.tsx';
import { TrustFeatures } from './components/TrustFeatures.tsx';
import { CustomerReviews } from './components/CustomerReviews.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { StickyContactBar } from './components/StickyContactBar.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { Footer } from './components/Footer.tsx';
import { Product } from './data/electronicsData.ts';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteCategoryPrefill, setQuoteCategoryPrefill] = useState<string>('');

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to featured section when a category is selected
    const el = document.getElementById('featured');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickInquire = (categoryName: string) => {
    setQuoteCategoryPrefill(categoryName);
    setIsQuoteModalOpen(true);
  };

  const handleExploreCategories = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-16 md:pb-12">
      {/* Header with Navigation & Live Status */}
      <Header 
        onOpenQuote={() => {
          setQuoteCategoryPrefill('');
          setIsQuoteModalOpen(true);
        }}
        onSelectCategory={handleSelectCategory}
      />

      {/* Hero Section:
          - Bold Headline: "Premium Electronics at Best Prices in Shabqadar" (48-64px)
          - Direct Contact CTAs: Call Now: 0312 9340205, WhatsApp, Visit Store
          - Store Hours & Status: "🟢 OPEN - Until 8:00 PM"
          - Trust Badges: 15+ Years Experience, Authentic Products, Best Prices Guaranteed
          - Lifestyle appliance showcase with blue-to-dark gradient overlay
      */}
      <main className="flex-1">
        <Hero 
          onExploreCategories={handleExploreCategories}
          onOpenQuote={() => {
            setQuoteCategoryPrefill('');
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Product Categories - Prominent Grid:
            Refrigerators | Air Conditioners | Fans | Washing Machines | Televisions
            Large icons + category names (22-28px bold text)
            Hover effect with color change
        */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onQuickInquire={handleQuickInquire}
        />

        {/* Featured Products:
            3-4 items (and filterable catalog) with bold pricing in PKR,
            official warranties, and instant WhatsApp & phone CTAs
        */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectProduct={(product) => setActiveProductModal(product)}
          onOpenQuote={() => {
            setQuoteCategoryPrefill('');
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Trust & Social Proof Badges & Authorized Brands */}
        <TrustFeatures />

        {/* Customer Reviews: ⭐⭐⭐⭐⭐ ratings & bold customer names */}
        <CustomerReviews />

        {/* Location Map Section: Interactive map, store hours, directions */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory}
        onOpenQuote={() => {
          setQuoteCategoryPrefill('');
          setIsQuoteModalOpen(true);
        }}
      />

      {/* WhatsApp + Phone Quick Contact Bar (Sticky at bottom) */}
      <StickyContactBar />

      {/* Product Detail Modal */}
      {activeProductModal && (
        <ProductModal 
          product={activeProductModal}
          onClose={() => setActiveProductModal(null)}
        />
      )}

      {/* Price Quote / Custom Package Modal */}
      {isQuoteModalOpen && (
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          prefillCategory={quoteCategoryPrefill}
        />
      )}
    </div>
  );
}
