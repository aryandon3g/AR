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

  // Reset state when closed
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
      }, 200); 
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
        default: return "Control Center";
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
                <div className="grid grid-cols-2 gap-3 p-1">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500 hover:shadow-md transition-all duration-200 aspect-[4/3] group"
                        >
                            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform filter drop-shadow-sm">{subject.iconEmoji || "📚"}</span>
                            <span className="text-xs font-bold text-center text-gray-700 dark:text-gray-200 leading-tight">
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-2 p-1">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex w-full items-center gap-2">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-500 hover:shadow-md transition-all active:scale-[0.98]"
                            >
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-100 dark:border-red-900/30"
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
            const isDisabled = isLoadingTopicQuestions || currentMaxQuestions === 0;

            return (
                <div className="p-4 space-y-6">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                            <p className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in-up">
                             <div className="bg-gray-50 dark:bg-black/20 p-5 rounded-2xl border border-gray-100 dark:border-white/10 mb-6">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                                    <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{numTopicQuestions}</span>
                                </div>
                                
                                <input 
                                    type="range" 
                                    min={currentMaxQuestions > 0 ? 1 : 0}
                                    max={currentMaxQuestions}
                                    value={numTopicQuestions} 
                                    onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600 focus:outline-none"
                                    disabled={isDisabled}
                                />
                                <div className="flex justify-between mt-2 text-xs font-bold text-gray-400">
                                    <span>1</span>
                                    <span>{currentMaxQuestions}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleStartTopicQuiz}
                                className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
                                disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                            >
                                {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                                <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                            </button>
                        </div>
                    )}
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="p-4 space-y-6">
                    <div className="bg-gray-50 dark:bg-black/20 p-5 rounded-2xl border border-gray-100 dark:border-white/10 mb-6">
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                            <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600 focus:outline-none" 
                        />
                         <div className="flex justify-between mt-2 text-xs font-bold text-gray-400">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="space-y-4">
                    {/* User Profile Card (Compact) */}
                    <div className="p-4 rounded-3xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <XPIcon className="w-24 h-24 transform rotate-12" />
                        </div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                                <span className="font-bold text-lg">{xpData.level}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Welcome Back</h3>
                                <p className="text-indigo-100 text-xs font-medium">{xpData.totalXp} Total XP</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Action Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={onViewProgress} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors group">
                            <ChartIcon className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-blue-700 dark:text-blue-300">Statistics</span>
                        </button>
                        <button onClick={onViewAchievements} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors group">
                            <TrophyIcon className="w-6 h-6 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300">Awards</span>
                        </button>
                    </div>

                    {/* Menu List */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-2 border border-gray-100 dark:border-white/5">
                        <button 
                            onClick={() => setView('subjects')} 
                            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                    <span className="text-lg">📚</span>
                                </div>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{labels['en'].subjects}</span>
                            </div>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                        </button>
                        
                        <div className="w-full h-px bg-gray-200 dark:bg-white/5 my-1 mx-2 w-[calc(100%-16px)]"></div>

                        <div className="flex items-center justify-between p-2">
                            <button onClick={() => theme !== 'light' && onThemeChange()} className={`flex-1 p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${theme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                                <SunIcon className="w-4 h-4" /> Light
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`flex-1 p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-600'}`}>
                                <MoonIcon className="w-4 h-4" /> Dark
                            </button>
                        </div>
                         <div className="flex items-center justify-between p-2 pt-0">
                            <button onClick={() => onLanguageChange('en')} className={`flex-1 p-2 rounded-xl text-xs font-bold transition-all ${language === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>English</button>
                            <button onClick={() => onLanguageChange('hi')} className={`flex-1 p-2 rounded-xl text-xs font-bold transition-all ${language === 'hi' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>हिंदी</button>
                        </div>
                    </div>

                    {/* Recent History (Mini) */}
                    <div>
                         <div className="flex items-center justify-between px-2 mb-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recent</p>
                            {history.length > 0 && <button onClick={handleClearHistory} className="text-xs font-bold text-red-500">Clear</button>}
                        </div>
                        <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar pr-1">
                             {history.length > 0 ? (
                                history.map(item => (
                                    <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-200 transition-colors">
                                        <div className="truncate pr-2 text-left">
                                            <p className="text-xs font-bold text-gray-700 dark:text-gray-200 truncate">{item.topic || labels['en'].untitledQuiz}</p>
                                        </div>
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.accuracy >= 70 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </button>
                                ))
                             ) : (
                                 <p className="text-xs text-center text-gray-400 py-2">No history</p>
                             )}
                        </div>
                    </div>
                </div>
            );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={onClose}
            aria-hidden="true"
        />

        {/* The Card (Modal) */}
        <div 
            className="relative w-full max-w-[380px] max-h-[85vh] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-scale-in border border-white/20 dark:border-white/10"
            style={{ animationDuration: '0.2s' }}
        >
            
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/5">
                <h2 className="text-lg font-black text-gray-800 dark:text-white tracking-tight">
                    {getHeader}
                </h2>
                <div className="flex items-center gap-2">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                            <BackArrowIcon className="w-4 h-4" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                        <XIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                {renderContent()}
            </div>

            {/* Footer */}
            <div className="p-3 text-center border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    v2.1 • Command Center
                </p>
            </div>
        </div>
    </div>
  );
};