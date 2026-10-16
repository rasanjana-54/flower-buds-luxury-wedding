import React from 'react';
import { Palette, Compass, Flower2, Clock } from 'lucide-react';

export const DesignProcess = () => {
  const steps = [
    {
      number: '01',
      icon: Palette,
      title: 'Vision & Color Harmony',
      description: 'We meet in our studio or virtually to explore your wedding theme, bridal sarees, gown silhouettes, and venue architecture to formulate a bespoke floral color harmony.'
    },
    {
      number: '02',
      icon: Compass,
      title: 'Structural Architecture & Blueprint',
      description: 'Our floral architect designs scale elevations for your Poruwa, ceremonial arch, and elevated centerpieces, ensuring sightlines and guest flow are completely unobstructed.'
    },
    {
      number: '03',
      icon: Flower2,
      title: 'Cold-Chain Harvest Sourcing',
      description: 'Blooms are reserved weeks in advance with select highland Nuwara Eliya farms and Dutch auctions, kept conditioned in our refrigerated floral atelier until wedding morning.'
    },
    {
      number: '04',
      icon: Clock,
      title: 'Dawn Setup & Midnight Care',
      description: 'Our team arrives 6–8 hours prior to guest arrival. We place every petal, test uplighting, deliver pristine bridal bouquets in chilled water vessels, and handle complete midnight dismantling.'
    }
  ];

  return (
    <section className="py-24 bg-[#EEE5F5] border-t border-[#DCCFEA]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-3">
            The Flower Buds Journey
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1E2320] leading-tight mb-4">
            How We Bring Your Floral Vision to Life
          </h2>
          <p className="text-sm md:text-base text-[#5A635B]">
            From your very first moodboard to the final dance under suspended floral canopies, our meticulous process guarantees flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8DFD3] flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#8C6D58] tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#EFE7DE] flex items-center justify-center text-[#223326]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#1E2320] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556057] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDE4D8] text-[11px] uppercase tracking-wider text-[#7C6354] font-medium">
                  Phase {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
