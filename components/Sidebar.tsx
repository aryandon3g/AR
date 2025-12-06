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
                <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800 border-t border-b border-gray-100 dark:border-gray-800">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group text-left"
                        >
                            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                                {subject.iconEmoji && <span className="mr-3 text-lg opacity-80">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800 border-t border-b border-gray-100 dark:border-gray-800">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center w-full bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="px-4 py-4 text-gray-400 hover:text-red-600 transition-colors"
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
            const isDisabled = isLoadingTopicQuestions || currentMaxQuestions === 0;

            return (
                <div className="px-6 py-4 space-y-8">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin dark:border-white dark:border-t-transparent"></div>
                            <p className="mt-3 text-xs font-medium text-gray-500 uppercase tracking-widest">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{labels['en'].numQuestions}</label>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">{numTopicQuestions} / {currentMaxQuestions}</span>
                            </div>
                            
                            <input 
                                type="range" 
                                min={currentMaxQuestions > 0 ? 1 : 0}
                                max={currentMaxQuestions}
                                value={numTopicQuestions} 
                                onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-black dark:accent-white focus:outline-none"
                                disabled={isDisabled}
                            />
                        </div>
                    )}
                    
                    <button 
                        onClick={handleStartTopicQuiz}
                        className="w-full py-3 px-4 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium text-sm shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                        {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin dark:border-black/30 dark:border-t-black"></div>}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="px-6 py-4 space-y-8">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{labels['en'].numQuestions}</label>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-black dark:accent-white focus:outline-none" 
                        />
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-3 px-4 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium text-sm shadow-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin dark:border-black/30 dark:border-t-black"></div>}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="flex flex-col h-full">
                    {/* Minimal Profile */}
                    <div className="px-6 py-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                <XPIcon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Level {xpData.level}</h3>
                                    <span className="text-xs text-gray-500">{xpData.totalXp} XP</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-black dark:bg-white rounded-full" style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <button onClick={onViewProgress} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <ChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Analytics</span>
                            </button>
                            <button onClick={onViewAchievements} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <TrophyIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Awards</span>
                            </button>
                        </div>
                    </div>

                    {/* Settings Lists */}
                    <div className="px-6 py-6 space-y-6">
                        <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Preferences</h4>
                            <div className="space-y-1">
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Appearance</span>
                                    <div className="flex bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg">
                                        <button onClick={() => theme !== 'light' && onThemeChange()} className={`p-1.5 rounded-md transition-all ${theme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                                            <SunIcon className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => theme !== 'dark' && onThemeChange()} className={`p-1.5 rounded-md transition-all ${theme === 'dark' ? 'bg-gray-600 shadow-sm text-white' : 'text-gray-400 hover:text-gray-600'}`}>
                                            <MoonIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Language</span>
                                    <div className="flex bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg">
                                        <button onClick={() => onLanguageChange('en')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${language === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>EN</button>
                                        <button onClick={() => onLanguageChange('hi')} className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${language === 'hi' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>HI</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recent Activity</h4>
                                {history.length > 0 && (
                                    <button onClick={handleClearHistory} className="text-xs text-gray-400 hover:text-red-600 transition-colors">Clear</button>
                                )}
                            </div>
                            
                            <div className="space-y-0 divide-y divide-gray-100 dark:divide-gray-800 border-t border-b border-gray-100 dark:border-gray-800 max-h-60 overflow-y-auto custom-scrollbar">
                                {history.length > 0 ? (
                                    history.map(item => (
                                        <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full text-left py-3 px-1 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-between group">
                                            <div className="truncate pr-4">
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">{item.topic || labels['en'].untitledQuiz}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{new Date(item.timestamp).toLocaleDateString()}</p>
                                            </div>
                                            <div className={`text-xs font-bold px-2 py-1 rounded-md ${item.accuracy >= 70 ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'}`}>
                                                {item.accuracy.toFixed(0)}%
                                            </div>
                                        </button>
                                    ))
                                ) : (
                                    <div className="py-8 text-center">
                                        <p className="text-xs text-gray-400">No recent activity found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
  };

  const containerClass = isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-200';
  const backdropClass = isOpen ? 'opacity-100' : 'opacity-0';
  const panelClass = isOpen ? 'translate-x-0' : 'translate-x-full';

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${containerClass}`}>
        <div 
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        <div className={`relative w-full max-w-[300px] h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${panelClass}`}>
            
            {/* Minimal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {getHeader}
                </h2>
                
                <div className="flex items-center gap-1">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <BackArrowIcon className="w-5 h-5" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-gray-900">
                {renderContent()}
            </div>
            
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 text-center">
                 <p className="text-[10px] text-gray-400">v2.0.1 • Professional Build</p>
            </div>
        </div>
    </div>
  );
};