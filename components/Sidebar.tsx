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

// Helper for the "Bubbly" button style
const bubblyButtonClass = "relative border-[3px] border-b-[5px] rounded-2xl transition-all active:border-b-[3px] active:translate-y-[2px]";

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
                <div className="space-y-3 p-2">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className={`w-full flex items-center justify-between p-4 ${bubblyButtonClass} bg-white border-gray-200 border-b-gray-300 hover:bg-gray-50 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-white dark:hover:bg-gray-700 disabled:opacity-50 disabled:active:translate-y-0 disabled:active:border-b-[5px]`}
                        >
                            <span className="flex items-center font-bold text-lg">
                                {subject.iconEmoji && <span className="mr-3 text-2xl">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <ArrowRightIcon className="w-6 h-6 text-gray-400" />
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-3 p-2">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center gap-3 w-full">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className={`flex-grow flex items-center justify-between p-4 ${bubblyButtonClass} bg-white border-gray-200 border-b-gray-300 hover:bg-gray-50 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-white dark:hover:bg-gray-700`}
                            >
                                <span className="font-bold text-base">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className={`p-4 ${bubblyButtonClass} bg-red-100 border-red-300 border-b-red-400 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:border-red-950 dark:border-b-black dark:text-red-300`}
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
                <div className="space-y-8 mt-6 px-2">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4">
                             <div className="w-12 h-12 border-[6px] border-gray-200 border-t-primary-500 rounded-full animate-spin"></div>
                             <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className={`bg-white dark:bg-gray-800 p-6 ${bubblyButtonClass} border-gray-200 border-b-gray-300 dark:border-gray-700 dark:border-b-gray-900 active:translate-y-0 active:border-b-[5px] cursor-default`}>
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-lg font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                                <span className="text-4xl font-black text-primary-600 dark:text-primary-400">{numTopicQuestions}</span>
                            </div>
                            
                            <input 
                                type="range" 
                                min={minQuestionsForSlider}
                                max={currentMaxQuestions}
                                value={numTopicQuestions} 
                                onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer dark:bg-gray-700 accent-primary-600 focus:outline-none border-2 border-gray-300 dark:border-gray-600"
                                disabled={isDisabled}
                            />
                            
                            <div className="flex justify-between text-xs font-black text-gray-400 mt-3 uppercase">
                                <span>Min: {minQuestionsForSlider}</span>
                                <span>Max: {currentMaxQuestions}</span>
                            </div>
                        </div>
                    )}
                    
                    <button 
                        onClick={handleStartTopicQuiz}
                        className={`w-full py-5 ${bubblyButtonClass} bg-primary-500 border-primary-600 border-b-primary-800 text-white font-black text-xl hover:bg-primary-400 disabled:opacity-50 disabled:active:translate-y-0 disabled:active:border-b-[5px] flex justify-center items-center gap-3`}
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : null}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="space-y-8 mt-6 px-2">
                     <div className={`bg-white dark:bg-gray-800 p-6 ${bubblyButtonClass} border-gray-200 border-b-gray-300 dark:border-gray-700 dark:border-b-gray-900 active:translate-y-0 active:border-b-[5px] cursor-default`}>
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-lg font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                            <span className="text-4xl font-black text-primary-600 dark:text-primary-400">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer dark:bg-gray-700 accent-primary-600 focus:outline-none border-2 border-gray-300 dark:border-gray-600"
                        />
                         <div className="flex justify-between text-xs font-black text-gray-400 mt-3 uppercase">
                            <span>Min: 10</span>
                            <span>Max: 100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className={`w-full py-5 ${bubblyButtonClass} bg-primary-500 border-primary-600 border-b-primary-800 text-white font-black text-xl hover:bg-primary-400 disabled:opacity-50 disabled:active:translate-y-0 disabled:active:border-b-[5px] flex justify-center items-center gap-3`}
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : null}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="space-y-8 pb-8 px-2">
                    {/* Gamified XP Banner */}
                    <div className={`relative overflow-hidden ${bubblyButtonClass} bg-gradient-to-r from-violet-500 to-indigo-600 border-violet-700 border-b-violet-900 text-white p-6 active:translate-y-0 active:border-b-[5px] cursor-default`}>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Player Level</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black">{xpData.level}</span>
                                    <span className="text-lg font-bold text-violet-200">{xpData.totalXp} XP</span>
                                </div>
                            </div>
                             <XPIcon className="w-20 h-20 text-white/30 transform rotate-12" />
                        </div>
                        <div className="mt-4 w-full bg-black/30 rounded-full h-3 border-2 border-white/20 overflow-hidden">
                            <div 
                                className="bg-yellow-400 h-full rounded-full" 
                                style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }}
                            />
                        </div>
                    </div>

                    {/* Chunky Stats Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button onClick={onViewProgress} className={`p-4 ${bubblyButtonClass} bg-blue-100 border-blue-300 border-b-blue-400 hover:bg-blue-200 dark:bg-blue-900 dark:border-blue-800 dark:border-b-black flex flex-col items-center justify-center gap-2 group`}>
                            <ChartIcon className="w-8 h-8 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-black text-blue-700 dark:text-blue-300 uppercase">{commonLabels['en'].progress}</span>
                        </button>
                        <button onClick={onViewAchievements} className={`p-4 ${bubblyButtonClass} bg-yellow-100 border-yellow-300 border-b-yellow-400 hover:bg-yellow-200 dark:bg-yellow-900 dark:border-yellow-800 dark:border-b-black flex flex-col items-center justify-center gap-2 group`}>
                            <TrophyIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-300 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-black text-yellow-700 dark:text-yellow-300 uppercase">Awards</span>
                        </button>
                    </div>

                    {/* Big Toggles */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest ml-2">Settings</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => theme !== 'light' && onThemeChange()} className={`p-3 flex items-center justify-center gap-2 text-sm font-bold ${bubblyButtonClass} ${theme === 'light' ? 'bg-indigo-100 border-indigo-300 border-b-indigo-400 text-indigo-700' : 'bg-white border-gray-200 border-b-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-gray-400'}`}>
                                <SunIcon className="w-5 h-5" /> Light
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`p-3 flex items-center justify-center gap-2 text-sm font-bold ${bubblyButtonClass} ${theme === 'dark' ? 'bg-indigo-600 border-indigo-800 border-b-black text-white' : 'bg-white border-gray-200 border-b-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-gray-400'}`}>
                                <MoonIcon className="w-5 h-5" /> Dark
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <button onClick={() => onLanguageChange('en')} className={`p-3 text-sm font-bold ${bubblyButtonClass} ${language === 'en' ? 'bg-indigo-100 border-indigo-300 border-b-indigo-400 text-indigo-700 dark:bg-indigo-600 dark:border-indigo-800 dark:border-b-black dark:text-white' : 'bg-white border-gray-200 border-b-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-gray-400'}`}>
                                English
                            </button>
                            <button onClick={() => onLanguageChange('hi')} className={`p-3 text-sm font-bold ${bubblyButtonClass} ${language === 'hi' ? 'bg-indigo-100 border-indigo-300 border-b-indigo-400 text-indigo-700 dark:bg-indigo-600 dark:border-indigo-800 dark:border-b-black dark:text-white' : 'bg-white border-gray-200 border-b-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 dark:text-gray-400'}`}>
                                हिंदी
                            </button>
                        </div>
                    </div>

                    {/* History Tickets */}
                    <div className="pt-4">
                        <div className="flex items-center justify-between mb-3 px-2">
                            <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 flex items-center gap-2 uppercase tracking-wider">
                                <HistoryIcon className="w-5 h-5" />
                                {labels['en'].history}
                            </h3>
                            {history.length > 0 && (
                                <button onClick={handleClearHistory} className={`text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition-colors ${bubblyButtonClass} border-red-600 border-b-red-800 py-2`}>
                                    CLEAR ALL
                                </button>
                            )}
                        </div>
                        
                        <div className="space-y-3 max-h-64 overflow-y-auto px-1 custom-scrollbar">
                            {history.length > 0 ? (
                                history.map(item => {
                                    const isPass = item.accuracy >= 70;
                                    return (
                                        <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className={`w-full text-left p-4 ${bubblyButtonClass} ${isPass ? 'bg-green-50 border-green-200 border-b-green-300 dark:bg-green-900/30 dark:border-green-800 dark:border-b-green-950' : 'bg-red-50 border-red-200 border-b-red-300 dark:bg-red-900/30 dark:border-red-800 dark:border-b-red-950'} group`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <h4 className="font-black text-sm text-gray-800 dark:text-gray-100 truncate pr-2">
                                                    {item.topic || labels['en'].untitledQuiz}
                                                </h4>
                                                <span className={`text-sm font-black px-2 py-1 rounded-lg ${isPass ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-100'}`}>
                                                    {item.accuracy.toFixed(0)}%
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                                                <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                                                <span>Score: {item.score}/{item.totalQuestions}</span>
                                            </div>
                                        </button>
                                    );
                                })
                            ) : (
                                <div className={`text-center py-8 ${bubblyButtonClass} bg-gray-50 border-gray-200 border-b-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:border-b-gray-900 cursor-default active:translate-y-0 active:border-b-[5px]`}>
                                    <p className="text-sm font-bold text-gray-400">No games played yet!</p>
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
            className={`absolute inset-0 bg-indigo-900/40 backdrop-blur-sm transition-opacity duration-300 ease-out will-change-opacity ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        {/* Sidebar Panel */}
        <div className={`relative w-[90%] max-w-[340px] h-full bg-indigo-50 dark:bg-gray-900 border-l-[3px] border-indigo-200 dark:border-gray-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ${panelClass}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 bg-white dark:bg-gray-800 border-b-[3px] border-indigo-100 dark:border-gray-700">
                <h2 className="text-2xl font-black text-indigo-900 dark:text-white tracking-tight truncate pr-4">
                    {getHeader}
                </h2>
                
                <div className="flex items-center gap-2">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className={`p-2 ${bubblyButtonClass} bg-white border-gray-200 border-b-gray-300 text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:border-b-gray-800 dark:text-gray-300`}>
                            <BackArrowIcon className="w-6 h-6" />
                        </button>
                    )}
                    <button onClick={onClose} className={`p-2 ${bubblyButtonClass} bg-white border-gray-200 border-b-gray-300 text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:border-b-gray-800 dark:text-gray-300`}>
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                {renderContent()}
            </div>

        </div>
    </div>
  );
};