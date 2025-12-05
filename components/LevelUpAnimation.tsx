import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; // 1. Portal for better overlay performance
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

// 2. Memoization: Prevents unnecessary re-renders from parent updates
export const LevelUpAnimation: React.FC<LevelUpAnimationProps> = React.memo(({ 
    isActive, 
    onComplete, 
    newLevel, 
    language 
}) => {
    // State to handle unmounting gracefully (optional, but good for cleanup)
    const [render, setRender] = useState(isActive);

    useEffect(() => {
        if (isActive) {
            setRender(true);
            
            // Timer sync with animation duration
            const timer = setTimeout(() => {
                onComplete(); 
                // Note: We don't setRender(false) here to avoid UI flash before parent handles it.
                // Parent will set isActive=false, which triggers unmount.
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            // Immediate cleanup when prop becomes false
            setRender(false);
        }
    }, [isActive, onComplete]);

    if (!render) return null;

    // 3. Label Lookup Logic Fix (Bug Fixed)
    // Fallback to 'en' if language key is missing to prevent crash
    const lang = language || 'en';
    const lvlText = commonLabels[lang]?.level || 'Level';
    const levelUpText = summaryScreenLabels[lang]?.levelUp || 'Level Up!';
    const excellentText = quizCardLabels[lang]?.excellent || 'Excellent';
    const wellDoneText = quizCardLabels[lang]?.wellDone || 'Well Done';

    // 4. Using Portal to render outside the current DOM hierarchy (smoother z-index handling)
    return createPortal(
        <>
            {/* Confetti runs independently */}
            <ConfettiEffect
                isActive={true} // Since component only renders when active, this is always true
                onComplete={() => {}} // Optional: Confetti handles its own cleanup visually
                count={100}
                duration={2500}
            />

            {/* Backdrop with Blur */}
            <div 
                className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]"
                // 5. GPU Hint: Helps browser optimize compositing layers
                style={{ willChange: 'opacity' }} 
            >
                {/* Main Card */}
                <div 
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/95 dark:bg-primary-800/95 shadow-3xl transform scale-95 animate-zoom-in-out border border-white/20"
                    // GPU Hint for transform animations
                    style={{ willChange: 'transform, opacity' }}
                >
                    <SparkleIcon className="w-16 h-16 text-yellow-500 animate-pulse-slow drop-shadow-lg" />
                    
                    <h2 className="mt-4 text-5xl font-extrabold text-primary-700 dark:text-primary-300 animate-fade-in-up drop-shadow-sm">
                        {levelUpText}
                    </h2>
                    
                    <p 
                        className="mt-2 text-4xl font-bold text-gray-800 dark:text-gray-100 animate-fade-in-up" 
                        style={{ animationDelay: '0.3s', willChange: 'opacity, transform' }}
                    >
                        {lvlText} {newLevel}!
                    </p>
                    
                    <p 
                        className="mt-4 text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up" 
                        style={{ animationDelay: '0.6s', willChange: 'opacity, transform' }}
                    >
                        {excellentText} {wellDoneText}
                    </p>
                </div>
            </div>
        </>,
        document.body // Portal Target
    );
});