import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

export const BudgetEstimator = ({ onApplyEstimate }) => {
  const [eventType, setEventType] = useState('wedding');
  const [styleTier, setStyleTier] = useState('classic');
  const [tableCount, setTableCount] = useState(18);
  const [includeStage, setIncludeStage] = useState(true);
  const [includeEntranceArch, setIncludeEntranceArch] = useState(true);
  const [includeBouquets, setIncludeBouquets] = useState(true);
  const [includeAisleRunway, setIncludeAisleRunway] = useState(true);
  const [includeCeilingCanopy, setIncludeCeilingCanopy] = useState(false);
  const [includeCarDecor, setIncludeCarDecor] = useState(true);
  const [venueLocation, setVenueLocation] = useState('Kurunegala & North Western');

  const handleReset = () => {
    setEventType('wedding');
    setStyleTier('classic');
    setTableCount(18);
    setIncludeStage(true);
    setIncludeEntranceArch(true);
    setIncludeBouquets(true);
    setIncludeAisleRunway(true);
    setIncludeCeilingCanopy(false);
    setIncludeCarDecor(true);
    setVenueLocation('Kurunegala & North Western');
  };

  const handleApply = () => {
    onApplyEstimate({
      eventType,
      styleTier,
      tableCount,
      includeStage,
      includeEntranceArch,
      includeBouquets,
      includeAisleRunway,
      includeCeilingCanopy,
      includeCarDecor,
      venueLocation
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#F5EFE8] border-t border-[#EAE1D6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#7C6354] font-medium mb-3 flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Floral Planner</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1E2320] leading-tight mb-4">
            Floral Specification Planner
          </h2>
          <p className="text-sm md:text-base text-[#5A635B]">
            Configure your celebration elements below to view your personalized setup summary and request a custom quotation.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E6DDD2] shadow-sm overflow-hidden p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Controls Configuration */}
            <div className="lg:col-span-7 space-y-8">
              {/* Event Type selector */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-3">
                  01. Event Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'wedding', label: 'Wedding & Poruwa' },
                    { id: 'homecoming', label: 'Homecoming' },
                    { id: 'engagement', label: 'Engagement' },
                    { id: 'corporate', label: 'Corporate Gala' }
                  ].map((evt) => (
                    <button
                      key={evt.id}
                      type="button"
                      onClick={() => setEventType(evt.id)}
                      className={`px-3 py-2.5 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                        eventType === evt.id
                          ? 'bg-[#223326] text-white border-[#223326]'
                          : 'bg-[#FAF8F5] text-[#556057] border-[#EAE3DA] hover:border-[#C4B29E]'
                      }`}
                    >
                      {evt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Styling Density Tier */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-3">
                  02. Styling Density & Bloom Quality
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'minimalist',
                      name: 'Minimalist Chic',
                      desc: 'Clean foliage, focal garden roses, sleek ceramic compotes.'
                    },
                    {
                      id: 'classic',
                      name: 'Classic Grandeur',
                      desc: 'Lush English roses, orchids, jasmine, elevated candelabras.'
                    },
                    {
                      id: 'luxury',
                      name: 'Royal Haute Couture',
                      desc: 'Dense imported blooms, suspended waterfalls, gilded stages.'
                    }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setStyleTier(tier.id)}
                      className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        styleTier === tier.id
                          ? 'bg-[#FAF6F0] border-[#8C6D58] ring-1 ring-[#8C6D58]'
                          : 'bg-[#FAF8F5] border-[#EAE3DA] hover:border-[#D0C2B2]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#1E2320] mb-1">{tier.name}</div>
                        <div className="text-[11px] text-[#69726A] leading-relaxed">{tier.desc}</div>
                      </div>
                      <div className="mt-2 text-[10px] uppercase font-semibold text-[#8C6D58]">
                        {tier.id === 'classic' ? 'Most Selected' : tier.id === 'luxury' ? 'Premium Stems' : 'Essential'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Banquet Tables Slider */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EDE5DB]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320]">
                    03. Guest Banquet Tables
                  </label>
                  <span className="font-serif text-lg text-[#1E2320] font-semibold tabular-nums">
                    {tableCount} Tables ({tableCount * 10} approx. guests)
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="1"
                  value={tableCount}
                  onChange={(e) => setTableCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E0D7CC] rounded-lg appearance-none cursor-pointer accent-[#223326]"
                />
                <div className="flex justify-between text-[11px] text-[#7A7570] mt-1 tabular-nums">
                  <span>Intimate (4 tables)</span>
                  <span>Average (18–25 tables)</span>
                  <span>Grand Ballroom (40 tables)</span>
                </div>
              </div>

              {/* Focal Elements Toggles */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-3">
                  04. Focal Elements & Installations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: 'Poruwa / Main Ceremony Stage',
                      state: includeStage,
                      setState: setIncludeStage,
                      note: 'Architectural floral backdrop & lighting'
                    },
                    {
                      label: 'Grand Entrance Floral Arch',
                      state: includeEntranceArch,
                      setState: setIncludeEntranceArch,
                      note: 'Walk-in statement gateway'
                    },
                    {
                      label: 'Bridal Bouquet & Retinue Posies',
                      state: includeBouquets,
                      setState: setIncludeBouquets,
                      note: 'Hand-tied with silk ribbons'
                    },
                    {
                      label: 'Aisle Runway Floral Pods',
                      state: includeAisleRunway,
                      setState: setIncludeAisleRunway,
                      note: 'Petal carpets & meadow clusters'
                    },
                    {
                      label: 'Suspended Ceiling Canopy',
                      state: includeCeilingCanopy,
                      setState: setIncludeCeilingCanopy,
                      note: 'Overhead floating floral installation'
                    },
                    {
                      label: 'Bridal Car Floral Decor',
                      state: includeCarDecor,
                      setState: setIncludeCarDecor,
                      note: 'Bonnet garland & door accents'
                    }
                  ].map((elem, idx) => (
                    <label
                      key={idx}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        elem.state
                          ? 'bg-[#FAF6F2] border-[#CBB8A8]'
                          : 'bg-white border-[#EAE3DA] opacity-65'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={elem.state}
                        onChange={(e) => elem.setState(e.target.checked)}
                        className="mt-0.5 rounded text-[#223326] focus:ring-[#223326] cursor-pointer"
                      />
                      <div>
                        <div className="text-xs font-semibold text-[#1E2320]">{elem.label}</div>
                        <div className="text-[11px] text-[#7A7570]">{elem.note}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#1E2320] block mb-2">
                  05. Preferred Branch / Event Region
                </label>
                <select
                  value={venueLocation}
                  onChange={(e) => setVenueLocation(e.target.value)}
                  className="w-full text-xs font-medium bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl px-3.5 py-2.5 text-[#1E2320] focus:outline-hidden focus:border-[#223326]"
                >
                  <option value="Kurunegala & North Western">Kurunegala Branch (North Western Province & Wayamba)</option>
                  <option value="Homagama & Western Province">Homagama Branch (Western Province & Colombo Suburbs)</option>
                  <option value="Kandy & Central Province">Central Province (Kandy, Nuwara Eliya)</option>
                  <option value="Southern Coastal Belt">Southern Coast (Galle, Bentota, Wadduwa)</option>
                  <option value="Islandwide Destination">Other Islandwide Destination</option>
                </select>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 md:p-8 rounded-2xl border border-[#E6DDD2] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE1D6] mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#7C6354] font-medium block">
                      Specification Summary
                    </span>
                    <span className="text-xs text-[#7A7570]">
                      {styleTier.charAt(0).toUpperCase() + styleTier.slice(1)} Styling · {tableCount} Tables
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-1.5 text-xs text-[#7A7570] hover:text-[#1E2320] flex items-center gap-1 cursor-pointer"
                    title="Reset to default"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Selected Inclusions List (No Price Tags) */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                    <span className="text-[#38433C] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#223326]" />
                      <span>Banquet Centerpieces</span>
                    </span>
                    <span className="font-semibold text-[#1E2320] text-xs">
                      {tableCount} Tables ({tableCount * 10} Guests)
                    </span>
                  </div>

                  {includeStage && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Poruwa / Stage Artistry</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  {includeEntranceArch && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Entrance Floral Arch</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  {includeBouquets && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Bridal Retinue & Boutonnières</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  {includeAisleRunway && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Ceremony Aisle Meadow Clusters</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  {includeCeilingCanopy && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Suspended Floral Ceiling Canopy</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  {includeCarDecor && (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                      <span className="text-[#38433C] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#223326]" />
                        <span>Bridal Vehicle Garlands</span>
                      </span>
                      <span className="text-[11px] text-[#7C6354] font-medium">Included</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-[#EDE5DB]">
                    <span className="text-[#38433C] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#223326]" />
                      <span>Setup Region</span>
                    </span>
                    <span className="text-[11px] text-[#1E2320] font-semibold">{venueLocation}</span>
                  </div>
                </div>

                {/* Custom Proposal Callout */}
                <div className="mt-8 pt-6 border-t border-[#EAE1D6]">
                  <div className="text-xs uppercase tracking-wider text-[#7C6354] font-medium mb-1">
                    Bespoke Quotation
                  </div>
                  <div className="font-serif text-2xl md:text-3xl text-[#1E2320] font-semibold">
                    Personalized Quote on Request
                  </div>
                  <div className="text-xs text-[#7A7570] mt-1">
                    Customized transparent pricing formulated to your exact venue dimensions & seasonal bloom harvest
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#EAE2D7]/70 rounded-xl text-[11px] text-[#5A635B] leading-relaxed">
                  <span className="font-semibold text-[#1E2320]">Includes: </span>
                  Artisan floral labor, on-site setup team, fresh cold-chain stems, vessel rentals, and midnight post-event dismantle.
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#223326] rounded-full hover:bg-[#162219] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Proposal With This Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
