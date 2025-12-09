import React, { useState, useEffect, useRef } from 'react';
import type { SummaryData, Language } from '../types';
import { getRankInfo, getNextRank } from '../services/rankSystem'; 

interface SummaryScreenProps {
  summary: SummaryData;
  language: Language;
  onRestart: () => void;
  onReview: () => void;
  onReattemptIncorrect: () => void;
  currentTotalRP?: number; 
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({ 
  summary, 
  language, 
  onRestart, 
  onReview, 
  currentTotalRP = 0 
}) => {
  const [isAnalysisVisible, setIsAnalysisVisible] = useState(false);
  
  // --- POINTS CALCULATION ---
  const correctCount = summary.answers.filter(a => a.isCorrect).length;
  const incorrectCount = summary.answers.filter(a => !a.isCorrect && a.selectedOptionIndex !== -1).length;
  
  const battleScore = correctCount * 5;
  const rankDeduction = incorrectCount * 2;
  
  let survivalBonus = 0;
  if (summary.accuracy >= 80) survivalBonus = 20;
  else if (summary.accuracy >= 50) survivalBonus = 10;

  const finalEarnedRP = Math.max(0, battleScore + survivalBonus - rankDeduction);

  // --- RANK LOGIC ---
  const safeTotalRP = currentTotalRP > 0 ? currentTotalRP : finalEarnedRP;
  const startRP = Math.max(0, safeTotalRP - finalEarnedRP); 

  const [displayedRP, setDisplayedRP] = useState(startRP);
  const [showRankUp, setShowRankUp] = useState(false);

  const isHindi = language === 'hi';

  // --- AUDIO FIX (Safe for Mobile) ---
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
      try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
              audioCtxRef.current = new AudioContextClass();
          }
      } catch (e) { console.error("Audio init failed", e); }

      return () => {
          if (audioCtxRef.current) {
              audioCtxRef.current.close().catch(() => {});
          }
      };
  }, []);

  const playSound = (type: 'tick' | 'rankup') => {
    try {
      const audioContext = audioCtxRef.current;
      if (!audioContext) return;
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (type === 'tick') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
      } else if (type === 'rankup') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(600, audioContext.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1.5);
      }
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; 
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = Math.floor(progress * (finalEarnedRP) + startRP);
      setDisplayedRP(currentVal);

      if (progress < 1 && Math.random() > 0.85) playSound('tick');

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        const oldRank = getRankInfo(startRP);
        const newRank = getRankInfo(safeTotalRP);
        if (oldRank.name !== newRank.name) {
             setShowRankUp(true);
             playSound('rankup');
        }
      }
    };
    window.requestAnimationFrame(step);
  }, [finalEarnedRP, startRP, safeTotalRP]);

  const currentRank = getRankInfo(displayedRP);
  const nextRank = getNextRank(currentRank.name);
  
  let progressPercent = 100;
  if (nextRank) {
      const totalRange = nextRank.minRP - currentRank.minRP;
      const currentProgress = displayedRP - currentRank.minRP;
      progressPercent = (currentProgress / totalRange) * 100;
  }

  return (
    // ✅ FIX 1: Removed 'fixed' which sometimes bugs on mobile. Using 'absolute' with full height.
    // ✅ FIX 2: Added z-[1000] to be absolutely sure it's on top.
    <div className="absolute inset-0 z-[1000] w-full h-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col overflow-y-auto">
      
      {/* HEADER - Removed backdrop-blur to save GPU */}
      <div className="flex-none p-4 text-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10 shadow-sm">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 uppercase italic">
              MATCH RESULT
          </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col items-center justify-center py-8 relative">
          
          {/* ✅ FIX 3: Removed the Heavy Blur Circle Animation (This was likely crashing the phone) */}
          {/* <div className="absolute ... blur-[60px] ..."></div> <-- REMOVED */}

          {/* Rank Icon */}
          <div className={`relative z-10 mb-4 w-40 h-40 flex items-center justify-center transition-all duration-500 ${showRankUp ? 'scale-125' : 'scale-100'}`}>
              {currentRank.icon}
          </div>

          {/* Rank Name */}
          <h2 className="text-4xl font-black uppercase tracking-wider text-gray-900 dark:text-white mb-1">
              {currentRank.name}
          </h2>
          
          {/* Rank Up Alert */}
          <div className="h-8">
            {showRankUp && (
                <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg animate-bounce inline-block px-4 py-1 rounded border border-yellow-400/50 bg-yellow-100 dark:bg-yellow-900/40">
                    RANK UP!
                </span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md px-6 mt-8">
              <div className="flex justify-between items-end mb-2 font-mono">
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-bold">RANK SCORE</span>
                  <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">
                      {displayedRP} <span className="text-sm text-gray-600 dark:text-white">/ {nextRank ? nextRank.minRP : 'MAX'}</span>
                  </div>
              </div>

              {/* ✅ FIX 4: Simplified Progress Bar (Removed heavy shimmer animation) */}
              <div className="h-5 w-full bg-gray-300 dark:bg-gray-800 rounded-sm border border-gray-400 dark:border-gray-600 relative overflow-hidden skew-x-[-10deg]">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
              </div>
          </div>
      </div>

      {/* STATS CARD */}
      <div className="mx-4 mb-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg space-y-2">
         <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase mb-3 tracking-widest border-b border-gray-200 dark:border-gray-700 pb-2">Battle Stats</h3>
         
         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Battle Score</span>
            <span className="text-green-600 dark:text-green-400 font-mono font-bold">+{battleScore}</span>
         </div>

         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Rank Deduction</span>
            <span className="text-red-500 dark:text-red-400 font-mono font-bold">-{rankDeduction}</span>
         </div>

         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Survival Bonus</span>
            <span className="text-yellow-600 dark:text-yellow-400 font-mono font-bold">+{survivalBonus}</span>
         </div>

         <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700 mt-2">
            <span className="text-gray-900 dark:text-white font-bold">TOTAL EARNED</span>
            <span className="text-yellow-600 dark:text-yellow-400 text-xl font-black">
                {finalEarnedRP > 0 ? '+' : ''}{finalEarnedRP}
            </span>
         </div>
      </div>

      {/* BUTTONS */}
      <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800 safe-area-bottom">
          <div className="max-w-md mx-auto flex gap-3">
            <button 
                onClick={onReview}
                className="flex-1 py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold uppercase tracking-wide"
            >
                Review
            </button>
            <button 
                onClick={onRestart}
                className="flex-[2] py-3 rounded bg-yellow-500 text-black font-black uppercase tracking-wide shadow-md"
            >
                Play Again
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <button onClick={() => setIsAnalysisVisible(!isAnalysisVisible)} className="text-gray-500 dark:text-gray-400 text-xs underline decoration-dotted">
                {isAnalysisVisible ? "Hide Details" : "View Detailed Analysis"}
            </button>
          </div>
      </div>

      {/* DETAILS */}
      {isAnalysisVisible && (
        <div className="p-4 pb-20 max-w-md mx-auto w-full">
             {summary.questions.map((q, index) => {
                const answer = summary.answers.find(a => a.questionIndex === index);
                if (!answer) return null;
                const isCorrect = answer.isCorrect;
                const questionText = isHindi ? q.question_hi : q.question_en;

                return (
                    <div key={index} className="mb-3 p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-4" style={{ borderLeftColor: isCorrect ? '#22c55e' : '#ef4444' }}>
                        <p className="text-sm text-gray-800 dark:text-gray-200">{index + 1}. {questionText}</p>
                        <div className="text-xs mt-1 text-right font-mono">
                            {isCorrect ? <span className="text-green-600 dark:text-green-400">+5 RP</span> : <span className="text-red-600 dark:text-red-400">-2 RP</span>}
                        </div>
                    </div>
                );
             })}
        </div>
      )}

    </div>
  );
};