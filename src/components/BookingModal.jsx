import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';
import { FlowerBudsLogo } from './FlowerBudsLogo.jsx';

export const BookingModal = ({
  isOpen,
  onClose,
  initialData = {}
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Wedding & Poruwa',
    branch: 'Kurunegala Branch',
    venue: '',
    estimatedBudget: '',
    colorPalette: 'Blush & Ivory with Gold Accents',
    specialRequests: '',
    selectedPackage: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
        selectedPackage: initialData.selectedPackage || prev.selectedPackage,
        estimatedTotal: initialData.estimatedTotal || prev.estimatedTotal
      }));
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = `FB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingReference(randomRef);
    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Flower Buds team! I would like to check availability and schedule a floral styling consultation.\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Event Type:* ${formData.eventType}\n` +
      `*Branch Studio:* ${formData.branch}\n` +
      `*Date:* ${formData.eventDate || 'TBD'}\n` +
      `*Venue:* ${formData.venue || 'Not yet finalized'}\n` +
      (formData.estimatedBudget ? `*Budget Range:* ${formData.estimatedBudget}\n` : '') +
      `*Color Palette:* ${formData.colorPalette}\n` +
      (formData.specialRequests ? `*Notes:* ${formData.specialRequests}\n` : '') +
      `*Ref:* ${bookingReference || 'Web-Direct'}`;

    return `https://wa.me/94778896644?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E6DDD2] relative my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#223326] transition-colors shadow-xs cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 md:p-10 max-h-[88vh] overflow-y-auto">
            <div className="mb-6 flex items-start gap-4">
              <FlowerBudsLogo className="w-12 h-12 shrink-0 mt-1" variant="colored" />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kurunegala · Homagama Studios</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1E2320]">
                  Reserve Your Floral Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#556057] mt-1">
                  Share your wedding date and floral vision. Our senior floral director will review your details and prepare a tailored inspiration deck.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senali Fernando"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 77 889 6644"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Celebration Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  >
                    <option value="Wedding & Poruwa">Wedding & Poruwa Ceremony</option>
                    <option value="Homecoming Reception">Homecoming Reception</option>
                    <option value="Church Wedding Ceremony">Church Wedding Ceremony</option>
                    <option value="Destination Beach Wedding">Destination Beach Wedding</option>
                    <option value="Corporate Gala & Function">Corporate Gala & Function</option>
                    <option value="Engagement & Registration">Engagement & Registration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Confirmed or Desired Venue
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grand Monarch / White Haven / Hotel / Home"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                  Nearest Branch Studio for Consultation *
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                >
                  <option value="Kurunegala Branch">Kurunegala Branch (Colombo Road, Kurunegala)</option>
                  <option value="Homagama Branch">Homagama Branch (High Level Road, Homagama)</option>
                  <option value="Online / Direct On-Site">Online / Direct On-Site Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Preferred Color Palette
                  </label>
                  <select
                    value={formData.colorPalette}
                    onChange={(e) => setFormData({ ...formData, colorPalette: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  >
                    <option value="Blush & Ivory with Gold Accents">Blush, Peach & Ivory with Gold Accents</option>
                    <option value="Sacred Lotus White & Jasmine Green">Sacred Lotus White & Jasmine Botanical</option>
                    <option value="Tuscan Sunset Peach & Terracotta">Tuscan Sunset Peach & Terracotta</option>
                    <option value="Royal Emerald, Midnight Blue & White">Royal Emerald, Midnight Blue & White</option>
                    <option value="Pastel Lavender & Wild Garden Meadow">Pastel Lavender & Wild Garden Meadow</option>
                    <option value="Other Bespoke Palette">Other Bespoke Custom Palette</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                    Approximate Budget (LKR)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rs. 400,000 - 800,000"
                    value={formData.estimatedBudget}
                    onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                    className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-1">
                  Floral Inclusions & Vision Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details such as bridal retinue count, poruwa style preference, favorite flowers (roses, orchids, jasmine), or specific venue setups..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full text-xs bg-white border border-[#DDD3C7] rounded-xl px-3.5 py-3 text-[#1E2320] focus:outline-hidden focus:border-[#223326] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#162219] transition-all transform hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Floral Consultation Request</span>
                </button>
              </div>

              <p className="text-[11px] text-[#7A7570] text-center pt-1">
                No payment required for initial consultation. Our floral director will respond within 24 hours.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="flex justify-center mb-2">
              <FlowerBudsLogo className="w-16 h-16" variant="colored" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#7C6354] font-semibold">
                Inquiry Received · {formData.branch}
              </span>
              <h3 className="font-serif text-3xl text-[#1E2320]">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#556057] max-w-md mx-auto">
                Your consultation request for <span className="font-semibold text-[#1E2320]">{formData.eventDate}</span> has been logged under reference code:
              </p>
              <div className="font-serif text-2xl font-bold text-[#8C6D58] py-2 tracking-wider">
                {bookingReference}
              </div>
            </div>

            <div className="bg-[#FAF5EF] p-4 rounded-2xl border border-[#EDE3D6] text-xs text-[#5A635B] max-w-md mx-auto text-left space-y-1.5">
              <div><span className="font-medium text-[#1E2320]">Branch Studio:</span> {formData.branch}</div>
              <div><span className="font-medium text-[#1E2320]">Celebration:</span> {formData.eventType}</div>
              <div><span className="font-medium text-[#1E2320]">Venue:</span> {formData.venue || 'To be confirmed'}</div>
              <div><span className="font-medium text-[#1E2320]">Palette:</span> {formData.colorPalette}</div>
            </div>

            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly On WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-[#223326] bg-[#EAE2D7] hover:bg-[#DFD6CB] rounded-full transition-colors cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
