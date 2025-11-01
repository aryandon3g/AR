import React, { useEffect, useState } from 'react';
import { ConfettiEffect } from './ConfettiEffect';
import { BadgeIcon, TrophyIcon, SparkleIcon } from './icons';
import type { Language, Achievement } from '../types';
import { commonLabels, achievementLabels } from '../services/labels';

interface AchievementUnlockedNotificationProps {
    isActive: boolean;
    onComplete: () => void;
    achievement: Achievement | null;
    language: Language;
}

const iconMap: { [key: string]: React.FC<any> } = {
    'BadgeIcon': BadgeIcon,
    'TrophyIcon': TrophyIcon,
};

export const AchievementUnlockedNotification: React.FC<AchievementUnlockedNotificationProps> = ({ isActive, onComplete, achievement, language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isActive && achievement) {
            setIsVisible(true);
            setShowConfetti(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                setShowConfetti(false);
                onComplete();
            }, 3500); // Duration for the pop-up

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            setShowConfetti(false);
        }
    }, [isActive, onComplete, achievement]);

    if (!isVisible || !achievement) return null;

    const IconComponent = iconMap[achievement.icon] || BadgeIcon;
    const al: any = achievementLabels['en']; // Use English for achievement details

    return (
        <>
            <ConfettiEffect
                isActive={showConfetti}
                onComplete={() => setShowConfetti(false)}
                count={80}
                duration={3000}
                originY={window.innerHeight * 0.4} // Slightly above center
            />
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[10001]">
                <div className="flex flex-col items-center p-6 rounded-2xl bg-white/90 dark:bg-primary-800/90 shadow-2xl border border-primary-400/50 animate-zoom-in-out text-center max-w-sm w-full">
                    <div className="relative mb-4">
                        <IconComponent className="w-12 h-12 text-primary-600 dark:text-yellow-400 animate-pulse-slow" filled={true} />
                        <SparkleIcon className="absolute top-0 right-0 w-6 h-6 text-yellow-400 animate-spin-slow" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white animate-fade-in-up">
                        {language === 'en' ? 'Achievement Unlocked!' : 'उपलब्धि अनलॉक हुई!'}
                    </h2>
                    <p className="mt-2 text-2xl font-bold text-primary-700 dark:text-primary-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        "{al[achievement.id]?.name}"
                    </p>
                    <p className="mt-3 text-base text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        {al[achievement.id]?.description}
                    </p>
                    {achievement.unlockedAt && (
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                            {language === 'en' ? 'Unlocked on:' : 'अनलॉक किया गया:'} {new Date(achievement.unlockedAt).toLocaleDateString()}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};