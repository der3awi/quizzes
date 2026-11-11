# Revised Implementation Plan: Discipline Subgroups & Quiz Interface Polish

## 1. Overview of Upgrades
This plan addresses two core user requests:
1. **Discipline Subgrouping**:
   - Organize the main portal into distinct clinical subgroups: **Respiratory System (RES 352)** and **Cardiovascular & Blood (CVB 351)** under Year 3.
   - Keep Pre-Clinical modules (Pathology, Pharmacology, APY, POD) neatly organized in a dedicated, collapsible/tabbed **Pre-Clinical Archive**.
2. **Quiz Interface Polish & Zero-Scroll Navigation**:
   - **Fix the "Scroll to Press Next" Friction**: Add sticky or dual navigation controls. The top meta header will house quick, prominent "Previous" and "Next" buttons alongside the bottom action bar so the next question is always 1-click away regardless of stem length, lab table height, or rationale expansion.
   - **Modern Clinical Color Scheme & Polish**: Upgrade the flat color scheme into a high-contrast clinical dark palette (slate/obsidian backdrop `#020617` and `#0b1120`, calibrated laser-accent borders, crisp glow halos for correct/incorrect feedback, vibrant high-yield pearl cards, and polished typography).
   - **Refined Option Cards**: Enhanced hover physics, glowing left accent borders on selection, clear letter badges (`[A]` to `[E]`), and instant visual feedback without layout shift.

---

## 2. Proposed Changes & Architecture

### A. Subgrouping Modules (`src/data/modules.ts`)
- Group modules cleanly by discipline with system identifiers:
  - `systemId: 'respiratory'`
    - `res-tbl1`: TBL 1 // High-Yield Practice (139 Qs)
    - `res-final`: Final Examination Simulation (200 Qs: 100 USMLE & IFOM + 100 Past Exam Recall)
  - `systemId: 'cardiovascular'`
    - `cvb-tbl1`: TBL 1 // Cardiovascular Foundations (65 Qs: Core + Past)
    - `cvb-tbl2`: TBL 2 // Clinical ECGs & Hemodynamics (28 Qs)
    - `cvb-final`: Final Examination Simulation (60 Qs: Core + Past)
  - `systemId: 'preclinical'`
    - `pathology-core`, `pharmacology`, `ap-theory`, `ap-past`, `pod-past`
- Export discipline group metadata (`DISCIPLINE_GROUPS`) with titles, course codes, badges, icons, and questions totals.

### B. Portal Hub Subgroup Views (`src/components/PortalHub.tsx`)
- **Discipline Filter Navigation**:
  - Filter pills: `All Modules`, `🫁 Respiratory (339 Qs)`, `🫀 Cardiovascular (153 Qs)`, and `🔬 Pre-Clinical Archive (429 Qs)`.
- **Subgroup Section Architecture**:
  - When viewing "All" or "Year 3", display dedicated discipline section banners:
    - **Respiratory System (RES 352)** with total module and question stats, sky/cyan telemetry borders.
    - **Cardiovascular & Blood (CVB 351)** with rose/crimson telemetry borders and total question metrics.
    - **Pre-Clinical Archive** with an archived repository banner, collapsible toggle, and individual subject cards.
- **Card Aesthetics**:
  - Deep obsidian card surfaces (`#0b1329`), subtle gradient highlights, distinct system badge pill accents, and fast launch buttons.

### C. Quiz Interface Polish & No-Scroll Navigation (`src/components/QuestionCard.tsx` & `src/components/StudyEngine.tsx`)
- **Top Quick Navigation (Eliminates Scrolling)**:
  - The Question Card top bar will now feature compact, high-visibility **[← Prev]** and **[Next →]** action controls right beside the question item counter (`ITEM 14 / 100`).
  - Users can answer and immediately click "Next" or hit `N`/`Enter` on their keyboard without scrolling down past long clinical stems, ABG tables, or rationales.
  - The bottom navigation bar remains intact for full-page completion flow.
- **Visual Scheme & Aesthetic Polish**:
  - **Color Depth**: Ditch the flat gray look for layered obsidian `#0b1124` with subtle radial gradient glow corresponding to the module's accent color (e.g. cyan for respiratory, crimson for cardiovascular).
  - **Stem Presentation**: Clinical vignette stems rendered with crisp contrast, vibrant highlighted clinical keywords (`.q-stem-bold` in amber/gold), and clean lab table borders with zebra striping.
  - **Interactive Options**:
    - Default: Deep slate `#0e172a` with hairline border `border-slate-800`.
    - Hover: Glow accent border with subtle translateX hover cue.
    - Selected Correct: Emerald glow with soft ring (`ring-1 ring-emerald-400/50`) and emerald badge.
    - Selected Incorrect: Crimson/Rose alert styling (`ring-1 ring-rose-400/50`) with clear explanation.
  - **Rationale & Pearls**:
    - Explanatory rationale card with distinct clinical breakdown and golden high-yield pearl callout.
  - **Keyboard Hints**:
    - Clear, subtle shortcut legend: `[A–E] Select • [Space/N] Next • [P] Prev • [F] Flag`.

---

## 3. Verification Plan
- **Discipline Grouping**:
  - Confirm Respiratory cards appear grouped under the Respiratory section.
  - Confirm Cardiovascular cards appear grouped under the Cardiovascular section.
  - Confirm Pre-Clinical modules are housed under the Pre-Clinical Archive.
- **No-Scroll Navigation**:
  - Test on long questions (e.g. questions with ABG tables or long rationales) to confirm the top Next button is instantly accessible without scrolling.
- **Answer Selection & Keyboard**:
  - Test selecting answers (A-E), Next/Prev buttons, and keyboard shortcuts (`N`, `P`, `A`-`E`).
- **Build & Quality Check**:
  - Run `tsc --noEmit` and `npm run build` to ensure clean compilation.
