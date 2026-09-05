import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { DEALERSHIP_INFO, getWhatsAppInquiryUrl } from '../data/dealershipData';

interface NavbarProps {
  onOpenInventory?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInventory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Inventory', id: 'inventory' },
    { name: 'About Us', id: 'about' },
    { name: 'Why Choose Us', id: 'why-us' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071A3D]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
          : 'bg-[#071A3D]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with clean White Crown, Purple Script "Premium", and Orange Bold "IMPORTS" */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="group flex items-center transition-transform active:scale-95"
            aria-label="Premium Imports Homepage"
          >
            <BrandLogo size="md" showSubtitle />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-slate-200 hover:text-[#FF8A00] transition-colors relative py-1 cursor-pointer tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Direct Contact CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
              className="bg-[#FF8A00] hover:bg-[#E67A00] text-[#071A3D] font-heading font-black text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-[#FF8A00]/20 transition-all transform hover:-translate-y-0.5 active:scale-95 tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{DEALERSHIP_INFO.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
              className="bg-[#FF8A00] text-[#071A3D] p-2 rounded-lg font-bold text-xs"
              aria-label="Call Dealership"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#071A3D] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full flex items-center justify-between text-left py-3 px-3 rounded-xl text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-[#FF8A00] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
            <a
              href={`tel:${DEALERSHIP_INFO.contact.phoneClean}`}
              className="bg-[#FF8A00] text-[#071A3D] font-heading font-black text-sm py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 text-center tracking-wide"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-heading font-bold text-sm py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 text-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-3 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>Almas Khalil Car Village, Achini Payan, Peshawar</span>
          </div>
        </div>
      )}
    </nav>
  );
};
