import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
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
    navigator.vibrate(5);
  }
};

// ------------------------------------------------------------------
// 🚀 OPTIMIZATION 1: ISOLATED TIMER COMPONENT
// This component updates every second WITHOUT re-rendering the whole QuizScreen
// ------------------------------------------------------------------
const TimerComponent = memo(({ startTime, onTick }: { startTime: number, onTick: (time: number) => void }) => {
  const [displayTime, setDisplayTime] = useState(0);

  useEffect(() => {
    // Initial sync
    const now = Math.floor((Date.now() - startTime) / 1000);
    setDisplayTime(now);
    onTick(now);

    const intervalId = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      setDisplayTime(seconds);
      onTick(seconds); // Report time back to parent ref, not state
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime, onTick]);

  return null; 
});

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
  const [questions] = useState<QuizQuestion[]>(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(reviewData?.answers ?? []);
  
  // Timer State moved to Ref to prevent re-renders
  const [startTime, setStartTime] = useState(Date.now());
  const currentTimeRef = useRef(0); // This holds the current time without re-rendering parent

  const [animationClass, setAnimationClass] = useState('animate-card-in-right');
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

  // Callback to update the ref from the isolated timer
  const handleTimerTick = useCallback((seconds: number) => {
    currentTimeRef.current = seconds;
  }, []);

  const insults = [ 'Oops!', 'Not quite', 'Try Again' ];
  
  const finishQuiz = useCallback(() => {
    if (isReviewMode) {
      onBackToSummary?.();
      return;
    }

    const finalAnswers: UserAnswer[] = questions.map((_, index) => {
      const existingAnswer = userAnswers.find(a => a.questionIndex === index);
      if (existingAnswer) {
        return {
          ...existingAnswer,
          isBookmarked: bookmarkedQuestions.has(index),
        };
      } else {
        return {
          questionIndex: index,
          selectedOptionIndex: -1,
          isCorrect: false,
          timeTaken: 0,
          isBookmarked: bookmarkedQuestions.has(index),
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
      setTimeout(() => setInsult(null), 2000);
    }

    const isBookmarkedForCurrentQuestion = bookmarkedQuestions.has(currentQuestionIndex);

    setUserAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(a => a.questionIndex === currentQuestionIndex);
      const timeTaken = currentTimeRef.current; // Read from Ref (Instant access)

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
  }, [currentQuestionIndex, isReviewMode, insults, bookmarkedQuestions]);

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
      setStartTime(Date.now()); // Reset timer start
      currentTimeRef.current = 0; // Reset timer ref
      setAnimationClass(newCardAnimationClass);
    }, 300);
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) navigate('prev');
  }, [currentQuestionIndex, navigate]);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      navigate('next');
    } else {
      finishQuiz();
    }
  }, [currentQuestionIndex, questions.length, navigate, finishQuiz]);
  
  // --- SWIPE LOGIC (Optimized) ---
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isAnimatingOut) return;
    setAnimationClass('');
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
    setIsVerticalScroll(false);
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
    
    if (e.cancelable) e.preventDefault();
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
    const threshold = (cardRef.current?.offsetWidth ?? 300) / 4; // Smaller threshold for easier swipe
    setIsDragging(false);

    if (Math.abs(dragOffset) > threshold) {
      setIsAnimatingOut(true);
      triggerHapticFeedback();
      setTimeout(() => {
        const direction = dragOffset < 0 ? 'next' : 'prev';
        if (direction === 'next') {
            if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(prev => prev + 1);
            else finishQuiz();
        } else {
            if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
            else { setIsAnimatingOut(false); setDragOffset(0); return; }
        }
        setStartTime(Date.now());
        currentTimeRef.current = 0;
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
  
  const shouldRunTimer = !isReviewMode && !currentAnswer;

  return (
    <div className="w-full h-[100dvh] relative flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
      {shouldRunTimer && <TimerComponent startTime={startTime} onTick={handleTimerTick} />}

      {insult && (
        <div key={insult.key} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-base font-bold px-4 py-2 rounded-lg shadow-xl z-50 animate-insult-in-out border border-red-400">
          {insult.text}
        </div>
      )}

      {/* Main Card Container */}
      <div 
        ref={cardRef}
        className={`flex-1 w-full overflow-y-auto p-4 pb-32 ${animationClass}`}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={e => { if (e.button === 0) handleDragStart(e); }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        style={{ 
            transform: isDragging ? `translateX(${dragOffset}px)` : '',
            transition: isDragging ? 'none' : (isAnimatingOut ? 'transform 0.2s ease-out' : ''),
            opacity: isAnimatingOut ? 0 : 1,
            willChange: 'transform, opacity'
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
          timer={currentTimeRef.current} 
          isBookmarked={bookmarkedQuestions.has(currentQuestionIndex)}
          onToggleBookmark={handleToggleBookmark}
        />
      </div>

      {/* FIX: Instagram Style Locked Footer */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex items-center justify-between max-w-xl mx-auto px-4 py-4">
            <button onClick={goToPrevious} disabled={currentQuestionIndex === 0} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform" aria-label="Previous question">
             <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button onClick={onLanguageChange} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 active:scale-95 transition-transform" aria-label="Toggle language">
                <TranslateIcon className="w-6 h-6" />
            </button>
            <button onClick={goToNext} disabled={mode === 'attempt' && !currentAnswer} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-transform" aria-label="Next question">
             <ArrowRightIcon className="w-6 h-6" />
            </button>
        </div>
      </div>
    </div>
  );
};