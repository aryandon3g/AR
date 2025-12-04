import React, { useState, useEffect, useCallback, memo } from 'react';
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
    id: string;
    isReviewMode?: boolean;
    mode: QuizMode;
    timer?: number;
    isBookmarked: boolean;
    onToggleBookmark: () => void;
}

const optionLabels = ['A', 'B', 'C', 'D'];

// ------------------------------------------------------------------
// ⚡ ISOLATED TIMER: Updates independently without re-rendering card
// ------------------------------------------------------------------
const TimerDisplay = memo(({ seconds }: { seconds: number }) => {
    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60).toString().padStart(2, '0');
        const secs = (s % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };
    return <span>{formatTime(seconds)}</span>;
});

const triggerHapticFeedback = (type: 'correct' | 'incorrect' | 'select' | 'bookmark') => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        if (type === 'correct') navigator.vibrate([50, 50, 50]);
        else if (type === 'incorrect') navigator.vibrate(200);
        else navigator.vibrate(5);
    }
};

export const QuizCard: React.FC<QuizCardProps> = memo((props) => {
    const {
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
        timer = 0,
        isBookmarked,
        onToggleBookmark,
    } = props;

    // --- FIX IS HERE ---
    // Pehle hum sirf initialize kar rahe the, ab hum sync bhi karenge
    const [selectedOption, setSelectedOption] = useState<number | null>(userAnswerIndex ?? null);
    const [feedbackState, setFeedbackState] = useState<{ type: 'correct' | 'incorrect' | null }>({ type: null });
    const [insultText, setInsultText] = useState<string | null>(null);

    // ⚡ FIX: Reset state when Question changes
    useEffect(() => {
        setSelectedOption(userAnswerIndex ?? null);
        setFeedbackState({ type: null });
        setInsultText(null);
    }, [question, userAnswerIndex]); // Jab question change ho, sab kuch reset kar do

    const l = labels[language];
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
            setFeedbackState({ type: isCorrect ? 'correct' : 'incorrect' });
            
            if (!isCorrect) {
                const insults = [l.oops, l.tryAgain, l.notQuite];
                setInsultText(insults[Math.floor(Math.random() * insults.length)]);
                setTimeout(() => setInsultText(null), 2000);
            }
        } else {
            triggerHapticFeedback('select');
        }

        onAnswer(index, isCorrect);
    }, [showFeedback, isReviewMode, mode, question.correct_option_index, onAnswer, l]);

    const handleToggleBookmarkClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        triggerHapticFeedback('bookmark');
        onToggleBookmark();
    }, [onToggleBookmark]);

    const getOptionClass = (index: number) => {
        const base = 'bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200';
        
        if (isReviewMode) {
            if (index === question.correct_option_index) return 'bg-green-500 text-white border-green-600 font-bold';
            if (index === userAnswerIndex) return 'bg-red-500 text-white border-red-600';
            return `${base} opacity-60`;
        }

        const isSelected = index === selectedOption;
        
        // ⚡ Logic fix: Sirf tabhi highlight karo jab actually select kiya ho
        if (!showFeedback) {
            if (isSelected) return 'bg-primary-500 text-white ring-2 ring-primary-300 dark:ring-primary-700';
            return `${base} hover:bg-gray-100 dark:hover:bg-gray-700`;
        }

        // Show Correct/Incorrect logic
        if (index === question.correct_option_index) return 'bg-green-500 text-white border-green-500 animate-pulse-green';
        if (isSelected) return 'bg-red-500 text-white border-red-500 animate-pulse-red';
        
        return `${base} opacity-50`;
    };

    const isAnswered = userAnswerIndex !== undefined && userAnswerIndex !== null;
    const showTimer = !isReviewMode && !isAnswered;

    return (
        <div 
            id={id} 
            className="w-full h-full relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-y-auto contain-content"
        >
            {insultText && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
                     <div className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl font-bold animate-bounce border-2 border-white/20">
                        {insultText}
                    </div>
                </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
                {question.imageUrl && (
                    <div className="w-full flex justify-center mb-5 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden min-h-[150px]">
                        <img 
                            src={question.imageUrl} 
                            alt="Question" 
                            loading="lazy"
                            className="object-contain max-h-[250px] w-full"
                        />
                    </div>
                )}

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
                            {labels['en'].question} {questionNumber} / {totalQuestions}
                        </span>
                        <h2 className={`mt-2 text-xl font-bold text-gray-900 dark:text-white leading-snug ${isHindi ? 'font-sans' : ''}`}>
                            {q}
                        </h2>
                    </div>

                    <div className="flex flex-col items-end gap-2 ml-4">
                        {showTimer && (
                            <div className="flex items-center text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                                <HistoryIcon className="w-3 h-3 mr-1 text-gray-500" />
                                <TimerDisplay seconds={timer} />
                            </div>
                        )}
                        <button 
                            onClick={handleToggleBookmarkClick} 
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <BookmarkIcon className={`w-5 h-5 ${isBookmarked ? 'fill-primary-500 text-primary-500' : 'text-gray-400'}`} />
                        </button>
                    </div>
                </div>

                <div className="space-y-3 mt-auto mb-6">
                    {options.map((option, index) => {
                        const optionClass = getOptionClass(index);
                        return (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(index)}
                                disabled={showFeedback || isReviewMode}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 relative active:scale-[0.98] ${optionClass}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 
                                    ${optionClass.includes('text-white') ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                    {optionLabels[index]}
                                </div>
                                <span className={`text-base font-medium ${isHindi ? 'font-sans' : ''}`}>{option}</span>
                                
                                {(showFeedback || isReviewMode) && index === question.correct_option_index && (
                                    <CheckmarkIcon className="w-5 h-5 ml-auto text-white" />
                                )}
                                {(showFeedback || isReviewMode) && index === userAnswerIndex && index !== question.correct_option_index && (
                                    <XIcon className="w-5 h-5 ml-auto text-white" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {(showFeedback || isReviewMode) && (mode === 'practice' || isReviewMode) && (
                    <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 animate-slide-in">
                        <div className="flex items-center gap-2 mb-2">
                             {userAnswerIndex === question.correct_option_index 
                                ? <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                : <XCircleIcon className="w-5 h-5 text-red-500" />
                             }
                            <h3 className="font-bold text-sm uppercase text-gray-700 dark:text-gray-300">{labels['en'].explanation}</h3>
                        </div>
                        <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${isHindi ? 'font-sans' : ''}`}>
                            {explanation}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
});