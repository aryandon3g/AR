import React, { useState, useEffect } from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { HistoryIcon, BookOpenIcon, ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon } from './icons';
import { homeScreenLabels as labels } from '../services/labels';
import { HomeRankCard } from './HomeRankCard'; 

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

  return (
    <div className="w-full h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col relative overflow-y-auto custom-scrollbar">
      
      {/* Top Navigation / Status Bar */}
      <div className="px-6 py-6 flex justify-between items-center z-10 w-full max-w-md mx-auto">
         <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">{l.title}</h1>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short'})}</span>
         </div>
         
         {/* Streak Capsule */}
         <div className="flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-900/50 shadow-sm">
             <FireIcon className="w-4 h-4 text-orange-500" />
             <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{streakData.currentStreak}</span>
         </div>
      </div>

      {/* --- CENTERPIECE: Rank & Actions --- */}
      <div className="flex-grow flex flex-col items-center justify-center -mt-10 mb-8 w-full px-6">
        
        {/* 🔥 Rank Card (Centered) */}
        <div className="mb-8 w-full max-w-[280px] flex justify-center">
           <HomeRankCard refreshTrigger={xpData.totalXp} />
        </div>

        {/* --- MAIN ACTION BUTTON --- */}
        <button
            onClick={onTakeQuizClick}
            className="w-full max-w-[280px] py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <BookOpenIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Start New Quiz</span>
        </button>

        {/* Secondary Buttons Row */}
        <div className="flex gap-8 mt-10">
             <button onClick={onViewProgress} className="flex flex-col items-center gap-2 group">
                 <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors shadow-sm border border-gray-100 dark:border-gray-700">
                    <ChartIcon className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-medium text-gray-500 tracking-wide">Progress</span>
             </button>

             <button onClick={onViewAchievements} className="flex flex-col items-center gap-2 group">
                 <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/30 group-hover:text-yellow-600 transition-colors shadow-sm border border-gray-100 dark:border-gray-700">
                    <TrophyIcon className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-medium text-gray-500 tracking-wide">Awards</span>
             </button>
        </div>

      </div>

      {/* --- BOTTOM SHEET: History --- */}
      <div className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-xl rounded-t-[2.5rem] p-6 pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-white/50 dark:border-white/5 min-h-[30%]">
          <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 opacity-50"></div>
          
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Recent Activity</h3>
          </div>

          <div className="space-y-3">
            {history.length > 0 ? (
                history.slice(0, 3).map((item, i) => (
                    <div 
                        key={item.id}
                        onClick={() => onViewHistoryItem(item.id)}
                        className="flex items-center justify-between group cursor-pointer bg-white dark:bg-black/40 p-4 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.accuracy >= 70 ? 'bg-green-50 text-green-500 dark:bg-green-500/10' : 'bg-red-50 text-red-500 dark:bg-red-500/10'}`}>
                                {item.accuracy >= 70 ? <CheckCircleIcon className="w-6 h-6" /> : <XCircleIcon className="w-6 h-6" />}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm group-hover:text-blue-500 transition-colors line-clamp-1 mb-0.5">
                                    {item.topic || l.untitledQuiz}
                                </h4>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">{new Date(item.timestamp).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="text-right pl-4">
                             <span className={`text-xl font-black ${item.accuracy >= 70 ? 'text-gray-800 dark:text-white' : 'text-gray-400'}`}>
                                {item.accuracy.toFixed(0)}<span className="text-sm align-top opacity-50">%</span>
                             </span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-10 opacity-50">
                    <p className="text-sm text-gray-400">{l.noHistory}</p>
                </div>
            )}
          </div>
      </div>

    </div>
  );
};