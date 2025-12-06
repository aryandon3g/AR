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

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans overflow-y-auto custom-scrollbar relative selection:bg-indigo-500 selection:text-white">
      
      {/* Abstract Background Blobs for Premium Feel */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 dark:bg-indigo-900/10 blur-[80px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-[80px]" />
      </div>

      <div className="relative z-10 p-6 max-w-md mx-auto flex flex-col gap-6">
        
        {/* --- HEADER --- */}
        <header className="flex justify-between items-center pt-8">
            <div>
                <h6 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Dashboard</h6>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {l.title}
                </h1>
            </div>
            {/* Level Badge */}
            <div className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Lvl</span>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 leading-none">{xpData.level}</span>
            </div>
        </header>

        {/* --- MAIN HERO CARD (Quiz) --- */}
        <button 
            onClick={onTakeQuizClick}
            className="group relative w-full h-40 rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-800 dark:to-violet-900"></div>
            
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                        <BookOpenIcon className="w-6 h-6" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                         <span className="text-xs font-medium text-white tracking-wide">Daily Challenge</span>
                    </div>
                </div>
                
                <div className="text-left">
                    <h2 className="text-2xl font-bold text-white mb-1">Start Quiz</h2>
                    <div className="flex items-center text-indigo-100 text-sm">
                        <span>Test your skills</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                </div>
            </div>
        </button>

        {/* --- STATS ROW (Glass Cards) --- */}
        <div className="grid grid-cols-2 gap-4">
            
            {/* Streak Card */}
            <div className="p-5 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-sm flex flex-col justify-between h-32">
                <div className="flex items-center space-x-2 text-orange-500 mb-2">
                    <FireIcon className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Streak</span>
                </div>
                <div>
                    <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">{streakData.currentStreak}</span>
                    <span className="text-sm text-slate-400 ml-1">Days</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
            </div>

            {/* XP Progress Card */}
            <div className="p-5 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-sm flex flex-col justify-between h-32">
                 <div className="flex items-center space-x-2 text-blue-500 mb-2">
                    <TrophyIcon className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">XP Earned</span>
                </div>
                <div>
                    <span className="text-3xl font-bold text-slate-800 dark:text-slate-100">{xpProgress}</span>
                    <span className="text-xs text-slate-400">/{xpToNext}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${xpProgressPercentage}%` }}></div>
                </div>
            </div>
        </div>

        {/* --- SECONDARY ACTIONS --- */}
        <div className="grid grid-cols-2 gap-4">
            <button 
                onClick={onViewProgress} 
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
                <ChartIcon className="w-5 h-5 text-indigo-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{l.viewProgress}</span>
            </button>
            <button 
                onClick={onViewAchievements} 
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
                <TrophyIcon className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{l.viewAchievements}</span>
            </button>
        </div>

        {/* --- HISTORY SECTION (Minimal List) --- */}
        <div className="pt-2">
            <div className="flex justify-between items-end mb-4 px-1">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Activity</h3>
                <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-600 transition-colors">See All</button>
            </div>

            <div className="space-y-3">
                {history.length > 0 ? (
                    history.slice(0, 3).map((item) => {
                        const isPassed = item.accuracy >= 70;
                        return (
                            <div 
                                key={item.id} 
                                onClick={() => onViewHistoryItem(item.id)}
                                className="group cursor-pointer flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPassed ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20'}`}>
                                        {isPassed ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{item.topic || l.untitledQuiz}</span>
                                        <span className="text-xs text-slate-400">{new Date(item.timestamp).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${isPassed ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400'}`}>
                                    {item.accuracy.toFixed(0)}%
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-10 rounded-3xl bg-slate-100/50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700">
                        <p className="text-sm text-slate-500 font-medium">{l.noHistory}</p>
                    </div>
                )}
            </div>
        </div>
        
        <div className="h-4"></div> {/* Bottom Spacing */}
      </div>
    </div>
  );
};