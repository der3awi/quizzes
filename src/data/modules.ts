import { Question } from './types';
import { pathologyQuestions } from './pathology';
import { pharmacologyQuestions } from './pharmacology';
import { apTheoryQuestions } from './apTheory';
import { apPastQuestions } from './apPast';
import { podPastQuestions } from './podPast';
import { cvbTbl1CoreQuestions, cvbTbl1PastQuestions } from './cvbTbl1';
import { cvbTbl2Questions } from './cvbTbl2';
import { cvbFinalCoreQuestions, cvbFinalPastQuestions } from './cvbFinal';

export interface QuizBank {
  id: string;
  title: string;
  subtitle: string;
  section: 'year3' | 'preclinical';
  systemId?: string;
  badge?: string;
  badgeColor?: string;
  accentColor: string;
  description: string;
  categories: string[];
  modes?: {
    key: string;
    label: string;
    badge: string;
    storageKey: string;
    questions: Question[];
  }[];
  // default single mode questions if modes not specified
  questions?: Question[];
  storageKey?: string;
}

export const MODULE_REGISTRY: QuizBank[] = [
  // Year 3 CVB Module
  {
    id: 'cvb-tbl1',
    title: 'TBL 1 // Cardiovascular Foundations',
    subtitle: 'Year 3 • Cardiovascular & Blood',
    section: 'year3',
    systemId: 'cvb',
    badge: 'Team-Based Learning',
    badgeColor: '#f43f5e',
    accentColor: '#f43f5e',
    description: 'Readiness assurance, hemodynamics, embryological septation, and coagulation pathways with past paper recall.',
    categories: ['Anatomy & Development', 'Physiology & Hemodynamics', 'Hematology & Coagulation', 'Pathology & Pharmacology'],
    modes: [
      {
        key: 'core',
        label: 'Core Practice',
        badge: '30 Qs',
        storageKey: 'cvb351_tbl1_v2',
        questions: cvbTbl1CoreQuestions,
      },
      {
        key: 'past',
        label: 'Past Exam Recall',
        badge: '35 Qs',
        storageKey: 'cvb351_tbl1_past_v1',
        questions: cvbTbl1PastQuestions,
      },
    ],
  },
  {
    id: 'cvb-tbl2',
    title: 'TBL 2 // Advanced Clinical Scenarios',
    subtitle: 'Year 3 • Cardiovascular & Blood',
    section: 'year3',
    systemId: 'cvb',
    badge: 'Team-Based Learning',
    badgeColor: '#fb7185',
    accentColor: '#fb7185',
    description: 'Complex clinical vignettes, arrhythmias, cardiomyopathies, infective endocarditis, and advanced pharmacotherapy.',
    categories: ['Embryology & Anatomy', 'Physiology & Arrhythmias', 'Cardiomyopathy & CAD', 'Infection & Valves'],
    questions: cvbTbl2Questions,
    storageKey: 'cvb351_tbl2_core_v1',
  },
  {
    id: 'cvb-final',
    title: 'Final Examination Simulation',
    subtitle: 'Year 3 • Cardiovascular & Blood',
    section: 'year3',
    systemId: 'cvb',
    badge: 'Assessment Bank',
    badgeColor: '#fbbf24',
    accentColor: '#fbbf24',
    description: 'High-yield multi-step clinical vignettes, 12-lead ECG interpretations, and authentic past examination questions.',
    categories: ['Anatomy & Development', 'Physiology & Hemodynamics', 'Hematology & Coagulation', 'Pathology & Pharmacology'],
    modes: [
      {
        key: 'core',
        label: 'Core Practice',
        badge: '100 Qs',
        storageKey: 'cvb351_final_practice_v1',
        questions: cvbFinalCoreQuestions,
      },
      {
        key: 'past',
        label: 'Past Exam Recall',
        badge: '82 Qs',
        storageKey: 'cvb351_final_past_v1',
        questions: cvbFinalPastQuestions,
      },
    ],
  },

  // Pre-clinical Archive Modules
  {
    id: 'pathology-core',
    title: 'Pathology Core & Specimen Hub',
    subtitle: 'Pre-Clinical • Pathology',
    section: 'preclinical',
    badge: 'Histology & Gross',
    badgeColor: '#38bdf8',
    accentColor: '#38bdf8',
    description: 'Tissue injury, inflammation, repair, and neoplasia with high-resolution specimen and microscopy integration.',
    categories: ['Practicals & Clinicals', 'Cellular Adaptations & Necrosis', 'Inflammation & Repair', 'Neoplasia & Malignancy'],
    questions: pathologyQuestions,
    storageKey: 'path_study_state_v1',
  },
  {
    id: 'pharmacology',
    title: 'Pharmacology Foundations',
    subtitle: 'Pre-Clinical • Pharmacology',
    section: 'preclinical',
    badge: 'Active Bank',
    badgeColor: '#a78bfa',
    accentColor: '#a78bfa',
    description: 'Pharmacokinetics, pharmacodynamics, autonomic adrenergics, and antimicrobial mechanism mastery.',
    categories: ['PK/PD Principles', 'Adrenergic & Autonomic', 'Antimicrobials & Resistance', 'Special Mechanisms'],
    questions: pharmacologyQuestions,
    storageKey: 'pharm_study_state_v1',
  },
  {
    id: 'ap-theory',
    title: 'APY Theory Examination',
    subtitle: 'Pre-Clinical • Anatomy & Physiology',
    section: 'preclinical',
    badge: 'Comprehensive',
    badgeColor: '#10b981',
    accentColor: '#10b981',
    description: 'Comprehensive physiological systems, neurological pathways, endocrine axes, and reproductive embryology.',
    categories: ['Neuro & Spinal', 'Endocrine Regulation', 'Repro & Development', 'Anatomy & Systems'],
    questions: apTheoryQuestions,
    storageKey: 'ap_theory_v1',
  },
  {
    id: 'ap-past',
    title: 'APY Past Final Exam',
    subtitle: 'Pre-Clinical • Past Papers',
    section: 'preclinical',
    badge: 'Past Papers',
    badgeColor: '#fbbf24',
    accentColor: '#fbbf24',
    description: 'Official recall and high-yield questions from previous Anatomy & Physiology final examinations.',
    categories: ['Physiology Foundations', 'Embryology & Anatomy', 'Endo & Reproductive', 'Neuroscience & Motor'],
    questions: apPastQuestions,
    storageKey: 'ap_past_exam_v1',
  },
  {
    id: 'pod-past',
    title: 'POD Past Exam Bank',
    subtitle: 'Pre-Clinical • Principles of Disease',
    section: 'preclinical',
    badge: 'Exam Bank',
    badgeColor: '#f43f5e',
    accentColor: '#f43f5e',
    description: 'Reverse-engineered question bank and station data for Principles of Disease (POD 242).',
    categories: ['Pathology & Hemodynamics', 'Pharmacology & Toxicology', 'Immunology & Defense', 'Antimicrobials & Infection'],
    questions: podPastQuestions,
    storageKey: 'pod_past_v1',
  },
];
