import React, { useState, useEffect, useMemo } from 'react';
import type { Language, SummaryData, QuizQuestion, SidebarView, XpData, QuizSubject, QuizTopic } from '../types';
import { SunIcon, MoonIcon, XIcon, HistoryIcon, TrashIcon, BackArrowIcon, ArrowRightIcon, ChartIcon, TrophyIcon, XPIcon } from './icons';
import { subjectQuizzes } from '../services/subjectQuizzes';
import { sidebarLabels as labels, commonLabels } from '../services/labels';
import { loadQuestionsForTopic, getMixedQuizQuestions, clearQuestionCache } from '../services/quizDataService';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: 'light' | 'dark';
  onThemeChange: () => void;
  history: SummaryData[];
  onViewHistoryItem: (id: string) => void;
  onClearHistory: () => void;
  onStartSubjectQuiz: (questionsLoader: () => Promise<QuizQuestion[]>, topicName: string) => void;
  customQuizzes: QuizSubject[];
  onDeleteCustomQuiz: (name: string) => void;
  startView?: SidebarView;
  onViewProgress: () => void;
  onViewAchievements: () => void;
  xpData: XpData;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  theme,
  onThemeChange,
  history,
  onViewHistoryItem,
  onClearHistory,
  onStartSubjectQuiz,
  customQuizzes,
  onDeleteCustomQuiz,
  startView = 'main',
  onViewProgress,
  onViewAchievements,
  xpData,
}) => {
  const [view, setView] = useState<SidebarView>('main');
  const [selectedSubject, setSelectedSubject] = useState<QuizSubject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic | null>(null);
  const [numMixedQuestions, setNumMixedQuestions] = useState(20);
  const [numTopicQuestions, setNumTopicQuestions] = useState(10);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [maxAvailableQuestionsForTopic, setMaxAvailableQuestionsForTopic] = useState(0);
  const [isLoadingTopicQuestions, setIsLoadingTopicQuestions] = useState(false);
  
  const l = labels[language];
  const common_l = commonLabels[language];

  // ⚡ OPTIMIZATION: Reset state only after animation finishes (300ms)
  useEffect(() => {
    if (isOpen) {
        setView(startView);
    } else {
      const timer = setTimeout(() => {
        setView('main');
        setSelectedSubject(null);
        setSelectedTopic(null);
        setMaxAvailableQuestionsForTopic(0);
        setIsLoadingTopicQuestions(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen, startView]);

  const handleClearHistory = async () => {
      if (window.confirm(l.confirmClear)) {
          await onClearHistory();
      }
  };

  const handleSelectSubject = (subject: QuizSubject) => {
    if (subject.name_en === labels['en'].mixedQuiz) {
        setView('mixedQuizConfig');
        return;
    }
    
    // Check for Custom Quizzes category
    if (subject.name_en === (labels['en'].customQuizzesCategoryName || "Custom Quizzes")) {
        setSelectedSubject({
            name_en: labels['en'].customQuizzesCategoryName || "Custom Quizzes",
            name_hi: labels['hi'].customQuizzesCategoryName || "Custom Quizzes",
            topics: customQuizzes.flatMap(q => q.topics),
            isCustom: true,
            iconEmoji: "⭐"
        });
        setView('topics');
        return;
    }
    
    if (subject.topics.length > 0) {
        setSelectedSubject(subject);
        setView('topics');
    }
  };

  const handleStartMixedQuiz = async () => {
    setIsLoadingQuiz(true);
    try {
        const allSubjects = [...subjectQuizzes, ...customQuizzes];
        onStartSubjectQuiz(async () => getMixedQuizQuestions(allSubjects, numMixedQuestions), labels['en'].mixedQuiz);
        onClose();
    } catch (error) {
        console.error("Failed to load mixed quiz questions:", error);
    } finally {
        setIsLoadingQuiz(false);
    }
  };

  const handleSelectTopic = async (topic: QuizTopic) => {
    setSelectedTopic(topic);
    setView('topicQuizConfig');
    setIsLoadingTopicQuestions(true);
    try {
      const questions = await loadQuestionsForTopic(topic);
      const actualMax = questions.length;
      setMaxAvailableQuestionsForTopic(actualMax);
      setNumTopicQuestions(Math.min(numTopicQuestions, actualMax) || (actualMax > 0 ? 1 : 0));
    } catch (error) {
      console.error("Failed to load topic questions count:", error);
      setMaxAvailableQuestionsForTopic(0);
      setNumTopicQuestions(0);
    } finally {
      setIsLoadingTopicQuestions(false);
    }
  };

  const handleStartTopicQuiz = async () => {
    if (!selectedTopic) return;
    setIsLoadingQuiz(true);
    try {
        const questionsLoader = async () => {
            const allTopicQuestions = await loadQuestionsForTopic(selectedTopic);
            const shuffled = [...allTopicQuestions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numTopicQuestions);
        };
        onStartSubjectQuiz(questionsLoader, language === 'en' ? selectedTopic.name_en : selectedTopic.name_hi);
        onClose();
    } catch (error) {
        console.error("Failed to load topic quiz questions:", error);
    } finally {
        setIsLoadingQuiz(false);
    }
  };
  
  const getHeader = useMemo(() => {
    switch(view) {
        case 'subjects': return labels['en'].subjects;
        case 'topics': return selectedSubject ? (language === 'en' ? selectedSubject.name_en : selectedSubject.name_hi) : labels['en'].topics;
        case 'mixedQuizConfig': return labels['en'].mixedQuiz;
        case 'topicQuizConfig': return selectedTopic ? (language === 'en' ? selectedTopic.name_en : selectedTopic.name_hi) : labels['en'].topics;
        default: return labels['en'].settings;
    }
  }, [view, selectedSubject, selectedTopic, language]);

  const handleBackNavigation = () => {
    if (view === 'topicQuizConfig') {
        setView('topics');
        setMaxAvailableQuestionsForTopic(0);
        setIsLoadingTopicQuestions(false);
    } else if (view === 'topics' || view === 'mixedQuizConfig') {
        setView('subjects');
    } else {
        setView('main');
    }
  };
  
  const renderContent = () => {
    switch (view) {
        case 'subjects':
            const allSubjectsForDisplay = [...subjectQuizzes];
            if (customQuizzes.length > 0) {
                allSubjectsForDisplay.push({
                    name_en: labels['en'].customQuizzesCategoryName || "Custom Quizzes",
                    name_hi: labels['hi'].customQuizzesCategoryName || "Custom Quizzes",
                    topics: [],
                    isCustom: true,
                    iconEmoji: "⭐",
                });
            }

            return (
                <div className="space-y-3 px-1">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="group w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary-500/50 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                        >
                            <span className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                {subject.iconEmoji && <span className="mr-3 text-xl" aria-hidden="true">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-3 px-1">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center gap-2 w-full">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary-500/50 hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                            >
                                <span className="text-gray-800 dark:text-gray-200 font-medium">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-100 dark:border-red-900/30 transition-colors"
                                >
                                    <TrashIcon className="w-5 h-5"/>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            );
        case 'topicQuizConfig': {
            if (!selectedTopic) return null;
            const currentMaxQuestions = maxAvailableQuestionsForTopic;
            const minQuestionsForSlider = currentMaxQuestions > 0 ? 1 : 0;
            const isDisabled = isLoadingTopicQuestions || currentMaxQuestions === 0;

            return (
                <div className="space-y-8 px-2 py-4">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm">
                                <label htmlFor="numTopicQuestions" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-6 flex justify-between">
                                    <span>{labels['en'].numQuestions}</span>
                                    <span className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full text-xs">
                                        {numTopicQuestions} / {currentMaxQuestions}
                                    </span>
                                </label>
                                <input 
                                    id="numTopicQuestions" 
                                    type="range" 
                                    min={minQuestionsForSlider}
                                    max={currentMaxQuestions}
                                    value={numTopicQuestions} 
                                    onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                                    disabled={isDisabled}
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium">
                                    <span>{minQuestionsForSlider}</span>
                                    <span>{currentMaxQuestions}</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <button 
                        onClick={handleStartTopicQuiz}
                        className="w-full p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none disabled:transform-none flex justify-center items-center gap-2"
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <ArrowRightIcon className="w-5 h-5" />
                        )}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="space-y-8 px-2 py-4">
                    <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm">
                        <label htmlFor="numMixedQuestions" className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-6 flex justify-between">
                            <span>{labels['en'].numQuestions}</span>
                            <span className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full text-xs">
                                {numMixedQuestions}
                            </span>
                        </label>
                        <input 
                            id="numMixedQuestions" 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30" 
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>
                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none disabled:transform-none flex justify-center items-center gap-2"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <ArrowRightIcon className="w-5 h-5" />
                        )}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="space-y-6">
                    {/* User Profile Card */}
                    <div className="relative overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XPIcon className="w-24 h-24" />
                        </div>
                        <div className="relative z-10">
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Current Level</p>
                            <div className="flex items-baseline space-x-2">
                                <h3 className="text-3xl font-bold">{xpData.level}</h3>
                                <span className="text-primary-400 font-medium text-sm">{xpData.totalXp} {common_l.xp}</span>
                            </div>
                            <div className="mt-4 w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                <div 
                                    className="bg-primary-500 h-full rounded-full transition-all duration-1000 ease-out" 
                                    style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={onViewProgress} className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-2 group">
                            <div className="p-2 bg-white dark:bg-blue-900/50 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <ChartIcon className="w-6 h-6 text-blue-500" />
                            </div>
                            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{commonLabels['en'].progress}</span>
                        </button>
                        <button onClick={onViewAchievements} className="p-4 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 hover:shadow-md transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-2 group">
                            <div className="p-2 bg-white dark:bg-yellow-900/50 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                <TrophyIcon className="w-6 h-6 text-yellow-500" />
                            </div>
                            <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-300">{commonLabels['en'].achievements}</span>
                        </button>
                    </div>

                    {/* Settings Group */}
                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Preferences</p>
                        
                        <div className="p-1 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex relative">
                            <button onClick={() => theme !== 'light' && onThemeChange()} className={`flex-1 p-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all relative z-10 ${theme === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}>
                                <SunIcon className="w-4 h-4" />
                                <span>Light</span>
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`flex-1 p-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all relative z-10 ${theme === 'dark' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}>
                                <MoonIcon className="w-4 h-4" />
                                <span>Dark</span>
                            </button>
                        </div>

                        <div className="p-1 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 flex relative">
                            <button onClick={() => onLanguageChange('en')} className={`flex-1 p-2 rounded-xl text-sm font-semibold transition-all ${language === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                English
                            </button>
                            <button onClick={() => onLanguageChange('hi')} className={`flex-1 p-2 rounded-xl text-sm font-semibold transition-all ${language === 'hi' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                हिंदी
                            </button>
                        </div>
                    </div>

                    {/* History Section */}
                    <div className="pt-2">
                        <div className="flex items-center justify-between mb-3 px-1">
                            <h3 className="text-sm font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                <HistoryIcon className="w-4 h-4 text-gray-400" />
                                {labels['en'].history}
                            </h3>
                            {history.length > 0 && (
                                <button onClick={handleClearHistory} className="text-xs font-medium text-red-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                    <TrashIcon className="w-3 h-3" />
                                    Clear
                                </button>
                            )}
                        </div>
                        
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                            {history.length > 0 ? (
                                history.map(item => (
                                <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="group w-full text-left p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/30 hover:shadow-sm transition-all active:scale-[0.99]">
                                    <div className="flex justify-between items-start">
                                        <p className="font-semibold text-sm text-gray-800 dark:text-gray-200 truncate pr-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {item.topic || labels['en'].untitledQuiz}
                                        </p>
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.accuracy >= 80 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-1.5">
                                        <span className="text-[10px] text-gray-400">
                                            {new Date(item.timestamp).toLocaleDateString()}
                                        </span>
                                        <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                            {item.score}/{item.totalQuestions}
                                        </span>
                                    </div>
                                </button>
                                ))
                            ) : (
                                <div className="text-center py-6 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl">
                                    <p className="text-xs text-gray-400">{common_l.noHistory}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
    }
  };

  // 🚀 GPU Accelerated Animation
  const containerClass = isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-300';
  const backdropClass = isOpen ? 'opacity-100' : 'opacity-0';
  const panelClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${containerClass}`}>
        {/* Backdrop - Fade In/Out with Opacity */}
        <div 
            className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ease-out will-change-opacity ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        {/* Sidebar Panel - Slide with Transform */}
        <div className={`relative w-[85%] max-w-[320px] h-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-white/20 dark:border-gray-800 flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${panelClass}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800/50">
                <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent truncate pr-4">
                    {getHeader}
                </h2>
                
                <div className="flex items-center gap-2">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors" aria-label={common_l.back}>
                            <BackArrowIcon className="w-5 h-5" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors" aria-label={common_l.close}>
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                {renderContent()}
            </div>

            {/* Footer / Branding */}
            <div className="p-4 text-center border-t border-gray-100 dark:border-gray-800/50">
                <p className="text-[10px] font-bold tracking-widest text-gray-300 dark:text-gray-700 uppercase">
                    Quiz Master v2.0
                </p>
            </div>
        </div>
    </div>
  );
};