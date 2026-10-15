import React, { useState, useEffect } from 'react';
import { MODULE_REGISTRY, QuizBank } from '../data/modules';
import {
  Heart,
  Wind,
  Layers,
  ArrowRight,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle,
  BarChart3,
  Bookmark,
  Microscope,
  Pill,
  Brain,
  ShieldAlert,
  Flame,
} from 'lucide-react';

interface PortalHubProps {
  onSelectBank: (bankId: string) => void;
}

export const PortalHub: React.FC<PortalHubProps> = ({ onSelectBank }) => {
  const [activeSection, setActiveSection] = useState<'year3' | 'preclinical' | 'all'>('year3');
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    totalAnswered: 0,
    totalCorrect: 0,
    totalAvailable: 0,
  });

  // Calculate live stats from localStorage across banks
  useEffect(() => {
    let answered = 0;
    let correct = 0;
    let available = 0;

    MODULE_REGISTRY.forEach((bank) => {
      if (bank.modes) {
        bank.modes.forEach((mode) => {
          available += mode.questions.length;
          try {
            const raw = localStorage.getItem(mode.storageKey);
            if (raw) {
              const data = JSON.parse(raw);
              if (data.answers) {
                Object.entries(data.answers).forEach(([idxStr, ans]) => {
                  const idx = parseInt(idxStr, 10);
                  if (mode.questions[idx]) {
                    answered++;
                    if (ans === mode.questions[idx].c) correct++;
                  }
                });
              }
            }
          } catch {}
        });
      } else if (bank.questions && bank.storageKey) {
        available += bank.questions.length;
        try {
          const raw = localStorage.getItem(bank.storageKey);
          if (raw) {
            const data = JSON.parse(raw);
            if (data.answers) {
              Object.entries(data.answers).forEach(([idxStr, ans]) => {
                const idx = parseInt(idxStr, 10);
                if (bank.questions && bank.questions[idx]) {
                  answered++;
                  if (ans === bank.questions[idx].c) correct++;
                }
              });
            }
          }
        } catch {}
      }
    });

    setStats({ totalAnswered: answered, totalCorrect: correct, totalAvailable: available });
  }, []);

  const overallAccuracy =
    stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;

  // Filter modules
  const filteredModules = MODULE_REGISTRY.filter((mod) => {
    if (activeSection !== 'all' && mod.section !== activeSection) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = mod.title.toLowerCase().includes(q);
      const matchesDesc = mod.description.toLowerCase().includes(q);
      const matchesCat = mod.categories.some((c) => c.toLowerCase().includes(q));
      return matchesTitle || matchesDesc || matchesCat;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Navigation Bar */}
      <nav className="w-full max-w-6xl relative flex items-center justify-between pb-6 border-b border-white/10 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.9)] animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase font-mono text-slate-200">
            Clinical Science Engine
          </span>
        </div>

        {/* Basmala (centered) */}
        <div
          dir="rtl"
          lang="ar"
          className="absolute left-1/2 -translate-x-1/2 font-mono text-base sm:text-lg md:text-xl text-slate-400 font-semibold tracking-wider pointer-events-none select-none drop-shadow-sm"
          style={{ letterSpacing: '0.05em' }}
        >
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">DATABASE LIVE</span>
          <span className="text-white font-bold">{stats.totalAvailable} ITEMS</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="text-center max-w-3xl mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Medical Assessment Portal
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Clinical Sciences &amp; Exam Study Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          High-yield clinical vignettes, diagnostic competency radar, team-based learning exercises,
          and pre-clinical pathology/pharmacology past examination recall.
        </p>

        {/* Global Stats Ribbon */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Items Solved</div>
            <div className="text-lg sm:text-2xl font-bold font-mono text-white mt-1">
              {stats.totalAnswered}{' '}
              <span className="text-xs text-slate-500 font-normal">/ {stats.totalAvailable}</span>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Overall Accuracy</div>
            <div
              className={`text-lg sm:text-2xl font-bold font-mono mt-1 ${
                overallAccuracy >= 75
                  ? 'text-emerald-400'
                  : overallAccuracy >= 60
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {overallAccuracy}%
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-3 sm:p-4 text-center">
            <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Active Banks</div>
            <div className="text-lg sm:text-2xl font-bold font-mono text-sky-400 mt-1">
              {MODULE_REGISTRY.length}
            </div>
          </div>
        </div>
      </header>

      {/* Section Switcher & Search Bar */}
      <div className="w-full max-w-6xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex p-1 rounded-xl bg-slate-900/90 border border-white/10 w-full sm:w-auto">
          <button
            onClick={() => setActiveSection('year3')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeSection === 'year3'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Year 3 Systems</span>
          </button>
          <button
            onClick={() => setActiveSection('preclinical')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeSection === 'preclinical'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Microscope className="w-3.5 h-3.5 text-sky-400" />
            <span>Pre-Clinical Archive</span>
          </button>
          <button
            onClick={() => setActiveSection('all')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeSection === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Modules
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or topics..."
            className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-white/20 transition"
          />
        </div>
      </div>

      {/* Modules Dashboard Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredModules.map((mod) => {
          // Calculate item count
          const qCount = mod.modes
            ? mod.modes.reduce((acc, m) => acc + m.questions.length, 0)
            : mod.questions?.length || 0;

          return (
            <div
              key={mod.id}
              className="group bg-[#0f172a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 hover:-translate-y-1 transition-all duration-200 shadow-xl"
              style={{ borderTop: `3px solid ${mod.accentColor}` }}
            >
              <div className="flex flex-col gap-3">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-extrabold uppercase font-mono px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${mod.accentColor}18`,
                      color: mod.accentColor,
                    }}
                  >
                    {mod.badge || 'EXAM BANK'}
                  </span>
                  <span className="font-mono text-xs text-slate-400 bg-black/30 px-2 py-0.5 rounded">
                    {qCount} Qs
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition">
                  {mod.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {mod.description}
                </p>

                {/* Categories Pill list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {mod.categories.map((c, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Launch Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-2">
                {mod.modes ? (
                  <div className="flex gap-2">
                    {mod.modes.map((m) => (
                      <button
                        key={m.key}
                        onClick={() => onSelectBank(mod.id)}
                        className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-200 flex items-center justify-between transition"
                      >
                        <span className="truncate">{m.label}</span>
                        <span className="font-mono text-[10px] text-slate-400 ml-1">
                          {m.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => onSelectBank(mod.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition"
                    style={{ backgroundColor: mod.accentColor }}
                  >
                    <span>Launch Question Bank</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Future / Planned Systems Cards in Year 3 View */}
        {(activeSection === 'year3' || activeSection === 'all') && !searchQuery && (
          <>
            <div className="bg-[#0f172a]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between opacity-60">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400">
                    System 02 • Respiratory
                  </span>
                  <span className="font-mono text-xs text-slate-500">Scheduled</span>
                </div>
                <h3 className="text-lg font-bold text-slate-300">Respiratory System (RESP)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pulmonary physiology, blood gas analysis, spirometry loops, obstructive vs restrictive
                  pathology, and respiratory pharmacology.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Module in preparation
                </span>
              </div>
            </div>

            <div className="bg-[#0f172a]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between opacity-60">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400">
                    System 03 • Gastrointestinal
                  </span>
                  <span className="font-mono text-xs text-slate-500">Scheduled</span>
                </div>
                <h3 className="text-lg font-bold text-slate-300">Gastrointestinal System (GI)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hepatic architecture, bilirubin metabolism, portal hypertension, malabsorption
                  syndromes, and GI pharmacology.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Module in preparation
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
        <div>CLINICAL SCIENCES ENGINE // POD 242 // SESSION 2026</div>
        <div>REAL-TIME LOCAL REVISION &amp; ASSESSMENT HUB</div>
      </footer>
    </div>
  );
};
