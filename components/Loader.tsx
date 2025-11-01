import React from 'react';
import type { Language } from '../types';
import { loaderLabels as labels } from '../services/labels';

interface LoaderProps {
    language: Language;
}

export const Loader: React.FC<LoaderProps> = ({ language }) => {
    const l = labels[language];

    // Array of transforms for the 6 faces of the cube
    const cubeFaces = [
        'rotateY(0deg) translateZ(3rem)',
        'rotateY(90deg) translateZ(3rem)',
        'rotateY(180deg) translateZ(3rem)',
        'rotateY(-90deg) translateZ(3rem)',
        'rotateX(90deg) translateZ(3rem)',
        'rotateX(-90deg) translateZ(3rem)',
    ];

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

            <div className="w-24 h-24" style={{ perspective: '800px' }}>
                <div 
                    className="w-full h-full relative animate-spin-cube" 
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {cubeFaces.map((transform, index) => (
                        <div 
                            key={index}
                            className="absolute w-24 h-24 border border-primary-400/50 bg-primary-500/10 rounded-lg" 
                            style={{ transform }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};