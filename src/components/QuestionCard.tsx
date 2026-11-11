import React, { useState } from 'react';
import { Question } from '../data/types';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Maximize2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';
import { SpecimenModal } from './SpecimenModal';

interface QuestionCardProps {
  question: Question;
  index: number;
  totalQuestions: number;
  categoryName: string;
  selectedAnswer: number | undefined;
  isFlagged: boolean;
  onSelectAnswer: (optionIndex: number) => void;
  onToggleFlag: () => void;
  onClearAnswer: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  accentColor?: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalQuestions,
  categoryName,
  selectedAnswer,
  isFlagged,
  onSelectAnswer,
  onToggleFlag,
  onClearAnswer,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  accentColor = '#38bdf8',
}) => {
  const [showHint, setShowHint] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasAnswered = selectedAnswer !== undefined;
  const isCorrect = hasAnswered && selectedAnswer === question.c;

  const optionLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Normalize image source with relative path for GitHub Pages subpath compatibility
  const resolvedImg = question.img
    ? question.img.startsWith('http')
      ? question.img
      : `./images/${question.img.replace(/^\/?(images\/)?/, '')}`
    : undefined;

  return (
    <div className="relative bg-[#16181d] border border-white/[0.07] rounded-2xl p-5 sm:p-7 flex flex-col gap-5 shadow-2xl shadow-black/60 backdrop-blur-md">
      {/* Glow highlight line along the top border */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-80 blur-[0.5px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Top Meta & Sticky Quick-Navigation Bar */}
      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-white/[0.07]">
        {/* Left: Item progress indicator + Category */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-200 bg-[#0f1115] border border-white/[0.07] px-3 py-1.5 rounded-lg shadow-inner">
            <span style={{ color: accentColor }}>#</span>
            <span>ITEM</span>
            <span className="text-white font-extrabold">{index + 1}</span>
            <span className="text-slate-500 font-normal">/</span>
            <span className="text-slate-400">{totalQuestions}</span>
          </div>

          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#1e2229] text-slate-300 border border-white/[0.07] max-w-[200px] sm:max-w-none truncate">
            {categoryName}
          </span>
        </div>

        {/* Right: Quick Action Controls + Instant Next/Prev */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {question.h && (
            <button
              onClick={() => setShowHint(!showHint)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition border ${
                showHint
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-[#1e2229] text-slate-400 border-white/[0.07] hover:text-amber-300 hover:border-amber-500/30'
              }`}
              title="Toggle Clinical Hint"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Hint</span>
            </button>
          )}

          <button
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition border ${
              isFlagged
                ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-bold'
                : 'bg-[#1e2229] text-slate-400 border-white/[0.07] hover:text-white'
            }`}
            title="Flag for Review (F)"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>

          {/* Quick Instant Prev/Next buttons right at the top so user never needs to scroll */}
          <div className="flex items-center ml-1 pl-2 border-l border-white/[0.07] gap-1">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-white/[0.07] bg-[#1e2229] text-slate-300 hover:text-white hover:bg-[#262b34] disabled:opacity-25 disabled:pointer-events-none transition text-xs font-medium flex items-center gap-1"
              title="Previous Question (P)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev</span>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[#0f1115] font-extrabold text-xs shadow-md hover:brightness-110 active:scale-95 disabled:opacity-25 disabled:pointer-events-none transition flex items-center gap-1"
              style={{ backgroundColor: accentColor }}
              title="Next Question (N or Space)"
            >
              <span className="hidden xs:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hint Banner if active */}
      {showHint && question.h && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-top-1">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold uppercase tracking-wider text-[10px] text-amber-400 mb-0.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> High-Yield Pearl / Diagnostic Clue
            </div>
            <div className="leading-relaxed text-amber-100">{question.h}</div>
          </div>
        </div>
      )}

      {/* Specimen / Histology Image thumbnail if present */}
      {resolvedImg && (
        <div className="flex flex-col gap-2">
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer max-w-sm rounded-xl overflow-hidden border border-white/[0.07] bg-[#0f1115] hover:border-sky-400/50 transition-all shadow-md"
          >
            <img
              src={resolvedImg}
              alt={question.label || 'Pathology visual specimen'}
              className="w-full max-h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3">
              <span className="font-mono text-[10px] font-bold text-sky-400 bg-[#16181d] px-2 py-0.5 rounded border border-sky-400/30">
                {question.label || 'SPECIMEN / HISTO'}
              </span>
              <span className="text-white text-xs flex items-center gap-1 opacity-80 group-hover:opacity-100 font-semibold">
                <Maximize2 className="w-3.5 h-3.5" /> Expand
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Question Text / Clinical Vignette Stem */}
      <div className="bg-[#0f1115]/90 border border-white/[0.07] rounded-xl p-5 sm:p-6 shadow-inner">
        {typeof question.q === 'string' && question.q.includes('<') && question.q.includes('>') ? (
          <div
            className="text-[15px] sm:text-[16px] text-[#d1d5db] font-[450] leading-[1.8] tracking-normal [&_.q-stem-bold]:block [&_.q-stem-bold]:mt-4 [&_.q-stem-bold]:font-bold [&_.q-stem-bold]:text-[#fbbf24] [&_.q-stem-bold]:bg-[#fbbf24]/[0.06] [&_.q-stem-bold]:border-l-[3px] [&_.q-stem-bold]:border-[#fbbf24] [&_.q-stem-bold]:py-3 [&_.q-stem-bold]:px-4 [&_.q-stem-bold]:rounded-r-lg [&_.q-stem-bold]:text-[15.5px] [&_.q-stem-bold]:leading-snug [&_.lab-table]:w-full [&_.lab-table]:my-4 [&_.lab-table]:text-xs [&_.lab-table]:border [&_.lab-table]:border-white/[0.07] [&_.lab-table]:rounded-xl [&_.lab-table]:overflow-hidden [&_.lab-table_th]:bg-[#1e2229] [&_.lab-table_th]:text-amber-300 [&_.lab-table_th]:p-3 [&_.lab-table_th]:text-left [&_.lab-table_th]:font-mono [&_.lab-table_th]:text-[11px] [&_.lab-table_th]:uppercase [&_.lab-table_th]:tracking-wider [&_.lab-table_td]:p-3 [&_.lab-table_td]:border-t [&_.lab-table_td]:border-white/[0.07] [&_.lab-table_td]:font-mono [&_.lab-table_td]:text-[#d1d5db] [&_.lab-table_tr:nth-child(even)]:bg-white/[0.02]"
            dangerouslySetInnerHTML={{ __html: question.q }}
          />
        ) : (
          <div className="text-[15px] sm:text-[16px] text-[#d1d5db] font-[450] leading-[1.8] tracking-normal">
            {question.q}
          </div>
        )}
      </div>

      {/* Options List */}
      <div className="flex flex-col gap-2.5">
        {question.a.map((option, optIdx) => {
          const isSelected = selectedAnswer === optIdx;
          const isCorrectAnswer = optIdx === question.c;

          // Default state: background: #1e2229, 12px rounded corners, hover: translateY(-1px), background: #262b34, border-color: rgba(56, 189, 248, 0.4), box-shadow: 0 4px 16px rgba(0,0,0,0.4)
          let btnStyles =
            'bg-[#1e2229] border border-white/[0.07] text-[#d1d5db] rounded-[12px] hover:-translate-y-[1px] hover:bg-[#262b34] hover:border-[#38bdf8]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-150';
          let letterStyles =
            'w-8 h-8 rounded-[8px] bg-white/[0.05] border border-white/[0.07] font-mono font-bold text-[#8b949e]';

          if (hasAnswered) {
            if (isSelected) {
              if (isCorrect) {
                btnStyles =
                  'border-emerald-500/80 bg-emerald-950/60 text-emerald-100 rounded-[12px] ring-2 ring-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] -translate-y-[1px]';
                letterStyles =
                  'w-8 h-8 rounded-[8px] bg-emerald-500 text-[#0f1115] border-emerald-400 font-mono font-extrabold';
              } else {
                btnStyles =
                  'border-rose-500/80 bg-rose-950/60 text-rose-100 rounded-[12px] ring-2 ring-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.2)] -translate-y-[1px]';
                letterStyles =
                  'w-8 h-8 rounded-[8px] bg-rose-500 text-white border-rose-400 font-mono font-extrabold';
              }
            } else if (isCorrectAnswer) {
              btnStyles =
                'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 rounded-[12px] border-dashed';
              letterStyles =
                'w-8 h-8 rounded-[8px] bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-mono font-bold';
            } else {
              btnStyles = 'border-white/[0.04] bg-[#16181d]/50 text-slate-500 rounded-[12px] opacity-50';
              letterStyles =
                'w-8 h-8 rounded-[8px] bg-white/[0.02] text-slate-600 border-white/[0.04] font-mono font-bold';
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => onSelectAnswer(optIdx)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 text-left group active:scale-[0.99] ${btnStyles}`}
            >
              <div
                className={`flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-sm ${letterStyles}`}
              >
                {optionLetters[optIdx]}
              </div>

              <div className="flex-1 text-[14.5px] sm:text-[15.5px] font-normal leading-relaxed tracking-normal pt-0.5">
                {option}
              </div>

              {hasAnswered && isSelected && (
                <div className="shrink-0 mt-1 animate-in zoom-in-75">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                </div>
              )}

              {hasAnswered && !isSelected && isCorrectAnswer && (
                <div className="shrink-0 mt-1 animate-in zoom-in-75">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400/80" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Rationale Breakdown Card */}
      {hasAnswered && (
        <div
          className={`p-4 sm:p-5 rounded-xl border flex flex-col gap-3 animate-in fade-in-50 duration-200 ${
            isCorrect
              ? 'bg-emerald-950/30 border-emerald-500/40 shadow-[0_0_24px_rgba(16,185,129,0.08)]'
              : 'bg-rose-950/30 border-rose-500/40 shadow-[0_0_24px_rgba(244,63,94,0.08)]'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.07]">
            <div className="flex items-center gap-2">
              <Info
                className={`w-4 h-4 ${
                  isCorrect ? 'text-emerald-400' : 'text-rose-400'
                }`}
              />
              <span
                className={`text-xs font-bold uppercase tracking-wider font-mono ${
                  isCorrect ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {isCorrect ? 'Correct Clinical Rationale' : 'Explanatory Rationale'}
              </span>
            </div>

            <button
              onClick={onClearAnswer}
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-mono transition px-2.5 py-1 rounded bg-[#1e2229] hover:bg-[#262b34] border border-white/[0.07]"
              title="Clear selection to try again"
            >
              <RotateCcw className="w-3 h-3" /> Reset Question
            </button>
          </div>

          <p className="text-sm text-[#d1d5db] leading-relaxed whitespace-pre-line">{question.r}</p>
        </div>
      )}

      {/* Bottom Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.07] mt-1">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.07] bg-[#1e2229] text-slate-200 font-semibold text-xs sm:text-sm hover:bg-[#262b34] hover:border-white/20 disabled:opacity-25 disabled:pointer-events-none transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
          Shortcuts: <span className="text-slate-300">[A–E]</span> Select • <span className="text-slate-300">[Space/N]</span> Next • <span className="text-slate-300">[P]</span> Prev • <span className="text-slate-300">[F]</span> Flag
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#0f1115] font-extrabold text-xs sm:text-sm shadow-lg hover:brightness-110 active:scale-95 disabled:opacity-25 disabled:pointer-events-none transition"
          style={{ backgroundColor: accentColor }}
        >
          <span>Next Item</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Specimen zoom modal */}
      {isModalOpen && resolvedImg && (
        <SpecimenModal
          imageSrc={resolvedImg}
          label={question.label}
          questionText={question.q}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
