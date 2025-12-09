import React, { useState, useEffect, useRef } from 'react';
import type { SummaryData, Language } from '../types';
import { summaryScreenLabels as labels } from '../services/labels';
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
  
  // --- CALCULATE BREAKDOWN FOR DISPLAY ---
  const correctCount = summary.answers.filter(a => a.isCorrect).length;
  const incorrectCount = summary.answers.filter(a => !a.isCorrect && a.selectedOptionIndex !== -1).length;
  
  // 1. Battle Score (Base)
  const battleScore = correctCount * 5;
  
  // 2. Rank Deduction (Damage)
  const rankDeduction = incorrectCount * 2;
  
  // 3. Survival Bonus Logic
  let survivalBonus = 0;
  if (summary.accuracy >= 80) survivalBonus = 20;
  else if (summary.accuracy >= 50) survivalBonus = 10;

  // 4. Final Real Earned (Re-calculated to be sure)
  const finalEarnedRP = Math.max(0, battleScore + survivalBonus - rankDeduction);

  // --- RANK LOGIC ---
  const safeTotalRP = currentTotalRP > 0 ? currentTotalRP : finalEarnedRP;
  const startRP = Math.max(0, safeTotalRP - finalEarnedRP); 

  const [displayedRP, setDisplayedRP] = useState(startRP);
  const [showRankUp, setShowRankUp] = useState(false);

  const isHindi = language === 'hi';

  // 🔊 FIXED AUDIO LOGIC (Prevents Mobile Crash) 🔊
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
      // 1. Init AudioContext ONLY ONCE when component mounts
      try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (AudioContextClass) {
              audioCtxRef.current = new AudioContextClass();
          }
      } catch (e) {
          console.error("Audio init failed", e);
      }

      return () => {
          // 2. Cleanup when leaving screen
          if (audioCtxRef.current) {
              audioCtxRef.current.close().catch(() => {});
          }
      };
  }, []);

  const playSound = (type: 'tick' | 'rankup') => {
    try {
      const audioContext = audioCtxRef.current;
      // If audio system failed or not supported, just exit
      if (!audioContext) return;
      
      // On mobile, audio might be suspended until user interaction. 
      // We try to resume, but don't force it to avoid errors.
      if (audioContext.state === 'suspended') {
          audioContext.resume().catch(() => {});
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (type === 'tick') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime); // Low volume
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
    } catch (e) { 
        // Silent catch to prevent white screen
        console.error("Sound play error", e); 
    }
  };

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; 
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = Math.floor(progress * (finalEarnedRP) + startRP);
      setDisplayedRP(currentVal);

      // Play tick sound (Reduced frequency for mobile performance)
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
    // Added z-[100] to ensure it sits on top
    <div className="fixed inset-0 z-[100] flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white overflow-y-auto custom-scrollbar transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <div className="flex-none p-4 text-center border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 uppercase italic">
              MATCH RESULT
          </h1>
      </div>

      {/* --- MAIN RANK AREA --- */}
      <div className="flex-grow flex flex-col items-center justify-center py-8 relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-[60px] animate-pulse"></div>

          <div className={`relative z-10 mb-4 w-40 h-40 flex items-center justify-center transition-all duration-500 ${showRankUp ? 'scale-125 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]' : 'scale-100'}`}>
              {currentRank.icon}
          </div>

          <h2 className="text-4xl font-black uppercase tracking-wider text-gray-900 dark:text-white mb-1" style={{ textShadow: `0 0 20px ${currentRank.color}40` }}>
              {currentRank.name}
          </h2>
          
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
                      {displayedRP} <span className="text-sm text-gray-600 dark:text-white">/ {nextRank ? nextRank.minRP : 'MAX'}</span>
                  </div>
              </div>

              {/* Glowing Bar */}
              <div className="relative w-full mt-2">
                  <div className="absolute -inset-1 bg-yellow-500/40 blur-md rounded-sm animate-pulse"></div>
                  <div className="h-6 w-full bg-gray-900/80 rounded-sm border border-yellow-600/50 relative overflow-hidden skew-x-[-15deg] shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300 transition-all duration-1000 ease-out relative overflow-hidden flex items-center justify-end pr-2"
                        style={{ width: `${progressPercent}%` }}
                      >
                         <div className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg] animate-shimmer z-10"></div>
                         <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                      </div>
                      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqgOx4Wy4BH5DGAUSRwA2HhTRWo+5YAAAAABJRU5ErkJggg==')] opacity-20 pointer-events-none"></div>
                  </div>
              </div>
          </div>
      </div>

      {/* --- STATS CARD --- */}
      <div className="mx-4 mb-6 bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-white/10 rounded-xl p-4 backdrop-blur-sm max-w-md md:mx-auto w-full shadow-sm dark:shadow-none space-y-2">
         <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase mb-3 tracking-widest border-b border-gray-200 dark:border-white/10 pb-2">Battle Stats</h3>
         
         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Battle Score (Correct)</span>
            <span className="text-green-500 dark:text-green-400 font-mono font-bold">+{battleScore}</span>
         </div>

         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Rank Deduction</span>
            <span className="text-red-500 dark:text-red-400 font-mono font-bold">-{rankDeduction}</span>
         </div>

         <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300 text-sm">Survival Bonus</span>
            <span className="text-yellow-500 dark:text-yellow-400 font-mono font-bold">+{survivalBonus}</span>
         </div>

         <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-white/10 mt-2">
            <span className="text-gray-900 dark:text-white font-bold">TOTAL EARNED</span>
            <span className="text-yellow-500 dark:text-yellow-400 text-xl font-black">
                {finalEarnedRP > 0 ? '+' : ''}{finalEarnedRP}
            </span>
         </div>
      </div>

      {/* --- BUTTONS FOOTER --- */}
      <div className="bg-white/80 dark:bg-black/80 p-4 border-t border-gray-200 dark:border-white/10 backdrop-blur-lg safe-area-bottom">
          <div className="max-w-md mx-auto flex gap-3">
            <button 
                onClick={onReview}
                className="flex-1 py-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold uppercase tracking-wide hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-500"
            >
                Review
            </button>
            <button 
                onClick={onRestart}
                className="flex-[2] py-3 rounded bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black uppercase tracking-wide hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg shadow-yellow-400/30 dark:shadow-yellow-400/20"
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

      {/* --- DETAILED ANALYSIS --- */}
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
                            {isCorrect ? <span className="text-green-500">+5 RP</span> : <span className="text-red-500">-2 RP</span>}
                        </div>
                    </div>
                );
             })}
        </div>
      )}

    </div>
  );
};