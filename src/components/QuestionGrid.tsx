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
  accentColor = '#f43f5e',
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
    <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-xl backdrop-blur-sm">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter by keyword / condition..."
          className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-white/20 transition"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/60 rounded-xl border border-white/5">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition ${
            filter === 'all'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          All ({total})
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition ${
            filter === 'unanswered'
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Remaining ({unansweredCount})
        </button>
        <button
          onClick={() => setFilter('correct')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition ${
            filter === 'correct'
              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
              : 'text-slate-400 hover:text-emerald-400'
          }`}
        >
          ✓ {correctCount}
        </button>
        <button
          onClick={() => setFilter('incorrect')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition ${
            filter === 'incorrect'
              ? 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
              : 'text-slate-400 hover:text-rose-400'
          }`}
        >
          ✕ {incorrectCount}
        </button>
        <button
          onClick={() => setFilter('flagged')}
          className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition ${
            filter === 'flagged'
              ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
              : 'text-slate-400 hover:text-amber-400'
          }`}
        >
          ★ {flagged.length}
        </button>
      </div>

      {/* Grid of Numbered Tiles */}
      <div className="max-h-[380px] overflow-y-auto pr-1">
        {filteredIndices.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-500">
            No items match the selected filter.
          </div>
        ) : (
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {filteredIndices.map(({ idx }) => {
              const userAns = answers[idx];
              const hasAnswered = userAns !== undefined;
              const isCorrect = hasAnswered && userAns === questions[idx].c;
              const isFlagged = flaggedSet.has(idx);
              const isCurrent = currentIndex === idx;

              let tileStyle =
                'bg-slate-800/40 text-slate-400 border-white/5 hover:bg-slate-800 hover:text-slate-200';

              if (hasAnswered) {
                if (isCorrect) {
                  tileStyle =
                    'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 font-bold';
                } else {
                  tileStyle =
                    'bg-rose-950/60 text-rose-300 border-rose-500/40 font-bold';
                }
              }

              if (isCurrent) {
                tileStyle +=
                  ' ring-2 ring-white/80 ring-offset-2 ring-offset-slate-900 !text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => onSelectQuestion(idx)}
                  className={`relative h-9 rounded-lg border text-xs font-mono flex items-center justify-center transition-all ${tileStyle}`}
                >
                  <span>{idx + 1}</span>

                  {/* Flag indicator dot */}
                  {isFlagged && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-slate-950" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Accuracy summary */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
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
