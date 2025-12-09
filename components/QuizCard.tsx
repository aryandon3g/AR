import React from 'react';

// --- 1. LOCAL TYPES (To fix Type Mismatch Errors) ---
// हम Types यही बना रहे हैं ताकि 'types.ts' से कोई एरर न आए
interface LocalQuizQuestion {
  question_en: string;
  question_hi: string;
  options_en: string[];
  options_hi: string[];
  correctAnswerIndex: number;
  [key: string]: any; // Extra properties allowed
}

type LocalLanguage = 'en' | 'hi';
type LocalQuizMode = 'practice' | 'attempt' | string;

// --- 2. INLINE ICONS (To fix Import Errors) ---
const BookmarkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const XCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
  </svg>
);

interface QuizCardProps {
  id?: string;
  question: any; // Using 'any' to force compatibility
  questionNumber: number;
  totalQuestions: number;
  language: LocalLanguage;
  onAnswer: (index: number, isCorrect: boolean) => void;
  showFeedback: boolean;
  userAnswerIndex?: number;
  isReviewMode?: boolean;
  mode: LocalQuizMode;
  timer: number;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  id,
  question,
  questionNumber,
  totalQuestions,
  language,
  onAnswer,
  showFeedback,
  userAnswerIndex,
  isReviewMode,
  mode,
  timer,
  isBookmarked,
  onToggleBookmark,
}) => {
  // Safe access to properties
  const q = question as LocalQuizQuestion;
  const isHindi = language === 'hi';
  
  // Fallback if data is missing
  const questionText = isHindi ? (q.question_hi || q.question_en) : q.question_en;
  const options = isHindi ? (q.options_hi || q.options_en) : q.options_en;
  const correctIdx = q.correctAnswerIndex;

  const getOptionStyle = (index: number) => {
    if (isReviewMode) {
      if (index === correctIdx) return 'bg-green-100 dark:bg-green-900/30 border-green-500 dark:border-green-500 text-green-800 dark:text-green-200';
      if (index === userAnswerIndex && userAnswerIndex !== correctIdx) return 'bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-500 text-red-800 dark:text-red-200 opacity-60';
      return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 opacity-50';
    }

    if (showFeedback) {
      if (index === correctIdx) return 'bg-green-100 dark:bg-green-900/30 border-green-500 dark:border-green-500 text-green-800 dark:text-green-200 shadow-[0_0_15px_rgba(34,197,94,0.4)] scale-[1.02]';
      if (index === userAnswerIndex) return 'bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-500 text-red-800 dark:text-red-200 shake';
      return 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 blur-[1px]';
    }

    if (userAnswerIndex === index) {
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-800 dark:text-blue-200';
    }

    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm active:scale-[0.98]';
  };

  return (
    // ✨ RESPONSIVE CONTAINER: flex-col on mobile, flex-row on landscape ✨
    <div id={id} className="w-full h-full max-w-6xl mx-auto flex flex-col landscape:flex-row gap-6 landscape:gap-10 p-1 landscape:p-6 transition-all duration-300">
      
      {/* --- LEFT SIDE: QUESTION AREA --- */}
      <div className="flex-none landscape:flex-1 landscape:w-1/2 landscape:flex landscape:flex-col landscape:justify-center">
          
          {/* Meta Header (Q Number & Timer) */}
          <div className="flex justify-between items-center mb-4">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                Question {questionNumber} / {totalQuestions}
            </span>
            <div className="flex items-center gap-3">
                {mode === 'attempt' && (
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                    </span>
                )}
                <button 
                    onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-90"
                >
                    <BookmarkIcon className={`w-5 h-5 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-white/50 dark:border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <h2 className="text-lg md:text-xl landscape:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed">
                  {questionText}
              </h2>
              {/* Subtle watermark */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
          </div>

          {/* Hint / Tag (Optional - visible in landscape) */}
          <div className="mt-6 hidden landscape:block opacity-60">
             <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold pl-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span> Select Answer
             </span>
          </div>
      </div>

      {/* --- RIGHT SIDE: OPTIONS AREA --- */}
      <div className="flex-grow landscape:flex-1 landscape:w-1/2 landscape:h-full landscape:overflow-y-auto custom-scrollbar landscape:pr-2">
          <div className="flex flex-col gap-3 h-full justify-center">
            {options && options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => !showFeedback && !isReviewMode && onAnswer(index, index === correctIdx)}
                    disabled={showFeedback || isReviewMode}
                    className={`
                        relative w-full p-4 rounded-2xl text-left border-2 transition-all duration-200 
                        group flex items-center gap-4
                        ${getOptionStyle(index)}
                    `}
                >
                    {/* Option Letter Circle (A, B, C, D) */}
                    <div className={`
                        flex-none w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border transition-colors
                        ${(userAnswerIndex === index || (isReviewMode && index === correctIdx)) 
                            ? 'border-transparent bg-white/20 text-current' 
                            : 'border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 group-hover:border-blue-300 dark:group-hover:border-blue-500 group-hover:text-blue-500'}
                    `}>
                        {String.fromCharCode(65 + index)}
                    </div>

                    {/* Option Text */}
                    <span className="text-sm landscape:text-base font-medium flex-grow">{option}</span>

                    {/* Feedback Icon (Check/Cross) */}
                    {(showFeedback || isReviewMode) && (
                        <div className="flex-none animate-check-pop">
                            {index === correctIdx && <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />}
                            {index === userAnswerIndex && index !== correctIdx && <XCircleIcon className="w-6 h-6 text-red-500" />}
                        </div>
                    )}
                </button>
            ))}
          </div>
      </div>

    </div>
  );
};