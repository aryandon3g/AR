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

  // ⚡ OPTIMIZATION: Reset state only after animation finishes
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
                <div className="space-y-2 p-1">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 group active:scale-[0.99]"
                        >
                            <span className="flex items-center text-gray-700 dark:text-gray-200 font-semibold text-sm">
                                {subject.iconEmoji && <span className="mr-3 opacity-80 group-hover:scale-110 transition-transform">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                <ArrowRightIcon className="w-3 h-3" />
                            </div>
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-2 p-1">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center gap-2 w-full group">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]"
                            >
                                <span className="text-gray-700 dark:text-gray-200 font-semibold text-sm">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                                >
                                    <TrashIcon className="w-4 h-4"/>
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
                <div className="space-y-6 mt-4">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-3">
                            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in-up bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                                <span className="text-2xl font-black text-primary-600 dark:text-primary-400">{numTopicQuestions}</span>
                            </div>
                            
                            <input 
                                type="range" 
                                min={minQuestionsForSlider}
                                max={currentMaxQuestions}
                                value={numTopicQuestions} 
                                onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-600 focus:outline-none"
                                disabled={isDisabled}
                            />
                            
                            <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-2 uppercase">
                                <span>{minQuestionsForSlider}</span>
                                <span>MAX ({currentMaxQuestions})</span>
                            </div>
                        </div>
                    )}
                    
                    <button 
                        onClick={handleStartTopicQuiz}
                        className="w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:transform-none flex justify-center items-center gap-3"
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
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
                <div className="space-y-6 mt-4">
                     <div className="animate-fade-in-up bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                            <span className="text-2xl font-black text-primary-600 dark:text-primary-400">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-600 focus:outline-none" 
                        />
                         <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-2 uppercase">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:transform-none flex justify-center items-center gap-3"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
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
                <div className="space-y-6 pb-6">
                    {/* User Status Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-5 shadow-lg shadow-indigo-500/20">
                         <div className="absolute -right-4 -top-4 text-white/10 rotate-12">
                            <XPIcon className="w-28 h-28" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white border border-white/10">LEVEL {xpData.level}</span>
                                <span className="text-xs font-medium text-indigo-100">{xpData.totalXp} XP</span>
                            </div>
                            <h3 className="text-lg font-bold leading-tight mb-3">Keep going!</h3>
                            <div className="w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
                                <div 
                                    className="bg-white h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                                    style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={onViewProgress} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group">
                            <ChartIcon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">Stats</span>
                        </button>
                        <button onClick={onViewAchievements} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-2 hover:border-yellow-300 dark:hover:border-yellow-700 transition-colors group">
                            <TrophyIcon className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">Awards</span>
                        </button>
                    </div>

                    {/* Settings Segmented Controls */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Appearance</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-black/40 p-1 rounded-xl flex relative">
                            <button onClick={() => theme !== 'light' && onThemeChange()} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${theme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}>
                                <SunIcon className="w-4 h-4" /> Light
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${theme === 'dark' ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`}>
                                <MoonIcon className="w-4 h-4" /> Dark
                            </button>
                        </div>

                        <div className="bg-gray-100 dark:bg-black/40 p-1 rounded-xl flex relative">
                            <button onClick={() => onLanguageChange('en')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                English
                            </button>
                            <button onClick={() => onLanguageChange('hi')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'hi' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                हिंदी
                            </button>
                        </div>
                    </div>

                    {/* History List */}
                    <div className="pt-2">
                        <div className="flex items-center justify-between mb-2 px-1">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{labels['en'].history}</span>
                            {history.length > 0 && (
                                <button onClick={handleClearHistory} className="text-[10px] font-bold text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded hover:bg-red-100 transition-colors">
                                    CLEAR
                                </button>
                            )}
                        </div>
                        
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                            {history.length > 0 ? (
                                history.map(item => {
                                    const isPass = item.accuracy >= 70;
                                    return (
                                        <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full text-left p-3 rounded-xl bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all group active:scale-[0.98]">
                                            <div className="flex justify-between items-center mb-1">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPass ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                    <p className="font-semibold text-xs text-gray-700 dark:text-gray-200 truncate group-hover:text-primary-600 transition-colors">
                                                        {item.topic || labels['en'].untitledQuiz}
                                                    </p>
                                                </div>
                                                <span className={`text-[10px] font-bold ${isPass ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                                                    {item.accuracy.toFixed(0)}%
                                                </span>
                                            </div>
                                            <div className="flex justify-between pl-3.5">
                                                <span className="text-[10px] text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</span>
                                                <span className="text-[10px] text-gray-400">{item.score}/{item.totalQuestions}</span>
                                            </div>
                                        </button>
                                    );
                                })
                            ) : (
                                <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                                    <p className="text-xs text-gray-400">No recent activity</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
    }
  };

  const containerClass = isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-300';
  const backdropClass = isOpen ? 'opacity-100' : 'opacity-0';
  const panelClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${containerClass}`}>
        {/* Backdrop */}
        <div 
            className={`absolute inset-0 bg-gray-900/20 dark:bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out will-change-opacity ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        {/* Sidebar Panel */}
        <div className={`relative w-[85%] max-w-[320px] h-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl border-l border-white/20 dark:border-gray-700/50 flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform ${panelClass}`}>
            
            {/* Sticky Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/50 dark:border-gray-800/50 flex-shrink-0">
                <h2 className="text-xl font-black text-gray-800 dark:text-white tracking-tight truncate pr-4">
                    {getHeader}
                </h2>
                
                <div className="flex items-center gap-1">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors">
                            <BackArrowIcon className="w-5 h-5" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 transition-colors">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4">
                {renderContent()}
            </div>

            {/* Subtle Footer */}
            <div className="p-4 text-center border-t border-gray-100/50 dark:border-gray-800/50 flex-shrink-0">
                <p className="text-[10px] font-bold tracking-widest text-gray-300 dark:text-gray-600 uppercase">
                    v2.0 • Zen Mode
                </p>
            </div>
        </div>
    </div>
  );
};