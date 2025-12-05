import React from 'react';
import type { Language, SummaryData, StreakData, XpData } from '../types';
import { HistoryIcon, BookOpenIcon, ChartIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, FireIcon, XPIcon } from './icons';
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
  const common_l = commonLabels[language];

  const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
  const xpForNextLevel = xpData.level * XP_PER_LEVEL;
  const xpProgress = xpData.totalXp - xpForCurrentLevel;
  const xpToNext = xpForNextLevel - xpForCurrentLevel;
  const xpProgressPercentage = (xpProgress / xpToNext) * 100;

  return (
    <div className="w-full h-full p-4 pt-24 flex flex-col overflow-y-auto custom-scrollbar">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300 bg-200% animate-gradient-pan">
          {l.title}
        </h1>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-primary-600 dark:text-primary-300">Level {xpData.level}</span>
                 {streakData.currentStreak > 0 && (
                    <div className="flex items-center justify-center space-x-1 text-orange-500 dark:text-orange-400 font-bold text-base animate-fade-in-up" title={`${streakData.currentStreak}-Day Streak`}>
                        <span>{streakData.currentStreak}</span>
                        <FireIcon className="w-5 h-5" />
                    </div>
                )}
            </div>
            <div className="w-48 bg-gray-200/50 dark:bg-black/30 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-green-400 to-primary-500 h-2.5 rounded-full animate-xp-glow" style={{ width: `${xpProgressPercentage}%` }}></div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{xpProgress} / {xpToNext} XP</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-start items-center space-y-8">
        <button
          onClick={onTakeQuizClick}
          className="w-52 py-3 px-6 rounded-2xl bg-primary-600 text-white font-bold shadow-lg hover:shadow-primary-500/40 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 animate-button-glow flex flex-row items-center justify-center text-center"
        >
          <BookOpenIcon className="w-6 h-6 mr-3" />
          <span className="text-lg">MCQ</span>
        </button>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <button
                onClick={onViewProgress}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/20 dark:border-white/10 transition-colors transform hover:scale-105 animate-slide-in"
                style={{ animationDelay: '100ms' }}
                aria-label={l.viewProgress}
            >
                <ChartIcon className="w-8 h-8 text-primary-500" />
                <span className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{l.viewProgress}</span>
            </button>
            <button
                onClick={onViewAchievements}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/20 dark:border-white/10 transition-colors transform hover:scale-105 animate-slide-in"
                style={{ animationDelay: '200ms' }}
                aria-label={l.viewAchievements}
            >
                <TrophyIcon className="w-8 h-8 text-primary-500" />
                <span className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{l.viewAchievements}</span>
            </button>
        </div>


        <div className="space-y-2 w-full max-w-sm">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center mb-3"><HistoryIcon className="w-5 h-5 mr-2"/>{l.recentQuizzes}</h2>
            {history.length > 0 ? (
                <div className="space-y-2">
                    {history.slice(0, 3).map(item => {
                        const isPassed = item.accuracy > 70; // Define 'pass' threshold
                        const borderColorClass = isPassed ? 'border-green-400/50' : 'border-red-400/50';
                        const bgColorClass = isPassed ? 'bg-green-500/10 dark:bg-green-900/10' : 'bg-red-500/10 dark:bg-red-900/10';
                        const iconColorClass = isPassed ? 'text-green-500' : 'text-red-500';

                        return (
                            <button 
                                key={item.id} 
                                onClick={() => onViewHistoryItem(item.id)} 
                                className={`w-full text-left p-3 rounded-xl border-2 transition-colors animate-slide-in flex items-center space-x-3 ${bgColorClass} ${borderColorClass} hover:bg-white/20 dark:hover:bg-black/30`}
                            >
                                {isPassed ? (
                                    <CheckCircleIcon className={`w-5 h-5 ${iconColorClass}`} />
                                ) : (
                                    <XCircleIcon className={`w-5 h-5 ${iconColorClass}`} />
                                )}
                                <div>
                                    <p className="font-semibold truncate text-sm text-gray-800 dark:text-gray-200">{item.topic || (l.untitledQuiz)}</p>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between mt-1">
                                        <span>{item.score}/{item.totalQuestions} ({item.accuracy.toFixed(0)}%)</span>
                                        <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-6 px-3 rounded-2xl bg-white/10 dark:bg-black/20 border border-dashed border-white/20 dark:border-white/10">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{l.noHistory}</p>
                </div>
            )}
        </div>
      </div>
      
      <div className="w-full text-center py-2 flex-shrink-0">
          <p className="text-xs text-gray-500 dark:text-gray-400 opacity-75 tracking-wider font-light">
              {l.designedBy}
          </p>
      </div>
    </div>
  );
};