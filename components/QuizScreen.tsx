import React, { useState, useRef, useCallback, useMemo } from 'react';
import type { QuizQuestion, Language, UserAnswer, SummaryData, QuizMode } from '../types';
import { QuizCard } from './QuizCard';
import { TranslateIcon, ArrowLeftIcon, ArrowRightIcon } from './icons';
import { Header } from './Header'; 
// 👇 Import getXpData to know current rank for deduction logic
import { updateUserRankPoints, getXpData } from '../services/storageService'; 
import { getRankInfo } from '../services/rankSystem';

interface QuizScreenProps {
  initialQuestions: QuizQuestion[];
  language: Language;
  onLanguageChange: () => void;
  onFinish: (answers: UserAnswer[], streak: number, totalRankPoints?: number) => void;
  mode: QuizMode;
  isReviewMode?: boolean;
  reviewData?: SummaryData | null;
  onBackToSummary?: () => void;
}

const triggerHapticFeedback = () => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(10); 
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
  
  const [answersMap, setAnswersMap] = useState<Record<number, UserAnswer>>(() => {
    if (!reviewData?.answers) return {};
    return reviewData.answers.reduce((acc, curr) => ({ ...acc, [curr.questionIndex]: curr }), {});
  });

  const [startTime, setStartTime] = useState(Date.now());
  
  const initialBookmarks = useMemo(() => 
    new Set<number>(reviewData?.answers.filter(a => a.isBookmarked).map(a => a.questionIndex) || []), 
  [reviewData]);
  
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<number>>(initialBookmarks);
  const [insult, setInsult] = useState<{ text: string, key: number } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const isDragging = useRef(false);
  const isVerticalScroll = useRef(false);
  const currentTranslateX = useRef(0);

  const insults = useMemo(() => ['Zone Damage!', 'Rank Drop!', 'Careful!', 'Low Accuracy!'], []);

  // --- 🔥 NEW RANK DEDUCTION LOGIC 🔥 ---
  const finishQuiz = useCallback(async () => {
    if (isReviewMode) {
      onBackToSummary?.();
      return;
    }

    // 1. Compile Answers
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
            xpEarned: 0
          };
    });

    // 2. Fetch Current Rank to determine Penalty Bracket
    const currentData = await getXpData();
    const currentRankName = getRankInfo(currentData.totalXp || 0).name;

    // 3. 🧮 CALCULATE POINTS 🧮
    const correctCount = finalAnswers.filter(a => a.isCorrect).length;
    const totalQuestions = initialQuestions.length;
    const accuracy = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    
    // A. Battle Score (Kill Score): +5 per correct
    const battleScore = correctCount * 5; 

    // B. Survival Bonus (Booyah/Placement)
    let survivalBonus = 0;
    if (accuracy >= 80) survivalBonus = 20; // High accuracy
    else if (accuracy >= 50) survivalBonus = 10; // Medium accuracy

    // C. Rank Deduction Logic (Based on your Chart)
    // We apply penalty ONLY if performance is poor (e.g., Accuracy < 40% means "Early Exit")
    let rankPenalty = 0;
    
    // Threshold: If accuracy is low (like dying early in Free Fire), apply penalty based on Rank
    if (accuracy < 40) {
        switch (currentRankName) {
            case 'Bronze':
                rankPenalty = 5; // Low risk (-0 to -5)
                break;
            case 'Silver':
                rankPenalty = 15; // (-5 to -15)
                break;
            case 'Gold':
                rankPenalty = 25; // (-15 to -25)
                break;
            case 'Platinum':
                rankPenalty = 40; // (-25 to -40) - Needs Top 8
                break;
            case 'Diamond':
                rankPenalty = 55; // (-35 to -55) - High Risk
                break;
            case 'Heroic':
                rankPenalty = 65; // (-40 to -65) - Very Strict
                break;
            case 'Master':
            case 'Grandmaster':
                rankPenalty = 70; // (-50 to -70+) - Extreme
                break;
            default:
                rankPenalty = 5;
        }
    } else if (accuracy < 50) {
        // Minor penalty for mediocre performance (40-50%)
        rankPenalty = 10; 
    }

    // D. Final Session Calculation
    // Total = (Kills) + (Bonus) - (Rank Penalty)
    // Example: Diamond Rank, 2 correct answers out of 10 (20% Acc).
    // Battle: 10, Bonus: 0, Penalty: 55. Result: -45 RP.
    const totalSessionRP = (battleScore + survivalBonus) - rankPenalty;
    
    // Update individual answers purely for history display (distribute score roughly)
    const answersWithPoints = finalAnswers.map(a => ({
        ...a,
        xpEarned: a.isCorrect ? 5 : 0 
    }));

    // 4. Save to DB
    // We use the new update function which handles positive AND negative values
    const newTotalRP = await updateUserRankPoints(totalSessionRP);

    // 5. Finish
    // Pass 'xpEarned' as the calculated session total so SummaryScreen shows the net result (e.g. "-45")
    // Note: We are hijacking the first answer's xpEarned to carry the total for simple passing, 
    // or better, rely on the 3rd argument 'totalRankPoints' for the NEW TOTAL, 
    // but we need to pass the *Session Change* to summary to show "+20" or "-40".
    
    // We will attach the session score to the summary via a property or just passing it through.
    // Since onFinish interface takes answers, lets hack the summary data creation in App.tsx
    // Actually, App.tsx recalculates xpEarned from answers. 
    // To make this work perfectly without changing App.tsx too much, we need to ensure 
    // App.tsx uses the value we calculated. 
    
    // Let's modify the answers array to sum up to exactly totalSessionRP.
    // This is a bit tricky if negative.
    // Instead, we will rely on the fact that we saved the correct data to DB.
    // We will pass the totalSessionRP in the `answers` array by assigning it to a property 
    // or handle it in the parent.
    
    // For now, let's inject the net score into the first answer's `xpEarned` 
    // and set others to 0 so the sum is correct in App.tsx
    const adjustedAnswers = [...finalAnswers];
    if (adjustedAnswers.length > 0) {
        adjustedAnswers.forEach(a => a.xpEarned = 0);
        adjustedAnswers[0].xpEarned = totalSessionRP; // The sum will now be the Net Score
    }

    onFinish(adjustedAnswers, 0, newTotalRP); 

  }, [initialQuestions, answersMap, bookmarkedQuestions, onFinish, isReviewMode, onBackToSummary]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    triggerHapticFeedback();
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = 'transform 0.15s ease-in, opacity 0.15s ease-in';
    card.style.transform = direction === 'next' ? 'translate3d(-120%, 0, 0)' : 'translate3d(120%, 0, 0)';
    card.style.opacity = '0';

    setTimeout(() => {
      if (direction === 'next') {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentQuestionIndex(prev => prev - 1);
      }
      setStartTime(Date.now());
      
      requestAnimationFrame(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transition = 'none';
        cardRef.current.style.transform = direction === 'next' ? 'translate3d(50%, 0, 0)' : 'translate3d(-50%, 0, 0)';
        
        requestAnimationFrame(() => {
          if (!cardRef.current) return;
          cardRef.current.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease-out';
          cardRef.current.style.transform = 'translate3d(0, 0, 0)';
          cardRef.current.style.opacity = '1';
        });
      });
    }, 150);
  }, []);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < initialQuestions.length - 1) navigate('next');
    else finishQuiz();
  }, [currentQuestionIndex, initialQuestions.length, navigate, finishQuiz]);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) navigate('prev');
  }, [currentQuestionIndex, navigate]);

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    isVerticalScroll.current = false;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragStartX.current = clientX;
    dragStartY.current = clientY;
    if (cardRef.current) cardRef.current.style.transition = 'none';
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - dragStartX.current;
    const deltaY = clientY - dragStartY.current;

    if (!isVerticalScroll.current && Math.abs(deltaX) < Math.abs(deltaY) && Math.abs(deltaY) > 10) {
      isVerticalScroll.current = true;
      return;
    }
    if (isVerticalScroll.current) return;
    if (e.cancelable && Math.abs(deltaX) > 5) e.preventDefault();

    currentTranslateX.current = deltaX;
    if (cardRef.current) {
      cardRef.current.style.transform = `translate3d(${deltaX}px, 0, 0) rotate(${deltaX * 0.03}deg)`;
      cardRef.current.style.opacity = `${Math.max(0.7, 1 - Math.abs(deltaX) / 800)}`;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    if (isVerticalScroll.current) return;
    const threshold = (window.innerWidth) / 3.5;
    const deltaX = currentTranslateX.current;

    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX < 0 ? 'next' : 'prev';
      if (direction === 'next') {
        if (currentQuestionIndex < initialQuestions.length - 1) navigate('next');
        else { finishQuiz(); resetCardPosition(); }
      } else {
        if (currentQuestionIndex > 0) navigate('prev');
        else resetCardPosition();
      }
    } else {
      resetCardPosition();
    }
    currentTranslateX.current = 0;
  };

  const resetCardPosition = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s';
      cardRef.current.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
      cardRef.current.style.opacity = '1';
    }
  };

  const handleAnswer = useCallback((selectedOptionIndex: number, isCorrect: boolean) => {
    if (isReviewMode) return;
    
    if (!isCorrect) {
      setInsult({ text: insults[Math.floor(Math.random() * insults.length)], key: Date.now() });
      setTimeout(() => setInsult(null), 1500);
    }

    setAnswersMap(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        questionIndex: currentQuestionIndex,
        selectedOptionIndex,
        isCorrect,
        timeTaken: Math.floor((Date.now() - startTime) / 1000), 
        isBookmarked: bookmarkedQuestions.has(currentQuestionIndex),
        xpEarned: 0 // We calculate final XP at the end now
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
    <div className="flex flex-col w-full h-[100dvh] bg-gray-50 dark:bg-gray-900 overflow-hidden select-none">
      <Header 
        transparent={false}
        showBackButton={true}
        onBackClick={() => { /* Handle Back Logic */ }}
        onSettingsClick={() => { /* Handle Settings */ }}
      />
      {insult && (
        <div key={insult.key} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 text-white font-bold px-6 py-3 rounded-xl shadow-2xl z-[100] animate-bounce pointer-events-none border-2 border-red-400">
          {insult.text}
        </div>
      )}
      <div 
        ref={cardRef}
        className="flex-1 w-full overflow-y-auto p-4 pb-32 touch-pan-y custom-scrollbar"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={e => { if (e.button === 0) handleDragStart(e); }}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        style={{ willChange: 'transform, opacity' }}
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
          timer={0} 
          isBookmarked={bookmarkedQuestions.has(currentQuestionIndex)}
          onToggleBookmark={handleToggleBookmark}
        />
      </div>
      <div className="flex-none w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-40 safe-area-bottom">
        <div className="flex items-center justify-between max-w-xl mx-auto px-4 py-3">
            <button onClick={goToPrevious} disabled={currentQuestionIndex === 0} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-90 transition-all disabled:opacity-40 disabled:scale-100"><ArrowLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" /></button>
            <button onClick={onLanguageChange} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-90 transition-transform"><TranslateIcon className="w-6 h-6 text-primary-600" /></button>
            <button onClick={goToNext} disabled={mode === 'attempt' && !currentAnswer} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 active:scale-90 transition-all disabled:opacity-40 disabled:scale-100"><ArrowRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" /></button>
        </div>
      </div>
    </div>
  );
};