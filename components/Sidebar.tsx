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
  
  // Reuseable "Grouped List" container
  const GroupContainer = ({ children, title }: { children: React.ReactNode, title?: string }) => (
    <div className="mb-6">
        {title && <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>}
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
            {children}
        </div>
    </div>
  );
  
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
                <div className="p-4">
                    <GroupContainer>
                        {allSubjectsForDisplay.map(subject => (
                            <button
                                key={subject.name_en}
                                onClick={() => handleSelectSubject(subject)}
                                disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                                className="w-full flex items-center justify-between px-4 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors active:bg-gray-100 dark:active:bg-gray-700"
                            >
                                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                                    {subject.iconEmoji && <span className="mr-3 text-lg opacity-80 grayscale-[0.2]">{subject.iconEmoji}</span>}
                                    {language === 'en' ? subject.name_en : subject.name_hi}
                                </span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                            </button>
                        ))}
                    </GroupContainer>
                </div>
            );
        case 'topics':
            return (
                <div className="p-4">
                    <GroupContainer>
                        {selectedSubject?.topics.map(topic => (
                            <div key={topic.name_en} className="flex w-full items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <button
                                    onClick={() => handleSelectTopic(topic)}
                                    className="flex-grow flex items-center justify-between px-4 py-3.5"
                                >
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                    <ArrowRightIcon className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                                </button>
                                {selectedSubject?.isCustom && (
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                        className="px-4 py-3.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-l border-gray-100 dark:border-gray-700"
                                    >
                                        <TrashIcon className="w-4 h-4"/>
                                    </button>
                                )}
                            </div>
                        ))}
                    </GroupContainer>
                </div>
            );
        case 'topicQuizConfig': {
            if (!selectedTopic) return null;
            const currentMaxQuestions = maxAvailableQuestionsForTopic;
            const isDisabled = isLoadingTopicQuestions || currentMaxQuestions === 0;

            return (
                <div className="p-6">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                             <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">{labels['en'].numQuestions}</label>
                                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{numTopicQuestions}</span>
                                </div>
                                
                                <input 
                                    type="range" 
                                    min={currentMaxQuestions > 0 ? 1 : 0}
                                    max={currentMaxQuestions}
                                    value={numTopicQuestions} 
                                    onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600 focus:outline-none"
                                    disabled={isDisabled}
                                />
                                <div className="flex justify-between mt-2 text-xs text-gray-400">
                                    <span>1</span>
                                    <span>{currentMaxQuestions}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleStartTopicQuiz}
                                className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
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
                <div className="p-6 space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-medium text-gray-900 dark:text-white">{labels['en'].numQuestions}</label>
                            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600 focus:outline-none" 
                        />
                         <div className="flex justify-between mt-2 text-xs text-gray-400">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:shadow-none"
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
                <div className="p-4 space-y-6 pb-8">
                    {/* Profile Section */}
                    <div className="flex items-center space-x-4 p-2">
                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 ring-4 ring-white dark:ring-gray-800 shadow-sm">
                             <XPIcon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Level {xpData.level}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }} />
                                </div>
                                <span className="text-xs font-medium text-gray-500">{xpData.totalXp} XP</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Groups */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={onViewProgress} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <ChartIcon className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Stats</span>
                            </button>
                            <button onClick={onViewAchievements} className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <TrophyIcon className="w-5 h-5 text-yellow-500" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Awards</span>
                            </button>
                        </div>

                        <GroupContainer title="Preferences">
                             <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                        <SunIcon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">Appearance</span>
                                </div>
                                <div className="flex bg-gray-100 dark:bg-gray-700 p-0.5 rounded-lg">
                                    <button onClick={() => theme !== 'light' && onThemeChange()} className={`px-2 py-1 rounded text-xs font-semibold transition-all ${theme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>Light</button>
                                    <button onClick={() => theme !== 'dark' && onThemeChange()} className={`px-2 py-1 rounded text-xs font-semibold transition-all ${theme === 'dark' ? 'bg-gray-600 shadow-sm text-white' : 'text-gray-500'}`}>Dark</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                        <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">A</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">Language</span>
                                </div>
                                <div className="flex bg-gray-100 dark:bg-gray-700 p-0.5 rounded-lg">
                                    <button onClick={() => onLanguageChange('en')} className={`px-2 py-1 rounded text-xs font-semibold transition-all ${language === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>Eng</button>
                                    <button onClick={() => onLanguageChange('hi')} className={`px-2 py-1 rounded text-xs font-semibold transition-all ${language === 'hi' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}>Hin</button>
                                </div>
                            </div>
                        </GroupContainer>

                        {/* History Group */}
                        <GroupContainer title="Recent History">
                             {history.length > 0 ? (
                                history.map(item => (
                                    <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className="flex flex-col items-start truncate pr-4">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white truncate w-full text-left">{item.topic || labels['en'].untitledQuiz}</span>
                                            <span className="text-xs text-gray-400">{new Date(item.timestamp).toLocaleDateString()}</span>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.accuracy >= 70 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </button>
                                ))
                             ) : (
                                 <div className="px-4 py-6 text-center">
                                     <p className="text-xs text-gray-400 italic">No history available</p>
                                 </div>
                             )}
                        </GroupContainer>
                        
                         {history.length > 0 && (
                            <button onClick={handleClearHistory} className="w-full text-center text-xs font-medium text-red-500 hover:text-red-600 py-2">
                                Clear History
                            </button>
                        )}
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
        <div 
            className={`absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 ease-out ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        <div className={`relative w-full max-w-[320px] h-full bg-gray-50 dark:bg-black shadow-xl flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${panelClass}`}>
            
            {/* Standard Header */}
            <div className="flex items-center justify-between px-4 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                     {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 -ml-2 rounded-full text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors">
                            <BackArrowIcon className="w-6 h-6" />
                        </button>
                    )}
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        {getHeader}
                    </h2>
                </div>
                <button onClick={onClose} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <XIcon className="w-5 h-5" />
                </button>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {renderContent()}
            </div>
            
        </div>
    </div>
  );
};