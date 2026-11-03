# Implementation Plan: Respiratory Final Examination Simulation (`res-final`)

Mirror the proven Cardiovascular Final Exam (`cvb-final`) architecture to create a dedicated Respiratory Final Examination simulation for Year 3 (RES 352).

---

## 1. Architecture & Design Alignment with Cardio Final

| Feature | Cardiovascular Final (`cvb-final`) | Respiratory Final (`res-final`) |
| :--- | :--- | :--- |
| **Module ID** | `cvb-final` | `res-final` |
| **Title / Subtitle** | Final Examination Simulation • Year 3 CVB | Final Examination Simulation • Year 3 Respiratory (RES 352) |
| **Badge Styling** | Gold / Amber `Assessment Bank` (`#fbbf24`) | Gold / Amber `Assessment Bank` (`#fbbf24`) |
| **Mode System** | Dual: `Core Practice` & `Past Exam Recall` | Dual: `Core Practice` & `Past Exam Recall` |
| **Diagnostics** | 5-axis Competency Radar Chart | 5-axis Competency Radar Chart across Respiratory domains |
| **Persistence** | `localStorage` key `cvb351_final_practice_v1` & `_past_v1` | `localStorage` key `res352_final_core_v1` & `_past_v1` |
| **Tools** | Question Matrix, Flagging, Search, Keyboard Shortcuts | Identical: `1-5`, `J`/`K`, `F`, Grid modal, Filter tabs |

---

## 2. Proposed Changes

### A. Data Layer (`src/data/respiratoryFinal.ts`)
- Define `respiratoryFinalCategories` matching Year 3 respiratory curricula:
  1. `Airway Anatomy & Defense Mechanisms`
  2. `Ventilation, Mechanics & Gas Exchange`
  3. `PFTs, Spirometry & Acid-Base`
  4. `Obstructive, Restrictive & Interstitial Diseases`
  5. `Pulmonary Vascular, Infections & Critical Care`
- Construct question banks:
  - **Core Practice Bank**: High-yield clinical scenario MCQs formatted with 5 options (`A–E`), clinical explanations, category tags, and references.
  - **Past Recall Bank**: Structured template questions ready for you to paste recall items anytime without altering code logic.

### B. Module Registry (`src/data/modules.ts`)
- Register `res-final`:
  ```typescript
  'res-final': {
    id: 'res-final',
    title: 'Final Examination Simulation',
    subtitle: 'Year 3 • Respiratory System (RES 352)',
    accentColor: '#fbbf24',
    badgeText: 'Assessment Bank',
    categories: respiratoryFinalCategories,
    modes: [
      { id: 'core', label: 'Core Practice', questions: respiratoryFinalCore, storageKey: 'res352_final_core_v1' },
      { id: 'past', label: 'Past Exam Recall', questions: respiratoryFinalPast, storageKey: 'res352_final_past_v1' }
    ]
  }
  ```

### C. Portal & Route Linking
- Update `year3/respiratory/index.html` to activate the **Final Examination Simulation** launcher card.
- Create `/year3/respiratory/final-exam/index.html` static entry point redirecting to `../../index.html?module=res-final` (compatible with both Vite dev server and static GitHub Pages hosting).
- Verify the central navigation bar and Islamic Basmala remain pristine across all views.

### D. Verification & Asset Sync
- Verify TypeScript compilation via `lint_applet` (`tsc --noEmit`).
- Verify production build with `compile_applet` and `npm run build`.
- Update static bundle in `docs/` and `assets/` so GitHub Pages remains in sync.

---

## 3. User Review Request
Please review this plan. If you would like to proceed with implementing this architecture, click **Proceed** or let me know if you would like any adjustments to the domain categories or structure.
