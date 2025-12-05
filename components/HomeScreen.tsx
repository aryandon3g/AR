import React, { useMemo, memo } from 'react';
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

// 1. IMPROVEMENT: Extract History Item to prevent list re-renders
const HistoryItem = memo(({ item, onClick, labels }: { item: SummaryData; onClick: (id: string) => void, labels: any }) => {
    // Logic extraction for cleanliness
    const isPassed = item.accuracy > 70;
    const colorState = isPassed 
        ? { border: 'border-green-400/50', bg: 'bg-green-500/10 dark:bg-green-900/10', text: 'text-green-500' }
        : { border: 'border-red-400/50', bg: 'bg-red-500/10 dark:bg-red-900/10', text: 'text-red-500' };

    // Memoized date formatting
    const formattedDate = useMemo(() => {
        try {
            return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(item.timestamp));
        } catch (e) {
            return "";
        }
    }, [item.timestamp]);

    return (
        <button 
            onClick={() => onClick(item.id)} 
            className={`w-full text-left p-3 rounded-xl border-2 transition-transform active:scale-95 animate-slide-in flex items-center space-x-3 ${colorState.bg} ${colorState.border} hover:bg-white/20 dark:hover:bg-black/30`}
            // GPU Hint for smoother animation
            style={{ willChange: 'transform' }} 
        >
            {isPassed ? (
                <CheckCircleIcon className={`w-5 h-5 ${colorState.text}`} />
            ) : (
                <XCircleIcon className={`w-5 h-5 ${colorState.text}`} />
            )}
            <div className="flex-1 min-w-0">
                <p className="font-semibold truncate text-sm text-gray-800 dark:text-gray-200">
                    {item.topic || labels.untitledQuiz}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between mt-1">
                    <span>{item.score}/{item.totalQuestions} ({Math.round(item.accuracy)}%)</span>
                    <span>{formattedDate}</span>
                </div>
            </div>
        </button>
    );
});
HistoryItem.displayName = 'HistoryItem';

// 2. IMPROVEMENT: Main Component with Memoization
export const HomeScreen: React.FC<HomeScreenProps> = memo(({
  language,
  history,
  onViewHistoryItem,
  onTakeQuizClick,
  xpData,
  onViewProgress,
  onViewAchievements,
  streakData
}) => {
  // Safe label fallback
  const l = labels[language] || labels['en'];

  // 3. IMPROVEMENT: Optimize Math with useMemo (Avoids recalc on every render)
  const { level, xpProgress, xpToNext, progressPercentage } = useMemo(() => {
      const xpForCurrentLevel = (xpData.level - 1) * XP_PER_LEVEL;
      const xpForNextLevel = xpData.level * XP_PER_LEVEL;
      
      // Fix Logic: Ensure values don't go negative
      const currentProgress = Math.max(0, xpData.totalXp - xpForCurrentLevel);
      const required = XP_PER_LEVEL; // Simplify: Since levels are fixed steps
      
      // Clamp percentage between 0 and 100
      const pct = Math.min(100, Math.max(0, (currentProgress / required) * 100));

      return {
          level: xpData.level,
          xpProgress: currentProgress,
          xpToNext: required,
          progressPercentage: pct
      };
  }, [xpData]);

  return (
    <div className="w-full h-full p-4 pt-24 flex flex-col overflow-y-auto custom-scrollbar">
      
      {/* Header Section */}
      <div className="text-center mb-6 flex-shrink-0">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300 bg-200% animate-gradient-pan">
          {l.title}
        </h1>
        
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-primary-600 dark:text-primary-300">Level {level}</span>
                 {streakData.currentStreak > 0 && (
                    <div className="flex items-center justify-center space-x-1 text-orange-500 dark:text-orange-400 font-bold text-base animate-fade-in-up">
                        <span>{streakData.currentStreak}</span>
                        <FireIcon className="w-5 h-5" />
                    </div>
                )}
            </div>

            {/* 4. IMPROVEMENT: High FPS Progress Bar */}
            {/* Using transform: scaleX is much faster than width: % because it uses GPU */}
            <div className="w-48 bg-gray-200/50 dark:bg-black/30 rounded-full h-2.5 overflow-hidden relative">
                <div 
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-400 to-primary-500 origin-left transition-transform duration-1000 ease-out" 
                    style={{ transform: `scaleX(${progressPercentage / 100})` }}
                ></div>
            </div>
            
            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                {xpProgress} / {xpToNext} XP
            </span>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex-grow flex flex-col justify-start items-center space-y-8">
        <button
          onClick={onTakeQuizClick}
          className="w-52 py-3 px-6 rounded-2xl bg-primary-600 text-white font-bold shadow-lg hover:shadow-primary-500/40 hover:bg-primary-700 active:scale-95 transform transition-all duration-200 flex flex-row items-center justify-center text-center"
          style={{ willChange: 'transform' }}
        >
          <BookOpenIcon className="w-6 h-6 mr-3" />
          <span className="text-lg">MCQ</span>
        </button>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <DashboardButton 
                onClick={onViewProgress} 
                icon={<ChartIcon className="w-8 h-8 text-primary-500" />} 
                label={l.viewProgress} 
                delay="100ms"
            />
            <DashboardButton 
                onClick={onViewAchievements} 
                icon={<TrophyIcon className="w-8 h-8 text-primary-500" />} 
                label={l.viewAchievements} 
                delay="200ms"
            />
        </div>

        {/* Recent History Section */}
        <div className="space-y-2 w-full max-w-sm">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center mb-3">
                <HistoryIcon className="w-5 h-5 mr-2"/>
                {l.recentQuizzes}
            </h2>
            
            {history.length > 0 ? (
                <div className="space-y-2">
                    {/* Only slice once */}
                    {history.slice(0, 3).map(item => (
                        <HistoryItem 
                            key={item.id} 
                            item={item} 
                            onClick={onViewHistoryItem} 
                            labels={l} 
                        />
                    ))}
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
});
HomeScreen.displayName = 'HomeScreen';

// Helper Component to reduce repetition
const DashboardButton = ({ onClick, icon, label, delay }: any) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center p-4 rounded-2xl bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 border border-white/20 dark:border-white/10 transition-transform active:scale-95 animate-slide-in"
        style={{ animationDelay: delay, willChange: 'transform' }}
    >
        {icon}
        <span className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</span>
    </button>
);