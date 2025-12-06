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
                <div className="py-2">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="w-full flex items-center px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 text-left"
                        >
                            <span className="w-8 text-xl flex justify-center">{subject.iconEmoji || "•"}</span>
                            <span className="flex-1 ml-4 text-base font-medium text-gray-800 dark:text-gray-100">
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="py-2">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex w-full items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors px-6">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center py-4 text-left"
                            >
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mr-4"></div>
                                <span className="text-base font-medium text-gray-800 dark:text-gray-100">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
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
                <div className="p-6">
                    {isLoadingTopicQuestions ? (
                        <div className="flex justify-center py-10">
                            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                             <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{labels['en'].numQuestions}</label>
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{numTopicQuestions}</span>
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
                                <div className="flex justify-between mt-2 text-xs text-gray-500">
                                    <span>Min: 1</span>
                                    <span>Max: {currentMaxQuestions}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleStartTopicQuiz}
                                className="w-full py-4 rounded-full bg-indigo-600 text-white font-semibold text-base shadow-lg hover:bg-indigo-700 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
                                disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                            >
                                {isLoadingQuiz && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                                <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                            </button>
                        </div>
                    )}
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="p-6 space-y-8">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{labels['en'].numQuestions}</label>
                            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600 focus:outline-none" 
                        />
                         <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-4 rounded-full bg-indigo-600 text-white font-semibold text-base shadow-lg hover:bg-indigo-700 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="pb-6">
                    {/* Header Image/Gradient Area */}
                    <div className="h-40 bg-gradient-to-br from-indigo-600 to-purple-700 relative flex items-end p-6">
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors">
                            <XIcon className="w-5 h-5" />
                        </button>
                        
                        <div className="flex items-center gap-4 text-white w-full">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-500 shadow-md flex items-center justify-center text-indigo-600">
                                <XPIcon className="w-8 h-8" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-bold truncate">Level {xpData.level}</h3>
                                <div className="flex items-center gap-2 text-indigo-100 text-sm">
                                    <div className="flex-1 h-1.5 bg-black/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white rounded-full" style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }} />
                                    </div>
                                    <span>{xpData.totalXp} XP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex border-b border-gray-200 dark:border-gray-800">
                        <button onClick={onViewProgress} className="flex-1 py-4 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-r border-gray-200 dark:border-gray-800">
                            <ChartIcon className="w-6 h-6 text-gray-500 mb-1" />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Analytics</span>
                        </button>
                        <button onClick={onViewAchievements} className="flex-1 py-4 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <TrophyIcon className="w-6 h-6 text-gray-500 mb-1" />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Awards</span>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="pt-2">
                        <div className="px-6 py-3">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Settings</p>
                        </div>
                        
                        <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer" onClick={() => theme !== 'light' ? onThemeChange() : null}>
                            <div className="flex items-center gap-4">
                                <SunIcon className="w-5 h-5 text-gray-500" />
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Dark Mode</span>
                            </div>
                            {/* Simple iOS Toggle Switch Visual */}
                            <div 
                                className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${theme === 'dark' ? 'bg-indigo-500' : 'bg-gray-300'}`}
                                onClick={(e) => { e.stopPropagation(); onThemeChange(); }}
                            >
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="w-5 h-5 flex items-center justify-center font-bold text-gray-500 text-xs border border-gray-400 rounded">A</div>
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Language</span>
                            </div>
                            <div className="flex bg-gray-200 dark:bg-gray-700 rounded p-0.5">
                                <button onClick={() => onLanguageChange('en')} className={`px-3 py-1 text-xs rounded transition-all ${language === 'en' ? 'bg-white shadow text-black' : 'text-gray-500'}`}>EN</button>
                                <button onClick={() => onLanguageChange('hi')} className={`px-3 py-1 text-xs rounded transition-all ${language === 'hi' ? 'bg-white shadow text-black' : 'text-gray-500'}`}>HI</button>
                            </div>
                        </div>

                         <div className="px-6 py-3 mt-4">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">History</p>
                                {history.length > 0 && (
                                    <button onClick={handleClearHistory} className="text-xs font-bold text-indigo-500 hover:text-indigo-600">CLEAR</button>
                                )}
                            </div>
                        </div>

                        <div className="overflow-y-auto max-h-60">
                             {history.length > 0 ? (
                                history.map(item => (
                                    <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full flex items-center justify-between px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-l-4 border-transparent hover:border-indigo-500">
                                        <div className="truncate pr-4 text-left">
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{item.topic || labels['en'].untitledQuiz}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{new Date(item.timestamp).toLocaleDateString()}</p>
                                        </div>
                                        <span className={`text-xs font-bold ${item.accuracy >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </button>
                                ))
                             ) : (
                                 <p className="px-6 py-2 text-xs text-gray-400 italic">No games played yet.</p>
                             )}
                        </div>
                    </div>
                </div>
            );
    }
  };

  const containerClass = isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-300';
  const backdropClass = isOpen ? 'opacity-100' : 'opacity-0';
  const panelClass = isOpen ? 'translate-x-0' : '-translate-x-full'; // Slides from Left typically for Android/Material style, but sticking to Right for props consistence or easy change to 'translate-x-full' if preferred right side.

  // NOTE: Changed to Slide from RIGHT (standard sidebar) based on `justify-end` in container.
  const slideDirection = 'translate-x-full'; 

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${containerClass}`}>
        <div 
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        <div className={`relative w-[300px] h-full bg-white dark:bg-[#121212] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : slideDirection}`}>
            
            {/* Conditional Header for Inner Pages */}
            {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-100 dark:border-gray-800">
                    <button onClick={handleBackNavigation} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <BackArrowIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{getHeader}</h2>
                </div>
            )}
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {renderContent()}
            </div>
            
        </div>
    </div>
  );
};