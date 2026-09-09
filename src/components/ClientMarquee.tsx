import { clientLogos } from '../data/agencyData';

export function ClientMarquee() {
  return (
    <section
      id="clients-section"
      className="w-full py-8 sm:py-10 px-4 sm:px-6 md:px-8 border-y border-neutral-200/70 bg-white/60 mb-4 sm:mb-8"
      aria-label="Trusted client partners"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 sm:mb-6">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400">
            Trusted by ambitious scale-ups & market leaders
          </p>
        </div>

        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-x-8 gap-y-4 sm:gap-10 overflow-x-auto no-scrollbar py-1">
          {clientLogos.map((client, idx) => (
            <div
              key={client.name}
              id={`client-logo-${idx}`}
              className="flex items-center gap-2.5 text-neutral-400 hover:text-neutral-900 transition-colors duration-200 flex-shrink-0 cursor-default select-none group"
            >
              <span className="text-xl sm:text-2xl text-neutral-400 group-hover:text-[#EAA838] transition-colors">
                {client.symbol}
              </span>
              <span className="font-bold text-base sm:text-lg tracking-tight font-sans">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
