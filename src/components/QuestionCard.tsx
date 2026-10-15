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
  accentColor = '#f43f5e',
}) => {
  const [showHint, setShowHint] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasAnswered = selectedAnswer !== undefined;
  const isCorrect = hasAnswered && selectedAnswer === question.c;

  const optionLetters = ['A', 'B', 'C', 'D'];

  // Normalize image source with relative path for GitHub Pages subpath compatibility
  const resolvedImg = question.img
    ? question.img.startsWith('http')
      ? question.img
      : `./images/${question.img.replace(/^\/?(images\/)?/, '')}`
    : undefined;

  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl backdrop-blur-sm relative">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
            ITEM {index + 1} / {totalQuestions}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5">
            {categoryName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {question.h && (
            <button
              onClick={() => setShowHint(!showHint)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition border ${
                showHint
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-amber-300 hover:border-amber-500/20'
              }`}
              title="Toggle Clinical Hint"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Hint</span>
            </button>
          )}

          <button
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition border ${
              isFlagged
                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md font-bold'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
            title="Flag for Review (F)"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
            <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
      </div>

      {/* Hint Banner if active */}
      {showHint && question.h && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-2.5 animate-in fade-in">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold uppercase tracking-wider text-[10px] text-amber-400 mb-0.5">
              High-Yield Pearl / Hint
            </div>
            <div>{question.h}</div>
          </div>
        </div>
      )}

      {/* Specimen / Histology Image thumbnail if present */}
      {resolvedImg && (
        <div className="flex flex-col gap-2">
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative cursor-pointer max-w-sm rounded-xl overflow-hidden border border-white/10 bg-slate-950/60 hover:border-sky-400/50 transition-all shadow-md"
          >
            <img
              src={resolvedImg}
              alt={question.label || 'Pathology visual specimen'}
              className="w-full max-h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-3">
              <span className="font-mono text-[10px] font-bold text-sky-400 bg-slate-900/90 px-2 py-0.5 rounded border border-sky-400/30">
                {question.label || 'SPECIMEN / HISTO'}
              </span>
              <span className="text-white text-xs flex items-center gap-1 opacity-80 group-hover:opacity-100 font-semibold">
                <Maximize2 className="w-3.5 h-3.5" /> Expand
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
        {question.q}
      </div>

      {/* Options List */}
      <div className="flex flex-col gap-2.5">
        {question.a.map((option, optIdx) => {
          const isSelected = selectedAnswer === optIdx;
          const isCorrectAnswer = optIdx === question.c;

          let btnStyles =
            'border-white/10 bg-slate-800/40 hover:bg-slate-800/80 hover:border-white/20 text-slate-200';
          let letterStyles = 'bg-white/5 text-slate-400 border-white/10';

          if (hasAnswered) {
            if (isSelected) {
              if (isCorrect) {
                btnStyles =
                  'border-emerald-500/80 bg-emerald-950/40 text-emerald-100 ring-1 ring-emerald-500/50';
                letterStyles = 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold';
              } else {
                btnStyles =
                  'border-rose-500/80 bg-rose-950/40 text-rose-100 ring-1 ring-rose-500/50';
                letterStyles = 'bg-rose-500 text-white border-rose-400 font-bold';
              }
            } else if (isCorrectAnswer) {
              btnStyles =
                'border-emerald-500/50 bg-emerald-950/20 text-emerald-200/90 border-dashed';
              letterStyles = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
            } else {
              btnStyles = 'border-white/5 bg-slate-900/40 text-slate-400 opacity-60';
              letterStyles = 'bg-white/5 text-slate-600 border-white/5';
            }
          }

          return (
            <button
              key={optIdx}
              onClick={() => onSelectAnswer(optIdx)}
              className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-150 group ${btnStyles}`}
            >
              <div
                className={`w-7 h-7 rounded-lg border font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${letterStyles}`}
              >
                {optionLetters[optIdx]}
              </div>

              <div className="flex-1 text-sm sm:text-base font-normal leading-snug">
                {option}
              </div>

              {hasAnswered && isSelected && (
                <div className="shrink-0 mt-0.5">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                </div>
              )}

              {hasAnswered && !isSelected && isCorrectAnswer && (
                <div className="shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400/70" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Rationale Breakdown Card */}
      {hasAnswered && (
        <div
          className={`p-5 rounded-xl border flex flex-col gap-2.5 animate-in fade-in duration-200 ${
            isCorrect
              ? 'bg-emerald-950/20 border-emerald-500/30'
              : 'bg-rose-950/20 border-rose-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info
                className={`w-4 h-4 ${
                  isCorrect ? 'text-emerald-400' : 'text-rose-400'
                }`}
              />
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isCorrect ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {isCorrect ? 'Correct Clinical Rationale' : 'Explanatory Rationale'}
              </span>
            </div>

            <button
              onClick={onClearAnswer}
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-mono transition"
              title="Clear selection to try again"
            >
              <RotateCcw className="w-3 h-3" /> Reset Question
            </button>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed">{question.r}</p>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold text-xs sm:text-sm hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:pointer-events-none transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="font-mono text-xs text-slate-500 hidden sm:inline">
          Shortcuts: [A-D] Select • [F] Flag • [N/P] Next/Prev
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 disabled:opacity-30 disabled:pointer-events-none transition"
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
