import React, { useState, useEffect } from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { HistoryIcon, BookOpenIcon, ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon } from './icons';
import { homeScreenLabels as labels } from '../services/labels';
import { HomeRankCard } from './HomeRankCard'; // ✅ Import the new component

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

  // Logic (Old Level Logic - kept for compatibility if needed elsewhere, 
  // but UI will focus on Rank)
  const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
  const xpForNextLevel = xpData.level * XP_PER_LEVEL;
  const xpProgress = xpData.totalXp - xpForCurrentLevel;
  const xpToNext = xpForNextLevel - xpForCurrentLevel;
  const xpProgressPercentage = Math.min((xpProgress / xpToNext) * 100, 100);

  return (
    <div className="w-full h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col relative overflow-y-auto custom-scrollbar">
      
      {/* Top Navigation / Status Bar */}
      <div className="px-6 py-6 flex justify-between items-start z-10">
         <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">{l.title}</h1>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short'})}</span>
            
            {/* 🔥 NEW: Rank Card inserted here */}
            <div className="mt-4">
               <HomeRankCard refreshTrigger={xpData.totalXp} />
            </div>
         </div>
         
         {/* Streak Capsule */}
         <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/50">
             <FireIcon className="w-4 h-4 text-orange-500" />
             <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{streakData.currentStreak}</span>
         </div>
      </div>

      {/* --- CENTERPIECE: Actions --- */}
      <div className="flex-grow flex flex-col items-center justify-center -mt-10 mb-4">
        
        {/* --- MAIN ACTION BUTTON --- */}
        <button
            onClick={onTakeQuizClick}
            className="w-64 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <BookOpenIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Start New Quiz</span>
        </button>

        {/* Secondary Buttons Row */}
        <div className="flex gap-6 mt-8">
             <button onClick={onViewProgress} className="flex flex-col items-center gap-2 group">
                 <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors shadow-sm">
                    <ChartIcon className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-medium text-gray-500">Progress</span>
             </button>

             <button onClick={onViewAchievements} className="flex flex-col items-center gap-2 group">
                 <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30 group-hover:text-yellow-600 transition-colors shadow-sm">
                    <TrophyIcon className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-medium text-gray-500">Awards</span>
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
                        className="flex items-center justify-between group cursor-pointer bg-white dark:bg-black/40 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.accuracy >= 70 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {item.accuracy >= 70 ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm group-hover:text-primary-600 transition-colors line-clamp-1">
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