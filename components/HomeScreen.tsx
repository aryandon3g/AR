import React from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon, BookOpenIcon } from './icons';
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
    <div className="w-full h-full bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 flex flex-col relative overflow-hidden">
      
      {/* --- TOP BAR (Header) --- */}
      <div className="flex-none px-6 pt-6 pb-2 flex justify-between items-start z-20 landscape:px-8 landscape:py-4">
         <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                {l.title}
            </h1>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short'})}
            </span>
         </div>
         
         {/* Streak Capsule */}
         <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-100 dark:border-orange-500/20 shadow-sm backdrop-blur-md">
             <FireIcon className="w-4 h-4 text-orange-500" />
             <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{streakData.currentStreak}</span>
         </div>
      </div>

      {/* --- MAIN SCROLLABLE AREA (Responsive Layout) --- */}
      {/* landscape:flex-row -> This splits screen into Left/Right on rotate */}
      <div className="flex-grow flex flex-col landscape:flex-row items-center overflow-y-auto custom-scrollbar pb-32 landscape:pb-4 px-6 landscape:px-0">
        
        {/* LEFT SIDE (In Landscape) - Rank & Actions */}
        <div className="w-full landscape:w-1/2 landscape:h-full landscape:overflow-y-auto landscape:px-6 flex flex-col items-center justify-center">
            
            {/* 1. RANK CARD */}
            <div className="mt-4 mb-6 w-full flex justify-center animate-fade-in-up">
               <div className="transform scale-110 landscape:scale-100 transition-transform"> 
                   <HomeRankCard refreshTrigger={xpData.totalXp} />
               </div>
            </div>

            {/* 2. CENTER ACTIONS */}
            <div className="flex flex-col items-center justify-center w-full gap-6 landscape:gap-4">
                
                {/* Main Button */}
                <button
                    onClick={onTakeQuizClick}
                    className="relative w-full max-w-[300px] py-5 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden border border-white/10"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="relative flex flex-col items-center justify-center gap-1">
                        <BookOpenIcon className="w-7 h-7 mb-1 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg font-black tracking-wide">START QUIZ</span>
                    </div>
                </button>

                {/* Secondary Buttons */}
                <div className="flex gap-4 w-full max-w-[300px] justify-center">
                     <button onClick={onViewProgress} className="flex-1 flex flex-col items-center gap-2 group p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 active:scale-95 transition-all">
                         <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                            <ChartIcon className="w-5 h-5" />
                         </div>
                         <span className="text-[10px] font-bold text-gray-500 dark:text-gray-300 uppercase">Progress</span>
                     </button>

                     <button onClick={onViewAchievements} className="flex-1 flex flex-col items-center gap-2 group p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 active:scale-95 transition-all">
                         <div className="p-2 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400">
                            <TrophyIcon className="w-5 h-5" />
                         </div>
                         <span className="text-[10px] font-bold text-gray-500 dark:text-gray-300 uppercase">Awards</span>
                     </button>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE (In Landscape) - Recent Activity */}
        <div className="w-full landscape:w-1/2 landscape:h-full landscape:border-l landscape:border-gray-200 dark:landscape:border-white/5 landscape:px-6 mt-8 landscape:mt-0">
            <div className="flex items-center justify-between mb-4 px-2 pt-4 landscape:pt-0">
                <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Recent Activity</h3>
            </div>

            <div className="space-y-3 pb-24 landscape:pb-10 landscape:overflow-y-auto landscape:h-[calc(100vh-100px)] custom-scrollbar"> 
                {history.length > 0 ? (
                    history.slice(0, 10).map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => onViewHistoryItem(item.id)}
                            className="flex items-center justify-between bg-white dark:bg-gray-800/80 p-3 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md active:scale-98 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${item.accuracy >= 70 ? 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400'}`}>
                                    {item.accuracy >= 70 ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-xs line-clamp-1">
                                        {item.topic || labels[language].untitledQuiz}
                                    </h4>
                                    <span className="text-[9px] font-semibold text-gray-400 uppercase">
                                        {new Date(item.timestamp).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                 <span className={`text-sm font-black ${item.accuracy >= 70 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                                    {item.accuracy.toFixed(0)}%
                                 </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl opacity-60">
                        <p className="text-sm font-medium text-gray-400">{l.noHistory}</p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};