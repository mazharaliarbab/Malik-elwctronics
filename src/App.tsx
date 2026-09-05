import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickActionBar } from './components/QuickActionBar';
import { FeaturedInventory } from './components/FeaturedInventory';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { BuyingProcess } from './components/BuyingProcess';
import { CustomerExperience } from './components/CustomerExperience';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FixedMobileBar } from './components/FixedMobileBar';
import { CarDetailModal } from './components/CarDetailModal';
import { Car } from './data/dealershipData';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleScrollToInventory = () => {
    const el = document.getElementById('inventory');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071A3D] text-slate-100 font-sans selection:bg-[#FF8A00] selection:text-[#071A3D] relative pb-16 lg:pb-0">
      {/* 1. STICKY NAVIGATION BAR */}
      <Navbar onOpenInventory={handleScrollToInventory} />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <Hero onViewCars={handleScrollToInventory} />

        {/* 3. QUICK ACTION BAR */}
        <QuickActionBar onViewInventory={handleScrollToInventory} />

        {/* 4. FEATURED INVENTORY */}
        <FeaturedInventory onSelectCar={(car) => setSelectedCar(car)} />

        {/* 5. WHY PREMIUM IMPORTS */}
        <WhyChooseUs />

        {/* 6. ABOUT PREMIUM IMPORTS */}
        <AboutUs />

        {/* 7. CAR BUYING PROCESS */}
        <BuyingProcess />

        {/* 8. CUSTOMER EXPERIENCE (TESTIMONIALS) */}
        <CustomerExperience />

        {/* 9. LOCATION SECTION */}
        <LocationSection />

        {/* 10. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* 11. FIXED MOBILE ACTION BUTTONS (MOBILE ONLY) */}
      <FixedMobileBar />

      {/* VEHICLE SPECIFICATION MODAL */}
      {selectedCar && (
        <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}
