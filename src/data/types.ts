export interface Question {
  cat: number;
  q: string;
  a: string[];
  c: number;
  r: string;
  h?: string;
  img?: string;
  label?: string;
}

export interface QuizPool {
  id: string;
  name: string;
  badge?: string;
  storageKey: string;
  questions: Question[];
}

export interface QuizConfig {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  accentColor: string; // e.g. '#f43f5e'
  accentGlow?: string;
  categoryLabels: string[];
  pools: QuizPool[];
  backView: 'main' | 'year3' | 'preclinical';
  hasImages?: boolean;
  hasHints?: boolean;
}

export interface QuizState {
  answers: Record<number, number>;
  flagged: number[];
}
