import React, { useState } from 'react';
import { Question } from '../data/types';
import { Bookmark, Search, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuestionGridProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<string, number>;
  flagged: number[];
  onSelectQuestion: (index: number) => void;
  accentColor?: string;
}

type FilterType = 'all' | 'unanswered' | 'correct' | 'incorrect' | 'flagged';

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  questions,
  currentIndex,
  answers,
  flagged,
  onSelectQuestion,
  accentColor = '#38bdf8',
}) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  const flaggedSet = new Set(flagged);

  // Stats calculation
  const total = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;

  Object.entries(answers).forEach(([idxStr, userAns]) => {
    const idx = parseInt(idxStr, 10);
    if (questions[idx]) {
      if (userAns === questions[idx].c) correctCount++;
      else incorrectCount++;
    }
  });

  const answeredCount = correctCount + incorrectCount;
  const unansweredCount = total - answeredCount;

  // Filter questions
  const filteredIndices = questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q, idx }) => {
      const userAns = answers[idx];
      const hasAnswered = userAns !== undefined;
      const isCorrect = hasAnswered && userAns === q.c;
      const isFlagged = flaggedSet.has(idx);

      if (filter === 'unanswered' && hasAnswered) return false;
      if (filter === 'correct' && !isCorrect) return false;
      if (filter === 'incorrect' && (!hasAnswered || isCorrect)) return false;
      if (filter === 'flagged' && !isFlagged) return false;

      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesQ = q.q.toLowerCase().includes(query);
        const matchesA = q.a.some((opt) => opt.toLowerCase().includes(query));
        const matchesR = q.r.toLowerCase().includes(query);
        return matchesQ || matchesA || matchesR;
      }

      return true;
    });

  return (
    <div className="bg-[#16181d] border border-white/[0.07] rounded-2xl p-4 flex flex-col gap-3.5 shadow-xl shadow-black/50 backdrop-blur-md">
      {/* Title & Quick Stats */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.07]">
        <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#d1d5db]">
          Question Navigator
        </span>
        <span className="font-mono text-xs font-bold text-slate-200 bg-[#0f1115] px-2.5 py-0.5 rounded border border-white/[0.07]">
          {answeredCount}/{total} <span className="text-[10px] text-slate-400 font-normal">done</span>
        </span>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by keyword..."
          className="w-full bg-[#0f1115] border border-white/[0.07] rounded-lg pl-8 pr-6 py-1.5 text-xs text-[#d1d5db] placeholder-slate-500 focus:outline-none focus:border-[#38bdf8]/40 transition shadow-inner"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      {/* Filter Tabs - Compact */}
      <div className="grid grid-cols-5 gap-1 p-1 bg-[#0f1115] rounded-lg border border-white/[0.07] text-[10px] font-mono">
        <button
          onClick={() => setFilter('all')}
          className={`py-1 rounded text-center transition ${
            filter === 'all'
              ? 'bg-[#1e2229] text-white font-bold shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="All Questions"
        >
          All
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`py-1 rounded text-center transition ${
            filter === 'unanswered'
              ? 'bg-[#1e2229] text-[#fbbf24] font-bold shadow-sm'
              : 'text-slate-400 hover:text-[#fbbf24]'
          }`}
          title="Remaining Unanswered"
        >
          Rem ({unansweredCount})
        </button>
        <button
          onClick={() => setFilter('correct')}
          className={`py-1 rounded text-center transition ${
            filter === 'correct'
              ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 font-bold'
              : 'text-slate-400 hover:text-[#10b981]'
          }`}
          title="Correct"
        >
          ✓ ({correctCount})
        </button>
        <button
          onClick={() => setFilter('incorrect')}
          className={`py-1 rounded text-center transition ${
            filter === 'incorrect'
              ? 'bg-[#f43f5e]/20 text-[#f43f5e] border border-[#f43f5e]/40 font-bold'
              : 'text-slate-400 hover:text-[#f43f5e]'
          }`}
          title="Incorrect"
        >
          ✗ ({incorrectCount})
        </button>
        <button
          onClick={() => setFilter('flagged')}
          className={`py-1 rounded text-center transition ${
            filter === 'flagged'
              ? 'bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/40 font-bold'
              : 'text-slate-400 hover:text-[#f59e0b]'
          }`}
          title="Flagged"
        >
          ★ ({flagged.length})
        </button>
      </div>

      {/* Numbers Grid (Natural flow, standard mouse/touchpad scrolling) */}
      <div className="select-none">
        {filteredIndices.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-500 italic">
            No matching questions.
          </div>
        ) : (
          <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-1.5">
            {filteredIndices.map(({ idx }) => {
              const userAns = answers[idx];
              const hasAnswered = userAns !== undefined;
              const isCorrect = hasAnswered && userAns === questions[idx].c;
              const isFlagged = flaggedSet.has(idx);
              const isCurrent = currentIndex === idx;

              // Inactive default: #1e2229 with subtle border
              let tileStyle =
                'bg-[#1e2229] text-[#d1d5db] border border-white/[0.07] hover:bg-[#262b34] hover:border-white/20 hover:text-white';

              if (hasAnswered) {
                if (isCorrect) {
                  tileStyle =
                    'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50 font-bold';
                } else {
                  tileStyle =
                    'bg-[#f43f5e]/20 text-[#f43f5e] border border-[#f43f5e]/50 font-bold';
                }
              }

              if (isCurrent) {
                // Active Question Node: background #38bdf8, text: #0f1115, font-weight: 800, box-shadow: 0 0 10px rgba(56, 189, 248, 0.5)
                tileStyle =
                  'bg-[#38bdf8] !text-[#0f1115] font-extrabold border border-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.5)]';
              }

              return (
                <button
                  key={idx}
                  onClick={() => onSelectQuestion(idx)}
                  className={`relative h-8 rounded-md border text-xs font-mono flex items-center justify-center transition-all active:scale-95 ${tileStyle}`}
                  title={`Question ${idx + 1}`}
                >
                  <span>{idx + 1}</span>

                  {/* Flag indicator dot (amber #f59e0b) */}
                  {isFlagged && (
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_4px_#f59e0b]" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Accuracy summary */}
      <div className="pt-2.5 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono text-slate-400">
        <span>ACCURACY:</span>
        <span
          className={`font-bold ${
            answeredCount > 0
              ? Math.round((correctCount / answeredCount) * 100) >= 70
                ? 'text-emerald-400'
                : 'text-amber-400'
              : 'text-slate-400'
          }`}
        >
          {answeredCount > 0
            ? `${Math.round((correctCount / answeredCount) * 100)}%`
            : '0%'}
          {' '}({correctCount}/{answeredCount})
        </span>
      </div>
    </div>
  );
};
