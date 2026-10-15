import React from 'react';
import { RadarChart } from './RadarChart';
import { X, Award, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';

interface DiagnosticModalProps {
  title: string;
  categories: string[];
  scores: number[];
  counts: number[];
  totalPerCategory: number[];
  onClose: () => void;
  accentColor?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  title,
  categories,
  scores,
  counts,
  totalPerCategory,
  onClose,
  accentColor = '#f43f5e',
}) => {
  const totalAnswered = counts.reduce((acc, c) => acc + c, 0);
  const totalAvailable = totalPerCategory.reduce((acc, t) => acc + t, 0);

  // Overall weighted score
  const totalCorrect = scores.reduce((acc, s, idx) => acc + (s * counts[idx]) / 100, 0);
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Find strongest and weakest domains
  let strongestIdx = -1;
  let highestScore = -1;
  let weakestIdx = -1;
  let lowestScore = 101;

  scores.forEach((s, idx) => {
    if (counts[idx] > 0) {
      if (s > highestScore) {
        highestScore = s;
        strongestIdx = idx;
      }
      if (s < lowestScore) {
        lowestScore = s;
        weakestIdx = idx;
      }
    }
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl text-white shadow-md"
              style={{ backgroundColor: accentColor }}
            >
              <BarChart3 className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Clinical Mastery Diagnostics
              </h2>
              <p className="text-xs text-slate-400">{title}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800/40 border border-white/5 rounded-xl p-3 text-center">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                OVERALL ACCURACY
              </span>
              <div
                className={`text-xl sm:text-2xl font-bold font-mono mt-1 ${
                  overallPct >= 75
                    ? 'text-emerald-400'
                    : overallPct >= 60
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {overallPct}%
              </div>
            </div>

            <div className="bg-slate-800/40 border border-white/5 rounded-xl p-3 text-center">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                ITEMS ANSWERED
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                {totalAnswered} <span className="text-xs text-slate-500 font-normal">/ {totalAvailable}</span>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-white/5 rounded-xl p-3 text-center">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                STATUS
              </span>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
                {overallPct >= 75
                  ? 'Exceeding Standard'
                  : overallPct >= 60
                  ? 'Competent Passing'
                  : 'Review Advised'}
              </div>
            </div>
          </div>

          {/* Interactive Radar Chart */}
          <div className="flex flex-col items-center bg-slate-950/40 border border-white/5 rounded-2xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Category Competency Radar
            </h3>
            <RadarChart
              categories={categories}
              scores={scores}
              counts={counts}
              totalPerCategory={totalPerCategory}
              size={300}
            />
          </div>

          {/* Clinical Insights */}
          <div className="flex flex-col gap-2.5">
            {strongestIdx >= 0 && (
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-400">Strongest Domain:</span>{' '}
                  <span className="font-semibold">{categories[strongestIdx]}</span> with{' '}
                  <span className="font-mono">{highestScore}%</span> mastery.
                </div>
              </div>
            )}

            {weakestIdx >= 0 && lowestScore < 70 && (
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-400">Focus Recommendation:</span>{' '}
                  Revisit high-yield items in{' '}
                  <span className="font-semibold">{categories[weakestIdx]}</span> (currently at{' '}
                  <span className="font-mono">{lowestScore}%</span>).
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-200 transition"
          >
            Return to Study Engine
          </button>
        </div>
      </div>
    </div>
  );
};
