import React from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import { heroImg } from '../data/flowerBudsData.js';

export const Hero = ({ onOpenBooking, onExplorePortfolio }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F4EBE3] rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EFE8DF] rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#7C6354] uppercase tracking-widest">
              <span>Bespoke Floral Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Kurunegala & Homagama Studios</span>
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E2320] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Sculpting fleeting blossoms into timeless celebrations.
            </h1>

            <p className="text-base sm:text-lg text-[#556057] leading-relaxed max-w-xl font-normal">
              Flower Buds crafts transcendent floral environments for luxury weddings, sacred poruwa ceremonies, and grand receptions. Every bloom is hand-curated from Nuwara Eliya and international artisanal growers.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#162219] transition-all transform hover:-translate-y-0.5 shadow-sm text-center cursor-pointer"
              >
                Reserve Your Wedding Date
              </button>

              <button
                type="button"
                onClick={onExplorePortfolio}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#223326] border border-[#C5B8AB] rounded-full hover:bg-[#EFEAE2] transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Portfolio</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quiet trust credentials */}
            <div className="pt-6 border-t border-[#EAE3DB] flex items-center gap-6 text-xs text-[#6F7670]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8C6D58]" />
                <span>Now booking for 2026 & 2027 seasons</span>
              </div>
              <span aria-hidden="true" className="text-[#D0C7BD]">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8C6D58]" />
                <span>Cold-chain conditioned blooms</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Hero Visual Carrier) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl aspect-16/9 lg:aspect-4/3 bg-[#EAE2D8] border border-[#E2D8CC] group">
              <img
                src={heroImg}
                alt="Luxury outdoor wedding ceremony floral arch and petal aisle by Flower Buds"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Minimalist image caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/80 font-medium">The Whispering Meadow Arch</p>
                  <p className="font-serif text-lg text-white font-medium">Cinnamon Bentota Beach Lawn</p>
                </div>
                <span className="text-xs text-white/90 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full">
                  Over 3,400 stems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metrics Strip in full-width row */}
        <div className="mt-16 pt-10 border-t border-[#EAE3DB] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-3xl md:text-4xl text-[#1E2320] font-normal tabular-nums">650+</div>
            <div className="text-xs uppercase tracking-wider text-[#7A7570] mt-1">Weddings & Galas Styled</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-[#1E2320] font-normal tabular-nums">12 Years</div>
            <div className="text-xs uppercase tracking-wider text-[#7A7570] mt-1">Floral Architecture Mastery</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-[#1E2320] font-normal tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#7A7570] mt-1">Fresh Farm Cold-Chain</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-[#1E2320] font-normal tabular-nums">Islandwide</div>
            <div className="text-xs uppercase tracking-wider text-[#7A7570] mt-1">Kurunegala · Homagama · Islandwide Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};
