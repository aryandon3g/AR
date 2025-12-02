import React, { useState, useEffect, useCallback } from 'react';
import type { QuizQuestion, Language, QuizMode } from '../types';
import { CheckCircleIcon, XCircleIcon, CheckmarkIcon, HistoryIcon, BookmarkIcon, XIcon } from './icons';
import { quizCardLabels as labels } from '../services/labels';

interface QuizCardProps {
    question: QuizQuestion;
    questionNumber: number;
    totalQuestions: number;
    language: Language;
    onAnswer: (selectedOptionIndex: number, isCorrect: boolean) => void;
    showFeedback: boolean;
    userAnswerIndex?: number;
    id: string; // For html-to-image
    isReviewMode?: boolean;
    mode: QuizMode;
    timer?: number;
    isBookmarked: boolean;
    onToggleBookmark: () => void;
}

const optionLabels = ['A', 'B', 'C', 'D'];

const triggerHapticFeedback = (type: 'correct' | 'incorrect' | 'select' | 'bookmark') => {
    if ('vibrate' in navigator) {
        if (type === 'correct') navigator.vibrate([50, 50, 50]);
        else if (type === 'incorrect') navigator.vibrate(200);
        else if (type === 'select' || type === 'bookmark') navigator.vibrate(5);
    }
};

// CSS optimization object to force GPU acceleration
const gpuAccelerate: React.CSSProperties = {
    transform: 'translateZ(0)',
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    WebkitFontSmoothing: 'antialiased'
};

