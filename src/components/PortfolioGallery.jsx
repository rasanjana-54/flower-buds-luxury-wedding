import React, { useEffect, useMemo, useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/flowerBudsData.js';
import { Eye, MapPin, X, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export const PortfolioGallery = ({ onInquireItem }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Commissions' },
    { id: 'poruwa', label: 'Poruwa & Stages' },
    { id: 'bouquets', label: 'Bridal Bouquets' },
    { id: 'reception', label: 'Receptions & Events' },
    { id: 'arches', label: 'Ceremonial Arches' }
  ];

  const filteredItems = useMemo(
    () => selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );
  const activeModalIndex = filteredItems.findIndex((item) => item.id === activeModalItem?.id);

  useEffect(() => {
    if (!activeModalItem) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveModalItem(null);
      } else if (event.key === 'ArrowRight' && filteredItems.length > 1) {
        setActiveModalItem(filteredItems[(activeModalIndex + 1) % filteredItems.length]);
      } else if (event.key === 'ArrowLeft' && filteredItems.length > 1) {
        setActiveModalItem(filteredItems[(activeModalIndex - 1 + filteredItems.length) % filteredItems.length]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalItem, activeModalIndex, filteredItems]);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-3">
              Selected Works
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1E2320]">
              The Flower Buds Archive
            </h2>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8C6D58] mt-3">
              {PORTFOLIO_ITEMS.length} floral moments, thoughtfully gathered
            </p>
          </div>
          <p className="text-sm md:text-base text-[#5A635B] max-w-md">
            Explore our selected floral work and real celebration photos, each one styled to make a moment feel unforgettable.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#EAE3DA] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#223326] text-white shadow-xs'
                  : 'text-[#6C6762] hover:text-[#1E2320] hover:bg-[#EFEAE2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-[#E8E1D7] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className="relative overflow-hidden bg-[#ECE4DA]"
                style={{ aspectRatio: item.imageAspect || '4 / 3' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  aria-label={`View ${item.title}`}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white"
                >
                  <span className="px-4 py-2 bg-white/95 text-[#223326] text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-2 shadow-sm">
                    <Eye className="w-3.5 h-3.5" /> View photo
                  </span>
                </button>

                <div className="absolute bottom-3 left-3 pointer-events-none bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {(item.venue || item.location) && (
                    <div className="flex items-center gap-2 text-xs text-[#7A7570] mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6D58] shrink-0" />
                      <span>{item.venue || item.location}</span>
                      {item.venue && item.location && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>
                  )}

                  <h3 className="font-serif text-xl lg:text-2xl text-[#1E2320] font-medium mb-2 group-hover:text-[#5B3E31] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556057] line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EAE2] flex items-center justify-between">
                  {/* Subtle palette circles */}
                  <div className="flex items-center gap-1.5" title="Curated floral palette">
                    {item.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-black/10 inline-block"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#223326] hover:text-[#5B3E31] inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6D58]"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveModalItem(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            className="bg-[#FAF8F5] max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E6DDD2] relative my-auto"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#223326] transition-colors shadow-xs cursor-pointer"
              aria-label="Close dialog"
              autoFocus
            >
              <X className="w-5 h-5" />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(filteredItems[(activeModalIndex - 1 + filteredItems.length) % filteredItems.length])}
                  aria-label="View previous photo"
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-[#223326] shadow-md transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(filteredItems[(activeModalIndex + 1) % filteredItems.length])}
                  aria-label="View next photo"
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-[#223326] shadow-md transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto">
              {/* Image side */}
              <div className="md:col-span-7 bg-[#2B2B28] relative min-h-[300px] flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full max-h-[78vh] object-contain"
                  decoding="async"
                />
              </div>

              {/* Information side */}
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-1">
                    {activeModalItem.categoryLabel}
                  </div>
                  <h3 id="portfolio-modal-title" className="font-serif text-2xl md:text-3xl text-[#1E2320] leading-tight mb-2">
                    {activeModalItem.title}
                  </h3>
                  {(activeModalItem.venue || activeModalItem.location) && (
                    <p className="text-xs text-[#7A7570] flex items-center gap-1.5 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6D58]" />
                      <span>
                        {activeModalItem.venue && activeModalItem.location
                          ? `${activeModalItem.venue}, ${activeModalItem.location}`
                          : activeModalItem.venue || activeModalItem.location}
                      </span>
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#556057] leading-relaxed mb-6">
                    {activeModalItem.description}
                  </p>

                  {/* Floral Recipe List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider text-[#7C6354] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeModalItem.category === 'events' ? 'Floral Details' : 'Featured Floral Recipe'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#3D4740] bg-[#F4EDE4] p-3.5 rounded-lg border border-[#E9DFD3]">
                      {activeModalItem.floralRecipe.map((flower, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D58]" />
                          <span>{flower}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className="text-xs text-[#6B5A4E] italic bg-[#EDE4D8]/60 p-3 rounded-lg border border-[#E2D5C7]">
                    "{activeModalItem.highlight}"
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE2D8] flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-xs text-[#7A7570] sm:mr-auto">
                    {activeModalIndex + 1} / {filteredItems.length}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const item = activeModalItem;
                      setActiveModalItem(null);
                      onInquireItem(item);
                    }}
                    className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#162219] transition-colors text-center cursor-pointer"
                  >
                    Inquire for this style
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
