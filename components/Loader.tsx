
import React from 'react';
import type { Language } from '../types';
import { loaderLabels as labels } from '../services/labels';

interface LoaderProps {
    language: Language;
}

export const Loader: React.FC<LoaderProps> = ({ language }) => {
    const l = labels[language];

    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full bg-primary-500/30 animate-ping"></div>
                <div className="w-16 h-16 rounded-full bg-primary-500/80 flex items-center justify-center text-white font-bold text-xl">
                    AI
                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {l.generatingQuiz}
            </h2>
            
            <div className="h-16"></div> {/* Spacer */}

            {/* NEW LOADER START */}
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* NEW LOADER END */}
        </div>
    );
};
