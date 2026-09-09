import { CurvedArrow } from './icons/CurvedArrow';

interface HeroProps {
  onExploreWork: () => void;
  onBookCall: () => void;
}

export function Hero({ onExploreWork, onBookCall }: HeroProps) {
  return (
    <section id="hero" className="w-full pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14 px-4 sm:px-6 md:px-8 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow Tag */}
        <div
          id="hero-eyebrow"
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-[13px] font-semibold tracking-wider text-neutral-600 uppercase"
        >
          <span className="text-[#EAA838] flex items-center">
            <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
          </span>
          <span>WELCOME TO AELIXA</span>
        </div>

        {/* Hero Title Matching Design Reference Exactly */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold tracking-tight text-neutral-900 leading-[1.08] sm:leading-[1.06] select-none"
        >
          <span className="block text-[#111111]">Your Next Best</span>
          
          <span className="inline-flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 mt-1 sm:mt-2">
            <span className="text-[#111111]">Marketing</span>
            
            {/* Signature Golden Badge with Curved Arrow */}
            <span
              id="hero-curved-arrow-badge"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F3B333] rounded-xl sm:rounded-2xl shadow-sm text-neutral-950 mx-1 sm:mx-2 transform transition-transform duration-300 hover:rotate-6 hover:scale-105 align-middle"
              title="Aelixa Strategic Momentum"
            >
              <CurvedArrow className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>

            <span className="text-neutral-400 font-bold">Decision</span>
          </span>

          <span className="block text-neutral-400 font-bold mt-1 sm:mt-2">
            Starts Here
          </span>
        </h1>

        {/* Subtitle description */}
        <p
          id="hero-subtitle"
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed"
        >
          I'm a digital marketer helping businesses grow through SEO, paid campaigns, and content strategy. Browse my work — the numbers do the talking.
        </p>
      </div>
    </section>
  );
}
