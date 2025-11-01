
import type { Language } from '../types';

export interface PreloadedQuestion {
  question_en: string;
  question_hi: string;
  options_en: string[];
  options_hi: string[];
  correct_option_index: number;
}

export const preloadedQuestions: PreloadedQuestion[] = [
  
];
