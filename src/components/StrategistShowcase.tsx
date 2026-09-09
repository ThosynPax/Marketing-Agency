import { useState } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface StrategistShowcaseProps {
  onMoreAboutMe: () => void;
  onSeeServices: () => void;
  onOpenCaseDetail: (caseId: string) => void;
}

export function StrategistShowcase({
  onMoreAboutMe,
  onSeeServices,
  onOpenCaseDetail,
}: StrategistShowcaseProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // High-fidelity portrait matching the reference: friendly East Asian male strategist with glasses and beige/khaki jacket
  const strategistImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
  // Alternative high quality studio portrait
  const portraitUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80";
  // Pink blossom flower thumbnail matching the reference inset card
  const flowerThumbnail = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80";

  return (
    <section
      id="about-strategist"
      className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-10"
      aria-label="About the strategist"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* LEFT CARD: Dark Charcoal Strategy Card */}
          <div
            id="strategist-philosophy-card"
            className="bg-[#171717] rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 text-white flex flex-col justify-between shadow-xl border border-neutral-800/80 relative overflow-hidden"
          >
            {/* Top Area */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-[13px] font-semibold text-neutral-300">
                <span className="text-[#F3B333]">
                  <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
                </span>
                <span>About the strategist</span>
              </div>

              {/* Big Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Strategy first.
                <br />
                Always.
              </h2>

              {/* Description */}
              <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl font-normal">
                I lead projects of brand and design digital from a address clear, combining criterion strategic and sensitivity visual for build systems coherent and durable.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  id="btn-more-about-me"
                  onClick={onMoreAboutMe}
                  className="bg-[#F3B333] hover:bg-[#e5a428] text-neutral-950 font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                >
                  <span>More About Me</span>
                  <CurvedArrow className="w-3.5 h-3.5" />
                </button>

                <button
                  id="btn-see-services"
                  onClick={onSeeServices}
                  className="bg-white hover:bg-neutral-100 text-neutral-950 font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
                >
                  <span>See Services</span>
                  <CurvedArrow className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom Inset Mini Card matching reference */}
            <div
              id="hero-case-inset-card"
              onClick={() => onOpenCaseDetail('petal-brand-engagement')}
              className="mt-8 sm:mt-12 bg-[#222222]/90 hover:bg-[#282828] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Flower Thumbnail */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800 border border-neutral-700">
                  <img
                    src={flowerThumbnail}
                    alt="Increasing Brand Engagement Case Study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {/* Title */}
                <div className="min-w-0">
                  <p className="text-white font-semibold text-xs sm:text-sm truncate sm:whitespace-normal group-hover:text-[#F3B333] transition-colors">
                    Increasing Brand Engagement from 10K to 50K
                  </p>
                  <p className="text-neutral-400 text-[11px] sm:text-xs">
                    Organic Growth & Storytelling
                  </p>
                </div>
              </div>

              {/* Link CTA */}
              <div className="flex items-center gap-1 text-neutral-300 group-hover:text-white text-xs font-semibold whitespace-nowrap pl-2">
                <span>See Details</span>
                <CurvedArrow className="w-3 h-3 text-[#F3B333]" />
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Strategist Portrait with Floating Metrics */}
          <div
            id="strategist-portrait-card"
            className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#e4dfd8] min-h-[500px] sm:min-h-[580px] md:min-h-[620px] flex flex-col justify-end shadow-xl border border-neutral-200/80 group"
          >
            {/* Background Studio Portrait Image */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Alex Lin - Digital Marketing Strategist at Aelixa"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-90 scale-102'
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Subtle Gradient Vignette at bottom for card readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

            {/* Overlaid Floating Metrics at Bottom matching screenshot */}
            <div
              id="strategist-metrics-overlay"
              className="relative z-10 p-4 sm:p-6 md:p-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {/* Stat Card 1: 3.8x */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight flex items-baseline gap-1">
                  <span>3.8</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#EAA838]">x</span>
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Across all paid ad campaigns
                </div>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
                  <span className="text-emerald-600 font-bold">↑</span>
                  <span>64% above industry avg</span>
                </div>
              </div>

              {/* Stat Card 2: +240% */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:translate-y-[-2px] transition-transform duration-200">
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight flex items-baseline gap-1">
                  <span>+240</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#EAA838]">%</span>
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Via SEO · average 8 months
                </div>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-1 rounded-md">
                  <span className="text-emerald-600 font-bold">↑</span>
                  <span>Compounding, not paid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
