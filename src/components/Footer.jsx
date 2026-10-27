import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { FlowerBudsLogo } from './FlowerBudsLogo.jsx';

export const Footer = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#19221C] text-[#E8E4DF] pt-20 pb-12 border-t border-[#29352D]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2B3830]">
          {/* Brand Info */}
          <div data-reveal className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <FlowerBudsLogo className="w-10 h-10" variant="colored" />
              <span className="font-serif text-3xl font-normal tracking-tight text-white block">
                Flower Buds
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#AAB4AD] max-w-sm leading-relaxed">
              Bespoke luxury wedding and event floral styling atelier with studios in Kurunegala and Homagama. Crafting immortal floral memories for weddings, traditional poruwa ceremonies, and functions islandwide.
            </p>
            <div className="pt-2 space-y-2 text-xs text-[#C5B49E]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-semibold">Business Hours</span>
              </div>
              <div className="pl-5 space-y-1 text-[#AAB4AD]">
                <p>Monday: 8:30 AM – 5:00 PM</p>
                <p>Tuesday – Sunday: 9:00 AM – 5:00 PM</p>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-[#C5B49E] font-semibold mb-3">
                Follow Our Work
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/flowerbudslk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Flower Buds on Instagram"
                  className="inline-flex items-center gap-2 rounded-full border border-[#465148] px-4 py-2 text-xs text-[#C5CFC8] hover:border-[#C5B49E] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/1H1XmTJfwd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Flower Buds on Facebook"
                  className="inline-flex items-center gap-2 rounded-full border border-[#465148] px-4 py-2 text-xs text-[#C5CFC8] hover:border-[#C5B49E] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div data-reveal style={{ '--reveal-delay': '80ms' }} className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#C5B49E] font-semibold">
              Explore
            </div>
            <ul className="space-y-2 text-xs text-[#C5CFC8]">
              <li><a href="#services" className="hover:text-white transition-colors">Floral Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">The Archive</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Event Planner</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Studios & Locations */}
          <div data-reveal style={{ '--reveal-delay': '160ms' }} className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#C5B49E] font-semibold">
              Branch Studios
            </div>
            <ul className="space-y-3 text-xs text-[#C5CFC8]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5B49E] shrink-0 mt-0.5" />
                <span>
                  <strong>Kurunegala Branch:</strong><br />
                  160 Dambulla Road, Kurunegala
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5B49E] shrink-0 mt-0.5" />
                <span>
                  <strong>Homagama Branch:</strong><br />
                  High Level Road, Homagama
                </span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Action */}
          <div data-reveal style={{ '--reveal-delay': '240ms' }} className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#C5B49E] font-semibold">
              Inquiries & Bookings
            </div>
            <div className="space-y-2 text-xs text-[#C5CFC8]">
              <a
                href="tel:+94778896644"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5B49E]" />
                <span>+94 77 889 6644 (WhatsApp)</span>
              </a>
              <a
                href="tel:+94771043761"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5B49E]" />
                <span>+94 77 104 3761</span>
              </a>
              <a
                href="mailto:inquiries@flowerbuds.lk"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5B49E]" />
                <span>inquiries@flowerbuds.lk</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-[#19221C] bg-[#E8DDD1] hover:bg-white rounded-full transition-colors cursor-pointer text-center"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F8B83]">
          <div>
            © {new Date().getFullYear()} Flower Buds Floral Design (Pvt) Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Freshly Sourced · Artistically Conditioned</span>
            <span aria-hidden="true">·</span>
            <span>Serving All Sri Lankan Venues</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
