import React, { useEffect, useState } from 'react';
import { SparkleIcon } from './icons';
import { ConfettiEffect } from './ConfettiEffect';
import type { Language } from '../types';
import { summaryScreenLabels, commonLabels, quizCardLabels } from '../services/labels';


interface LevelUpAnimationProps {
    isActive: boolean;
    onComplete: () => void;
    newLevel: number;
    language: Language;
}

export const LevelUpAnimation: React.FC<LevelUpAnimationProps> = ({ isActive, onComplete, newLevel, language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isActive) {
            setIsVisible(true);
            setShowConfetti(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                setShowConfetti(false);
                onComplete();
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            setShowConfetti(false);
        }
    }, [isActive, onComplete]);

    if (!isVisible) return null;

    return (
        <>
            <ConfettiEffect
                isActive={showConfetti}
                onComplete={() => setShowConfetti(false)}
                count={100}
                duration={2500}
            />
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[10000]">
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/90 dark:bg-primary-800/90 shadow-3xl transform scale-95 animate-zoom-in-out">
                    <SparkleIcon className="w-16 h-16 text-yellow-500 animate-pulse-slow" />
                    <h2 className="mt-4 text-5xl font-extrabold text-primary-700 dark:text-primary-300 animate-fade-in-up">
                        {summaryScreenLabels['en'].levelUp}
                    </h2>
                    <p className="mt-2 text-4xl font-bold text-gray-800 dark:text-gray-100 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        {commonLabels['en'].level} {newLevel}!
                    </p>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        {quizCardLabels['en'].excellent} {quizCardLabels['en'].wellDone}
                    </p>
                </div>
            </div>
        </>
    );
};