import { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { CurvedArrow } from './icons/CurvedArrow';

interface FaqItem {
  id: string;
  category: 'Services' | 'Process' | 'Pricing' | 'Results';
  question: string;
  answer: string;
  keyPoints?: string[];
}

const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Process',
    question: 'What does the initial onboarding and audit process look like?',
    answer:
      'We kick off with our comprehensive 120-point diagnostic audit during days 1–7. This covers server-side tracking validation (GA4, Meta CAPI, Google Ads enhanced conversions), technical SEO indexing health, conversion funnel leaks, and historical media spend efficiency. By day 10, we present an exhaustive growth roadmap with priority impact matrices before deploying any new campaigns.',
    keyPoints: [
      'Days 1–7: Full tracking hygiene check and attribution setup',
      'Days 8–10: Growth thesis presentation and creative gap roadmap',
      'Day 14 onwards: Systematic campaign deployment and bi-weekly sprint reviews',
    ],
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'What specific services and channels does Aelixa execute?',
    answer:
      'We engineer full-funnel acquisition systems across four core specializations: Data-Driven Performance Media (Meta, Google Search/Performance Max, and TikTok Ads), Technical & Programmatic SEO (keyword cluster architecture, digital PR, and schema optimization), Conversion Rate Optimization (multivariate landing page experimentation), and Creative Direction (high-converting UGC scripts and hook testing engines).',
    keyPoints: [
      'Paid Search & Social: Meta, Google, and TikTok',
      'Organic Search: Technical audits, content silos, and programmatic SEO',
      'CRO: A/B testing, heatmap analysis, and post-click funnel optimization',
    ],
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'How do your pricing and retainer models work?',
    answer:
      'We operate on transparent, flat-fee monthly retainers structured around the depth of strategic execution and channel breadth—never on percentage-of-ad-spend markups that distort incentives. Every engagement is structured in 90-day growth sprints with clear milestone deliverables and a 30-day notice period thereafter.',
    keyPoints: [
      'Zero percentage markups on your media ad spend',
      'Transparent flat monthly investment tailored to scope',
      'Quarterly 90-day sprints with validated KPI benchmarks',
    ],
  },
  {
    id: 'faq-4',
    category: 'Results',
    question: 'How quickly can we expect measurable traction and ROI?',
    answer:
      'Paid acquisition and CRO landing page optimizations typically produce validated conversion rate signals, CAC reductions, and preliminary ROAS within 14–21 days of creative testing. Technical SEO and programmatic keyword architecture follow a compounding curve, usually yielding exponential traffic and inbound pipeline growth between days 60 and 120.',
    keyPoints: [
      'Paid Media: Validated performance within 2–3 weeks',
      'CRO & Funnels: Immediate uplift from initial A/B test iterations',
      'SEO Compounding: Sustainable, non-paid pipeline between months 2 and 4',
    ],
  },
  {
    id: 'faq-5',
    category: 'Process',
    question: 'Do you work alongside our existing in-house team or handle everything end-to-end?',
    answer:
      'We tailor our integration to your internal structure. We frequently act as an embedded growth squad—co-piloting alongside internal designers, copywriters, or marketing leads to provide media buying, algorithmic targeting, and technical SEO heavy lifting. Alternatively, for brands seeking full autonomy, we manage end-to-end strategy, creative production, and technical execution.',
    keyPoints: [
      'Embedded Partner model: Strategic co-pilot supporting in-house staff',
      'Turnkey Execution model: Full creative, media, and technical ownership',
      'Zero communication friction with direct strategist access',
    ],
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'What reporting cadence and communication channels do you maintain?',
    answer:
      'Transparency is our foundational philosophy. You receive direct access to a dedicated private Slack or Teams channel with Kenji and senior team members (under 4-hour response SLAs), weekly asynchronous Loom video walkthroughs of active tests, and a 24/7 real-time Looker Studio dashboard tracking blended CAC, MER (Marketing Efficiency Ratio), and revenue contribution.',
    keyPoints: [
      'Direct Slack channel with senior strategists (no junior account reps)',
      'Weekly recorded Loom walkthroughs breaking down learnings',
      'Live 24/7 executive reporting dashboard synced to your ad accounts and CRM',
    ],
  },
  {
    id: 'faq-7',
    category: 'Services',
    question: 'What happens if a creative campaign or channel underperforms?',
    answer:
      'Our execution is governed by statistical guardrails rather than personal preferences. Every campaign operates with strict pre-set stop-loss thresholds. If a creative hook or audience segment fails to reach our target Cost Per Acquisition (CPA) within the initial test budget, it is systematically paused and rotated out through our weekly creative testing matrix.',
    keyPoints: [
      'Strict statistical stop-loss protocols to protect your capital',
      'Continuous weekly creative hypothesis testing',
      'Rapid reallocation of budget toward winning audiences and ad hooks',
    ],
  },
];

