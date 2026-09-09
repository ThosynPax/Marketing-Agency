import { ServiceItem } from '../types';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CurvedArrow } from './icons/CurvedArrow';

interface ScopeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: ServiceItem[];
  onRemoveService: (id: string) => void;
  onProceedToBooking: () => void;
}

export function ScopeDrawer({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onProceedToBooking,
}: ScopeDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-[#181818] text-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-800 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">Inquiry Scope</h3>
              <span className="text-xs font-bold bg-[#F3B333] text-black px-2 py-0.5 rounded-full">
                {selectedServices.length}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Review customized service modules for your strategy session
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Services List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {selectedServices.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mx-auto mb-4 text-neutral-400">
                <Sparkles className="w-6 h-6 text-[#F3B333]" />
              </div>
              <h4 className="text-base font-bold text-white">Your Scope Is Empty</h4>
              <p className="text-xs text-neutral-400 mt-2 max-w-xs mx-auto">
                Explore our Growth-Focused Solutions section and click "Add to Scope" on the services you'd like to include in your strategy consultation.
              </p>
            </div>
          ) : (
            selectedServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#242424] border border-neutral-700/80 rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-neutral-600 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#F3B333] uppercase">
                      Module {service.number}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {service.title}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveService(service.id)}
                    className="text-neutral-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                    title="Remove from scope"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-2 border-t border-neutral-700/60 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Estimated Retainer:</span>
                  <span className="font-bold text-white font-mono">
                    {service.priceEstimate}
                  </span>
                </div>
              </div>
            ))
          )}

          {selectedServices.length > 0 && (
            <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 text-[#F3B333] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Multi-Module Synergy Benefit</span>
              </div>
              <p className="text-neutral-400">
                Bundling SEO, Performance Media, and CRO unlocks integrated cross-channel attribution and priority onboarding slots.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-800 bg-[#161616]">
          <button
            onClick={() => {
              onClose();
              onProceedToBooking();
            }}
            disabled={selectedServices.length === 0}
            className={`w-full py-3.5 px-6 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
              selectedServices.length === 0
                ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                : 'bg-[#F3B333] hover:bg-[#e5a428] text-black hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            <span>Proceed to Book Strategy Session</span>
            <CurvedArrow className="w-3.5 h-3.5" />
          </button>

          <p className="text-center text-[11px] text-neutral-500 mt-3">
            No credit card required. Strategy consultations are complimentary.
          </p>
        </div>
      </div>
    </div>
  );
}
