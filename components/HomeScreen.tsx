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
      <div className="flex-none px-6 pt-8 pb-4 flex justify-between items-start z-20">
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

      {/* --- MAIN SCROLLABLE AREA --- */}
      <div className="flex-grow flex flex-col items-center overflow-y-auto custom-scrollbar pb-32">
        
        {/* 1. RANK CARD (Moved Down & Centered) */}
        <div className="mt-8 mb-6 w-full flex justify-center px-6 animate-fade-in-up">
           <div className="transform scale-110"> {/* Slightly larger for emphasis */}
               <HomeRankCard refreshTrigger={xpData.totalXp} />
           </div>
        </div>

        {/* 2. CENTER ACTIONS (Start Quiz is Main Focus) */}
        <div className="flex flex-col items-center justify-center w-full px-6 gap-8 mt-4">
            
            {/* 🔥 MAIN BUTTON (Screen Center) */}
            <button
                onClick={onTakeQuizClick}
                className="relative w-full max-w-[300px] py-6 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden border border-white/10"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <div className="relative flex flex-col items-center justify-center gap-1">
                    <BookOpenIcon className="w-8 h-8 mb-1 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-black tracking-wide">START QUIZ</span>
                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest">Test Your Knowledge</span>
                </div>
            </button>

            {/* Secondary Buttons (Side by Side) */}
            <div className="flex gap-6 w-full max-w-[300px] justify-center">
                 <button onClick={onViewProgress} className="flex-1 flex flex-col items-center gap-3 group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all active:scale-95">
                     <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <ChartIcon className="w-6 h-6" />
                     </div>
                     <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Progress</span>
                 </button>

                 <button onClick={onViewAchievements} className="flex-1 flex flex-col items-center gap-3 group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/30 border border-gray-100 dark:border-gray-700 hover:border-yellow-500/30 transition-all active:scale-95">
                     <div className="p-3 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                        <TrophyIcon className="w-6 h-6" />
                     </div>
                     <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Awards</span>
                 </button>
            </div>
        </div>

        {/* 3. RECENT ACTIVITY (Scrollable Section Below) */}
        <div className="w-full px-6 mt-12 mb-6">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Recent Activity</h3>
            </div>

            <div className="space-y-3 pb-24"> 
                {history.length > 0 ? (
                    history.slice(0, 5).map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => onViewHistoryItem(item.id)}
                            className="flex items-center justify-between bg-white dark:bg-gray-800/80 p-4 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md active:scale-98 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${item.accuracy >= 70 ? 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400'}`}>
                                    {item.accuracy >= 70 ? <CheckCircleIcon className="w-5 h-5" /> : <XCircleIcon className="w-5 h-5" />}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm line-clamp-1">
                                        {item.topic || labels[language].untitledQuiz}
                                    </h4>
                                    <span className="text-[10px] font-semibold text-gray-400 uppercase">
                                        {new Date(item.timestamp).toLocaleDateString()} • {item.totalQuestions} Qs
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                 <span className={`text-lg font-black ${item.accuracy >= 70 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
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