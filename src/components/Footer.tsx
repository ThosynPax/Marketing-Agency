import { useState, FormEvent } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { Mail, Check, ArrowUp, Send, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookCall: () => void;
}

export function Footer({ onNavigate, onBookCall }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="w-full bg-[#141414] text-white border-t-2 border-[#EAA838] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-8 mt-10"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Banner: Direct CTA & Status */}
        <div className="bg-[#1e1e1e] rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently Accepting 2 New Brands for Q3/Q4</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready for your next best marketing decision?
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Let's audit your current acquisition funnels and construct high-converting growth systems.
            </p>
          </div>

          <button
            onClick={onBookCall}
            className="flex-shrink-0 bg-[#F3B333] hover:bg-[#e5a428] text-neutral-950 font-extrabold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2.5 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Book A Strategy Session</span>
            <CurvedArrow className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800 text-sm">
          {/* Col 1 & 2: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center text-2xl font-bold tracking-tight text-white">
              <span>aelixa</span>
              <span className="text-[#F3B333]">.</span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Strategic digital marketing agency combining rigorous performance media, authority SEO architectures, and high-converting creative engines.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                Join The Growth Letter
              </div>
              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800">
                  <Check className="w-4 h-4" />
                  <span>Subscribed! You'll receive bi-weekly teardowns.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 bg-[#222222] border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#F3B333]"
                  />
                  <button
                    type="submit"
                    className="bg-[#F3B333] hover:bg-[#e5a428] text-black font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-strategist')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the Strategist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('expertise')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Data Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Client Benchmarks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roi-calculator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  ROI Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>SEO & Search Architecture</li>
              <li>Meta & Google Media Buying</li>
              <li>Conversion Rate Optimization</li>
              <li>Brand Storytelling & UGC Loops</li>
              <li>Programmatic Content Engines</li>
              <li>Attribution Data Hygiene</li>
            </ul>
          </div>

          {/* Col 5: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="text-white font-medium">hello@aelixa.agency</li>
              <li>partnerships@aelixa.agency</li>
              <li>Brooklyn, NY & Remote Global</li>
              <li className="pt-2">
                <span className="text-[11px] text-neutral-500">Response time: &lt; 12 hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Aelixa Digital Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
