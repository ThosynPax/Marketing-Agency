import { useState } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { caseStudiesData } from '../data/agencyData';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
}

export function CaseStudies({ onSelectCaseStudy }: CaseStudiesProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Brand & Social', 'Full-Funnel Paid', 'SEO & Organic'];

  const filteredCases = caseStudiesData.filter((cs) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Brand & Social') return cs.category.includes('Social') || cs.category.includes('Brand');
    if (selectedFilter === 'Full-Funnel Paid') return cs.category.includes('Paid') || cs.category.includes('CRO');
    if (selectedFilter === 'SEO & Organic') return cs.category.includes('SEO');
    return true;
  });

  return (
    <section
      id="case-studies"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#F8F7F4]"
      aria-label="Client case studies"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200/80">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-[13px] font-semibold text-neutral-600 uppercase tracking-wider">
              <span className="text-[#EAA838]">
                <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
              </span>
              <span>PROVEN RESULTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Selected Works &
              <span className="block text-neutral-400 font-bold mt-1">Growth Benchmarks</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              id={`case-card-${item.id}`}
              onClick={() => onSelectCaseStudy(item.id)}
              className="bg-white rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-100">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-neutral-900">
                    {item.client}
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 group-hover:bg-[#F3B333] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-bold text-[#EAA838] uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-2 group-hover:text-[#EAA838] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mt-3 line-clamp-2">
                    {item.summary}
                  </p>

                  {/* Highlight Metrics Strip */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-2 gap-3">
                    {item.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx} className="bg-neutral-50 p-2.5 rounded-xl">
                        <div className="text-lg font-extrabold text-neutral-900">
                          {res.metric}
                        </div>
                        <div className="text-[11px] text-neutral-500 line-clamp-1">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                <span>Timeline: {item.duration}</span>
                <span className="inline-flex items-center gap-1 text-[#EAA838]">
                  <span>Deep-Dive</span>
                  <CurvedArrow className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
