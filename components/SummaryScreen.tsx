
import React, { useState, useEffect } from 'react';
import type { SummaryData, Language, GamificationTitle, QuizMode } from '../types';
import { ReviewIcon, RedoIcon, AnalyticsIcon, ChevronDownIcon, CheckCircleIcon, XCircleIcon, BookmarkIcon, HistoryIcon, XPIcon } from './icons';
import { summaryScreenLabels as labels, gamificationTitles, commonLabels } from '../services/labels';
import { SummaryChart } from './SummaryChart';
import { ConfettiEffect } from './ConfettiEffect';


interface SummaryScreenProps {
  summary: SummaryData;
  language: Language;
  onRestart: () => void;
  onReview: () => void;
  onReattemptIncorrect: () => void;
}

const getGamificationTitle = (accuracy: number): GamificationTitle => {
    if (accuracy <= 40) return 'Novice';
    if (accuracy <= 70) return 'Explorer';
    if (accuracy <= 90) return 'Virtuoso';
    return 'Master';
};


export const SummaryScreen: React.FC<SummaryScreenProps> = ({ summary, language, onRestart, onReview, onReattemptIncorrect }) => {
  const [isAnalysisVisible, setIsAnalysisVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const l = labels[language];
  const common_l = commonLabels[language];
  const isHindi = language === 'hi';
  const incorrectCount = summary.answers.filter(a => a.selectedOptionIndex !== -1 && !a.isCorrect).length;
  
  useEffect(() => {
    if (summary.accuracy >= 90) { // Trigger confetti for high accuracy
        setShowConfetti(true);
    }
    // Play a sound if the score is less than 30%
    if (summary.accuracy < 30) {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext) {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.type = 'triangle';
          
          const now = audioContext.currentTime;
          gainNode.gain.setValueAtTime(0.3, now);
          oscillator.frequency.setValueAtTime(300, now);
          oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.7);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

          oscillator.start(now);
          oscillator.stop(now + 0.7);
        }
      } catch (e) {
        console.error("Could not play audio:", e);
      }
    }
  }, [summary.accuracy]);
  
  const titleKey = getGamificationTitle(summary.accuracy);
  const performanceTitle = gamificationTitles[titleKey][language];
  const performanceEmoji = gamificationTitles[titleKey].emoji;

  return (
    <div className="w-full h-full p-4 pt-20 flex flex-col overflow-y-auto relative custom-scrollbar">
      <ConfettiEffect isActive={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="text-center mb-6 z-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-center">
            <span className="text-4xl mr-2">{performanceEmoji}</span> {performanceTitle}
        </h2>
        {summary.mode === 'attempt' && summary.netScore !== undefined && (
            <p className="mt-2 text-lg font-semibold text-primary-600 dark:text-primary-300 bg-primary-100/50 dark:bg-primary-900/50 px-3 py-1 rounded-full inline-block">
                {l.netScore}: {summary.netScore.toFixed(2)}
            </p>
        )}
        {summary.xpEarned !== undefined && (
            <p className="mt-2 text-lg font-semibold text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-900/50 px-3 py-1 rounded-full inline-flex items-center space-x-1">
                <XPIcon className="w-5 h-5" />
                <span>+{summary.xpEarned} {common_l.xp}</span>
            </p>
        )}
      </div>

      <div className="z-10 mb-6">
        <SummaryChart summary={summary} language={language} />
      </div>

      <div className="w-full max-w-sm mx-auto space-y-3 z-10">
        <button
          onClick={onReview}
          className="w-full py-3 px-4 rounded-xl bg-primary-600 text-white font-bold shadow-lg hover:shadow-primary-500/40 hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <ReviewIcon className="w-5 h-5" />
          <span>{labels['en'].review}</span>
        </button>
        <div className="flex space-x-3">
            <button
              onClick={onRestart}
              className="w-full py-3 px-4 rounded-xl bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold hover:bg-white/80 dark:hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
            >
              <RedoIcon className="w-5 h-5" />
              <span>{l.playAgain}</span>
            </button>
             {incorrectCount > 0 && (
                <button
                onClick={onReattemptIncorrect}
                className="w-full py-3 px-4 rounded-xl bg-white/60 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold hover:bg-white/80 dark:hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
                >
                <AnalyticsIcon className="w-5 h-5" />
                <span>{l.reattemptIncorrect} ({incorrectCount})</span>
                </button>
            )}
        </div>
      </div>
      
      {/* Detailed Analysis Section */}
      <div className="w-full max-w-sm mx-auto mt-8 z-10">
        <button onClick={() => setIsAnalysisVisible(!isAnalysisVisible)} className="w-full flex justify-between items-center p-3 rounded-lg bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors">
            <span className="font-semibold text-gray-800 dark:text-gray-200">{l.detailedAnalysis}</span>
            <ChevronDownIcon className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${isAnalysisVisible ? 'rotate-180' : ''}`} />
        </button>

        {isAnalysisVisible && (
            <div className="w-full max-w-sm mt-4 animate-slide-in space-y-4">
                 {summary.questions.map((q, index) => {
                    const answer = summary.answers.find(a => a.questionIndex === index);
                    if (!answer) return null;

                    const isSkipped = answer.selectedOptionIndex === -1;
                    const isAnsweredCorrectly = answer.isCorrect;
                    const questionText = isHindi ? q.question_hi : q.question_en;
                    const options = isHindi ? q.options_hi : q.options_en;
                    const explanation = isHindi ? q.explanation_hi : q.explanation_en;
                    const correctAnswerText = options[q.correct_option_index];
                    const userAnswerText = !isSkipped ? options[answer.selectedOptionIndex] : labels['en'].skipped;

                    return (
                        <div key={index} className="p-4 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10">
                            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2">{index + 1}. {questionText}</p>
                            
                            <div className="space-y-2 text-sm">
                                <div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1">{labels['en'].yourAnswer}</div>
                                    {isSkipped ? (
                                        <p className="p-2 rounded-md bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700">{userAnswerText}</p>
                                    ) : (
                                        <p className={`p-2 rounded-md ${isAnsweredCorrectly ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700' : 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700'}`}>
                                            {userAnswerText}
                                        </p>
                                    )}
                                </div>

                                {!isAnsweredCorrectly && !isSkipped && (
                                     <div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-1 flex items-center"><CheckCircleIcon className="w-4 h-4 mr-1 text-green-500"/>{labels['en'].correctAnswer}</div>
                                        <p className="p-2 rounded-md bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700">{correctAnswerText}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                 })}
            </div>
        )}
      </div>

       <div className="flex-grow min-h-[2rem]"></div>
    </div>
  );
};
