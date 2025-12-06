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
                <div className="space-y-3 p-4">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-sm transition-all duration-300 group active:scale-[0.98]"
                        >
                            <span className="flex items-center text-white font-semibold tracking-wide">
                                {subject.iconEmoji && <span className="mr-3 text-lg opacity-90">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <div className="bg-white/10 rounded-full p-1.5 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="space-y-3 p-4">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex w-full items-center gap-2">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="flex-grow flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/5 backdrop-blur-sm transition-all duration-300 active:scale-[0.98]"
                            >
                                <span className="text-white font-medium">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="w-4 h-4 text-white/60" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-4 rounded-2xl bg-red-500/20 text-red-200 hover:bg-red-500 hover:text-white border border-red-500/30 transition-all"
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
                <div className="p-6 text-white space-y-8">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <p className="mt-4 text-xs font-bold uppercase tracking-widest opacity-70">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                                <div className="flex justify-between items-end mb-6">
                                    <label className="text-sm font-bold opacity-80 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                                    <span className="text-4xl font-black">{numTopicQuestions}</span>
                                </div>
                                
                                <input 
                                    type="range" 
                                    min={currentMaxQuestions > 0 ? 1 : 0}
                                    max={currentMaxQuestions}
                                    value={numTopicQuestions} 
                                    onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                    className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-white focus:outline-none"
                                    disabled={isDisabled}
                                />
                                <div className="flex justify-between mt-2 text-xs opacity-60 font-medium">
                                    <span>Min: 1</span>
                                    <span>Max: {currentMaxQuestions}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleStartTopicQuiz}
                                className="w-full mt-6 py-4 rounded-2xl bg-white text-indigo-900 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:transform-none"
                                disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                            >
                                {isLoadingQuiz && <div className="w-5 h-5 border-2 border-indigo-900/30 border-t-indigo-900 rounded-full animate-spin"></div>}
                                <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                            </button>
                        </div>
                    )}
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="p-6 text-white space-y-8">
                    <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-sm font-bold opacity-80 uppercase tracking-wider">{labels['en'].numQuestions}</label>
                            <span className="text-4xl font-black">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-white focus:outline-none" 
                        />
                         <div className="flex justify-between mt-2 text-xs opacity-60 font-medium">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="w-full py-4 rounded-2xl bg-white text-indigo-900 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:transform-none"
                        disabled={isLoadingQuiz}
                    >
                        {isLoadingQuiz && <div className="w-5 h-5 border-2 border-indigo-900/30 border-t-indigo-900 rounded-full animate-spin"></div>}
                        <span>{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="flex flex-col h-full text-white">
                    {/* User Profile Area */}
                    <div className="px-6 pt-6 pb-8 text-center">
                        <div className="relative inline-block">
                             <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-inner">
                                <XPIcon className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white text-indigo-900 text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                                Lvl {xpData.level}
                            </div>
                        </div>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight">Keep Learning!</h3>
                        <p className="text-white/60 text-sm">{xpData.totalXp} XP Earned</p>
                        
                        <div className="mt-4 w-full h-2 bg-black/20 rounded-full overflow-hidden">
                             <div className="h-full bg-white/90 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }} />
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 px-6 mb-6">
                        <button onClick={onViewProgress} className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl backdrop-blur-sm transition-all border border-white/5 flex flex-col items-center gap-2">
                            <ChartIcon className="w-6 h-6 text-cyan-300" />
                            <span className="text-xs font-bold uppercase tracking-wider">Stats</span>
                        </button>
                        <button onClick={onViewAchievements} className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl backdrop-blur-sm transition-all border border-white/5 flex flex-col items-center gap-2">
                            <TrophyIcon className="w-6 h-6 text-yellow-300" />
                            <span className="text-xs font-bold uppercase tracking-wider">Awards</span>
                        </button>
                    </div>

                    {/* Settings Toggles */}
                    <div className="px-6 space-y-4">
                        <div className="bg-black/20 p-1.5 rounded-xl flex backdrop-blur-sm">
                            <button onClick={() => theme !== 'light' && onThemeChange()} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${theme === 'light' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/60 hover:text-white'}`}>
                                <SunIcon className="w-4 h-4" /> Light
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${theme === 'dark' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/60 hover:text-white'}`}>
                                <MoonIcon className="w-4 h-4" /> Dark
                            </button>
                        </div>
                        <div className="bg-black/20 p-1.5 rounded-xl flex backdrop-blur-sm">
                            <button onClick={() => onLanguageChange('en')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'en' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/60 hover:text-white'}`}>
                                English
                            </button>
                            <button onClick={() => onLanguageChange('hi')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'hi' ? 'bg-white text-indigo-900 shadow-md' : 'text-white/60 hover:text-white'}`}>
                                हिंदी
                            </button>
                        </div>
                    </div>

                    {/* History List */}
                    <div className="flex-1 px-6 mt-6 pb-4 overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-xs font-bold text-white/50 uppercase tracking-widest">History</p>
                            {history.length > 0 && (
                                <button onClick={handleClearHistory} className="text-xs font-bold text-red-300 hover:text-red-100 transition-colors">CLEAR</button>
                            )}
                        </div>
                        
                        <div className="overflow-y-auto custom-scrollbar flex-1 space-y-2 pr-1">
                            {history.length > 0 ? (
                                history.map(item => (
                                    <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex justify-between items-center group">
                                        <div className="truncate pr-2">
                                            <p className="text-sm font-semibold text-white/90 truncate">{item.topic || labels['en'].untitledQuiz}</p>
                                            <p className="text-[10px] text-white/50">{new Date(item.timestamp).toLocaleDateString()}</p>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.accuracy >= 70 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center py-6 border border-dashed border-white/10 rounded-xl">
                                    <p className="text-xs text-white/40">No games played yet</p>
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
        <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        {/* Sidebar Panel - The Gradient is APPLIED HERE */}
        <div className={`relative w-[320px] h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${panelClass}`}>
            
            {/* Header for Inner Pages */}
            {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <h2 className="text-lg font-bold text-white tracking-wide truncate pr-4">{getHeader}</h2>
                    <div className="flex gap-2">
                         <button onClick={handleBackNavigation} className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                            <BackArrowIcon className="w-5 h-5" />
                        </button>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                            <XIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
            
            {/* Close button for Main View */}
            {view === 'main' && (
                 <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors">
                    <XIcon className="w-5 h-5" />
                </button>
            )}

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {renderContent()}
            </div>
            
        </div>
    </div>
  );
};