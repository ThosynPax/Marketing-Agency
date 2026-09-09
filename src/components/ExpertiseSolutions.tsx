import { useState } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { servicesData } from '../data/agencyData';
import { CheckCircle2, Plus, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ExpertiseSolutionsProps {
  onAddToScope: (service: ServiceItem) => void;
  isInScope: (serviceId: string) => boolean;
  onBookCall: () => void;
}

export function ExpertiseSolutions({
  onAddToScope,
  isInScope,
  onBookCall,
}: ExpertiseSolutionsProps) {
  const [activeTabId, setActiveTabId] = useState<string>('seo');

  const activeService = servicesData.find(s => s.id === activeTabId) || servicesData[0];

  return (
    <section
      id="expertise"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Growth-focused digital solutions"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Split Layout matching reference */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 pb-10 sm:pb-14 border-b border-neutral-200/80">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-[13px] font-semibold text-neutral-600 uppercase tracking-wider">
              <span className="text-[#EAA838]">
                <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
              </span>
              <span>EXPERTISE</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              <span className="block text-[#111111]">Growth-Focused</span>
              <span className="block text-neutral-400 font-bold mt-1">Digital Solutions</span>
            </h2>
          </div>

          {/* Right Lead Text */}
          <div className="max-w-md lg:text-left">
            <p className="text-neutral-600 text-sm sm:text-base md:text-[17px] leading-relaxed">
              From Performance-Focused Design To Technical Implementation, I Provide The Tools You Need To Dominate Your Niche.
            </p>
          </div>
        </div>

        {/* Tab Selector Bar matching the reference's dark horizontal bar */}
        <div className="mt-8 bg-[#161616] text-white rounded-2xl md:rounded-3xl p-2 grid grid-cols-2 md:grid-cols-4 gap-2 shadow-xl border border-neutral-800">
          {servicesData.map((service) => {
            const isActive = activeTabId === service.id;
            return (
              <button
                key={service.id}
                id={`tab-${service.id}`}
                onClick={() => setActiveTabId(service.id)}
                className={`py-3.5 sm:py-4 px-4 rounded-xl md:rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#262626] text-white border-b-2 md:border-b-0 md:border-l-2 border-[#F3B333] shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <span className="text-[11px] sm:text-xs text-neutral-400 font-mono tracking-wider">
                  {service.number} — {service.category.split(' ')[0]}
                </span>
                <span className="text-sm sm:text-base font-bold text-white mt-1">
                  {service.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div
          id="service-detail-card"
          className="mt-6 bg-white rounded-[28px] sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-10 md:p-12 shadow-md transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EAA838] uppercase tracking-wider mb-3">
                  <span>MODULE {activeService.number}</span>
                  <span>•</span>
                  <span>{activeService.category}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  {activeService.title}
                </h3>

                <p className="mt-3 text-base sm:text-lg font-medium text-neutral-700">
                  {activeService.tagline}
                </p>

                <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                    Core Deliverables & Execution Playbook
                  </h4>
                  <div className="space-y-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-[#EAA838] flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  id={`btn-scope-${activeService.id}`}
                  onClick={() => onAddToScope(activeService)}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all cursor-pointer ${
                    isInScope(activeService.id)
                      ? 'bg-neutral-900 text-white'
                      : 'bg-[#F3B333] hover:bg-[#e2a227] text-black shadow-md'
                  }`}
                >
                  {isInScope(activeService.id) ? (
                    <>
                      <Check className="w-4 h-4 text-[#F3B333]" />
                      <span>Added to Scope</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Inquiry Scope</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onBookCall}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-neutral-100 hover:bg-neutral-200 text-neutral-900 inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Discuss Strategy</span>
                  <CurvedArrow className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Metrics & Economics Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAFAF8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200/60">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Expected Outcomes
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    High Confidence
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="mt-6 space-y-5">
                  {activeService.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-neutral-200/60 shadow-xs">
                      <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-600 font-medium mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retainer Bracket */}
              <div className="mt-8 pt-6 border-t border-neutral-200/60">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                    Typical Retainer
                  </span>
                  <span className="text-base font-extrabold text-neutral-900">
                    {activeService.priceEstimate}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Customized based on channel complexity and target market scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
