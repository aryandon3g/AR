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

  const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
  const xpForNextLevel = xpData.level * XP_PER_LEVEL;
  const xpProgress = xpData.totalXp - xpForCurrentLevel;
  const xpToNext = xpForNextLevel - xpForCurrentLevel;
  const xpProgressPercentage = Math.min((xpProgress / xpToNext) * 100, 100);

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-black p-4 pt-16 overflow-y-auto custom-scrollbar">
      
      {/* Header with Greeting */}
      <div className="mb-6 flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
             {l.title}
           </h1>
           <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Ready to learn?</p>
        </div>
        {/* Profile/Avatar Placeholder (Optional) */}
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
            <span className="text-indigo-600 dark:text-indigo-300 font-bold">L{xpData.level}</span>
        </div>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        
        {/* 1. MAIN ACTION CARD (Large - Spans 2 columns) */}
        <button
          onClick={onTakeQuizClick}
          className="col-span-2 relative h-32 bg-indigo-600 rounded-3xl p-5 text-left text-white overflow-hidden shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 group"
        >
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="p-2 bg-white/20 w-fit rounded-xl backdrop-blur-md">
                <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-bold">Start Quiz</h3>
                <p className="text-indigo-200 text-xs">Tap to begin challenge</p>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-2xl -mr-10 -mt-10 opacity-60 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 right-10 w-16 h-16 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        </button>

        {/* 2. STREAK CARD */}
        <div className="bg-orange-50 dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-3xl p-4 flex flex-col justify-between items-start shadow-sm relative overflow-hidden">
             <div className="flex justify-between w-full items-start z-10">
                 <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-500">
                     <FireIcon className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Streak</span>
             </div>
             <div className="z-10 mt-2">
                 <span className="text-2xl font-black text-gray-800 dark:text-white">{streakData.currentStreak}</span>
                 <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">days</span>
             </div>
        </div>

        {/* 3. LEVEL/XP CARD */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-4 flex flex-col justify-between shadow-sm">
             <div className="flex justify-between w-full items-start">
                 <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                     <TrophyIcon className="w-5 h-5" />
                 </div>
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lvl {xpData.level}</span>
             </div>
             
             <div className="mt-3 w-full">
                <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1">
                    <span>XP</span>
                    <span>{xpProgress}/{xpToNext}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${xpProgressPercentage}%` }}></div>
                </div>
             </div>
        </div>

        {/* 4. STATS BUTTONS (Small Horizontal Grid) */}
        <button onClick={onViewProgress} className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
            <ChartIcon className="w-6 h-6 text-blue-500 mb-1" />
            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300">{l.viewProgress}</span>
        </button>

        <button onClick={onViewAchievements} className="bg-purple-50 dark:bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors">
            <TrophyIcon className="w-6 h-6 text-purple-500 mb-1" />
            <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300">Awards</span>
        </button>

      </div>

      {/* RECENT ACTIVITY SECTION */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center">
            <HistoryIcon className="w-5 h-5 mr-2 text-gray-400"/>
            Recent Activity
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-2 shadow-sm border border-gray-100 dark:border-gray-800">
            {history.length > 0 ? (
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {history.slice(0, 3).map(item => {
                        const isPassed = item.accuracy >= 70;
                        return (
                            <button 
                                key={item.id}
                                onClick={() => onViewHistoryItem(item.id)}
                                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                            >
                                <div className="flex items-center space-x-3 overflow-hidden">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isPassed ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                    <div className="text-left overflow-hidden">
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">{item.topic || l.untitledQuiz}</p>
                                        <p className="text-[10px] text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                                    {item.accuracy.toFixed(0)}%
                                </div>
                            </button>
                        )
                    })}
                </div>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-400 text-sm">{l.noHistory}</p>
                </div>
            )}
        </div>
      </div>

    </div>
  );
};