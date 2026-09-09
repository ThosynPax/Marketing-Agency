import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, Sparkles, Building, Globe, Mail, User } from 'lucide-react';
import { CurvedArrow } from './icons/CurvedArrow';
import { ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: ServiceItem[];
  prefilledBudget?: string;
  prefilledNotes?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  selectedServices,
  prefilledBudget = '',
  prefilledNotes = '',
}: BookingModalProps) {
  const [sessionType, setSessionType] = useState('strategy-discovery');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState(prefilledBudget || '$5k - $15k / mo');
  const [notes, setNotes] = useState(prefilledNotes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    'Tomorrow, 10:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 11:30 AM EST',
    'Thursday, 4:00 PM EST',
    'Friday, 1:00 PM EST',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#161616] text-white rounded-[28px] sm:rounded-[36px] border border-neutral-800 shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-800 flex items-center justify-between bg-[#191919]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3B333] text-black flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Book A Strategy Call
              </h3>
              <p className="text-xs text-neutral-400">
                Direct consultation with Kenji Sato, Principal Growth Strategist
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Strategy Call Confirmed!
                </h4>
                <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                  A Google Meet invitation has been dispatched to <span className="text-[#F3B333] font-semibold">{email}</span>. Kenji is preparing your preliminary digital scorecard.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#222222] border border-neutral-800 rounded-2xl p-5 text-left max-w-md mx-auto text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Time Slot:</span>
                  <span className="font-bold text-white">{selectedDate}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Consultation Focus:</span>
                  <span className="font-bold text-white capitalize">{sessionType.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Company:</span>
                  <span className="font-bold text-white">{company || 'Not Specified'}</span>
                </div>
                {selectedServices.length > 0 && (
                  <div className="pt-1">
                    <span className="text-neutral-400 block mb-1">Selected Modules:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedServices.map(s => (
                        <span key={s.id} className="bg-neutral-800 px-2 py-0.5 rounded text-[11px] text-[#F3B333]">
                          {s.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#F3B333] hover:bg-[#e5a428] text-black font-bold px-8 py-3 rounded-full text-sm transition-transform cursor-pointer"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Session Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  1. Select Consultation Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'strategy-discovery', name: 'Discovery Session', time: '30 Min' },
                    { id: 'growth-audit', name: 'Digital Audit Review', time: '45 Min' },
                    { id: 'retainer-proposal', name: 'Execution Retainer', time: '45 Min' },
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSessionType(type.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        sessionType === type.id
                          ? 'border-[#F3B333] bg-[#222222] text-white shadow-sm'
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{type.name}</div>
                      <div className="text-[11px] text-[#EAA838] mt-1">{type.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  2. Select Available Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                        selectedDate === slot
                          ? 'border-[#F3B333] bg-[#262626] text-white'
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#F3B333]" />
                        <span>{slot}</span>
                      </div>
                      {selectedDate === slot && (
                        <CheckCircle2 className="w-4 h-4 text-[#F3B333]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Client Details */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                  3. Your Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jordan Miller"
                        className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jordan@company.com"
                        className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Company Name</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Growth Inc."
                        className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Website URL</label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://company.com"
                        className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Estimated Monthly Marketing Budget</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 px-3 text-sm text-white outline-none"
                    >
                      <option value="$3k - $7k / mo">$3,000 - $7,000 / mo</option>
                      <option value="$7k - $15k / mo">$7,000 - $15,000 / mo</option>
                      <option value="$15k - $35k / mo">$15,000 - $35,000 / mo</option>
                      <option value="$35k+ / mo">$35,000+ / mo (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Primary Growth Objective / Goal</label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Scale ROAS to 4x, optimize SEO"
                      className="w-full bg-[#202020] border border-neutral-800 focus:border-[#F3B333] rounded-xl py-2.5 px-3 text-sm text-white placeholder-neutral-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#F3B333]" />
                  <span>Includes live digital diagnostics</span>
                </div>

                <button
                  type="submit"
                  className="bg-[#F3B333] hover:bg-[#e5a428] text-black font-extrabold px-7 py-3 rounded-full text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Confirm Strategy Call</span>
                  <CurvedArrow className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