export const QuizCard: React.FC<QuizCardProps> = React.memo((
    {
        question,
        questionNumber,
        totalQuestions,
        language,
        onAnswer,
        showFeedback,
        userAnswerIndex,
        id,
        isReviewMode = false,
        mode,
        timer,
        isBookmarked,
        onToggleBookmark,
    }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(userAnswerIndex ?? null);
    const [showIncorrectFeedback, setShowIncorrectFeedback] = useState<{ text: string, key: number } | null>(null);
    const [showCorrectIcon, setShowCorrectIcon] = useState<number | null>(null);
    const [showIncorrectIcon, setShowIncorrectIcon] = useState<number | null>(null);
    
    const l = labels[language];

    useEffect(() => {
        setSelectedOption(userAnswerIndex ?? null);
        // Reset feedback animations when question changes
        setShowIncorrectFeedback(null);
        setShowCorrectIcon(null);
        setShowIncorrectIcon(null);
        
    }, [userAnswerIndex, questionNumber]);

    useEffect(() => {
        if (showFeedback && mode === 'practice') {
            if (selectedOption === question.correct_option_index) {
                setShowCorrectIcon(selectedOption);
            } else {
                const incorrectFeedbackOptions = [labels['en'].oops, labels['en'].tryAgain, labels['en'].notQuite];
                const randomText = incorrectFeedbackOptions[Math.floor(Math.random() * incorrectFeedbackOptions.length)];
                setShowIncorrectFeedback({ text: randomText, key: Date.now() });
                setShowIncorrectIcon(selectedOption);
            }
            // Hide icons after a short delay
            const iconTimer = setTimeout(() => {
                setShowCorrectIcon(null);
                setShowIncorrectIcon(null);
            }, 600); // Animation duration for check-pop

            return () => clearTimeout(iconTimer);
        }
    }, [showFeedback, mode, selectedOption, question.correct_option_index]);
    
    const isHindi = language === 'hi';
    const q = isHindi ? question.question_hi : question.question_en;
    const options = isHindi ? question.options_hi : question.options_en;
    const explanation = isHindi ? question.explanation_hi : question.explanation_en;

    const handleOptionClick = useCallback((index: number) => {
        if (showFeedback || isReviewMode) return;
        setSelectedOption(index);
        const isCorrect = index === question.correct_option_index;
        
        if (mode === 'practice') {
            triggerHapticFeedback(isCorrect ? 'correct' : 'incorrect');
        } else {
            triggerHapticFeedback('select');
        }

        onAnswer(index, isCorrect);
    }, [showFeedback, isReviewMode, mode, question.correct_option_index, onAnswer]);

    const handleToggleBookmarkClick = useCallback(() => {
        triggerHapticFeedback('bookmark');
        onToggleBookmark();
    }, [onToggleBookmark]);

    const getOptionClass = (index: number) => {
        const base = 'bg-white/60 dark:bg-black/40 backdrop-blur-sm border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200';
        
        if (isReviewMode) {
            if (index === question.correct_option_index) {
                return 'bg-green-500/80 dark:bg-green-500/70 border-green-400 text-white dark:text-white font-semibold';
            }
            if (index === userAnswerIndex) {
                 return 'bg-red-500/80 dark:bg-red-500/70 border-red-400 text-white dark:text-white';
            }
            return `${base} opacity-60`;
        }

        const isSelected = index === selectedOption;

        if (mode === 'attempt' && !showFeedback) {
            if (isSelected) {
                return 'bg-primary-500/50 dark:bg-primary-500/50 ring-2 ring-primary-400 border-primary-400 text-white dark:text-white';
            }
            return `${base} hover:bg-white/80 dark:hover:bg-black/50 hover:border-primary-400/50 border-transparent`;
        }
        
        if (!showFeedback) {
            if (isSelected) {
                return 'bg-primary-500/50 dark:bg-primary-500/50 ring-2 ring-primary-400 border-primary-400 text-white dark:text-white';
            }
            return `${base} hover:bg-white/80 dark:hover:bg-black/50 hover:border-primary-400/50 border-transparent`;
        }
        
        const isCorrect = index === question.correct_option_index;

        if (isCorrect) {
            return 'bg-green-500/80 dark:bg-green-500/70 border-green-400 text-white dark:text-white font-semibold animate-pulse-green';
        }
        if (isSelected) {
            return 'bg-red-500/80 dark:bg-red-500/70 border-red-400 text-white dark:text-white animate-pulse-red';
        }
        return `${base} opacity-60`;
    };
    
    const showExplanation = (showFeedback || isReviewMode) && (mode === 'practice' || isReviewMode);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const isAnswered = userAnswerIndex !== undefined && userAnswerIndex !== null;
    const showTimer = !isReviewMode && !isAnswered && timer !== undefined;

    return (
        <div 
            id={id} 
            // HERE IS THE FIX: Applying GPU acceleration styles
            style={gpuAccelerate}
            className="w-full h-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl shadow-lg p-6 flex flex-col text-gray-800 dark:text-gray-200 overflow-y-auto"
        >
            {showIncorrectFeedback && (
                <div
                    key={showIncorrectFeedback.key}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-base font-bold px-4 py-2 rounded-lg shadow-xl z-30 animate-insult-in-out border border-red-400"
                >
                    {showIncorrectFeedback.text}
                </div>
            )}
            {question.imageUrl && (
                <div className="flex-shrink-0 mb-4 text-center">
                    <img 
                        src={question.imageUrl} 
                        alt={isHindi ? question.question_hi : question.question_en} 
                        className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                        style={{ maxWidth: 'min(100%, 300px)', maxHeight: '200px', objectFit: 'contain' }}
                    />
                </div>
            )}
            <div className="flex-shrink-0 mb-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-primary-600 dark:text-primary-300 font-semibold">{labels['en'].question} {questionNumber}/{totalQuestions}</p>
                    <div className="flex items-center space-x-2">
                        {showTimer && (
                            <div className="flex items-center text-sm font-mono bg-white/20 dark:bg-black/20 px-2 py-1 rounded-md border border-white/30 dark:border-white/10">
                                <HistoryIcon className="w-4 h-4 mr-1.5 text-gray-600 dark:text-gray-400" />
                                <span className="text-gray-700 dark:text-gray-300">{formatTime(timer)}</span>
                            </div>
                        )}
                        <button onClick={handleToggleBookmarkClick} className={`p-1.5 rounded-full transition-colors transform hover:scale-110 ${isBookmarked ? 'bg-primary-500/20 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300' : 'bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30'}`} aria-label={isBookmarked ? labels['en'].removeBookmark : labels['en'].addBookmark}>
                            <BookmarkIcon className="w-5 h-5" filled={isBookmarked} />
                        </button>
                    </div>
                </div>
                <h2 className={`mt-1 text-xl font-bold leading-relaxed ${isHindi ? 'font-sans' : ''}`}>{q}</h2>
            </div>
            
            <div className="space-y-3 flex-grow">
                {options.map((option, index) => (
                     <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={showFeedback || isReviewMode}
                        // Added GPU acceleration to options as well
                        style={{ animationDelay: `${index * 100}ms`, transform: 'translateZ(0)' }}
                        className={`w-full text-left p-3 rounded-2xl border-2 transition-all duration-300 flex items-center space-x-4 animate-stagger-in relative hover:scale-[1.01] ${getOptionClass(index)}`}
                    >
                        <span className="font-bold text-primary-600 dark:text-primary-400">{optionLabels[index]}</span>
                        <span className={`leading-normal ${isHindi ? 'font-sans' : ''}`}>{option}</span>
                        {showCorrectIcon === index && (
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 p-1 bg-green-500/80 rounded-full animate-check-pop">
                                <CheckmarkIcon className="w-4 h-4 text-white" />
                            </div>
                        )}
                        {showIncorrectIcon === index && (
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 p-1 bg-red-500/80 rounded-full animate-check-pop">
                                <XIcon className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </button>
                ))}
            </div>
            
            {showExplanation && (
                <div className="mt-4 p-4 rounded-2xl bg-white/20 dark:bg-black/30 animate-slide-in shadow-inner">
                    <div className="flex items-center mb-2">
                        {userAnswerIndex === question.correct_option_index ? (
                             <CheckCircleIcon className="w-6 h-6 text-green-400 mr-2" />
                        ) : (
                            <XCircleIcon className="w-6 h-6 text-red-400 mr-2" />
                        )}
                        <h3 className="font-bold text-lg">{labels['en'].explanation}</h3>
                    </div>
                    <p className={`text-sm text-gray-700 dark:text-gray-300 leading-normal ${isHindi ? 'font-sans' : ''}`}>{explanation}</p>
                </div>
            )}
            
        </div>
    );
});