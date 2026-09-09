import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StrategistShowcase } from './components/StrategistShowcase';
import { ClientMarquee } from './components/ClientMarquee';
import { PhilosophySection } from './components/PhilosophySection';
import { ExpertiseSolutions } from './components/ExpertiseSolutions';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ScopeDrawer } from './components/ScopeDrawer';
import { BookingModal } from './components/BookingModal';
import { CaseDetailModal } from './components/CaseDetailModal';
import { ServiceItem } from './types';
import { servicesData } from './data/agencyData';
import { Maximize2, Minimize2, Sparkles, Check } from 'lucide-react';

export default function App() {
  // Scope / cart state
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([
    servicesData[0], // Start with SEO pre-added for immediate engagement demonstration
  ]);
  const [isScopeDrawerOpen, setIsScopeDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  // Prefilled data from ROI simulator or case studies
  const [prefilledBudget, setPrefilledBudget] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Framed view matching the screenshot's yellow editorial borders
  const [isFramedMode, setIsFramedMode] = useState(true);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleService = (service: ServiceItem) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
      showToast(`Removed "${service.title}" from inquiry scope`);
    } else {
      setSelectedServices([...selectedServices, service]);
      showToast(`Added "${service.title}" to inquiry scope`);
    }
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== serviceId));
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyRoiStrategy = (budgetStr: string, summaryStr: string) => {
    setPrefilledBudget(budgetStr);
    setPrefilledNotes(summaryStr);
    setIsBookingModalOpen(true);
  };

  const handleBookCallForProject = (projectName: string) => {
    setPrefilledNotes(`Inquiry regarding playbook from case study: ${projectName}`);
    setIsBookingModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isFramedMode
          ? 'bg-[#EAA838] p-0 sm:p-3 md:p-6 lg:p-8 xl:p-10'
          : 'bg-[#F8F7F4] p-0'
      }`}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-white px-5 py-3 rounded-2xl shadow-2xl border border-neutral-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="w-5 h-5 rounded-full bg-[#F3B333] text-black flex items-center justify-center font-bold">
            <Check className="w-3 h-3" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Frame Toggle Pill (matches reference design layout view) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-neutral-700/80">
        <span className="text-neutral-400">Layout Framing:</span>
        <button
          onClick={() => setIsFramedMode(!isFramedMode)}
          className="flex items-center gap-1.5 text-[#F3B333] hover:text-white transition-colors cursor-pointer"
          title="Toggle between editorial framed container and edge-to-edge view"
        >
          {isFramedMode ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Framed (Reference)</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full View</span>
            </>
          )}
        </button>
      </div>

      {/* Main Website Container (rounded card with white canvas inside yellow frame) */}
      <div
        className={`w-full max-w-[1600px] mx-auto bg-[#F8F7F4] text-[#141414] overflow-hidden transition-all duration-300 ${
          isFramedMode
            ? 'rounded-none sm:rounded-2xl md:rounded-[36px] lg:rounded-[44px] shadow-2xl border border-[#d69527]/40'
            : 'min-h-screen'
        }`}
      >
        {/* Navigation Bar */}
        <Navbar
          inquiryCount={selectedServices.length}
          onOpenInquiryDrawer={() => setIsScopeDrawerOpen(true)}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Hero Section */}
        <Hero
          onExploreWork={() => handleNavigate('case-studies')}
          onBookCall={() => setIsBookingModalOpen(true)}
        />

        {/* Client Logos Marquee - Positioned Under Hero Section */}
        <ClientMarquee />

        {/* Strategist Feature Split: Dark Card & Portrait with Floating Stats */}
        <StrategistShowcase
          onMoreAboutMe={() => handleNavigate('philosophy')}
          onSeeServices={() => handleNavigate('expertise')}
          onOpenCaseDetail={(caseId) => setActiveCaseStudyId(caseId)}
        />

        {/* Philosophy: Strategist-Led Built On Data */}
        <PhilosophySection />

        {/* Growth-Focused Digital Solutions (Interactive Modules) */}
        <ExpertiseSolutions
          onAddToScope={handleToggleService}
          isInScope={(id) => selectedServices.some((s) => s.id === id)}
          onBookCall={() => setIsBookingModalOpen(true)}
        />

        {/* Interactive ROI & Growth Pipeline Simulator */}
        <RoiCalculator onApplyStrategy={handleApplyRoiStrategy} />

        {/* Selected Works & Case Studies */}
        <CaseStudies
          onSelectCaseStudy={(caseId) => setActiveCaseStudyId(caseId)}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onBookCall={() => setIsBookingModalOpen(true)}
        />
      </div>

      {/* Scope Drawer / Cart */}
      <ScopeDrawer
        isOpen={isScopeDrawerOpen}
        onClose={() => setIsScopeDrawerOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={handleRemoveService}
        onProceedToBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedServices={selectedServices}
        prefilledBudget={prefilledBudget}
        prefilledNotes={prefilledNotes}
      />

      {/* Case Study Detail Modal */}
      <CaseDetailModal
        caseStudyId={activeCaseStudyId}
        onClose={() => setActiveCaseStudyId(null)}
        onBookCallForProject={handleBookCallForProject}
      />
    </div>
  );
}
