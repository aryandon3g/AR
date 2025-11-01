import React from 'react';
import type { Language, Solution } from '../types';
import { XIcon, SparkleIcon } from './icons';
import { solutionModalLabels as labels } from '../services/labels';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: Solution | null;
  isLoading: boolean;
  error: string | null;
  language: Language;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ isOpen, onClose, solution, isLoading, error, language }) => {
  if (!isOpen) return null;

  const l = labels[language];
  const isHindi = language === 'hi';

  const trickAvailable = solution && (isHindi ? solution.trick_hi : solution.trick_en) && 
                         (isHindi ? solution.trick_hi.toLowerCase() !== 'n/a' : solution.trick_en.toLowerCase() !== 'n/a');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-slide-in">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-white/30 dark:border-white/20 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-left flex flex-col max-h-[80vh]">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
            <SparkleIcon className="w-6 h-6 mr-2 text-primary-500"/>
            {l.title}
          </h2>
          <button onClick={onClose} className="p-1 -mr-2 rounded-full hover:bg-white/50 dark:hover:bg-black/50" aria-label={l.close}>
              <XIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto pr-2 -mr-2">
            {isLoading && (
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{l.loading}</p>
                </div>
            )}

            {error && (
                <div className="text-center py-8">
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{l.errorTitle}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{error}</p>
                </div>
            )}

            {solution && (
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{l.stepByStep}</h3>
                        <p className={`text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap ${isHindi ? 'font-sans' : ''}`}>
                            {isHindi ? solution.solution_hi : solution.solution_en}
                        </p>
                    </div>
                    {trickAvailable && (
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{l.shortTrick}</h3>
                            <p className={`text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap ${isHindi ? 'font-sans' : ''}`}>
                                {isHindi ? solution.trick_hi : solution.trick_en}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};