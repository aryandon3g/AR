import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

// ------------------------------------------------------------------
// ⚡ OPTIMIZATION 1: VISUAL TIMER
// Only this component re-renders every second. Parent stays idle.
// ------------------------------------------------------------------
const VisualTimer = React.memo(({ startTime }: { startTime: number }) => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    // Sync immediately
    setTime(Math.floor((Date.now() - startTime) / 1000));
    
    const interval = setInterval(() => {
      setTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  // We return a hidden span or formatted time depending on your UI needs.
  // Assuming QuizCard takes a number, we might need to render this INSIDE QuizCard.
  // For now, let's assume this component helps display time or we pass the logic down.
  return <span className="hidden" data-time={time}></span>; 
});

const triggerHapticFeedback = () => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate(5);
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // ⚡ OPTIMIZATION 2: O(1) Answer Lookup using Object Map instead of Array.find()
  const [answersMap, setAnswersMap] = useState<Record<number, UserAnswer>>(() => {
    if (!reviewData?.answers) return {};
    return reviewData.answers.reduce((acc, curr) => ({ ...acc, [curr.questionIndex]: curr }), {});
  });

  const [startTime, setStartTime] = useState(Date.now());
  const [currentStreak, setCurrentStreak] = useState(0);
  
  const initialBookmarks = useMemo(() => 
    new Set<number>(reviewData?.answers.filter(a => a.isBookmarked).map(a => a.questionIndex) || []), 
  [reviewData]);
  
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<number>>(initialBookmarks);
  const [insult, setInsult] = useState<{ text: string, key: number } | null>(null);

  // ------------------------------------------------------------------
  // ⚡ OPTIMIZATION 3: REFS FOR ANIMATION (No State Re-renders)
  // ------------------------------------------------------------------
  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const isDragging = useRef(false);
  const isVerticalScroll = useRef(false);
  const currentTranslateX = useRef(0);

  const insults = useMemo(() => ['Oops!', 'Not quite', 'Try Again'], []);

  // --- Logic Helpers ---

  const finishQuiz = useCallback(() => {
    if (isReviewMode) {
      onBackToSummary?.();
      return;
    }
    // Convert Map back to Array for onFinish
    const finalAnswers: UserAnswer[] = initialQuestions.map((_, index) => {
      const existing = answersMap[index];
      return existing 
        ? { ...existing, isBookmarked: bookmarkedQuestions.has(index) }
        : {
            questionIndex: index,
            selectedOptionIndex: -1,
            isCorrect: false,
            timeTaken: 0,
            isBookmarked: bookmarkedQuestions.has(index),
          };
    });
    onFinish(finalAnswers, currentStreak);
  }, [initialQuestions, answersMap, bookmarkedQuestions, onFinish, isReviewMode, onBackToSummary, currentStreak]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    triggerHapticFeedback();
    const card = cardRef.current;
    if (!card) return;

    // Manual Animation via CSS Class
    card.style.transition = 'transform 0.2s ease-in, opacity 0.2s ease-in';
    card.style.transform = direction === 'next' ? 'translateX(-120%)' : 'translateX(120%)';
    card.style.opacity = '0';

    setTimeout(() => {
      if (direction === 'next') {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentQuestionIndex(prev => prev - 1);
      }
      
      // Reset for next card
      setStartTime(Date.now());
      
      // Spring back animation
      requestAnimationFrame(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transition = 'none'; // Instant jump back
        cardRef.current.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
        
        requestAnimationFrame(() => {
          if (!cardRef.current) return;
          cardRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease-out';
          cardRef.current.style.transform = 'translateX(0)';
          cardRef.current.style.opacity = '1';
        });
      });
    }, 200);
  }, []);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < initialQuestions.length - 1) navigate('next');
    else finishQuiz();
  }, [currentQuestionIndex, initialQuestions.length, navigate, finishQuiz]);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) navigate('prev');
  }, [currentQuestionIndex, navigate]);

  // --- ⚡ FAST TOUCH HANDLERS (Direct DOM) ---

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    // if (isAnimating) return; // Optional logic if needed
    isDragging.current = true;
    isVerticalScroll.current = false;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    dragStartX.current = clientX;
    dragStartY.current = clientY;
    
    if (cardRef.current) {
      cardRef.current.style.transition = 'none'; // Disable transition for 1:1 movement
    }
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const deltaX = clientX - dragStartX.current;
    const deltaY = clientY - dragStartY.current;

    // Detect Vertical Scroll Lock
    if (!isVerticalScroll.current && Math.abs(deltaX) < Math.abs(deltaY) && Math.abs(deltaY) > 10) {
      isVerticalScroll.current = true;
      return;
    }
    if (isVerticalScroll.current) return;

    // Prevent default only if horizontal swipe
    if (e.cancelable && Math.abs(deltaX) > 5) e.preventDefault();

    currentTranslateX.current = deltaX;

    // ⚡ Direct DOM Update (No React Render)
    if (cardRef.current) {
      cardRef.current.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.05}deg)`;
      // Optional: Fade out slightly
      cardRef.current.style.opacity = `${Math.max(0.5, 1 - Math.abs(deltaX) / 1000)}`;
    }
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = false;
    if (isVerticalScroll.current) return;

    const threshold = (window.innerWidth) / 4;
    const deltaX = currentTranslateX.current;

    if (Math.abs(deltaX) > threshold) {
      // Complete Swipe
      const direction = deltaX < 0 ? 'next' : 'prev';
      if (direction === 'prev' && currentQuestionIndex === 0) {
        resetCardPosition(); // Bounce back
      } else {
        navigate(direction);
      }
    } else {
      // Not enough swipe, bounce back
      resetCardPosition();
    }
    currentTranslateX.current = 0;
  };

  const resetCardPosition = () => {
    if (cardRef.current) {
      triggerHapticFeedback();
      cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s';
      cardRef.current.style.transform = 'translateX(0) rotate(0deg)';
      cardRef.current.style.opacity = '1';
    }
  };

  const handleAnswer = useCallback((selectedOptionIndex: number, isCorrect: boolean) => {
    if (isReviewMode) return;

    if (isCorrect) setCurrentStreak(p => p + 1);
    else {
      setCurrentStreak(0);
      setInsult({ text: insults[Math.floor(Math.random() * insults.length)], key: Date.now() });
      setTimeout(() => setInsult(null), 2000);
    }

    setAnswersMap(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        questionIndex: currentQuestionIndex,
        selectedOptionIndex,
        isCorrect,
        timeTaken: Math.floor((Date.now() - startTime) / 1000), // Calculate time instantly
        isBookmarked: bookmarkedQuestions.has(currentQuestionIndex)
      }
    }));
  }, [currentQuestionIndex, isReviewMode, startTime, bookmarkedQuestions, insults]);

  const handleToggleBookmark = useCallback(() => {
    triggerHapticFeedback();
    setBookmarkedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(currentQuestionIndex)) next.delete(currentQuestionIndex);
      else next.add(currentQuestionIndex);
      return next;
    });
  }, [currentQuestionIndex]);

  const currentAnswer = answersMap[currentQuestionIndex];

  return (
    <div className="w-full h-[100dvh] relative flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden select-none">
      
      {/* Insult Overlay */}
      {insult && (
        <div key={insult.key} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 text-white font-bold px-6 py-3 rounded-xl shadow-2xl z-50 animate-bounce">
          {insult.text}
        </div>
      )}

      {/* Main Card Container */}
      <div 
        ref={cardRef}
        className="flex-1 w-full overflow-y-auto p-4 pb-32 will-change-transform"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={e => { if (e.button === 0) handleDragStart(e); }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <QuizCard
          id="quiz-card"
          question={initialQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={initialQuestions.length}
          language={language}
          onAnswer={handleAnswer}
          showFeedback={mode === 'practice' && !!currentAnswer}
          userAnswerIndex={currentAnswer?.selectedOptionIndex}
          isReviewMode={isReviewMode}
          mode={mode}
          // Important: We pass startTime. QuizCard should render a timer that calculates (now - startTime)
          // or use the VisualTimer approach locally if QuizCard doesn't support it.
          timer={Math.floor((Date.now() - startTime) / 1000)} 
          isBookmarked={bookmarkedQuestions.has(currentQuestionIndex)}
          onToggleBookmark={handleToggleBookmark}
        />
      </div>

      {/* Footer */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex items-center justify-between max-w-xl mx-auto px-4 py-4">
            <button onClick={goToPrevious} disabled={currentQuestionIndex === 0} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform disabled:opacity-50">
             <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button onClick={onLanguageChange} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform">
                <TranslateIcon className="w-6 h-6" />
            </button>
            <button onClick={goToNext} disabled={mode === 'attempt' && !currentAnswer} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform disabled:opacity-50">
             <ArrowRightIcon className="w-6 h-6" />
            </button>
        </div>
      </div>
    </div>
  );
};