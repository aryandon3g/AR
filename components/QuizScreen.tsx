

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { QuizQuestion, Language, UserAnswer, SummaryData, QuizMode } from '../types';
import { QuizCard } from './QuizCard';
import { TranslateIcon, ArrowLeftIcon, ArrowRightIcon } from './icons';


interface QuizScreenProps {
  initialQuestions: QuizQuestion[];
  language: Language;
  onLanguageChange: () => void;
  onFinish: (answers: UserAnswer[], streak: number) => void;
  mode: QuizMode;
  isReviewMode?: boolean;
  reviewData?: SummaryData | null;
  onBackToSummary?: () => void;
}

const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
        navigator.vibrate(5); // 5ms vibration
    }
};

export const QuizScreen: React.FC<QuizScreenProps> = ({
  initialQuestions,
  language,
  onLanguageChange,
  onFinish,
  mode,
  isReviewMode = false,
  reviewData = null,
  onBackToSummary,
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(reviewData?.answers ?? []);
  const [startTime, setStartTime] = useState(Date.now());
  const [animationClass, setAnimationClass] = useState('animate-card-in-right');
  
  const [timer, setTimer] = useState(0);

  const [insult, setInsult] = useState<{ text: string, key: number } | null>(null);

  const initialBookmarks = new Set<number>(reviewData?.answers.filter(a => a.isBookmarked).map(a => a.questionIndex) || []);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<number>>(initialBookmarks);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVerticalScroll, setIsVerticalScroll] = useState(false);
  
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const isAnswered = userAnswers.some(a => a.questionIndex === currentQuestionIndex);
    if (isReviewMode || isAnswered) {
        setTimer(0);
        return;
    }

    const intervalId = setInterval(() => {
        setTimer(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, isReviewMode, userAnswers, startTime]);


  const insults = [
    'Oops!',
    'Not quite',
    'Try Again',
  ];
  
    const finishQuiz = useCallback(() => {
        if (isReviewMode) {
            onBackToSummary?.();
            return;
        }

        // Create a complete list of answers, including skipped ones.
        const finalAnswers: UserAnswer[] = questions.map((_, index) => {
            const existingAnswer = userAnswers.find(a => a.questionIndex === index);
            if (existingAnswer) {
                // If answered, include it and update bookmark status
                return {
                    ...existingAnswer,
                    isBookmarked: bookmarkedQuestions.has(index),
                };
            } else {
                // If not answered, it's skipped
                return {
                    questionIndex: index,
                    selectedOptionIndex: -1, // Use -1 to indicate skipped
                    isCorrect: false,
                    timeTaken: 0,
                    isBookmarked: bookmarkedQuestions.has(index), // still capture bookmark status for skipped Qs
                };
            }
        });
        onFinish(finalAnswers, currentStreak);
    }, [questions, userAnswers, bookmarkedQuestions, onFinish, isReviewMode, onBackToSummary, currentStreak]);


  const handleToggleBookmark = useCallback(() => {
    triggerHapticFeedback();
    setBookmarkedQuestions(prevBookmarks => {
        const newBookmarkedQuestions = new Set(prevBookmarks);
        if (newBookmarkedQuestions.has(currentQuestionIndex)) {
            newBookmarkedQuestions.delete(currentQuestionIndex);
        } else {
            newBookmarkedQuestions.add(currentQuestionIndex);
        }
        return newBookmarkedQuestions;
    });
  }, [currentQuestionIndex]);

  const handleAnswer = useCallback((selectedOptionIndex: number, isCorrect: boolean) => {
    if (isReviewMode) return;

    if (isCorrect) {
        setCurrentStreak(prev => prev + 1);
    } else {
        setCurrentStreak(0);
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        setInsult({ text: randomInsult, key: Date.now() });
        setTimeout(() => {
            setInsult(null);
        }, 2000);
    }

    const isBookmarkedForCurrentQuestion = bookmarkedQuestions.has(currentQuestionIndex);

    setUserAnswers(prevAnswers => {
        const existingAnswerIndex = prevAnswers.findIndex(a => a.questionIndex === currentQuestionIndex);
        
        if (existingAnswerIndex > -1) {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[existingAnswerIndex] = {
                ...updatedAnswers[existingAnswerIndex],
                selectedOptionIndex,
                isCorrect,
                isBookmarked: isBookmarkedForCurrentQuestion,
            };
            return updatedAnswers;
        } else {
            const timeTaken = (Date.now() - startTime) / 1000;
            const answer: UserAnswer = {
              questionIndex: currentQuestionIndex,
              selectedOptionIndex,
              isCorrect,
              timeTaken,
              isBookmarked: isBookmarkedForCurrentQuestion,
            };
            return [...prevAnswers, answer];
        }
    });
  }, [currentQuestionIndex, isReviewMode, insults, startTime, bookmarkedQuestions]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    triggerHapticFeedback();
    const newAnimationClass = direction === 'next' ? 'animate-slide-out-left' : 'animate-slide-out-right';
    const newCardAnimationClass = direction === 'next' ? 'animate-card-in-right' : 'animate-card-in-left';
    
    setAnimationClass(newAnimationClass);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentQuestionIndex(prev => prev - 1);
      }
      setStartTime(Date.now());
      setTimer(0);
      setAnimationClass(newCardAnimationClass);
    }, 300); // Animation duration
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
        navigate('prev');
    }
  }, [currentQuestionIndex, navigate]);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
        navigate('next');
    } else {
        finishQuiz();
    }
  }, [currentQuestionIndex, questions.length, navigate, finishQuiz]);
  
  // Swipe Handlers
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isAnimatingOut) return;
    setAnimationClass(''); // Clear CSS animations to allow manual transform
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
    setIsVerticalScroll(false); // Reset on new drag
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;

    if (!isVerticalScroll && dragOffset === 0 && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            setIsVerticalScroll(true);
            return;
        }
    }

    if (isVerticalScroll) return;
    
    if (e.cancelable) {
        e.preventDefault();
    }
    e.stopPropagation();

    setDragOffset(deltaX);
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || isVerticalScroll) {
        setIsDragging(false);
        setIsVerticalScroll(false);
        setDragOffset(0);
        return;
    };
    
    e.stopPropagation();
    
    const threshold = (cardRef.current?.offsetWidth ?? 300) / 5;
    setIsDragging(false);

    if (Math.abs(dragOffset) > threshold) {
        setIsAnimatingOut(true);
        triggerHapticFeedback();
        
        setTimeout(() => {
            const direction = dragOffset < 0 ? 'next' : 'prev';
            
            if (direction === 'next') {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                } else {
                    finishQuiz();
                }
            } else { // prev
                if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(prev => prev - 1);
                } else {
                    setIsAnimatingOut(false);
                    setDragOffset(0);
                    return;
                }
            }

            setStartTime(Date.now());
            setTimer(0);
            setIsAnimatingOut(false);
            setDragOffset(0);
            setAnimationClass(direction === 'next' ? 'animate-card-in-right' : 'animate-card-in-left');

        }, 200);
    } else {
        setDragOffset(0);
    }
  };
  
  const currentAnswer = userAnswers.find(a => a.questionIndex === currentQuestionIndex);
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const showFeedback = mode === 'practice' && !!currentAnswer;

  let nextButtonContent;
  let isNextButtonDisabled = false;

  if (isReviewMode) {
    nextButtonContent = isLastQuestion ? "Back to Summary" : "Next";
  } else {
    nextButtonContent = isLastQuestion ? "Finish Quiz" : "Next";
    if (mode === 'attempt' && !currentAnswer) {
        isNextButtonDisabled = true;
    }
  }

  return (
    <div className="w-full h-full p-4 pt-20 flex flex-col overflow-hidden">
      {insult && (
        <div key={insult.key} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-base font-bold px-4 py-2 rounded-lg shadow-xl z-30 animate-insult-in-out border border-red-400">
            {insult.text}
        </div>
      )}
      <div 
        ref={cardRef}
        className={`flex-grow mb-4 min-h-0 ${animationClass}`}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={e => {
            if (e.button === 0) handleDragStart(e);
        }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        style={{ 
            transform: isDragging ? `translateX(${dragOffset}px)` : '',
            transition: isDragging ? 'none' : (isAnimatingOut ? 'transform 0.2s ease-out' : ''),
            opacity: isAnimatingOut ? 0 : 1
        }}
      >
        <QuizCard
          id="quiz-card"
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          language={language}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          userAnswerIndex={currentAnswer?.selectedOptionIndex}
          isReviewMode={isReviewMode}
          mode={mode}
          timer={timer}
          isBookmarked={bookmarkedQuestions.has(currentQuestionIndex)}
          onToggleBookmark={handleToggleBookmark}
        />
      </div>

      <div className="flex-shrink-0 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentQuestionIndex === 0}
          className="p-3 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105"
          aria-label="Previous question"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button 
            onClick={onLanguageChange}
            className="p-3 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 transition-transform hover:scale-105"
            aria-label="Toggle language"
        >
            <TranslateIcon className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          disabled={isNextButtonDisabled}
          className="p-3 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-105"
          aria-label="Next question"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};