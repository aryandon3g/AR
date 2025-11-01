

import React, { useState, useEffect } from 'react';
import type { Language, SummaryData, QuizQuestion, SidebarView, XpData } from '../types';
import { SunIcon, MoonIcon, XIcon, HistoryIcon, TrashIcon, BookOpenIcon, BackArrowIcon, ArrowRightIcon, PlusIcon, SparkleIcon, ChartIcon, TrophyIcon, XPIcon } from './icons';
import { subjectQuizzes } from '../services/subjectQuizzes';
import { sidebarLabels as labels, commonLabels } from '../services/labels';
import { QuizSubject, QuizTopic } from '../types';
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
  // New state for dynamic max questions per topic
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
        // Reset topic specific states when sidebar closes
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
            isCustom: true
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
    setIsLoadingTopicQuestions(true); // Start loading indicator
    try {
      const questions = await loadQuestionsForTopic(topic);
      const actualMax = questions.length;
      setMaxAvailableQuestionsForTopic(actualMax);
      // Ensure numTopicQuestions is not more than actualMax, and at least 1 if questions exist
      setNumTopicQuestions(Math.min(numTopicQuestions, actualMax) || (actualMax > 0 ? 1 : 0));
    } catch (error) {
      console.error("Failed to load topic questions for count:", error);
      setMaxAvailableQuestionsForTopic(0);
      setNumTopicQuestions(0);
      // Optionally show an error message to the user
    } finally {
      setIsLoadingTopicQuestions(false); // End loading indicator
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
  
  const getHeader = () => {
    switch(view) {
        case 'subjects': return labels['en'].subjects;
        case 'topics': return selectedSubject ? (language === 'en' ? selectedSubject.name_en : selectedSubject.name_hi) : labels['en'].topics;
        case 'mixedQuizConfig': return labels['en'].mixedQuiz;
        case 'topicQuizConfig': return selectedTopic ? (language === 'en' ? selectedTopic.name_en : selectedTopic.name_hi) : labels['en'].topics;
        default: return labels['en'].settings;
    }
  };

  const handleBackNavigation = () => {
    if (view === 'topicQuizConfig') {
        setView('topics');
        // Reset topic specific states when navigating back from topic config
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
                    iconEmoji: "⭐", // Emoji for custom quizzes
                });
            }

            return (
                <div className="space-y-2">
                    {allSubjectsForDisplay.map(subject => (
                        <div key={subject.name_en}>
                            <button
                                onClick={() => handleSelectSubject(subject)}
                                disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                                className="flex-grow text-left p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex justify-between items-center disabled:opacity-50 disabled:cursor-not-allowed w-full transform hover:scale-[1.01]"
                            >
                                <span className="flex items-center">
                                  {subject.iconEmoji && <span className="mr-2 text-xl" aria-hidden="true">{subject.iconEmoji}</span>}
                                  {language === 'en' ? subject.name_en : subject.name_hi}
                                </span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-2">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center space-x-2 w-full">
                            <button key={topic.name_en}
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow text-left p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex justify-between items-center transform hover:scale-[1.01]"
                            >
                                <span>{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-4 h-4 text-gray-500" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-full transition-colors transform hover:scale-110">
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
                <div className="space-y-6">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="numTopicQuestions" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {labels['en'].numQuestions} ({numTopicQuestions} / {currentMaxQuestions})
                            </label>
                            <input 
                                id="numTopicQuestions" 
                                type="range" 
                                min={minQuestionsForSlider}
                                max={currentMaxQuestions}
                                value={numTopicQuestions} 
                                onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500"
                                disabled={isDisabled}
                            />
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span>{minQuestionsForSlider}</span>
                                <span>{currentMaxQuestions}</span>
                            </div>
                        </div>
                    )}
                    <button 
                        onClick={handleStartTopicQuiz}
                        className="w-full p-3 rounded-2xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors flex justify-center items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-600 disabled:hover:shadow-none disabled:transform-none"
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
                <div className="space-y-6">
                    <div>
                        <label htmlFor="numMixedQuestions" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{labels['en'].numQuestions} ({numMixedQuestions})</label>
                        <input 
                            id="numMixedQuestions" 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary-500" 
                        />
                    </div>
                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full p-3 rounded-2xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors flex justify-center items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
                <>
                <div className="text-center py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-2xl">
                  <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300 animate-gradient-pan">
                    I Love You Maidam ji ♥️
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-inner flex flex-col items-center">
                    <div className="flex items-center space-x-2 text-lg font-bold text-gray-800 dark:text-white">
                         <XPIcon className="w-6 h-6 text-green-500" />
                         <span>{common_l.level} {xpData.level} ({xpData.totalXp} {common_l.xp})</span>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3 w-full text-center">
                        <button onClick={onViewProgress} className="flex flex-col items-center p-2 rounded-xl bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors transform hover:scale-105">
                            <ChartIcon className="w-6 h-6 text-primary-500" />
                            <span className="text-xs mt-1 text-gray-800 dark:text-gray-200">{commonLabels['en'].progress}</span>
                        </button>
                        <button onClick={onViewAchievements} className="flex flex-col items-center p-2 rounded-xl bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors transform hover:scale-105">
                            <TrophyIcon className="w-6 h-6 text-primary-500" />
                            <span className="text-xs mt-1 text-gray-800 dark:text-gray-200">{commonLabels['en'].achievements}</span>
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{labels['en'].theme}</label>
                    <div className="flex space-x-2 p-1 rounded-2xl bg-gray-200 dark:bg-gray-800">
                    <button onClick={() => theme !== 'light' && onThemeChange()} className={`w-full p-2 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${theme === 'light' ? 'bg-white dark:bg-gray-600 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700'} transform hover:scale-105`}>
                        <SunIcon className="w-5 h-5" />
                        <span>{labels['en'].light}</span>
                    </button>
                    <button onClick={() => theme !== 'dark' && onThemeChange()} className={`w-full p-2 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${theme === 'dark' ? 'bg-white dark:bg-gray-600 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700'} transform hover:scale-105`}>
                        <MoonIcon className="w-5 h-5" />
                        <span>{labels['en'].dark}</span>
                    </button>
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{l.language}</label>
                    <div className="flex space-x-2 p-1 rounded-2xl bg-gray-200 dark:bg-gray-800">
                    <button onClick={() => onLanguageChange('en')} className={`w-full p-2 rounded-xl text-sm font-semibold transition-all ${language === 'en' ? 'bg-white dark:bg-gray-600 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700'} transform hover:scale-105`}>
                        🇬🇧 English
                    </button>
                    <button onClick={() => onLanguageChange('hi')} className={`w-full p-2 rounded-xl text-sm font-semibold transition-all ${language === 'hi' ? 'bg-white dark:bg-gray-600 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700'} transform hover:scale-105`}>
                        🇮🇳 Hindi
                    </button>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <HistoryIcon className="w-6 h-6 mr-2" />
                    {labels['en'].history}
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2 -mr-2 custom-scrollbar">
                    {history.length > 0 ? (
                        history.map(item => (
                        <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full text-left p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-[1.01]">
                            <p className="font-semibold truncate">{item.topic || labels['en'].untitledQuiz}</p>
                            <div className="text-xs text-gray-500 dark:text-gray-400 flex justify-between">
                            <span>{item.score}/{item.totalQuestions} ({item.accuracy.toFixed(0)}%)</span>
                            <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                            </div>
                        </button>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">{common_l.noHistory}</p>
                    )}
                    </div>
                    {history.length > 0 && (
                    <button onClick={handleClearHistory} className="w-full mt-4 text-sm text-red-500 hover:text-red-700 dark:hover:bg-red-900/20 transition-colors transform hover:scale-105">
                        <TrashIcon className="w-4 h-4" />
                        <span>{labels['en'].clearHistory}</span>
                    </button>
                    )}
                </div>
                </>
            );
    }
  };

  return (
        <div // This is the actual sidebar wrapper
          className={`fixed inset-y-0 right-0 z-20 w-64 bg-white/80 dark:bg-primary-900/80 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } p-4 flex flex-col`}
        >
            <div className="flex justify-between items-center mb-6 flex-shrink-0">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {getHeader()}
                </h2>
                <div className="flex items-center space-x-2">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 -mr-2 rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors" aria-label={common_l.back}>
                            <BackArrowIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-2 -mr-2 rounded-full hover:bg-white/50 dark:hover:bg-black/50 transition-colors" aria-label={common_l.close}>
                        <XIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                    </button>
                </div>
            </div>
            
            <div className="flex-grow overflow-y-auto pr-2 -mr-2 custom-scrollbar">
                {renderContent()}
            </div>
        </div>
    );
};