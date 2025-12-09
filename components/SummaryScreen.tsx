import React, { useState, useEffect, useRef } from 'react';
import type { SummaryData, Language } from '../types';
import { getRankInfo, getNextRank } from '../services/rankSystem'; 

interface SummaryScreenProps {
  summary: SummaryData;
  language: Language;
  onRestart: () => void;
  onReview: () => void;
  currentTotalRP?: number; // यह "नया" टोटल है (DB अपडेट होने के बाद)
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({ 
  summary, 
  language, 
  onRestart, 
  onReview, 
  currentTotalRP = 0 
}) => {
  const [isAnalysisVisible, setIsAnalysisVisible] = useState(false);
  
  // --- 1. CALCULATE POINTS (Session Score) ---
  const correctCount = summary.answers.filter(a => a.isCorrect).length;
  const incorrectCount = summary.answers.filter(a => !a.isCorrect && a.selectedOptionIndex !== -1).length;
  
  // Scoring Rules
  const battleScore = correctCount * 5;
  const rankDeduction = incorrectCount * 2;
  
  let survivalBonus = 0;
  if (summary.accuracy >= 80) survivalBonus = 20;
  else if (summary.accuracy >= 50) survivalBonus = 10;

  // Net Change (यह पॉजिटिव या नेगेटिव हो सकता है)
  // उदाहरण: +25 या -10
  const netSessionChange = (battleScore + survivalBonus) - rankDeduction;

  // --- 2. DETERMINE START & END POINTS ---
  // End Point = जो अभी DB में है (currentTotalRP)
  const endRP = currentTotalRP; 
  // Start Point = End Point - जो अभी कमाया
  // (अगर 1300 है और +20 मिला, तो start 1280 था)
  // (अगर 1300 है और -10 हुआ, तो start 1310 था)
  const startRP = currentTotalRP - netSessionChange;

  const [displayedRP, setDisplayedRP] = useState(startRP);
  const [showRankUp, setShowRankUp] = useState(false);

  const isHindi = language === 'hi';

  // --- AUDIO SETUP ---
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
      try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
              audioCtxRef.current = new AudioContextClass();
          }
      } catch (e) { console.error("Audio init failed", e); }

      return () => {
          if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
      };
  }, []);

  const playSound = (type: 'tick' | 'rankup') => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'tick') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'rankup') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
        osc.start();
        osc.stop(ctx.currentTime + 1.5);
      }
    } catch (e) { /* ignore */ }
  };

  // --- 3. ANIMATION LOOP ---
  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; // 2 seconds animation
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Linear Interpolation: Start -> End
      const currentVal = Math.floor(startRP + (progress * (endRP - startRP)));
      setDisplayedRP(currentVal);

      // Play tick sound (only if score is changing)
      if (progress < 1 && startRP !== endRP && Math.random() > 0.8) {
          playSound('tick');
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Animation Complete: Check if rank actually changed from Start to End
        const oldRank = getRankInfo(startRP);
        const newRank = getRankInfo(endRP);
        if (oldRank.name !== newRank.name && endRP > startRP) {
             setShowRankUp(true);
             playSound('rankup');
        }
      }
    };
    
    // Slight delay before starting animation so user sees the "Old" score first
    const timer = setTimeout(() => {
        window.requestAnimationFrame(step);
    }, 500);

    return () => clearTimeout(timer);
  }, [startRP, endRP]);

  // --- 4. PROGRESS BAR LOGIC (Based on Displayed RP) ---
  const currentRank = getRankInfo(displayedRP); // Animating Rank
  const nextRank = getNextRank(currentRank.name);
  
  let progressPercent = 100;
  if (nextRank) {
      const totalRange = nextRank.minRP - currentRank.minRP;
      const currentProgress = displayedRP - currentRank.minRP;
      // Formula ensures bar fills up or drains down live
      progressPercent = Math.max(0, Math.min(100, (currentProgress / totalRange) * 100));
  }

  // Display value for Net Score (Add + sign if positive)
  const netSign = netSessionChange > 0 ? '+' : '';

  return (
    <div className="absolute inset-0 z-[1000] w-full h-full min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white flex flex-col overflow-y-auto">
      
      {/* HEADER */}
      <div className="flex-none p-4 text-center border-b border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 uppercase italic">
              MATCH RESULT
          </h1>
      </div>

      {/* MAIN RANK AREA */}
      <div className="flex-grow flex flex-col items-center justify-center py-8 relative">
          
          {/* Rank Icon */}
          <div className={`relative z-10 mb-4 w-40 h-40 flex items-center justify-center transition-all duration-500 ${showRankUp ? 'scale-125' : 'scale-100'}`}>
              {currentRank.icon}
          </div>

          {/* Rank Name */}
          <h2 className="text-4xl font-black uppercase tracking-wider text-gray-900 dark:text-white mb-1" style={{ textShadow: `0 0 20px ${currentRank.color}40` }}>
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

          {/* --- SCORE & PROGRESS BAR --- */}
          <div className="w-full max-w-md px-6 mt-8">
              <div className="flex justify-between items-end mb-2 font-mono">
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-bold">RANK SCORE</span>
                  <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">
                      {/* This number animates live */}
                      {displayedRP} 
                      <span className="text-sm text-gray-400 ml-2 font-normal">
                        / {nextRank ? nextRank.minRP : 'MAX'}
                      </span>
                  </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="relative w-full mt-2">
                  <div className="h-6 w-full bg-gray-300 dark:bg-gray-800 rounded-sm border border-gray-400 dark:border-gray-600 relative overflow-hidden skew-x-[-15deg] shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-75 ease-linear flex items-center justify-end pr-2"
                        style={{ width: `${progressPercent}%` }}
                      >
                         {/* Shine Effect */}
                         <div className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] animate-shimmer z-10"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* STATS CARD */}
      <div className="mx-4 mb-6 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-white/10 rounded-xl p-4 shadow-lg backdrop-blur-sm space-y-2">
         <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase mb-3 tracking-widest border-b border-gray-200 dark:border-white/10 pb-2">Battle Stats</h3>
         
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

         <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-white/10 mt-2">
            <span className="text-gray-900 dark:text-white font-bold">TOTAL CHANGE</span>
            <span className={`text-xl font-black ${netSessionChange >= 0 ? 'text-yellow-500' : 'text-red-500'}`}>
                {netSign}{netSessionChange}
            </span>
         </div>
      </div>

      {/* BUTTONS */}
      <div className="bg-white dark:bg-black/90 p-4 border-t border-gray-200 dark:border-white/10 safe-area-bottom">
          <div className="max-w-md mx-auto flex gap-3">
            <button 
                onClick={onReview}
                className="flex-1 py-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold uppercase tracking-wide hover:bg-gray-300 transition-colors"
            >
                Review
            </button>
            <button 
                onClick={onRestart}
                className="flex-[2] py-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black uppercase tracking-wide shadow-lg hover:brightness-110 transition-all"
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
        <div className="p-4 pb-20 max-w-md mx-auto w-full animate-slide-in">
             {summary.questions.map((q, index) => {
                const answer = summary.answers.find(a => a.questionIndex === index);
                if (!answer) return null;
                const isCorrect = answer.isCorrect;
                const questionText = isHindi ? q.question_hi : q.question_en;

                return (
                    <div key={index} className="mb-3 p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-4 shadow-sm" style={{ borderLeftColor: isCorrect ? '#22c55e' : '#ef4444' }}>
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