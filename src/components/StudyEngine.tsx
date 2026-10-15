import React, { useState, useEffect, useCallback } from 'react';
import { QuizBank } from '../data/modules';
import { Question } from '../data/types';
import { QuestionCard } from './QuestionCard';
import { QuestionGrid } from './QuestionGrid';
import { DiagnosticModal } from './DiagnosticModal';
import {
  ArrowLeft,
  RotateCcw,
  BarChart2,
  SlidersHorizontal,
  Layers,
  Sparkles,
} from 'lucide-react';

interface StudyEngineProps {
  bank: QuizBank;
  onBack: () => void;
}

interface SavedState {
  answers: Record<string, number>;
  flagged: number[];
}

export const StudyEngine: React.FC<StudyEngineProps> = ({ bank, onBack }) => {
  // Mode selection (if bank supports modes)
  const [selectedModeKey, setSelectedModeKey] = useState<string>(() => {
    return bank.modes ? bank.modes[0].key : '';
  });

  // Active question set and storage key
  const activeMode = bank.modes?.find((m) => m.key === selectedModeKey);
  const questions: Question[] = activeMode ? activeMode.questions : bank.questions || [];
  const storageKey: string = activeMode ? activeMode.storageKey : bank.storageKey || `quiz_${bank.id}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [mobileTab, setMobileTab] = useState<'question' | 'grid'>('question');

  // Load state from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedState;
        setAnswers(parsed.answers || {});
        setFlagged(parsed.flagged || []);
      } else {
        setAnswers({});
        setFlagged([]);
      }
    } catch {
      setAnswers({});
      setFlagged([]);
    }
    setCurrentIndex(0);
  }, [storageKey]);

  // Save state to localStorage helper
  const persistState = (newAnswers: Record<string, number>, newFlagged: number[]) => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ answers: newAnswers, flagged: newFlagged })
      );
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  };

  const handleSelectAnswer = (optIndex: number) => {
    const updated = { ...answers, [currentIndex]: optIndex };
    setAnswers(updated);
    persistState(updated, flagged);
  };

  const handleClearAnswer = () => {
    const updated = { ...answers };
    delete updated[currentIndex];
    setAnswers(updated);
    persistState(updated, flagged);
  };

  const handleToggleFlag = () => {
    let updated: number[];
    if (flagged.includes(currentIndex)) {
      updated = flagged.filter((i) => i !== currentIndex);
    } else {
      updated = [...flagged, currentIndex];
    }
    setFlagged(updated);
    persistState(answers, updated);
  };

  const handleResetBank = () => {
    localStorage.removeItem(storageKey);
    setAnswers({});
    setFlagged([]);
    setCurrentIndex(0);
    setShowConfirmReset(false);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
        if (currentIndex < questions.length - 1) setCurrentIndex((c) => c + 1);
      } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
        if (currentIndex > 0) setCurrentIndex((c) => c - 1);
      } else if (e.key.toLowerCase() === 'f') {
        handleToggleFlag();
      } else if (['1', 'a', 'A'].includes(e.key)) {
        if (questions[currentIndex]?.a[0]) handleSelectAnswer(0);
      } else if (['2', 'b', 'B'].includes(e.key)) {
        if (questions[currentIndex]?.a[1]) handleSelectAnswer(1);
      } else if (['3', 'c', 'C'].includes(e.key)) {
        if (questions[currentIndex]?.a[2]) handleSelectAnswer(2);
      } else if (['4', 'd', 'D'].includes(e.key)) {
        if (questions[currentIndex]?.a[3]) handleSelectAnswer(3);
      }
    },
    [currentIndex, questions, answers, flagged]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Compute category scores for diagnostic radar
  const categoryScores: number[] = [];
  const categoryAnsweredCounts: number[] = [];
  const categoryTotals: number[] = [];

  bank.categories.forEach((_, catIdx) => {
    let totalInCat = 0;
    let answeredInCat = 0;
    let correctInCat = 0;

    questions.forEach((q, idx) => {
      if (q.cat === catIdx) {
        totalInCat++;
        if (answers[idx] !== undefined) {
          answeredInCat++;
          if (answers[idx] === q.c) correctInCat++;
        }
      }
    });

    categoryTotals.push(totalInCat);
    categoryAnsweredCounts.push(answeredInCat);
    categoryScores.push(
      answeredInCat === 0 ? 0 : Math.round((correctInCat / answeredInCat) * 100)
    );
  });

  const currentQ = questions[currentIndex];
  const catName =
    currentQ && bank.categories[currentQ.cat]
      ? bank.categories[currentQ.cat]
      : 'General';

  const answeredCount = Object.keys(answers).length;
  const progressPct = questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-30 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Back button and Bank Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition"
              title="Back to Hub"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  {bank.subtitle}
                </span>
                {bank.badge && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${bank.badgeColor || bank.accentColor}20`,
                      color: bank.badgeColor || bank.accentColor,
                    }}
                  >
                    {bank.badge}
                  </span>
                )}
              </div>
              <h1 className="text-sm sm:text-base font-extrabold text-white truncate max-w-md">
                {bank.title}
              </h1>
            </div>
          </div>

          {/* Controls: Modes, Diagnostics, Reset */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            {/* Mode switcher if multi-mode */}
            {bank.modes && bank.modes.length > 1 && (
              <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-white/10">
                {bank.modes.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => {
                      setSelectedModeKey(m.key);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      selectedModeKey === m.key
                        ? 'bg-slate-800 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{m.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10">
                      {m.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowDiagnostic(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-slate-200 transition"
              title="View Radar Diagnostics"
            >
              <BarChart2 className="w-4 h-4 text-rose-400" />
              <span className="hidden sm:inline">Diagnostics</span>
            </button>

            <button
              onClick={() => setShowConfirmReset(true)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-rose-500/10 hover:border-rose-500/30 hover:text-rose-400 text-slate-400 transition"
              title="Wipe progress for this bank"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="max-w-7xl mx-auto mt-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
            <span>
              COMPLETION: {answeredCount} / {questions.length} items
            </span>
            <span className="font-bold text-slate-200">{progressPct}%</span>
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${progressPct}%`,
                backgroundColor: bank.accentColor,
              }}
            />
          </div>
        </div>
      </header>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex border-b border-white/10 bg-slate-900/60 px-4 py-2">
        <button
          onClick={() => setMobileTab('question')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition ${
            mobileTab === 'question'
              ? 'bg-slate-800 text-white'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Question View
        </button>
        <button
          onClick={() => setMobileTab('grid')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition ${
            mobileTab === 'grid'
              ? 'bg-slate-800 text-white'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Navigator ({questions.length})
        </button>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Question Card (8 cols) */}
        <div
          className={`lg:col-span-8 flex flex-col gap-6 ${
            mobileTab === 'grid' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {currentQ ? (
            <QuestionCard
              question={currentQ}
              index={currentIndex}
              totalQuestions={questions.length}
              categoryName={catName}
              selectedAnswer={answers[currentIndex]}
              isFlagged={flagged.includes(currentIndex)}
              onSelectAnswer={handleSelectAnswer}
              onToggleFlag={handleToggleFlag}
              onClearAnswer={handleClearAnswer}
              onPrev={() => setCurrentIndex((c) => Math.max(0, c - 1))}
              onNext={() =>
                setCurrentIndex((c) => Math.min(questions.length - 1, c + 1))
              }
              hasPrev={currentIndex > 0}
              hasNext={currentIndex < questions.length - 1}
              accentColor={bank.accentColor}
            />
          ) : (
            <div className="p-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-white/10">
              No questions found in this bank.
            </div>
          )}
        </div>

        {/* Right Column: Navigator & Radar Summary (4 cols) */}
        <div
          className={`lg:col-span-4 flex flex-col gap-6 ${
            mobileTab === 'question' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          <QuestionGrid
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            flagged={flagged}
            onSelectQuestion={(idx) => {
              setCurrentIndex(idx);
              setMobileTab('question');
            }}
            accentColor={bank.accentColor}
          />
        </div>
      </main>

      {/* Reset Confirmation Dialog */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-sm w-full p-6 flex flex-col gap-4 shadow-2xl">
            <h3 className="text-base font-bold text-white">Reset Study Progress?</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              This will clear all your stored answers, accuracy history, and flags for{' '}
              <strong className="text-white">{activeMode?.label || bank.title}</strong>. This
              action cannot be undone.
            </p>
            <div className="flex gap-2.5 mt-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleResetBank}
                className="flex-1 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md"
              >
                Confirm Wipe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Diagnostic Radar Modal */}
      {showDiagnostic && (
        <DiagnosticModal
          title={`${bank.title} • ${activeMode?.label || 'Practice'}`}
          categories={bank.categories}
          scores={categoryScores}
          counts={categoryAnsweredCounts}
          totalPerCategory={categoryTotals}
          onClose={() => setShowDiagnostic(false)}
          accentColor={bank.accentColor}
        />
      )}
    </div>
  );
};
