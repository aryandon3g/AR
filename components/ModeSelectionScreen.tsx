

import React from 'react';
import type { Language, QuizMode } from '../types';
import { BookOpenIcon, HistoryIcon } from './icons';
import { modeSelectionLabels as labels } from '../services/labels';

interface ModeSelectionScreenProps {
  language: Language;
  onSelectMode: (mode: QuizMode) => void;
}

export const ModeSelectionScreen: React.FC<ModeSelectionScreenProps> = ({ language, onSelectMode }) => {
    const l = labels[language];

    const ModeCard: React.FC<{
        title: string;
        description: string;
        icon: React.ReactNode;
        onClick: () => void;
    }> = ({ title, description, icon, onClick }) => (
        <button
            onClick={onClick}
            className="w-full text-left p-6 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-lg hover:bg-white/30 dark:hover:bg-black/30 hover:border-primary-400/50 transition-all transform hover:scale-[1.02]"
        >
            <div className="flex items-center mb-2">
                <div className="p-2 bg-primary-500/20 rounded-full mr-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </button>
    );

    return (
        <div className="w-full h-full p-4 pt-24 flex flex-col items-center justify-center">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{labels['en'].title}</h2>
            </div>
            <div className="w-full max-w-sm space-y-6">
                <ModeCard
                    title={labels['en'].practiceTitle}
                    description={labels['en'].practiceDesc}
                    icon={<BookOpenIcon className="w-6 h-6 text-primary-500" />}
                    onClick={() => onSelectMode('practice')}
                />
                <ModeCard
                    title={labels['en'].attemptTitle}
                    description={labels['en'].attemptDesc}
                    icon={<HistoryIcon className="w-6 h-6 text-primary-500" />}
                    onClick={() => onSelectMode('attempt')}
                />
            </div>
        </div>
    );
};