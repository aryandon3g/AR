import React from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { HistoryIcon, BookOpenIcon, ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon } from './icons';
import { homeScreenLabels as labels } from '../services/labels';

interface HomeScreenProps {
  language: Language;
  history: SummaryData[];
  onViewHistoryItem: (id: string) => void;
  onTakeQuizClick: () => void;
  xpData: XpData;
  onViewProgress: () => void;
  onViewAchievements: () => void;
  streakData: StreakData;
}

const XP_PER_LEVEL = 100;

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  history,
  onViewHistoryItem,
  onTakeQuizClick,
  xpData,
  onViewProgress,
  onViewAchievements,
  streakData
}) => {
  const l = labels[language];

  // Logic
  const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
  const xpForNextLevel = xpData.level * XP_PER_LEVEL;
  const xpProgress = xpData.totalXp - xpForCurrentLevel;
  const xpToNext = xpForNextLevel - xpForCurrentLevel;
  const xpProgressPercentage = Math.min((xpProgress / xpToNext) * 100, 100);

  // Circle Config for SVG
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (xpProgressPercentage / 100) * circumference;

  return (
    <div className="w-full h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col relative overflow-y-auto custom-scrollbar">
      
      {/* Top Navigation / Status Bar */}
      <div className="px-6 py-6 flex justify-between items-center z-10">
         <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">{l.title}</h1>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short'})}</span>
         </div>
         
         {/* Streak Capsule */}
         <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/50">
             <FireIcon className="w-4 h-4 text-orange-500" />
             <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{streakData.currentStreak}</span>
         </div>
      </div>

      {/* --- CENTERPIECE: Circular Progress --- */}
      <div className="flex-grow flex flex-col items-center justify-center -mt-10 mb-4">
        
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="transform -rotate-90 w-full h-full">
                <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-gray-100 dark:text-gray-800"
                />
                {/* Progress Circle */}
                <circle
                    cx="128"
                    cy="128"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="text-primary-600 dark:text-primary-500 transition-all duration-1000 ease-out"
                />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Level</span>
                <span className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter">{xpData.level}</span>
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-2 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded">
                    {xpProgress} / {xpToNext} XP
                </span>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute top-0 right-10 w-4 h-4 bg-yellow-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full blur-[1px] opacity-60"></div>
        </div>

        {/* --- MAIN ACTION BUTTON --- */}
        <button
            onClick={onTakeQuizClick}
            className="mt-8 w-64 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg shadow-xl shadow-gray-200 dark:shadow-gray-900/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
            <BookOpenIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Start New Quiz</span>
        </button>

        {/* Secondary Buttons Row */}
        <div className="flex gap-4 mt-6">
             <button onClick={onViewProgress} className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={l.viewProgress}>
                 <ChartIcon className="w-6 h-6" />
             </button>
             <button onClick={onViewAchievements} className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={l.viewAchievements}>
                 <TrophyIcon className="w-6 h-6" />
             </button>
        </div>

      </div>

      {/* --- BOTTOM SHEET: History --- */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-t-[2.5rem] p-6 pb-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] border-t border-gray-100 dark:border-gray-800 min-h-[30%]">
          <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Recent Activity</h3>
          </div>

          <div className="space-y-4">
            {history.length > 0 ? (
                history.slice(0, 3).map((item, i) => (
                    <div 
                        key={item.id}
                        onClick={() => onViewHistoryItem(item.id)}
                        className="flex items-center justify-between group cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-2 h-12 rounded-full ${item.accuracy >= 70 ? 'bg-green-400' : 'bg-red-400'}`}></div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-primary-600 transition-colors">
                                    {item.topic || l.untitledQuiz}
                                </h4>
                                <p className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{item.accuracy.toFixed(0)}%</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-400 text-sm py-4">{l.noHistory}</p>
            )}
          </div>
      </div>

    </div>
  );
};