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
                <div className="flex flex-col gap-2 p-2">
                    {allSubjectsForDisplay.map(subject => (
                        <button
                            key={subject.name_en}
                            onClick={() => handleSelectSubject(subject)}
                            disabled={subject.name_en !== labels['en'].mixedQuiz && !subject.isCustom && subject.topics.length === 0}
                            className="group relative w-full flex items-center justify-between p-4 rounded-xl bg-[#1e293b]/50 dark:bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-[#1e293b] dark:hover:bg-white/10 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <span className="relative flex items-center text-sm font-bold text-slate-200 dark:text-gray-100">
                                {subject.iconEmoji && <span className="mr-3 text-lg opacity-80 filter drop-shadow-lg">{subject.iconEmoji}</span>}
                                {language === 'en' ? subject.name_en : subject.name_hi}
                            </span>
                            <div className="relative p-1.5 rounded-lg bg-black/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors text-gray-500">
                                <ArrowRightIcon className="w-4 h-4" />
                            </div>
                        </button>
                    ))}
                </div>
            );
        case 'topics':
            return (
                <div className="flex flex-col gap-2 p-2">
                    {selectedSubject?.topics.map(topic => (
                         <div key={topic.name_en} className="flex items-center w-full gap-2">
                            <button
                                onClick={() => handleSelectTopic(topic)}
                                className="group relative flex-grow flex items-center justify-between p-4 rounded-xl bg-[#1e293b]/50 dark:bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-[#1e293b] dark:hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                                <span className="relative text-sm font-medium text-slate-200 dark:text-gray-100">{language === 'en' ? topic.name_en : topic.name_hi}</span>
                                <ArrowRightIcon className="relative w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </button>
                            {selectedSubject?.isCustom && (
                                <button 
                                    onClick={(e) => { e.stopPropagation(); onDeleteCustomQuiz(selectedSubject.name_en); clearQuestionCache(); }} 
                                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
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
                <div className="p-4 space-y-8 mt-4">
                    {isLoadingTopicQuestions ? (
                        <div className="flex flex-col items-center justify-center py-8">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"></div>
                                <div className="absolute inset-0 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                            <p className="mt-4 text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] animate-pulse">{common_l.loading}</p>
                        </div>
                    ) : (
                        <div className="bg-[#1e293b]/50 dark:bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{labels['en'].numQuestions}</label>
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{numTopicQuestions}</span>
                            </div>
                            
                            <input 
                                type="range" 
                                min={currentMaxQuestions > 0 ? 1 : 0}
                                max={currentMaxQuestions}
                                value={numTopicQuestions} 
                                onChange={(e) => setNumTopicQuestions(parseInt(e.target.value))} 
                                className="w-full h-2 bg-black/40 rounded-full appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                disabled={isDisabled}
                            />
                             <div className="flex justify-between text-[10px] font-medium text-gray-500 mt-2">
                                <span>1</span>
                                <span>{currentMaxQuestions}</span>
                            </div>
                        </div>
                    )}
                    
                    <button 
                        onClick={handleStartTopicQuiz}
                        className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:shadow-none disabled:transform-none flex justify-center items-center gap-3 overflow-hidden relative"
                        disabled={isLoadingQuiz || isDisabled || numTopicQuestions === 0}
                    >
                         {/* Shine Effect */}
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                        
                        {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        <span className="relative z-10">{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        }
        case 'mixedQuizConfig':
            return (
                <div className="p-4 space-y-8 mt-4">
                    <div className="bg-[#1e293b]/50 dark:bg-white/5 p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-end mb-6">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{labels['en'].numQuestions}</label>
                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{numMixedQuestions}</span>
                        </div>
                        
                        <input 
                            type="range" 
                            min="10" 
                            max="100" 
                            value={numMixedQuestions} 
                            onChange={(e) => setNumMixedQuestions(parseInt(e.target.value))} 
                            className="w-full h-2 bg-black/40 rounded-full appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400" 
                        />
                         <div className="flex justify-between text-[10px] font-medium text-gray-500 mt-2">
                            <span>10</span>
                            <span>100</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleStartMixedQuiz}
                        className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:shadow-none disabled:transform-none flex justify-center items-center gap-3 overflow-hidden relative"
                        disabled={isLoadingQuiz}
                    >
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                        {isLoadingQuiz && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                        <span className="relative z-10">{isLoadingQuiz ? common_l.loading : commonLabels['en'].startQuiz}</span>
                    </button>
                </div>
            );
        case 'main':
        default:
            return (
                <div className="flex flex-col h-full gap-6">
                    {/* Futuristic Profile Card */}
                    <div className="mx-4 mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/5 shadow-2xl relative overflow-hidden group">
                        {/* Glowing Background Orb */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] group-hover:bg-cyan-500/30 transition-colors duration-500"></div>
                        
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-black border-2 border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                <XPIcon className="w-7 h-7 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-tight">Level {xpData.level}</h3>
                                <p className="text-xs text-cyan-400 font-medium">{xpData.totalXp} Total XP</p>
                            </div>
                        </div>
                        <div className="mt-4">
                             <div className="flex justify-between text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold">
                                <span>Progress</span>
                                <span>{Math.min((xpData.totalXp % 100), 100)}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${Math.min((xpData.totalXp % 100), 100)}%` }} />
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mx-4">
                        <button onClick={onViewProgress} className="p-4 rounded-xl bg-[#1e293b]/50 dark:bg-white/5 border border-white/5 hover:bg-[#1e293b] hover:border-cyan-500/30 transition-all group flex flex-col items-center gap-2">
                            <ChartIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            <span className="text-xs font-bold text-gray-300 group-hover:text-white">Stats</span>
                        </button>
                        <button onClick={onViewAchievements} className="p-4 rounded-xl bg-[#1e293b]/50 dark:bg-white/5 border border-white/5 hover:bg-[#1e293b] hover:border-yellow-500/30 transition-all group flex flex-col items-center gap-2">
                            <TrophyIcon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                            <span className="text-xs font-bold text-gray-300 group-hover:text-white">Awards</span>
                        </button>
                    </div>

                    {/* Settings Toggles */}
                    <div className="mx-4 space-y-4">
                        <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                             <button onClick={() => theme !== 'light' && onThemeChange()} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${theme === 'light' ? 'bg-[#1e293b] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                                <SunIcon className="w-3 h-3" /> Light
                            </button>
                            <button onClick={() => theme !== 'dark' && onThemeChange()} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${theme === 'dark' ? 'bg-[#1e293b] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                                <MoonIcon className="w-3 h-3" /> Dark
                            </button>
                        </div>
                        <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                             <button onClick={() => onLanguageChange('en')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'en' ? 'bg-[#1e293b] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                                English
                            </button>
                            <button onClick={() => onLanguageChange('hi')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${language === 'hi' ? 'bg-[#1e293b] text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>
                                हिंदी
                            </button>
                        </div>
                    </div>

                    {/* Compact History */}
                    <div className="flex-1 mx-4 mt-2">
                         <div className="flex items-center justify-between mb-3">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Recent Activity</h4>
                            {history.length > 0 && (
                                <button onClick={handleClearHistory} className="text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors">CLEAR</button>
                            )}
                        </div>
                        <div className="space-y-2 overflow-y-auto max-h-48 custom-scrollbar pr-1">
                            {history.length > 0 ? (
                                history.map(item => (
                                    <button key={item.id} onClick={() => onViewHistoryItem(item.id)} className="w-full flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group">
                                        <div className="flex flex-col items-start truncate pr-2">
                                            <span className="text-sm font-semibold text-gray-300 group-hover:text-white truncate w-full text-left">{item.topic || labels['en'].untitledQuiz}</span>
                                            <span className="text-[10px] text-gray-500">{new Date(item.timestamp).toLocaleDateString()}</span>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${item.accuracy >= 70 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {item.accuracy.toFixed(0)}%
                                        </span>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center py-6">
                                    <p className="text-xs text-gray-600">No data available.</p>
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
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${backdropClass}`}
            onClick={onClose}
            aria-hidden="true"
        />

        {/* Panel Container */}
        <div className={`relative w-[85%] max-w-[320px] h-full bg-[#0f172a] dark:bg-black border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${panelClass}`}>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                <h2 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-tight">
                    {getHeader}
                </h2>
                
                <div className="flex items-center gap-2">
                    {(view === 'topics' || view === 'mixedQuizConfig' || view === 'topicQuizConfig') && (
                        <button onClick={handleBackNavigation} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                            <BackArrowIcon className="w-5 h-5" />
                        </button>
                    )}
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {renderContent()}
            </div>
            
             {/* Footer Info */}
             <div className="p-4 border-t border-white/5 text-center">
                 <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em]">System Active</p>
            </div>
        </div>
    </div>
  );
};