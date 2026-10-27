import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST, poruwaImg, bouquetImg, receptionImg, heroImg } from '../data/flowerBudsData.js';

export const ServicesSection = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState(0);

  const visualPreviews = [
    {
      title: 'Poruwa & Mandap Artistry',
      image: poruwaImg,
      stems: 'Orchids, Jasmine, White Lotus, English Roses',
      desc: 'Architectural floral stages harmonizing ancestral Sri Lankan wedding customs with clean contemporary luxury.'
    },
    {
      title: 'Artisan Bridal Bouquets',
      image: bouquetImg,
      stems: 'David Austin Keira, Peach Ranunculus, Sweet Peas',
      desc: 'Handcrafted floral extensions of the bride, delicately bound in customized pure habotai silk ribbons.'
    },
    {
      title: 'Banquet & Candelabra Centerpieces',
      image: receptionImg,
      stems: 'Hydrangeas, Playa Blanca Roses, Amaranthus',
      desc: 'Bespoke high-candelabra and low-compote floral compositions engineered for unblocked conversation and royal presence.'
    },
    {
      title: 'Aisle Runways & Ceremony Arches',
      image: heroImg,
      stems: 'Delphinium, White Lilies, Hanging Ivy, Eucalyptus',
      desc: 'Freestanding structural floral gateways and floral meadow aisles creating an ethereal walkway for vows.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F5EFE8] border-t border-[#EAE1D6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-3">
              Artisanal Capabilities
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1E2320] leading-tight">
              Curated floral artistry for life's defining milestones.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#5A635B] max-w-md">
            From monumental ceremony installations to delicate hand-tied bridal posies, we oversee every stem with botanical precision and temperature control.
          </p>
        </div>

        {/* Feature Spotlight with interactive toggle */}
        <div data-reveal className="mb-20 bg-white rounded-2xl border border-[#E6DDD2] p-6 lg:p-8 shadow-xs">
          <div className="flex flex-wrap gap-2 border-b border-[#EFEAE2] pb-4 mb-8">
            {visualPreviews.map((preview, index) => (
              <button
                key={preview.title}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activeTab === index
                    ? 'bg-[#223326] text-white'
                    : 'text-[#6C6762] hover:text-[#1E2320] hover:bg-[#FAF6F2]'
                }`}
              >
                {preview.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-16/10 bg-[#EAE2D8] border border-[#E0D7CC]">
              <img
                src={visualPreviews[activeTab].image}
                alt={visualPreviews[activeTab].title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-medium uppercase tracking-widest text-[#8C6D58]">
                Featured Focus
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1E2320]">
                {visualPreviews[activeTab].title}
              </h3>
              <p className="text-sm text-[#556057] leading-relaxed">
                {visualPreviews[activeTab].desc}
              </p>
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#7A7570] block mb-1">
                  Signature Botanicals
                </span>
                <p className="text-xs text-[#223326] font-medium bg-[#FAF6F0] p-3 rounded-lg border border-[#EDE4D8]">
                  {visualPreviews[activeTab].stems}
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService(visualPreviews[activeTab].title)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#223326] hover:text-[#5B3E31] transition-colors cursor-pointer group"
                >
                  <span>Inquire for your date</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Numbered Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.number}
              data-reveal
              style={{ '--reveal-delay': `${(Number(service.number) - 1) * 90}ms` }}
              className="bg-[#FAF8F5] p-8 rounded-xl border border-[#E8DFD3] hover:border-[#C4B29E] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-light text-[#806294] tabular-nums">
                    {service.number}.
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C7B1D8] group-hover:bg-[#806294] transition-colors" />
                </div>
                <h4 className="font-serif text-xl md:text-2xl font-medium text-[#352A3C] mb-3 bg-[#F1EAF6] border-l-2 border-[#B79CCB] rounded-r-md px-3 py-2 group-hover:bg-[#EAE0F1] transition-colors">
                  {service.title}
                </h4>
                <div className="text-xs uppercase tracking-wider text-[#8A7A6F] mb-3">
                  {service.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#5A635B] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDE5DA] flex items-center justify-between text-xs text-[#6F7670]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#223326]" /> Fresh harvest sourcing
                </span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-semibold text-[#223326] hover:underline cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
