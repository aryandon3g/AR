import React from 'react';
import type { Language, Achievement } from '../types';
import { commonLabels, achievementLabels } from '../services/labels';
import { BadgeIcon, TrophyIcon } from './icons'; 

interface AchievementsScreenProps {
    language: Language;
    achievements: Achievement[];
}

const iconMap: { [key: string]: React.FC<any> } = {
    'BadgeIcon': BadgeIcon,
    'TrophyIcon': TrophyIcon,
};

export const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ language, achievements }) => {
    const l = commonLabels[language];
    const al: any = achievementLabels['en'];

    const sortedAchievements = [...achievements].sort((a, b) => {
        if (a.unlocked && !b.unlocked) return -1;
        if (!a.unlocked && b.unlocked) return 1;
        return a.id.localeCompare(b.id);
    });

    return (
        /* FIX 1: 'fixed inset-0' और 'h-[100dvh]' सबसे जरूरी हैं। 
           यह कंटेनर को स्क्रीन से बाहर जाने से रोकेगा और स्क्रॉलबार को एक्टिव करेगा। 
           'z-0' दिया है ताकि Header इसके ऊपर रहे। */
        <div className="fixed inset-0 w-full h-[100dvh] z-0 flex flex-col overflow-hidden bg-transparent">

            {/* Header Spacing: ऊपर से जगह छोड़ने के लिए */}
            <div className="pt-24 pb-2 shrink-0 text-center z-10">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white drop-shadow-md">
                    {commonLabels['en'].achievements}
                </h2>
            </div>

            {/* FIX 2: Scrollable Area
               अब स्क्रॉल सिर्फ इस div में होगा। */ }
            <div 
                className="flex-1 overflow-y-auto px-4 w-full"
                style={{ 
                    scrollbarWidth: 'auto', /* Firefox */
                    scrollbarColor: '#888 transparent' 
                }}
            >
                {/* CSS to Force Scrollbar visible in Chrome/Mobile */}
                <style>{`
                    div::-webkit-scrollbar {
                        display: block !important;
                        width: 6px;
                    }
                    div::-webkit-scrollbar-thumb {
                        background-color: rgba(156, 163, 175, 0.5);
                        border-radius: 10px;
                    }
                `}</style>

                {/* FIX 3: pb-40 (Extra padding) ताकि आखिरी बैज कट न जाए */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-40">
                    {sortedAchievements.map(achievement => {
                        const IconComponent = iconMap[achievement.icon] || BadgeIcon;
                        return (
                            <div
                                key={achievement.id}
                                className={`flex flex-col items-center p-4 rounded-2xl shadow-lg transition-all duration-300 transform relative
                                            ${achievement.unlocked
                                            ? 'bg-gradient-to-br from-primary-500/20 to-yellow-500/10 border border-primary-400/30 dark:border-yellow-300/20'
                                            : 'bg-gray-200/10 dark:bg-black/10 border border-gray-300/20 dark:border-gray-700/20 grayscale opacity-60'
                                        }
                                            active:scale-95`}
                                role="status"
                                aria-label={al[achievement.id]?.name}
                            >
                                <div className="relative">
                                    <IconComponent
                                        className={`w-14 h-14 md:w-16 md:h-16 ${achievement.unlocked ? 'text-primary-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}
                                        filled={achievement.unlocked}
                                    />
                                    {!achievement.unlocked && (
                                        <span className="absolute bottom-0 right-0 text-gray-500 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm0 2a3 3 0 00-3 3v2h6V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                                <h3 className={`mt-3 text-sm md:text-lg font-semibold text-center leading-tight ${achievement.unlocked ? 'text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                                    {al[achievement.id]?.name}
                                </h3>
                                <p className={`mt-1 text-xs md:text-sm text-center line-clamp-2 ${achievement.unlocked ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                                    {al[achievement.id]?.description}
                                </p>
                                {achievement.unlocked && achievement.unlockedAt && (
                                    <p className="mt-2 text-[10px] md:text-xs text-primary-600 dark:text-primary-300 opacity-80">
                                        {new Date(achievement.unlockedAt).toLocaleDateString()}
                                    </p>
                                )}
                                {!achievement.unlocked && achievement.currentProgress !== undefined && achievement.targetValue !== undefined && (
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                                        <div
                                            className="bg-primary-500 h-full rounded-full"
                                            style={{ width: `${Math.min(100, (achievement.currentProgress / achievement.targetValue) * 100)}%` }}
                                        ></div>
                                        <p className="text-[10px] text-right text-gray-500 dark:text-gray-400 mt-1">{achievement.currentProgress}/{achievement.targetValue}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};