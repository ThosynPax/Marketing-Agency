import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { CurvedArrow } from './icons/CurvedArrow';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiryDrawer: () => void;
  onOpenBookingModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({
  inquiryCount,
  onOpenInquiryDrawer,
  onOpenBookingModal,
  onNavigate,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsPagesDropdownOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 md:px-8 pt-2 sm:pt-3">
      <div className="max-w-7xl mx-auto">
        <nav
          id="main-navigation"
          aria-label="Primary Navigation"
          className={`bg-[#161616] border-t-2 border-[#EAA838] rounded-b-2xl md:rounded-b-[24px] text-white px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex items-center justify-between shadow-2xl transition-all duration-300 ${
            scrolled ? 'shadow-black/40' : ''
          }`}
        >
          {/* Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center text-xl sm:text-2xl font-bold tracking-tight text-white focus:outline-none group cursor-pointer"
          >
            <span>aelixa</span>
            <span className="text-[#F3B333] group-hover:scale-125 transition-transform duration-200">.</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-neutral-300">
            <button
              id="nav-link-home"
              onClick={() => handleLinkClick('hero')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleLinkClick('about-strategist')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                id="nav-link-pages"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsPagesDropdownOpen(false), 200)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group"
                aria-expanded={isPagesDropdownOpen}
              >
                <span>Pages</span>
                <span className="text-[#F3B333] text-xs font-bold">+</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform" />
              </button>

              {isPagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-[#202020] border border-neutral-800 rounded-2xl p-2 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleLinkClick('expertise')}
                    className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-xl transition-colors"
                  >
                    Services & Solutions
                  </button>
                  <button
                    onClick={() => handleLinkClick('philosophy')}
                    className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-xl transition-colors"
                  >
                    Methodology & Philosophy
                  </button>
                  <button
                    onClick={() => handleLinkClick('case-studies')}
                    className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-xl transition-colors"
                  >
                    Client Case Studies
                  </button>
                  <button
                    onClick={() => handleLinkClick('roi-calculator')}
                    className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>ROI Calculator</span>
                    <span className="text-[10px] uppercase font-bold text-black bg-[#F3B333] px-1.5 py-0.5 rounded">New</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('testimonials')}
                    className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-xl transition-colors"
                  >
                    Testimonials
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-link-blog"
              onClick={() => handleLinkClick('case-studies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Blog
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleLinkClick('footer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Scope / Cart Drawer Button */}
            <button
              id="nav-cart-button"
              onClick={onOpenInquiryDrawer}
              aria-label={`View selected inquiry scope (${inquiryCount} items)`}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium px-2.5 py-1.5 rounded-lg hover:bg-neutral-800/60 transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-neutral-400" />
              <span>({inquiryCount})</span>
            </button>

            {/* Book A Call Button */}
            <button
              id="nav-book-call-button"
              onClick={onOpenBookingModal}
              className="bg-[#F3B333] hover:bg-[#e5a428] text-neutral-950 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Book A Call</span>
              <CurvedArrow className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden mt-2 bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-5 shadow-2xl text-white space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-3 font-medium text-neutral-200 text-base">
              <button
                onClick={() => handleLinkClick('hero')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('about-strategist')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                About Kenji
              </button>
              <button
                onClick={() => handleLinkClick('expertise')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-[#F3B333] text-xs">4 Modules</span>
              </button>
              <button
                onClick={() => handleLinkClick('philosophy')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Philosophy
              </button>
              <button
                onClick={() => handleLinkClick('case-studies')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleLinkClick('roi-calculator')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors flex items-center justify-between"
              >
                <span>ROI Simulator</span>
                <span className="text-[10px] font-bold bg-[#F3B333] text-black px-2 py-0.5 rounded">Interactive</span>
              </button>
              <button
                onClick={() => handleLinkClick('testimonials')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Client Reviews
              </button>
              <button
                onClick={() => handleLinkClick('footer')}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Contact & Inquiries
              </button>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiryDrawer();
                }}
                className="w-full py-2.5 bg-neutral-800 text-neutral-200 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4 text-[#F3B333]" />
                <span>Scope Builder ({inquiryCount} Selected)</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 bg-[#F3B333] text-black rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book A Strategy Call</span>
                <CurvedArrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
