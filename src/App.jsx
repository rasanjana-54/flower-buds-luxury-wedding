import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { PortfolioGallery } from './components/PortfolioGallery.jsx';
import { BudgetEstimator } from './components/BudgetEstimator.jsx';
import { DesignProcess } from './components/DesignProcess.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { Footer } from './components/Footer.jsx';
import { BookingModal } from './components/BookingModal.jsx';
import { PetalEffect } from './components/PetalEffect.jsx';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = () => {
    setBookingInitialData({});
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceName) => {
    setBookingInitialData({
      specialRequests: `Interested in floral styling for: ${serviceName}`
    });
    setIsBookingOpen(true);
  };

  const handleInquirePortfolioItem = (item) => {
    setBookingInitialData({
      specialRequests: `Inquiring about style similar to "${item.title}" (${item.categoryLabel}${item.venue ? ` at ${item.venue}` : ''}). Preferred palette: ${item.palette.join(', ')}`,
      venue: item.venue || ''
    });
    setIsBookingOpen(true);
  };

  const handleApplyEstimate = (selection) => {
    const includedElements = [];
    if (selection.includeStage) includedElements.push('Ceremony Poruwa/Stage');
    if (selection.includeEntranceArch) includedElements.push('Entrance Arch');
    if (selection.includeBouquets) includedElements.push('Bridal Retinue Bouquets');
    if (selection.includeAisleRunway) includedElements.push('Aisle Meadow Runway');
    if (selection.includeCeilingCanopy) includedElements.push('Ceiling Hanging Canopy');
    if (selection.includeCarDecor) includedElements.push('Bridal Car Floral Decor');

    setBookingInitialData({
      eventType: selection.eventType === 'wedding'
        ? 'Wedding & Poruwa'
        : selection.eventType === 'homecoming'
        ? 'Homecoming Reception'
        : selection.eventType === 'engagement'
        ? 'Engagement & Registration'
        : 'Corporate Gala & Function',
      venue: selection.venueLocation,
      specialRequests: `Configured via online floral planner (${selection.styleTier} styling, ${selection.tableCount} tables in ${selection.venueLocation}). Inclusions: ${includedElements.join(', ')}.`
    });
    setIsBookingOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2320] flex flex-col font-sans selection:bg-[#E8D8CB] selection:text-[#3B2C24]">
      {/* Gentle Ambient Petals Effect */}
      <PetalEffect enabled={petalsEnabled} />

      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplorePortfolio={() => scrollToSection('portfolio')}
        />

        <ServicesSection onSelectService={handleSelectService} />

        <PortfolioGallery onInquireItem={handleInquirePortfolioItem} />

        <BudgetEstimator onApplyEstimate={handleApplyEstimate} />

        <DesignProcess />

        <FaqSection />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Consultation Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/94778896644?text=Hello%20Flower%20Buds!%20I%20would%20like%20to%20inquire%20about%20wedding%20and%20function%20floral%20decorations."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat directly with Flower Buds on WhatsApp"
          className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            WhatsApp Inquiry
          </span>
        </a>
      </aside>
    </div>
  );
}
