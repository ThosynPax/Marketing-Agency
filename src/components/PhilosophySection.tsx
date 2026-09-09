import { useState } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { philosophyPillars } from '../data/agencyData';
import { Check, Sparkles, ChevronRight, X } from 'lucide-react';

export function PhilosophySection() {
  const [activeModalPillar, setActiveModalPillar] = useState<string | null>(null);

  const activePillar = philosophyPillars.find(p => p.id === activeModalPillar);

  return (
    <section
      id="philosophy"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 text-center"
      aria-label="Agency philosophy"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-[13px] font-semibold text-neutral-600 uppercase tracking-wider">
          <span className="text-[#EAA838]">
            <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
          </span>
          <span>MY PHILOSOPHY</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
          <span className="block text-[#111111]">Strategist-Led</span>
          <span className="block text-neutral-400 font-bold mt-1">Built On Data</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl mx-auto text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
          I Don't Just Create Visuals; I Build Systems Backed By Rigorous Analysis To Ensure Your Business Goals Are Met With Precision
        </p>

        {/* 3 Pillars Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* CARD 1: Digital Audits */}
          <div
            id="philosophy-card-audits"
            className="bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group cursor-pointer"
            onClick={() => setActiveModalPillar('digital-audits')}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-neutral-900">Digital Audits</h3>
                <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#EAA838] transition-colors flex items-center gap-1">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Graphic Icon: Minimalist circular magnifying glass with plus + */}
              <div className="my-8 sm:my-10 flex items-center justify-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-300 flex items-center justify-center text-white relative shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl font-extrabold">+</span>
                    {/* Magnifier handle */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-4 bg-neutral-400 rounded-sm transform rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4">
              Identify gaps and opportunities in your current framework to optimize performance and growth.
            </p>
          </div>

          {/* CARD 2: Growth Systems */}
          <div
            id="philosophy-card-systems"
            className="bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group cursor-pointer"
            onClick={() => setActiveModalPillar('growth-systems')}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-neutral-900">Growth Systems</h3>
                <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#EAA838] transition-colors flex items-center gap-1">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Graphic Icon: Network nodes hierarchy symbol */}
              <div className="my-8 sm:my-10 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    {/* Root node */}
                    <div className="w-10 h-10 rounded-xl bg-neutral-300 flex items-center justify-center" />
                    {/* Branch connector */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-neutral-300" />
                        <div className="w-10 h-10 rounded-xl bg-neutral-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-1 bg-neutral-300" />
                        <div className="w-10 h-10 rounded-xl bg-neutral-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4">
              Build scalable marketing funnels and automated systems that convert visitors into loyal clients
            </p>
          </div>

          {/* CARD 3: Data-Driven ROI */}
          <div
            id="philosophy-card-roi"
            className="bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-neutral-300 transition-all duration-300 group cursor-pointer"
            onClick={() => setActiveModalPillar('data-driven-roi')}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-neutral-900">Data-Driven ROI</h3>
                <span className="text-xs font-semibold text-neutral-400 group-hover:text-[#EAA838] transition-colors flex items-center gap-1">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Graphic Icon: Easel board with bar charts */}
              <div className="my-8 sm:my-10 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center">
                    {/* Board */}
                    <div className="w-24 h-18 rounded-xl bg-neutral-300 flex items-end justify-center gap-2 p-2.5 pb-2">
                      <div className="w-2.5 h-6 bg-neutral-100 rounded-sm" />
                      <div className="w-2.5 h-10 bg-neutral-100 rounded-sm" />
                      <div className="w-2.5 h-13 bg-[#EAA838] rounded-sm" />
                    </div>
                    {/* Stand tripod legs */}
                    <div className="w-3 h-3 bg-neutral-400 rounded-full mt-1" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4">
              Transform complex analytics into actionable insights for smarter, faster decision-making
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {activePillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left border border-neutral-100">
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3B333]/20 text-neutral-900 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA838]" />
              <span>{activePillar.badge}</span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900">
              {activePillar.title}
            </h3>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base">
              {activePillar.description}
            </p>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Key Methodologies Included
              </h4>
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 bg-neutral-50 p-3 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-[#F3B333] text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-end">
              <button
                onClick={() => setActiveModalPillar(null)}
                className="bg-neutral-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer"
              >
                Close Teardown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
