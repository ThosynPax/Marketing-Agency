import { X, ArrowRight, CheckCircle2, TrendingUp, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { caseStudiesData } from '../data/agencyData';
import { CurvedArrow } from './icons/CurvedArrow';

interface CaseDetailModalProps {
  caseStudyId: string | null;
  onClose: () => void;
  onBookCallForProject: (projectName: string) => void;
}

export function CaseDetailModal({
  caseStudyId,
  onClose,
  onBookCallForProject,
}: CaseDetailModalProps) {
  if (!caseStudyId) return null;

  const caseStudy = caseStudiesData.find((c) => c.id === caseStudyId) || caseStudiesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#171717] text-white rounded-[28px] sm:rounded-[36px] border border-neutral-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Visual Hero Header */}
        <div className="relative h-60 sm:h-72 w-full flex-shrink-0 bg-neutral-900 overflow-hidden">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on Hero */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="inline-flex items-center gap-2 bg-[#F3B333] text-black font-extrabold text-xs px-3 py-1 rounded-full mb-2">
              <span>{caseStudy.client}</span>
              <span>•</span>
              <span>{caseStudy.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Results Metric Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#EAA838] mb-3">
              Validated Benchmark Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="bg-[#242424] border border-neutral-800 rounded-2xl p-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F3B333] tracking-tight font-mono">
                    {res.metric}
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    {res.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    {res.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Strategy Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#202020] border border-neutral-800/80 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>The Core Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-[#202020] border border-neutral-800/80 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Strategic Execution</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {caseStudy.strategy}
              </p>
            </div>
          </div>

          {/* Tags & Timeline */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-400 font-semibold">Capabilities:</span>
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-neutral-400">
              Engagement Timeline: <span className="text-white font-bold">{caseStudy.duration}</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-neutral-800 bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Want comparable growth benchmarks for your company?
          </p>

          <button
            onClick={() => {
              onClose();
              onBookCallForProject(caseStudy.title);
            }}
            className="w-full sm:w-auto bg-[#F3B333] hover:bg-[#e5a428] text-black font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Discuss This Playbook</span>
            <CurvedArrow className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
