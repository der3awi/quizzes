import React, { useState, useEffect } from 'react';
import { MODULE_REGISTRY, DISCIPLINE_GROUPS, QuizBank } from '../data/modules';
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
  ChevronDown,
  ChevronUp,
  FolderArchive,
  GraduationCap,
  Activity,
  Layers3,
} from 'lucide-react';

interface PortalHubProps {
  onSelectBank: (bankId: string, modeKey?: string) => void;
}

export const PortalHub: React.FC<PortalHubProps> = ({ onSelectBank }) => {
  // Active discipline filter: 'all' | 'resp' | 'cvb' | 'preclinical'
  const [selectedDiscipline, setSelectedDiscipline] = useState<'all' | 'resp' | 'cvb' | 'preclinical'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isArchiveExpanded, setIsArchiveExpanded] = useState(true);
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

  // Filter modules helper
  const filterModuleList = (modules: QuizBank[]) => {
    return modules.filter((mod) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = mod.title.toLowerCase().includes(q);
        const matchesDesc = mod.description.toLowerCase().includes(q);
        const matchesCat = mod.categories.some((c) => c.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesCat;
      }
      return true;
    });
  };

  // Grouped modules
  const respiratoryModules = filterModuleList(MODULE_REGISTRY.filter((m) => m.systemId === 'resp'));
  const cardiovascularModules = filterModuleList(MODULE_REGISTRY.filter((m) => m.systemId === 'cvb'));
  const preclinicalModules = filterModuleList(
    MODULE_REGISTRY.filter((m) => m.systemId === 'preclinical' || m.section === 'preclinical')
  );

  // Helper to count questions in a module list
  const countQuestions = (list: QuizBank[]) => {
    return list.reduce((acc, mod) => {
      if (mod.modes) {
        return acc + mod.modes.reduce((mAcc, m) => mAcc + m.questions.length, 0);
      }
      return acc + (mod.questions?.length || 0);
    }, 0);
  };

  const respTotalQs = countQuestions(MODULE_REGISTRY.filter((m) => m.systemId === 'resp'));
  const cvbTotalQs = countQuestions(MODULE_REGISTRY.filter((m) => m.systemId === 'cvb'));
  const preclinTotalQs = countQuestions(MODULE_REGISTRY.filter((m) => m.systemId === 'preclinical' || m.section === 'preclinical'));

  // Render individual module card
  const renderModuleCard = (mod: QuizBank) => {
    const qCount = mod.modes
      ? mod.modes.reduce((acc, m) => acc + m.questions.length, 0)
      : mod.questions?.length || 0;

    return (
      <div
        key={mod.id}
        className="group relative bg-gradient-to-b from-[#0b1329] via-[#091024] to-[#070b18] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/25 hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-black/50 overflow-hidden"
      >
        {/* Subtle accent line on top */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-90 transition-opacity"
          style={{ backgroundColor: mod.accentColor }}
        />

        <div className="flex flex-col gap-3">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-extrabold uppercase font-mono px-2.5 py-1 rounded-md tracking-wider"
              style={{
                backgroundColor: `${mod.accentColor}18`,
                color: mod.accentColor,
                border: `1px solid ${mod.accentColor}30`,
              }}
            >
              {mod.badge || 'EXAM BANK'}
            </span>
            <span className="font-mono text-xs font-bold text-slate-300 bg-slate-950/80 border border-white/10 px-2.5 py-0.5 rounded-md">
              {qCount} Qs
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition mt-1">
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
        <div className="pt-5 mt-6 border-t border-white/10 flex flex-col gap-2">
          {mod.modes ? (
            <div className="flex flex-col xs:flex-row gap-2">
              {mod.modes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => onSelectBank(mod.id, m.key)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-bold text-slate-200 flex items-center justify-between transition group/btn"
                >
                  <span className="truncate">{m.label}</span>
                  <span
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded ml-1 text-slate-950 font-extrabold"
                    style={{ backgroundColor: mod.accentColor }}
                  >
                    {m.badge}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() => onSelectBank(mod.id)}
              className="w-full py-2.5 px-4 rounded-xl text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:brightness-110 active:scale-[0.99] transition"
              style={{ backgroundColor: mod.accentColor }}
            >
              <span>Launch Question Bank</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8 selection:bg-rose-500/30">
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
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">DATABASE LIVE</span>
          <span className="text-white font-bold">{stats.totalAvailable} ITEMS</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="text-center max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Medical Assessment &amp; Revision Portal
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Clinical Sciences &amp; Exam Study Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          High-yield clinical vignettes, diagnostic competency radar, team-based learning exercises,
          and past board examination recall structured by medical discipline.
        </p>

        {/* Global Stats Ribbon */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 sm:p-4 text-center shadow-md">
            <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Items Solved</div>
            <div className="text-lg sm:text-2xl font-bold font-mono text-white mt-1">
              {stats.totalAnswered}{' '}
              <span className="text-xs text-slate-500 font-normal">/ {stats.totalAvailable}</span>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 sm:p-4 text-center shadow-md">
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
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-3 sm:p-4 text-center shadow-md">
            <div className="text-[10px] sm:text-xs font-mono uppercase text-slate-400">Total Systems</div>
            <div className="text-lg sm:text-2xl font-bold font-mono text-sky-400 mt-1">
              2 + Archive
            </div>
          </div>
        </div>
      </header>

      {/* Discipline Navigation Tabs & Search Bar */}
      <div className="w-full max-w-6xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Subgroup Filter Buttons */}
        <div className="flex p-1 rounded-xl bg-slate-900/90 border border-white/10 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setSelectedDiscipline('all')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
              selectedDiscipline === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers3 className="w-3.5 h-3.5" />
            <span>All Disciplines</span>
          </button>

          <button
            onClick={() => setSelectedDiscipline('resp')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
              selectedDiscipline === 'resp'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Wind className="w-3.5 h-3.5 text-sky-400" />
            <span>Respiratory ({respTotalQs})</span>
          </button>

          <button
            onClick={() => setSelectedDiscipline('cvb')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
              selectedDiscipline === 'cvb'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Cardiovascular ({cvbTotalQs})</span>
          </button>

          <button
            onClick={() => setSelectedDiscipline('preclinical')}
            className={`flex-1 sm:flex-none px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
              selectedDiscipline === 'preclinical'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FolderArchive className="w-3.5 h-3.5 text-purple-400" />
            <span>Pre-Clinical Archive ({preclinTotalQs})</span>
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
            className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-white/30 transition shadow-inner"
          />
        </div>
      </div>

      {/* DISCIPLINE SECTIONS CONTAINER */}
      <div className="w-full max-w-6xl flex flex-col gap-12 mb-16">
        {/* SUBGROUP 1: RESPIRATORY SYSTEM */}
        {(selectedDiscipline === 'all' || selectedDiscipline === 'resp') && (
          <section className="flex flex-col gap-5">
            {/* Discipline Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900/60 to-slate-900/20 border border-sky-500/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shadow-inner">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                      Year 3 Discipline // RES 352
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      2 Comprehensive Modules
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white">Respiratory System</h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3 py-1.5 rounded-lg">
                  Total Questions: <strong className="text-sky-400">{respTotalQs}</strong>
                </span>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {respiratoryModules.length > 0 ? (
                respiratoryModules.map(renderModuleCard)
              ) : (
                <div className="p-8 text-center text-slate-400 col-span-2 bg-slate-900/30 rounded-2xl border border-white/5">
                  No matching respiratory modules found for "{searchQuery}".
                </div>
              )}
            </div>
          </section>
        )}

        {/* SUBGROUP 2: CARDIOVASCULAR & BLOOD */}
        {(selectedDiscipline === 'all' || selectedDiscipline === 'cvb') && (
          <section className="flex flex-col gap-5">
            {/* Discipline Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900/60 to-slate-900/20 border border-rose-500/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-inner">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                      Year 3 Discipline // CVB 351
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      3 Comprehensive Modules
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white">Cardiovascular &amp; Blood</h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3 py-1.5 rounded-lg">
                  Total Questions: <strong className="text-rose-400">{cvbTotalQs}</strong>
                </span>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardiovascularModules.length > 0 ? (
                cardiovascularModules.map(renderModuleCard)
              ) : (
                <div className="p-8 text-center text-slate-400 col-span-3 bg-slate-900/30 rounded-2xl border border-white/5">
                  No matching cardiovascular modules found for "{searchQuery}".
                </div>
              )}
            </div>
          </section>
        )}

        {/* SUBGROUP 3: PRE-CLINICAL ARCHIVE */}
        {(selectedDiscipline === 'all' || selectedDiscipline === 'preclinical') && (
          <section className="flex flex-col gap-5 pt-4">
            {/* Discipline Header Banner with Collapsible Control */}
            <div
              onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
              className="cursor-pointer flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-slate-900/20 border border-purple-500/30 hover:border-purple-500/50 shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-inner">
                  <FolderArchive className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
                      Archived Repository // Pre-Clinical
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      5 Historical Banks
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold text-white">Pre-Clinical Archive</h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-300 bg-slate-950/80 border border-white/10 px-3 py-1.5 rounded-lg">
                  Total Questions: <strong className="text-purple-400">{preclinTotalQs}</strong>
                </span>
                <button
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                  title={isArchiveExpanded ? 'Collapse Archive' : 'Expand Archive'}
                >
                  {isArchiveExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Preclinical Modules Grid (Collapsible) */}
            {isArchiveExpanded && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
                {preclinicalModules.length > 0 ? (
                  preclinicalModules.map(renderModuleCard)
                ) : (
                  <div className="p-8 text-center text-slate-400 col-span-3 bg-slate-900/30 rounded-2xl border border-white/5">
                    No matching archived modules found for "{searchQuery}".
                  </div>
                )}
              </div>
            )}
          </section>
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
