import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { FlowerBudsLogo } from './FlowerBudsLogo.jsx';

export const Navbar = ({
  onOpenBooking,
  petalsEnabled,
  onTogglePetals
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Event Planner', href: '#estimator' },
    { label: 'FAQs', href: '#faq' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E1D9] shadow-xs py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Single brand wordmark with authentic company logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#1E2320] hover:text-[#5B3E31] transition-colors whitespace-nowrap shrink-0 group"
          >
            <FlowerBudsLogo className="w-8 h-8 md:w-9 md:h-9" variant="colored" />
            <span>Flower Buds</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A554E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1E2320] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1E2320] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button + Petal toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onTogglePetals}
              title={petalsEnabled ? 'Pause floating petals' : 'Enable floating petals'}
              className={`p-2 rounded-full border transition-all text-xs font-medium flex items-center gap-1.5 cursor-pointer ${
                petalsEnabled
                  ? 'border-[#D9C4B5] bg-[#F4ECE4] text-[#5B3E31]'
                  : 'border-[#E0D8D0] bg-white/60 text-[#7A7570] hover:bg-white'
              }`}
              aria-label="Toggle floating flower petals"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">Petals {petalsEnabled ? 'On' : 'Off'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#17241A] transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#223326] hover:bg-[#EAE4DC] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6 text-center">
            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <FlowerBudsLogo className="w-14 h-14" variant="colored" />
              <div className="font-serif text-3xl text-[#1E2320]">Flower Buds</div>
              <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium">
                Kurunegala · Homagama
              </div>
            </div>
            <nav className="flex flex-col space-y-5 text-base font-medium text-[#38433C]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-[#1E2320] border-b border-[#EAE3DB] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 space-y-3 text-center">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#17241A] transition-colors shadow-sm cursor-pointer"
            >
              Book Consultation
            </button>
            <p className="text-xs text-[#7A7570] pt-2">
              Kurunegala Atelier · Homagama Studio · Islandwide Setup
            </p>
          </div>
        </div>
      )}
    </>
  );
};