interface FaqSectionProps {
  onBookCall: () => void;
}

export function FaqSection({ onBookCall }: FaqSectionProps) {
  // State for which questions are open. Default first question open
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Process', 'Services', 'Pricing', 'Results'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqsData
      : faqsData.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section
      id="common-questions"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#F8F7F4] border-t border-neutral-200/70"
      aria-label="Frequently asked questions about agency services and process"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-[13px] font-semibold text-neutral-600 uppercase tracking-wider">
            <span className="text-[#EAA838]">
              <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
            </span>
            <span>CLARITY & TRANSPARENCY</span>
          </div>

          <h2
            id="faq-section-title"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight"
          >
            Common Questions
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Everything you need to know about our data-driven services, onboarding sprints, communication cadence, and growth frameworks.
          </p>
        </div>

        {/* Category Filter Pills & Expand/Collapse controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div
            id="faq-category-filters"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto p-1 bg-white/80 rounded-2xl border border-neutral-200/80 shadow-xs"
            role="tablist"
            aria-label="FAQ Category Filter"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`faq-filter-${cat.toLowerCase()}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {cat === 'All' ? 'All Questions' : cat}
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse Toggle */}
          <div className="flex items-center gap-3 text-xs font-semibold text-neutral-500 self-end sm:self-auto">
            <button
              onClick={expandAll}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div
          id="faq-accordion-container"
          className="space-y-3.5"
          role="region"
          aria-labelledby="faq-section-title"
        >
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                id={`faq-card-${faq.id}`}
                className={`rounded-[22px] sm:rounded-[26px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-neutral-300 shadow-md ring-1 ring-black/5'
                    : 'bg-white/80 hover:bg-white border-neutral-200/80 hover:border-neutral-300 shadow-xs'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase tracking-wide flex-shrink-0 mt-0.5 ${
                        faq.category === 'Process'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                          : faq.category === 'Services'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200/60'
                          : faq.category === 'Pricing'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                          : 'bg-purple-50 text-purple-800 border border-purple-200/60'
                      }`}
                    >
                      {faq.category}
                    </span>

                    <h3
                      className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                        isOpen ? 'text-neutral-950' : 'text-neutral-800'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#171717] text-white rotate-180'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-neutral-600 text-sm sm:text-[15px] leading-relaxed border-t border-neutral-100"
                  >
                    <p className="mt-2 text-neutral-700">{faq.answer}</p>

                    {faq.keyPoints && faq.keyPoints.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-neutral-100 bg-[#FAFAF8] rounded-xl p-3.5 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                          Key Takeaway:
                        </div>
                        <ul className="space-y-1.5">
                          {faq.keyPoints.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EAA838] mt-1.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div
          id="faq-bottom-cta"
          className="mt-12 sm:mt-16 bg-[#171717] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F3B333] uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unanswered Question?</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              Want to discuss a tailored growth strategy for your business?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg">
              Book a direct 30-minute diagnostic session with Kenji. We will audit your current funnels and outline actionable opportunities.
            </p>
          </div>

          <button
            id="faq-book-call-btn"
            onClick={onBookCall}
            className="flex-shrink-0 bg-[#F3B333] hover:bg-[#e5a428] text-neutral-950 font-extrabold px-6 py-3.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Book A Strategy Session</span>
            <CurvedArrow className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
