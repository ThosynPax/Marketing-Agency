import { CurvedArrow } from './icons/CurvedArrow';
import { testimonialsData } from '../data/agencyData';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-white"
      aria-label="Client feedback"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-[13px] font-semibold text-neutral-600 uppercase tracking-wider">
            <span className="text-[#EAA838]">
              <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
            </span>
            <span>CLIENT VOICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Trusted By High-Growth
            <span className="block text-neutral-400 font-bold mt-1">Founders & Marketers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAFAF8] rounded-[28px] p-7 sm:p-8 border border-neutral-200/80 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                {/* Rating stars and tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#EAA838]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-neutral-900 bg-white px-2.5 py-1 rounded-full border border-neutral-200/80">
                    {t.highlight}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 pt-5 border-t border-neutral-200/60 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {t.role} · <span className="font-semibold text-neutral-700">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
