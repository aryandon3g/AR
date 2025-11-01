
import React, { useEffect, useState } from 'react';
import type { SummaryData, Language } from '../types';
import { summaryScreenLabels as labels } from '../services/labels';
import { CheckCircleIcon, XCircleIcon, FastForwardIcon } from './icons';

interface SummaryChartProps {
  summary: SummaryData;
  language: Language;
}

const useCountUp = (endValue: number, duration: number = 1.5, isFloat: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        let start = 0;
        const end = endValue;
        if (start === end) {
          setCount(isFloat ? parseFloat(end.toFixed(isFloat ? 1 : 0)) : Math.round(end));
          return;
        };

        let startTime: number | null = null;
        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const currentVal = start + progress * (end - start);
            setCount(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.round(currentVal));
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        };
        requestAnimationFrame(animation);
    }, [endValue, duration, isFloat]);
    
    return count;
};

export const SummaryChart: React.FC<SummaryChartProps> = ({ summary, language }) => {
    const l = labels[language];
    const animatedAccuracy = useCountUp(summary.accuracy);
    const animatedSkipped = useCountUp(summary.skipped ?? 0);
    const incorrectCount = summary.totalQuestions - summary.score - (summary.skipped ?? 0);


    const size = 180;
    const strokeWidth = 12;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const animation = requestAnimationFrame(() => {
            setProgress(summary.accuracy);
        });
        return () => cancelAnimationFrame(animation);
    }, [summary.accuracy]);
    
    const correctPercentage = (summary.score / summary.totalQuestions) * 100;
    const correctOffset = circumference - (correctPercentage / 100) * circumference;
    
    const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string | number, colorClass: string }> = ({ icon, label, value, colorClass }) => (
        <div className={`flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 ${colorClass}`}>
            <div className="flex items-center space-x-2">
                {icon}
                <span className="font-bold text-2xl">{value}</span>
            </div>
            <p className="text-xs font-medium opacity-80">{label}</p>
        </div>
    );

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                    {/* Background track */}
                    <circle
                        className="text-gray-300/50 dark:text-gray-700/50"
                        strokeWidth={strokeWidth}
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                    />
                    
                    {/* Incorrect Answers Segment */}
                     <circle
                        className="text-red-500/60"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    />
                    
                    {/* Correct Answers Segment (overlays incorrect) */}
                    <circle
                        className="text-green-500/80"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={correctOffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx={center}
                        cy={center}
                        style={{
                            transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%',
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-bold text-4xl text-gray-800 dark:text-white">
                        {animatedAccuracy}<span className="text-2xl opacity-60">%</span>
                    </span>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{l.accuracy}</p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mt-1">{summary.score} / {summary.totalQuestions}</p>
                </div>
            </div>
            
            <div className="w-full max-w-sm grid grid-cols-3 gap-3 text-gray-800 dark:text-gray-200">
                <StatCard 
                    icon={<CheckCircleIcon className="w-6 h-6"/>}
                    label={l.correct}
                    value={summary.score}
                    colorClass="text-green-600 dark:text-green-400"
                />
                <StatCard 
                    icon={<XCircleIcon className="w-6 h-6"/>}
                    label={l.incorrect}
                    value={incorrectCount}
                    colorClass="text-red-600 dark:text-red-400"
                />
                 <StatCard 
                    icon={<FastForwardIcon className="w-6 h-6"/>}
                    label={l.skipped}
                    value={animatedSkipped}
                    colorClass="text-yellow-600 dark:text-yellow-400"
                />
            </div>
        </div>
    );
};