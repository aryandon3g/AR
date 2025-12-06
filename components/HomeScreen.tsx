import React from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { HistoryIcon, BookOpenIcon, ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon } from './icons';
import { homeScreenLabels as labels, commonLabels } from '../services/labels';

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

  // XP Calculations
  const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
  const xpForNextLevel = xpData.level * XP_PER_LEVEL;
  const xpProgress = xpData.totalXp - xpForCurrentLevel;
  const xpToNext = xpForNextLevel - xpForCurrentLevel;
  const xpProgressPercentage = Math.min((xpProgress / xpToNext) * 100, 100);

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative overflow-hidden">
      
      {/* Background Ambience (Optional decoration) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-500/10 to-transparent pointer-events-none" />

      {/* Main Scrollable Content */}
      <div className="flex-grow overflow-y-auto custom-scrollbar p-5 pt-12 space-y-6 z-10 pb-24">
        
        {/* --- HEADER SECTION: Title & Streak --- */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Welcome back</p>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              {l.title}
            </h1>
          </div>
          
          {/* Streak Badge */}
          <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-900/50 bg-orange-50 dark:bg-orange-900/20 shadow-sm ${streakData.currentStreak > 0 ? 'animate-pulse-slow' : 'opacity-50'}`}>
             <FireIcon className="w-5 h-5 text-orange-500" />
             <span className="font-bold text-orange-600 dark:text-orange-400">{streakData.currentStreak} Days</span>
          </div>
        </div>

        {/* --- HERO CARD: Level & XP Stats --- */}
        <div className="relative p-5 rounded-3xl bg-white dark:bg-gray-800 shadow-xl shadow-primary-500/5 border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Decoration Circle */}
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>

            <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Current Level</span>
                    <span className="text-4xl font-black text-gray-800 dark:text-white">{xpData.level}</span>
                </div>
                <div className="text-right">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{xpProgress} / {xpToNext} XP</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full shadow-[0_0_10px_rgba(var(--primary-500),0.5)] transition-all duration-700 ease-out"
                    style={{ width: `${xpProgressPercentage}%` }}
                >
                    {/* Shimmer Effect on Bar */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-shimmer" />
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Keep learning to reach Level {xpData.level + 1}!</p>
        </div>

        {/* --- ACTION GRID --- */}
        <div className="grid grid-cols-1 gap-4">
            {/* Primary Action: Take Quiz */}
            <button
                onClick={onTakeQuizClick}
                className="group relative w-full p-4 h-20 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between px-6 overflow-hidden"
            >
                <div className="flex items-center space-x-4 z-10">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                        <BookOpenIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-bold leading-tight">Start New Quiz</h3>
                        <p className="text-xs text-primary-100 opacity-90">Test your knowledge now</p>
                    </div>
                </div>
                {/* Arrow Icon */}
                <div className="z-10 bg-white/10 rounded-full p-1 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/10 transition-colors" />
            </button>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={onViewProgress}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 transition-all active:scale-95"
                >
                    <ChartIcon className="w-8 h-8 text-blue-500 mb-2" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{l.viewProgress}</span>
                </button>

                <button
                    onClick={onViewAchievements}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-yellow-200 dark:hover:border-yellow-800 transition-all active:scale-95"
                >
                    <TrophyIcon className="w-8 h-8 text-yellow-500 mb-2" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{l.viewAchievements}</span>
                </button>
            </div>
        </div>

        {/* --- HISTORY SECTION --- */}
        <div className="pt-2">
            <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
                    <HistoryIcon className="w-5 h-5 mr-2 text-primary-500"/>
                    {l.recentQuizzes}
                </h2>
                {history.length > 0 && <span className="text-xs text-primary-500 font-medium cursor-pointer hover:underline">View All</span>}
            </div>

            <div className="space-y-3">
                {history.length > 0 ? (
                    history.slice(0, 3).map((item, index) => {
                        const isPassed = item.accuracy >= 70;
                        return (
                            <button 
                                key={item.id} 
                                onClick={() => onViewHistoryItem(item.id)}
                                className="w-full group bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 flex items-center justify-between"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-2 rounded-xl flex-shrink-0 ${isPassed ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                                        {isPassed ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-sm text-gray-800 dark:text-gray-200 line-clamp-1">
                                            {item.topic || l.untitledQuiz}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {new Date(item.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <span className={`block font-bold text-sm ${isPassed ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                                        {item.accuracy.toFixed(0)}%
                                    </span>
                                    <span className="text-xs text-gray-400">Score</span>
                                </div>
                            </button>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-8 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2 opacity-50">
                            <BookOpenIcon className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">{l.noHistory}</p>
                        <p className="text-xs text-gray-400">Play a game to see stats here</p>
                    </div>
                )}
            </div>
        </div>

        {/* Footer Credit */}
        <div className="py-4 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium opacity-60">
                {l.designedBy}
            </p>
        </div>

      </div>
    </div>
  );
};