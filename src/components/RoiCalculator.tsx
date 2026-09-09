import { useState } from 'react';
import { CurvedArrow } from './icons/CurvedArrow';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyStrategy: (monthlyBudget: string, summary: string) => void;
}

export function RoiCalculator({ onApplyStrategy }: RoiCalculatorProps) {
  const [monthlySpend, setMonthlySpend] = useState<number>(12000);
  const [conversionRate, setConversionRate] = useState<number>(1.8);
  const [aov, setAov] = useState<number>(185);

  // Calculation formulas
  // Est. visitors based on average CPC of $2.20
  const estimatedVisitors = Math.round(monthlySpend / 2.2);
  const currentMonthlyOrders = Math.round((estimatedVisitors * (conversionRate / 100)));
  const currentMonthlyRevenue = currentMonthlyOrders * aov;

  // With Aelixa optimization:
  // Improved conversion rate by +50% and ROAS targeted to 3.8x
  const projectedConvRate = Number((conversionRate * 1.55).toFixed(2));
  const optimizedMonthlyOrders = Math.round((estimatedVisitors * (projectedConvRate / 100)));
  const projectedMonthlyRevenue = Math.round(monthlySpend * 3.8);
  const monthlyRevenueGain = Math.max(0, projectedMonthlyRevenue - currentMonthlyRevenue);
  const annualRevenueGain = monthlyRevenueGain * 12;
  const projectedRoas = 3.8;

  return (
    <section
      id="roi-calculator"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-neutral-900 text-white"
      aria-label="Marketing ROI Simulator"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-[13px] font-semibold text-[#F3B333] uppercase tracking-wider">
            <CurvedArrow className="w-3.5 h-3.5 transform -rotate-12" />
            <span>INTERACTIVE ROI SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The Numbers Do The Talking.
            <span className="block text-neutral-400 font-bold mt-1">Simulate Your Growth.</span>
          </h2>

          <p className="mt-4 text-neutral-400 text-sm sm:text-base md:text-lg">
            Calculate your projected revenue expansion by upgrading paid acquisition and conversion architecture.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="mt-12 sm:mt-16 bg-[#1f1f1f] rounded-[28px] sm:rounded-[36px] border border-neutral-800 p-6 sm:p-10 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Sliders (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold mb-2">
                <span className="text-neutral-300">Current Monthly Marketing / Ad Spend</span>
                <span className="text-lg sm:text-xl font-bold text-[#F3B333] font-mono">
                  ${monthlySpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="60000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#F3B333]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>$3,000/mo</span>
                <span>$30,000/mo</span>
                <span>$60,000+/mo</span>
              </div>
            </div>

            {/* Slider 2: Current Conversion Rate */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold mb-2">
                <span className="text-neutral-300">Baseline Website Conversion Rate</span>
                <span className="text-lg sm:text-xl font-bold text-[#F3B333] font-mono">
                  {conversionRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.5"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#F3B333]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>0.5% (Cold)</span>
                <span>2.0% (Average)</span>
                <span>4.5% (High)</span>
              </div>
            </div>

            {/* Slider 3: Average Order Value / Deal Size */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold mb-2">
                <span className="text-neutral-300">Average Order Value (AOV) / Customer ACV</span>
                <span className="text-lg sm:text-xl font-bold text-[#F3B333] font-mono">
                  ${aov.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="1200"
                step="15"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#F3B333]"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>$30</span>
                <span>$500</span>
                <span>$1,200+</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 text-xs text-neutral-400 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#F3B333] flex-shrink-0 mt-0.5" />
              <span>
                Based on actual client benchmark averages: 3.8x blended ROAS, +55% post-click conversion rate lift, and continuous creative matrix testing.
              </span>
            </div>
          </div>

          {/* Right Column: Projected Financial Outcomes (5 cols) */}
          <div className="lg:col-span-5 bg-[#262626] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-700/80 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Projected Annual Uplift
                </span>
                <span className="text-xs font-bold text-black bg-[#F3B333] px-2.5 py-0.5 rounded-full">
                  3.8x Benchmark
                </span>
              </div>

              {/* Big Annual Uplift */}
              <div className="mt-6">
                <div className="text-xs text-neutral-400 font-medium">
                  Estimated Incremental Annual Revenue
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#F3B333] tracking-tight font-mono mt-1">
                  +${annualRevenueGain.toLocaleString()}
                </div>
              </div>

              {/* Stat breakdown list */}
              <div className="mt-6 space-y-3.5 pt-4 border-t border-neutral-700/60 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Projected Monthly Revenue</span>
                  <span className="font-bold text-white font-mono">
                    ${projectedMonthlyRevenue.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Expected Blended ROAS</span>
                  <span className="font-bold text-emerald-400 font-mono">
                    {projectedRoas}x Return
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Optimized Conv. Rate</span>
                  <span className="font-bold text-white font-mono">
                    {projectedConvRate}%
                  </span>
                </div>
              </div>
            </div>

            {/* Lock in CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-700">
              <button
                onClick={() =>
                  onApplyStrategy(
                    `$${monthlySpend.toLocaleString()}/mo spend with estimated +$${annualRevenueGain.toLocaleString()} gain`,
                    `Targeting ${projectedRoas}x ROAS with ${projectedConvRate}% conversion rate.`
                  )
                }
                className="w-full bg-[#F3B333] hover:bg-[#e2a227] text-black font-extrabold py-3.5 px-6 rounded-full text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Lock In This Growth Model</span>
                <CurvedArrow className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
